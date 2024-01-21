import React from 'react';
import { motion } from 'framer-motion';

//components
import Link from '../shared/Link';

//data
import { aboutLinks } from '../../data/aboutLinks';

const AboutPage = () => {
  return (
    <motion.div
      className='w-full max-w-[1480px] h-full px-2 md:px-8 xl:px-24 pt-6 flex flex-col'
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
    </motion.div>
  )
}

export default AboutPage;
