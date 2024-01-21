import React from 'react';
import { motion } from 'framer-motion';

//components
import Link from '../shared/Link';

//data
import { aboutLinks } from '../../data/aboutLinks';
import { aboutData } from '../../data/aboutData';
import AboutListItem from './AboutListItem';

const AboutPage = () => {
  return (
    <motion.div
      className='w-full max-w-[1480px] h-full px-2 md:px-8 xl:px-56 pt-6 flex flex-col gap-10 md:gap-20 xl:gap-32'
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
        <div className='flex flex-col gap-3 xl:gap-5 pt-8 xl:pt-0'>
          <h2 className='amulya-bold text-xl md:text-2xl xl:text-3xl text-secondary tracking-wider'>Hello, I am Dagna</h2>
          <p className='amulya text-sm text-secondary pl-12'>{aboutData.description}</p>
        </div>
        <div className='w-32 self-center md:self-end md:mx-12 xl:mx-24'>
          <a href='https://drive.google.com/file/d/1WKHFIS0NgqPQNKMfsBXUicBmwguKJXlD/view?usp=drive_link' target='_blank' rel='noreferrer' className='amulya-light text-secondary hover:italic w-32 pb-1 border-b border-secondary whitespace-nowrap'>
            download CV
          </a>
        </div>
      </div>

      <div className='flex flex-col gap-10'>
        <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl text-secondary tracking-wider'>Other stuff</h3>
        <div className='flex flex-col gap-4 pl-12'>
          {
            aboutData.other.map(i => <AboutListItem key={i.id} data={i} />)
          }
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage;
