import React from 'react';
import { motion } from 'framer-motion';

const BoringStories = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{
        delay: 0.7,
        duration: 0.3
      }}
    >
      Boring Stories
    </motion.div>
  )
}

export default BoringStories;
