import { AnimatePresence, motion } from 'motion/react';
import { button } from '../../constants/Button';
import { box } from '../../constants/Figure';
import { useState } from 'react';

const Exit = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="exit-container">
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
            key="box"
          />
        ) : null}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 2 }}
        style={button}
      >
        {isVisible ? 'Hide' : 'Show'}
      </motion.button>
    </div>
  );
};

export default Exit;
