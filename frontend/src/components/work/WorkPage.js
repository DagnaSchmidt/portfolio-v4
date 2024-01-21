import React from 'react';
import { motion } from 'framer-motion';

//data
import { workData } from '../../data/workData';

//components
import WorkListItem from './WorkListItem';

const WorkPage = () => {
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

      {
        workData.map(i => <WorkListItem key={i.id} data={i} />)
      }

    </motion.div>
  )
}

export default WorkPage;
