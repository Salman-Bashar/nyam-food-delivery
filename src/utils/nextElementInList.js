const nextElementInList = (list, currentElement) => {
  const currentelementIndex = list.indexOf(currentElement);
  const nextElementIndex = (currentelementIndex + 1) % list.length;
  const nextElement = list[nextElementIndex];
  return nextElement;
};

export default nextElementInList;
