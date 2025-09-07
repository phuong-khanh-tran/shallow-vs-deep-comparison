import { shallowEqual } from "fast-equals";
import { deepEqual } from "fast-equals";

function shallowCompare(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
// Test case 1
// const userA = {
//   name: "Khánh",
//   age: undefined,
//   email: null,
//   active: true,
// };

// const userB = {
//   name: "Khánh",
//   age: undefined,
//   email: null,
//   active: true,
// };

// console.log(shallowCompare(userA, userB));
// console.log("fast-equals: ", shallowEqual(userA, userB));

// Test case 2
// const o1 = { a: 1, b: { c: 2 } };
// const o2 = { a: 1, b: { c: 2 } };

// console.log(shallowCompare(o1, o2)); // false, because o1.b !== o2.b (different references)

// Test case 3
// const obj = { a: null, b: { c: 2 } };

// const copy = { ...obj };

// console.log(shallowCompare(copy, obj));
// console.log(copy.a == obj.a); // true
// console.log(copy.a === obj.a); // false
// console.log(copy.b === obj.b); // true

// Test case 4
const o3 = { a: 1, b: new Date() };
const o4 = { a: 1, b: new Date() };

console.log(deepEqual(o3, o4));
