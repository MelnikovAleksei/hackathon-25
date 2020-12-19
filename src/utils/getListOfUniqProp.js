export const getListOfUniqProp = (arr, key) => {
  const listOfProp = [];
  arr.forEach((item) => {
    listOfProp.push(item[key])
  })
  return Array.from(new Set(listOfProp));
}
