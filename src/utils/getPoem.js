export const getPoems = (poems, problem, mood) => {
  const filteredPoems = poems.filter(item => item.problem === problem && item.mood === mood);
  return filteredPoems
};
