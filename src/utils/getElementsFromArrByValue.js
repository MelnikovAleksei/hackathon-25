export const getElementsFromArrByValue = (arr, key, value) => {
  const elements = arr.filter(obj => obj[key] === value);
  //const randomElem = elements[Math.floor(Math.random() * (elements.length))];
  return elements;
}
