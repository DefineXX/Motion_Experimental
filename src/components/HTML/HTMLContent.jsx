import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';

const HTMLContent = () => {
  const count = useMotionValue(0); // motion/react 라이브러리 내 useMotionValue 함수 사용
  const rounded = useTransform(() => Math.round(count.get())); // motion/react 라이브러리 내 useTransform 함수 사용

  useEffect(() => {
    const controls = animate(count, 100, { duration: 4 });
    return () => controls.stop();
  }, [count]);

  return <motion.pre style={text}>{rounded}</motion.pre>;
};

const text = {
  fontSize: 64,
  color: '#4ff0b7',
};

export default HTMLContent;
