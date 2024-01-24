import React from 'react';
import { motion } from 'framer-motion';

//data
import { workData } from '../../data/workData';
import { finovoData } from '../../data/finovoData';

//components
import ProjectHeader from '../work/ProjectHeader';


const Finovo = () => {
    const { title, images } = finovoData.designs;

  return (
    <motion.div
      className='w-full max-w-[1480px] h-full px-2 md:px-8 xl:px-56 pt-6 flex flex-col gap-10 text-primary'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 0.7,
        duration: 0.3
      }}
    >
      <ProjectHeader data={workData[3]} />

      <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider pt-20'>{title}</h3>
      <div className='flex flex-col self-center md:justify-center gap-2 md:flex-row md:flex-wrap pb-12'>
        {
          images.mobile.map(i => <img src={require(`../../images/finovo/${i}`)} alt={i} className='w-60' />)
        }
      </div>

    </motion.div>
  )
}

export default Finovo;
