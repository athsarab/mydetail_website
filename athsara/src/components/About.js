import React from 'react';
// countup
import CountUp from 'react-countup';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// intersection observer hook
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <section id='about' ref={ref} className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-12'>
          {/* Image Container */}
          <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top lg:bg-center'>
            {/* Assuming bg-about class is handling the background image */}
          </div>
          
          {/* Text Container */}
          <div className='flex-1'>
            <motion.h2
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='h2 text-accent mb-10'
            >
              About Me
            </motion.h2>
            <motion.h3
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='text-2xl font-semibold mb-4'
            >
              Who am I?
            </motion.h3>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate={inView ? 'show' : 'hidden'}
              className='mb-6'
            >
              I am a web developer and designer from Sri Lanka. I create professional websites and web applications for businesses and individuals. I am passionate about creating modern and responsive websites that provide a great user experience.
            </motion.p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='mr-6'>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg bg-accent text-white py-3 px-8 rounded-full shadow-lg hover:bg-accent-dark transition mt-4'>
                Download CV
              </button>
              <a href='#' className='text-gradient hover:underline mt-4'>
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
