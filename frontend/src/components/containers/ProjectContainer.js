import React from 'react';

const ProjectContainer = () => {
    const variants = {
        close: {
            width: '128px',
            height: '1px'
        },
        open: {
            width: '100dvw',
            height: '100dvh'
        }
    }
  return (
    <motion.div
        variants={variants}
        initial='close'
    >
        ProjectContainer
    </motion.div>
  )
}

export default ProjectContainer;
