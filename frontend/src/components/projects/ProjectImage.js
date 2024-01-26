import React from 'react';


const ProjectImage = ({title, image}) => {
  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-16 xl:gap-24'>
        <div>
            <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider w-32'>{title}</h3>
        </div>
        <div>
            <img src={require(`../../images/mi/${image}`)} alt={image} className='rounded-3xl' />
        </div>
    </div>
  )
};

export default ProjectImage;
