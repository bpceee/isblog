export function createMarkup(markup) {
  return {__html: markup};
}

export function getLastElement(ele) {
  if (!ele || !ele.lastElementChild) return ele;
  return getLastElement(ele.lastElementChild);
}
