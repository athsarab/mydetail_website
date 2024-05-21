import React from 'react';
import { motion } from 'framer-motion';
// Variants
import { fadeIn } from '../variants';
// Intersection observer hook
import { useInView } from 'react-intersection-observer';
// Images
import Image1 from '../assets/portfolio-img1.png';
import Image2 from '../assets/portfolio-img2.png';
import Image3 from '../assets/portfolio-img3.png';

const works = [
  {
    image: Image1,
    description: 'Description of Work 1',
  },
  {
    image: Image2,
    description: 'Description of Work 2',
  },
  {
    image: Image3,
    description: 'Description of Work 3',
  },
];

const Work = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id='work' ref={ref} className='section'>
      <div className='container mx-auto'>
        <motion.h1
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate={inView ? 'show' : 'hidden'}
          className='h2 text-accent mb-10'
        >
          My Work
        </motion.h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {works.map((work, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='flex flex-col items-center'
            >
              <div
                className='bg-work bg-contain bg-no-repeat h-[200px] w-[200px] mb-4'
                style={{ backgroundImage: `url(${work.image})` }}
              ></div>
              <p className='text-gray-600'>{work.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
