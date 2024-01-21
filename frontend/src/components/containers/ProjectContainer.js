import React from 'react';
import  { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import BoringStories from '../projects/BoringStories';

const ProjectContainer = ({title}) => {
    const project = useSelector(state => state.pages.project);

    const variants = {
        close: {
            width: '128px',
            height: '1px'
        },
        open: {
            width: '100dvw',
            height: '100dvh'
        }
    }
  return (
    <motion.div
        className='bg-secondary'
        variants={variants}
        initial='close'
        animate={project === title ? 'open' : 'close'}
    >
        <AnimatePresence>
            {
                project === 'Boring Stories' &&
                <BoringStories />
            }
        </AnimatePresence>

    </motion.div>
  )
}

export default ProjectContainer;
