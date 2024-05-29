import { List, Map } from 'immutable';

// Function to merge the values of two objects deeply into a List
export function mergeDeeplyElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  const mergedMap = map1.mergeDeep(map2);
  return List(mergedMap.valueSeq());
}
