import { useMemo } from 'react';

// определение ширины скролла в браузере
const scrollWidthCalc = () => {
  let div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';
  document.body.append(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

const fixScrollWidth = (needFixScroll: boolean) => {
  const memoWidth = useMemo(scrollWidthCalc, []);
  if (needFixScroll) {
    return { paddingRight: `${memoWidth}px` };
  } else {
    return {};
  }
};

export default fixScrollWidth;
