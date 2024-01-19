import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div>

        <AnimatePresence>
            {
                page === 'home' &&

                    <motion.div>
                        <button>
                            <p className='text-primary text-sm amulya-medium hover:amulya-bold'>
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
            animate={page === 'home' ? 'close' : 'open'}
        >

        </motion.div>

        <AnimatePresence>
            {
                page === 'home' &&

                    <motion.div>
                        <button>
                            <p className='text-primary text-sm amulya-medium hover:amulya-bold'>
                                About
                            </p>
                        </button>
                    </motion.div>
            }
        </AnimatePresence>

    </div>
  )
}

export default MainContainer;
