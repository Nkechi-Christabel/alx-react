import { Map } from 'immutable';
// Function to merge the values of two objects deeply into a List
export function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}
