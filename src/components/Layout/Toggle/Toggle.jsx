import { useState } from 'react';
import { motion } from 'motion/react';

import style from './Toggle.module.css';

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <button
      className={style['toggle-container']}
      style={{ justifyContent: 'flex-' + (isOn ? 'start' : 'end') }}
      onClick={toggleSwitch}
    >
      <motion.div
        className={style['toggle']}
        layout
        transition={{ type: 'spring', visualDuration: 0.2, bounce: 0.3 }}
      />
    </button>
  );
};

export default Toggle;
