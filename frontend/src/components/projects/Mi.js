import React from 'react';
import { motion } from 'framer-motion';

//data
import { workData } from '../../data/workData';
import { miData } from '../../data/miData';

//components
import ProjectHeader from '../work/ProjectHeader';
import ProjectSection from './ProjectSection';
import ProjectJourneyMap from './ProjectJourneyMap';
import ProjectImage from './ProjectImage';


const Mi = () => {
  const { prevImg, background, goal, research, solution, journeyMaps, userFlows } = miData;

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

      <div className='flex flex-col gap-10 md:gap-16'>

          {/* PROJECT PREVIEW */}
          <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider pt-6 xl:pt-12'>Project preview</h3>
          <div className='flex self-center gap-2 flex-row md:flex-wrap'>
            {
              prevImg.map(i => <img key={i} src={require(`../../images/mi/${i}`)} alt={i} className='w-20 xl:w-40' />)
            }
          </div>

          <ProjectSection title={background.title} description={background.description} />
          <ProjectSection title={goal.title} description={goal.description} />
          <ProjectSection title={research.title} description={research.description} />
          <ProjectSection title={solution.title} description={solution.description} />

          {/* JOURNEY MAPS */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-16 xl:gap-24'>
              <div>
                <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider w-32'>{journeyMaps.title}</h3>
              </div>
              <div className='flex flex-col md:flex-row gap-12'>
                  {
                    journeyMaps.maps.map(i => <ProjectJourneyMap data={i} key={i.id} />)
                  }
              </div>
          </div>
          <div className='flex flex-col gap-4'>
            <ProjectImage title='Designer Ted' image={journeyMaps.maps[0].image} />
            <ProjectImage title='' image={journeyMaps.maps[0].personaImage} />
            <ProjectImage title='Content writer Kasia' image={journeyMaps.maps[1].image} />
            <ProjectImage title='' image={journeyMaps.maps[1].personaImage} />
          </div>


          <div className='flex flex-col gap-4'>
            <ProjectSection title={userFlows[0].title} description={userFlows[0].description} />
            <ProjectImage title='' image={userFlows[0].images[0]} />
            <ProjectImage title='' image={userFlows[0].images[1]} />
          </div>

          <div className='flex flex-col gap-4'>
            <ProjectSection title={userFlows[1].title} description={userFlows[1].description} />
            <ProjectImage title='' image={userFlows[1].images[0]} />
          </div>

          <div className='flex flex-col gap-4'>
            <ProjectSection title={userFlows[2].title} description={userFlows[2].description} />
            <ProjectImage title='' image={userFlows[2].images[0]} />
          </div>


          {/* UNDER CONSTRUCTION INFO */}
          <div className='flex flex-col gap-4 pb-24'>
            <h3 className='amulya-bold text-lg md:text-xl xl:text-2xl tracking-wider pt-6 xl:pt-12'>Navigation architecture, wireframes and prototype will be here soon.</h3>
            <p className='amulya text-base'>I am still polishing the application details.</p>
          </div>

      </div>


    </motion.div>
  )
};

export default Mi;
