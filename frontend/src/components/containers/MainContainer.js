import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

//actions
import { setAboutPage, setWorkPage } from '../../reducer/pageReducer';

const MainContainer = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.pages.page);

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
                        className='peer/work'
                    >
                        <button
                            onClick={() => dispatch(setWorkPage())}
                        >
                            <p className='text-primary text-sm amulya-medium hover:amulya-bold'>
                                Work
                            </p>
                        </button>
                    </motion.div>
            }
        </AnimatePresence>

        <motion.div
            className='bg-primary '
            variants={variants}
            initial='close'
            animate={page === 'home' ? 'close' : 'open'}
        >

        </motion.div>

        <AnimatePresence>
            {
                page === 'home' &&

                    <motion.div
                        className='peer/about'
                    >
                        <button
                            onClick={() => dispatch(setAboutPage())}
                        >
                            <p className='text-primary text-sm amulya-medium hover:amulya-bold'>
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
