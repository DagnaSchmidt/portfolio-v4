import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

//data
import { workData } from '../../data/workData';

//components
import ProjectPreview from './ProjectPreview';
import ProjectContainer from '../containers/ProjectContainer';

const WorkPage = () => {
    const project = useSelector(state => state.pages.project);

    const [isHover, setIsHover] = useState({
      isHover: false,
      button: ''
  });


  return (
    <motion.div
      className='w-full h-full flex flex-col items-center overflow-y-scroll scrollbar-hide'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 0.5,
        duration: 0.3
      }}
    >
      <AnimatePresence>
        {
          project !== null && <ProjectContainer />
        }
      </AnimatePresence>

      {
        workData.map(i => <ProjectPreview key={i.id} data={i} isHover={isHover} setIsHover={setIsHover} /> )
      }

    </motion.div>
  )
};

export default WorkPage;
