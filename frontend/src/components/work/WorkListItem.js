import React from 'react';

const WorkListItem = ({data}) => {
    const { title, categories, description } = data;


  return (
    <div className='text-secondary'>
        <div className='flex gap-4 amulya-light text-xs'>
            {
                categories.map(i => <p key={i}>{i}</p>)
            }
        </div>
        <div className='flex flex-col justify-between'>
            <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider'>{title}</h3>
        </div>
    </div>
  )
}

export default WorkListItem;
