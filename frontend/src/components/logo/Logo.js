import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';

//actions
import { setHomePage } from '../../reducer/pageReducer';


const Logo = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.pages.page);
    const project = useSelector(state => state.pages.project);

    const variants = {
        before: {
            width: '44px',
            borderWidth: '30px',
            alignSelf: 'center'
        },
        open: {
            width: '240px',
            borderWidth: '0px',
            alignSelf: 'center',
            transition: {
                delay: 0.6,
                duration: 0.7,
                ease: 'backInOut'
            }
        },
        close: {
            width: '44px',
            borderWidth: '0px',
            alignSelf: 'start',
            transition: {
                duration: 0.3
            }
        }
    }


  return (
    <motion.div
        className='absolute flex flex-col gap-2 max-w-[1480px] w-full px-2 md:px-8 xl:px-24'
        initial={{bottom: '50%'}}
        animate={{bottom: '5%'}}
        transition={{
            delay: 0.6,
            duration: 0.7,
            ease: 'backInOut'
        }}
    >

        <AnimatePresence>
            {
                page === 'home' &&

                    <motion.p
                        className='text-center amulya text-primary text-sm'
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

        <AnimatePresence>
        <motion.button
            initial='before'
            variants={variants}
            animate={page === 'home' ? 'open' : 'close'}
            className={`h-11 flex justify-center items-center border-primary ${page === 'home' || project !== null ? 'text-secondary bg-primary' : 'text-primary bg-secondary'} rounded-full overflow-hidden`}
            disabled={page === 'home' ? true : false}
            onClick={() => dispatch(setHomePage())}
        >

            <p className='xillian text-2xl tracking-wider pt-1'>
                {
                    page === 'home' ? 'dagna schmidt' : 'd'
                }
            </p>

        </motion.button>
        </AnimatePresence>

    </motion.div>
  )
}

export default Logo;
