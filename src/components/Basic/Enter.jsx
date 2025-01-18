import { motion } from 'motion/react';

import { ball } from '../../constants/Figure';

const Enter = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 2,
        scale: { type: 'spring', visualDuration: 1, bounce: 0.5 },
      }}
      style={ball}
    />
  );
};

export default Enter;
