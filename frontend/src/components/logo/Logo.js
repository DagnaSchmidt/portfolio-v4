import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { setHomePage } from '../../reducer/pageReducer';


const Logo = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.pages.page);

    const variants = {
        before: {
            width: '44px',
            top: '50%',
            left: 0,
            right: 0,
            margin: 'auto',
            borderWidth: '30px',
            transition: {
                delay: 0.6,
                duration: 0.7,
                ease: 'backInOut'
            }
        },
        open: {
            width: '240px',
            top: '90%',
            left: 0,
            right: 0,
            margin: 'auto',
            borderWidth: '0px'
        },
        close: {
            width: '44px',
            top: '90%',
            borderWidth: '0px',
            left: '100px',
            right: 'auto',
            margin: 0
        }
    }


  return (
    <div>

        <AnimatePresence>
            {
                page === 'home' &&

                    <motion.p
                        className='absolute top-[85%] right-0 left-0 m-auto text-center amulya text-primary text-sm'
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{
                            delay: 1.4,
                            duration: 1
                        }}
                        exit={{opacity: 0}}
                    >
                        portfolio of
                    </motion.p>
            }
        </AnimatePresence>


        <motion.button
            initial='before'
            variants={variants}
            transition={{
                delay: 0.6,
                duration: 0.7,
                ease: 'backInOut'
            }}
            animate={page === 'home' ? 'open' : 'close'}
            className='absolute left-0 right-0 m-auto h-11 flex justify-center items-center bg-primary border-primary text-secondary rounded-full overflow-hidden'
            disabled={page === 'home' ? true : false}
            onClick={() => dispatch(setHomePage())}
        >

            <p className='xillian text-2xl tracking-wider pt-1'>
                {
                    page === 'home' ? 'dagna schmidt' : 'd'
                }
            </p>

        </motion.button>

    </div>
  )
}

export default Logo;
