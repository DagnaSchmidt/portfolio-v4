import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

//icons
import ArrowBack from '../../icons/ArrowBack.svg';

//actions
import { setHomePage, clearProject } from '../../reducer/pageReducer';


const BackButton = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.pages.page);
    const project = useSelector(state => state.pages.project);

    const handlePageBack = () => {
        if(project === null){
            dispatch(setHomePage());
        }else{
            dispatch(clearProject());
        }
    };


  return (
    <div className='absolute flex justify-end max-w-[1480px] w-full px-2 md:px-8 xl:px-24 bottom-[5%]'>

        <AnimatePresence>
            {
                page !== 'home' &&
                    <motion.button
                        initial={{
                            opacity: 0,
                            scale: 0,
                            overflow: 'hidden'
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            overflow: 'hidden'
                        }}
                        transition={{
                            delay: 0.6,
                            duration: 0.3,
                            ease: 'anticipate'
                        }}
                        onClick={handlePageBack}
                        className={`${project === null ? 'bg-secondary text-primary' : ''} h-11 w-11 flex justify-center items-center rounded-full`}
                    >
                        <img src={ArrowBack} alt='arrow back' className='h-4 w-4' />
                    </motion.button>
            }
        </AnimatePresence>

    </div>
  )
};

export default BackButton;
