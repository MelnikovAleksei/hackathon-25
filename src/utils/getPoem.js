export const getPoem = (poems, request, scale) => {

  const getValue = poems.filter(item => item.request === request && item.scale === scale);
  const randomness = getValue[Math.floor(Math.random() * (getValue.length))];
  return randomness

};
