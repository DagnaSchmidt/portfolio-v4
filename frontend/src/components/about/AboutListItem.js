import React from 'react';
import ArrowDown from '../../icons/ArrowBendDownRight.svg';

const AboutListItem = ({data}) => {
    const { title, link } = data;

  return (
    <div className='flex gap-5'>
        <img src={ArrowDown} alt='arrow down icon' className='w-4 h-4' />
        <div className='flex flex-col gap-1'>
            <p className='amulya-light-italic text-secondary text-sm'>{title}</p>
            {
                link.length > 0 &&
                    <a href={link} target='_blank' rel='noreferrer' className='amulya-light text-secondary text-xs hover:italic' >
                        see here
                    </a>
            }
        </div>
    </div>
  )
}

export default AboutListItem;
