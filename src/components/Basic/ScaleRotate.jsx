import { box } from '../../constants/Figure';

import { motion } from 'motion/react';

const ScaleRotate = () => {
  return (
    <div className="container">
      <motion.div
        style={box}
        animate={{ scale: 2, rotate: 360 }}
        transition={{ duration: 2 }}
      />
    </div>
  );
};

export default ScaleRotate;
