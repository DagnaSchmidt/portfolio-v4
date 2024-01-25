import React from 'react';

const ProjectJourneyMap = ({data}) => {
    const { persona, scenario, expectations } = data;


  return (
    <div className='flex flex-col gap-4 flex-1'>
        <p className='amulya-medium text-lg lg:text-base'>{persona}</p>
        <div className='flex flex-col gap-2 items-start'>
            <p className='amulya-medium text-xs lg:text-sm'>scenario:</p>
            <p className='amulya text-sm lg:text-base'>{scenario}</p>
        </div>
        <div className='flex flex-col gap-2 items-start'>
            <p className='amulya-medium text-xs lg:text-sm'>expectations:</p>
            <ul>
                {
                    expectations.map((i, index) => <li key={index} className='amulya text-sm lg:text-base'>- {i}</li>)
                }
            </ul>
        </div>
    </div>
  )
};

export default ProjectJourneyMap;
