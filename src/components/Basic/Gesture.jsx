import { motion } from 'motion/react';
import { box } from '../../constants/Figure';

const Gesture = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onHoverStart={() => console.log('hover started!')}
      style={box}
    />
  );
};

export default Gesture;
