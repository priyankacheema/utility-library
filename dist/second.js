export function addition(a = 0, b = 0) {
  return a + b;
}

export function findLargest(arr = []) {
  return Math.max(...arr);
}

export function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
