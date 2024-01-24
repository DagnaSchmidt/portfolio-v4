import React from 'react';
import { motion } from 'framer-motion';

//data
import { workData } from '../../data/workData';
import { miData } from '../../data/miData';

//components
import ProjectHeader from '../work/ProjectHeader';


const Mi = () => {
  const { prevImg, background, journeyMaps } = miData;

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
      <ProjectHeader data={workData[1]} />

      {/* PROJECT PREVIEW */}
      <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider pt-6 xl:pt-12'>Project preview</h3>
      <div className='flex self-center gap-2 flex-row md:flex-wrap'>
        {
          prevImg.map(i => <img src={require(`../../images/mi/${i}`)} alt={i} className='w-20 xl:w-40' />)
        }
      </div>

      {/* BACKGROUND */}
      <div className='flex gap-10 md:gap-16 pt-4'>
        <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider'>{background.title}</h3>
        <p className='amulya text-sm lg:text-base'>{background.description}</p>
      </div>

      {/* JOURNEY MAPS */}
      <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider pt-6 xl:pt-12'>{journeyMaps.title}</h3>

      {
        journeyMaps.maps.map(i => {
          return (
            <div key={i.id}>
              <img src={require(`../../images/mi/${i.image}`)} alt={i.image} />
              <div className='flex gap-10 md:gap-16 pt-4'>
                <h5>{i.persona} journey map</h5>
                <p></p>
              </div>
            </div>
          )
        })
      }


    </motion.div>
  )
};

export default Mi;
