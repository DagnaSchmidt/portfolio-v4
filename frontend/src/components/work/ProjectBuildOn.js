import React from 'react';

const ProjectBuildOn = ({data}) => {
    const { title, stack } = data;


  return (
    <div className='flex flex-col gap-2 items-end'>
        <h5 className='amulya-medium text-sm xl:text-base'>{title}</h5>
        <ul className='flex flex-col items-end xl:gap-1'>
            {
                stack.map((i, index) => <li key={index} className='amulya-light text-sm xl:text-base text-nowrap'>{i}</li>)
            }
        </ul>
    </div>
  )
};

export default ProjectBuildOn;
