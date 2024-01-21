import React from 'react';
import { motion } from 'framer-motion';

//components
import Link from '../shared/Link';

//data
import { aboutLinks } from '../../data/aboutLinks';
import { aboutData } from '../../data/aboutData';

const AboutPage = () => {
  return (
    <motion.div
      className='w-full max-w-[1480px] h-full px-2 md:px-8 xl:px-56 pt-6 flex flex-col gap-10 md:gap-20 xl:gap-40'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 0.5,
        duration: 0.3
      }}
    >
      <div className='flex justify-between md:justify-end md:gap-12'>
        {
          aboutLinks.map(i => <Link key={i.id} url={i.link} title={i.title} color='text-secondary' />)
        }
      </div>

      <div className='flex flex-col md:flex-row gap-10'>
        <div className='flex flex-col gap-3'>
          <h2 className='amulya-bold text-xl md:text-2xl xl:text-3xl text-secondary tracking-wider'>Hello, I am Dagna</h2>
          <p className='amulya text-sm text-secondary pl-12'>{aboutData.description}</p>
        </div>
        <button className='w-32 self-center md:self-end md:mx-12 xl:mx-24'>
          <p className='amulya-light text-secondary hover:italic w-32 border-b border-secondary'>download CV</p>
        </button>
      </div>
    </motion.div>
  )
}

export default AboutPage;
