import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

//icons
import ArrowUp from '../../icons/ArrowUpRight.svg';
import ArrowUpBold from '../../icons/ArrowUpRightBold.svg'

//actions
import { setProject } from '../../reducer/pageReducer';

const WorkListItem = ({data, isHover, setIsHover}) => {
    const dispatch = useDispatch();
    const project = useSelector(state => state.pages.project)
    const { title, categories, description } = data;

    if(project !== null){
        return null;
    }

  return (
    <div
        className={`text-secondary flex flex-col gap-2 ${isHover.button === title ? 'opacity-100 cursor-pointer' : isHover.isHover ? 'opacity-35' : 'opacity-100'}`}
        onMouseEnter={() => setIsHover({isHover: true, button: title})}
        onMouseLeave={() => setIsHover({isHover: false, button: ''})}
        onClick={() => dispatch(setProject(title))}
    >
        <div className='flex gap-4 amulya-light text-xs'>
            {
                categories.map(i => <p key={i}>{i}</p>)
            }
        </div>
        <div className='flex justify-between'>
            <h3 className='amulya-bold text-xl md:text-2xl xl:text-3xl tracking-wider'>{title}</h3>
            <img src={isHover.button === title ? ArrowUpBold : ArrowUp} className='w-8 h-8' alt='arrow up icon' />
        </div>
        <p className='pl-12'>
            {description}
        </p>
    </div>
  )
}

export default WorkListItem;
