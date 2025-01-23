import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import style from './SharedLayout.module.css';

const SharedLayout = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className={style.container}>
      <nav className={style.nav}>
        <ul className={`${style.tabsStyles} ${style.tabsContainer}`}>
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                backgroundColor: item === selectedTab ? '#eee' : '#eee0', // animate 속성으로 동적 스타일링 구현함으로써 motion default 애니메이션 적용
              }}
              className={`${style.tabsStyles} ${style.tab}`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  // id="underline"
                  layoutId="underline" // layoutId를 통해 조건부 렌더링에 따른 디폴트 애니메이션 적용
                  className={style.underlinee}
                />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className={style['icon-container']}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'} // key값의 변화를 감지하고 AnimatePresence가 애니메이션 적용
            initial={{ y: -10, opacity: 0 }} // y값이 음수이면 좌표계 기준 상단에 위치, 양수이면 하단에 위치 → initial이 y:-10이고, animate이 y:0이면 위에서 내려오는 효과
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }} // animate가 y:0이고, exit이 y:10이면 아래로 사라지는 효과
            transition={{ duration: 0.2 }}
            className={style.icon}
          >
            {selectedTab ? selectedTab.icon : '😋'}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

const allIngredients = [
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
  { icon: '🥕', label: 'Carrot' },
  { icon: '🍌', label: 'Banana' },
  { icon: '🫐', label: 'Blueberries' },
  { icon: '🥂', label: 'Champagne' },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

export default SharedLayout;
