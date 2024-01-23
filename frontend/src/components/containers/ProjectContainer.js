import React from 'react';
import  { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import BoringStories from '../projects/BoringStories';

const ProjectContainer = () => {
    const project = useSelector(state => state.pages.project);


  return (
        <motion.div
            className='bg-secondary w-full'
            initial={{
                height: 0
            }}
            animate={{
                height: '100%'
            }}
            exit={{
                height: 0
            }}
            transition={{
                duration: 0.3
            }}
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
