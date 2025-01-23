import { motion } from 'motion/react';

import style from './Stagger.module.css';

const Stagger = () => {
  return (
    <motion.ul className={style.example}>
      <motion.li
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      ></motion.li>
      <motion.li
        initial={{ opacity: 0, y: 120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
      ></motion.li>
      <motion.li
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
      ></motion.li>
      <motion.li
        initial={{ opacity: 0, y: 160 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.7 }}
      ></motion.li>
    </motion.ul>
  );
};

export default Stagger;
