import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

//actions
import { setAboutPage, setWorkPage } from '../../reducer/pageReducer';
import WorkPage from '../work/WorkPage';
import AboutPage from '../about/AboutPage';

const MainContainer = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.pages.page);

    const [isHover, setIsHover] = useState({
        isHover: false,
        button: ''
    });

    const handleClickWork = () => {
        dispatch(setWorkPage());
        setIsHover({isHover: false, button: ''});
    }

    const handleClickAbout = () => {
        dispatch(setAboutPage());
        setIsHover({isHover: false, button: ''});
    }

    const variants = {
        close: {
            width: '128px',
            height: '1px'
        },
        open: {
            width: '100%',
            height: '100%'
        },
        hover: {
            width: '100%',
            height: '2px'
        }
    }


  return (
    <motion.div
        className='w-full h-full flex flex-col justify-center items-center gap-7'
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
            delay: 1.4,
            duration: 1
        }}
    >

        <AnimatePresence>
            {
                page === 'home' &&

                    <motion.div
                        onMouseEnter={() => setIsHover({isHover: true, button: 'work'})}
                        onMouseLeave={() => setIsHover({isHover: false, button: ''})}
                    >
                        <button
                            onClick={handleClickWork}
                        >
                            <p className={`text-primary text-sm ${isHover.button === 'work' ? 'amulya-bold' : isHover.isHover ? 'opacity-35' : 'opacity-100'}`}>
                                Work
                            </p>
                        </button>
                    </motion.div>
            }
        </AnimatePresence>

        <motion.div
            className='bg-primary'
            variants={variants}
            initial='close'
            animate={page !== 'home' ? 'open' : isHover.isHover ? 'hover' : 'close'}
        >
            <AnimatePresence>
                {
                    (page === 'work' && <WorkPage />) ||
                    (page === 'about' && <AboutPage />)
                }
            </AnimatePresence>
        </motion.div>

        <AnimatePresence>
            {
                page === 'home' &&

                    <motion.div
                        onMouseEnter={() => setIsHover({isHover: true, button: 'about'})}
                        onMouseLeave={() => setIsHover({isHover: false, button: ''})}
                    >
                        <button
                            onClick={handleClickAbout}
                        >
                            <p className={`text-primary text-sm ${isHover.button === 'about' ? 'amulya-bold' : isHover.isHover ? 'opacity-35' : 'opacity-100'}`}>
                                About
                            </p>
                        </button>
                    </motion.div>
            }
        </AnimatePresence>

    </motion.div>
  )
}

export default MainContainer;
