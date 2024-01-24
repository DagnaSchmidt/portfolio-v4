import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

//icons
import ArrowUp from '../../icons/ArrowUpRight.svg';
import ArrowUpBold from '../../icons/ArrowUpRightBold.svg'

//actions
import { setProject } from '../../reducer/pageReducer';
import { AnimatePresence } from 'framer-motion';

const WorkListItem = ({data, isHover, setIsHover}) => {
    const dispatch = useDispatch();
    const project = useSelector(state => state.pages.project)
    const { title, categories, description } = data;


  return (
    <AnimatePresence>

        {
            project === null &&
                <motion.div
                    className={`max-w-[1480px] py-8 px-2 md:px-8 xl:px-56 text-secondary flex flex-col gap-2 ${isHover.button === title ? 'opacity-100 cursor-pointer' : isHover.isHover ? 'opacity-35' : 'opacity-100'}`}
                    onMouseEnter={() => setIsHover({isHover: true, button: title})}
                    onMouseLeave={() => setIsHover({isHover: false, button: ''})}
                    onClick={() => dispatch(setProject(title))}
                >
                    <p className='amulya-light text-xs'>{categories}</p>
                    <div className='flex justify-between'>
                        <h3 className='amulya-bold text-xl md:text-2xl xl:text-3xl tracking-wider'>{title}</h3>
                        <img src={isHover.button === title ? ArrowUpBold : ArrowUp} className='w-8 h-8' alt='arrow up icon' />
                    </div>
                    <p className='pl-12'>
                        {description}
                    </p>
                </motion.div>
        }

    </AnimatePresence>

  )
}

export default WorkListItem;