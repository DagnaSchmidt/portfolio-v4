import React from 'react';

//components
import Link from '../shared/Link';


const ProjectHeader = ({data}) => {
    const { links, categories, title, description } = data;


  return (
    <div className='flex flex-col gap-12'>
        <div className='flex justify-between md:justify-end md:gap-12'>
            {
                links.map(i => <Link key={i.id} url={i.link} title={i.title} color='text-primary' />)
            }
      </div>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
            <p className='amulya-light text-xs'>{categories}</p>
            <h3 className='amulya-bold text-2xl md:text-3xl xl:text-4xl tracking-wider'>{title}</h3>
            <p className='amulya text-sm lg:text-base pl-12 '>{description}</p>
        </div>
        <div>
            {/* build on */}
        </div>
      </div>

    </div>
  )
};

export default ProjectHeader;
