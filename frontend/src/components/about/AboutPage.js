import React from 'react';

//components
import Link from '../shared/Link';

//data
import { aboutLinks } from '../../data/aboutLinks';

const AboutPage = () => {
  return (
    <div className='w-full max-w-[1480px] h-full px-2 md:px-8 xl:px-24 pt-6 flex flex-col'>
      <div className='flex justify-between md:justify-end md:gap-12'>
        {
          aboutLinks.map(i => <Link key={i.id} url={i.link} title={i.title} color='text-secondary' />)
        }
      </div>
    </div>
  )
}

export default AboutPage;
