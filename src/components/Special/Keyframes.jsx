import { motion } from 'motion/react';

const Keyframes = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 2, 2, 1, 1], // [초기 상태, sequence 1, sequence 2, sequence 3, 최종 상태] → transition의 times 값을 따라 시간 순서대로 변화
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ['2%', '5%', '50%', '50%', '2%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1], // 1 Sequence당 총 1초 소요 → duration 시간 만큼 반복 가능 (repeat 값에 따라 결정)
        repeat: 2, // 총 duration의 한 sequence를 몇번 반복할지 결정
        repeatDelay: 1, // 한번 반복 후 다음 반복 사이의 지연 시간
      }}
      style={box}
    />
  );
};

const box = {
  width: 100,
  height: 100,
  backgroundColor: '#f5f5f5',
  borderRadius: 5,
};

export default Keyframes;
