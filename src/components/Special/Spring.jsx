import { spring } from 'motion';
import { useState } from 'react';

import style from './Spring.module.css';
const Spring = () => {
  const [state, setState] = useState(false);

  const springStyle = {
    transition: `transform ${spring(0.6, 0.7)}`, // spring(visualDuration, bounce)
  };

  return (
    <div className={style['spring-container']}>
      <div className={style['box']} data-state={state} style={springStyle} />
      <button onClick={() => setState(!state)}>Toggle position</button>
    </div>
  );
};

export default Spring;
