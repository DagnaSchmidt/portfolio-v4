import React, { useState } from 'react';
import { motion } from 'framer-motion';

//data
import { workData } from '../../data/workData';

//components
import WorkListItem from './WorkListItem';
import ProjectContainer from '../containers/ProjectContainer';

const WorkPage = () => {
    const [isHover, setIsHover] = useState({
      isHover: false,
      button: ''
  });


  return (
    <motion.div
      className='w-full max-w-[1480px] h-full px-2 md:px-8 xl:px-56 pt-6 flex flex-col gap-10 md:gap-20'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
      delay: 0.5,
      duration: 0.3
    }}
    >

      {
        workData.map(i => {
          return (
            <>
              <WorkListItem key={i.id} data={i} isHover={isHover} setIsHover={setIsHover} />
              <ProjectContainer title={i.title} />
            </>

          )
        })
      }

    </motion.div>
  )
}

export default WorkPage;
