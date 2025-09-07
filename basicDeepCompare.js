// This function covers only 2 cases:
// Plain objects ({})
// Nested objects with primitive values

function basicDeepCompare(obj1, obj2) {
  if (
    typeof obj1 != "object" ||
    typeof obj2 != "object" ||
    obj1 == null ||
    obj2 == null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length != keys2.length) return false;

  for (let k of keys1) {
    if (!keys2.includes(k)) return false;
    const val1 = obj1[k];
    const val2 = obj2[k];

    if (
      typeof val1 === "object" &&
      val1 !== null &&
      typeof val2 === "object" &&
      val2 !== null
    ) {
      if (!basicDeepCompare(val1, val2)) return false;
    } else if (val1 !== val2) {
      return false;
    }
  }

  return true;
}
const a = { x: 10, y: { z: 20, q: { e: 2, r: 3 } } };
const b = { x: 10, y: { z: 20, q: { e: 2, r: 3 } } };
const res = basicDeepCompare(a, b);
console.log(res);
