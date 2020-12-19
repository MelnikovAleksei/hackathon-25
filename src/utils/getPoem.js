export const getPoem = (poems, problem, mood) => {
  const filteredPoems = poems.filter(item => item.problem === problem && item.mood === mood);
  const randomPoem = filteredPoems[Math.floor(Math.random() * (filteredPoems.length))];
  return randomPoem
};
