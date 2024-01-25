import React from 'react';


const ProjectSection = ({title, description}) => {
  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-16 xl:gap-24'>
        <div>
          <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider w-32'>{title}</h3>
        </div>
        <p className='amulya text-sm lg:text-base'>{description}</p>
    </div>
  )
};

export default ProjectSection;
