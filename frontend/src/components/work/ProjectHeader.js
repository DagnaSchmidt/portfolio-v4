import React from 'react';

//components
import Link from '../shared/Link';
import ProjectBuildOn from './ProjectBuildOn';


const ProjectHeader = ({data}) => {
    const { links, categories, title, description, buildOn } = data;


  return (
    <div className='flex flex-col gap-12'>
        <div className='flex justify-between md:justify-end md:gap-12'>
            {
                links.map(i => <Link key={i.id} url={i.link} title={i.title} color='text-primary' />)
            }
      </div>

      <div className='flex flex-col xl:flex-row gap-6 xl:justify-between xl:gap-28'>
        <div className='flex flex-col gap-4'>
            <p className='amulya-light text-xs'>{categories}</p>
            <h3 className='amulya-bold text-4xl xl:text-6xl tracking-wider'>{title}</h3>
            <p className='amulya text-sm lg:text-base pl-12 pt-3'>{description}</p>
        </div>
        <div className='flex gap-6 self-end xl:pt-28'>
            {
                buildOn.map(i => <ProjectBuildOn key={i.id} data={i} />)
            }
        </div>
      </div>

    </div>
  )
};

export default ProjectHeader;
