import React from 'react';
import { motion } from 'framer-motion';

//data
import { workData } from '../../data/workData';

//components
import ProjectHeader from '../work/ProjectHeader';


const Mi = () => {
  return (
    <motion.div
      className='w-full max-w-[1480px] h-full px-2 md:px-8 xl:px-56 pt-6 flex flex-col gap-10 text-primary'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 0.7,
        duration: 0.3
      }}
    >
      <ProjectHeader data={workData[1]} />
    </motion.div>
  )
};

export default Mi;
