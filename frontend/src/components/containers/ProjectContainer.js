import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';

//components
import BoringStories from '../projects/BoringStories';
import Mi from '../projects/Mi';
import Movies4you from '../projects/Movies4you';
import Finovo from '../projects/Finovo';
import Maja from '../projects/Maja';


const ProjectContainer = () => {
    const project = useSelector(state => state.pages.project);


    return (
        <motion.div
            className='bg-secondary w-full flex justify-center'
            initial={{
                height: 0
            }}
            animate={{
                height: 'auto'
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
                    project === 'Boring Stories' && <BoringStories />
                }
                {
                    project === 'Mi' && <Mi />
                }
                {
                    project === 'Movies4you' && <Movies4you />
                }
                {
                    project === 'Finovo' && <Finovo />
                }
                {
                    project === 'Maja Penzion' && <Maja />
                }
            </AnimatePresence>

        </motion.div>

    )
};

export default ProjectContainer;
