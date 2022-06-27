// //generics used for array
// const names: Array<string> = [];
// names[0].split(" ");

// //generics used for promise
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

//demonstration generic function

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge<{ name: string }, { age: number }>(
  { name: "rose" },
  { age: 6 }
);
const mergedObj2 = merge<{ name: string }, number[]>(
  { name: "rose" },
  [1, 2, 3]
);
console.log("mergedObj = ", mergedObj);
console.log("mergedObj2 = ", mergedObj2); //{0: 1, 1: 2, 2: 3, name: "rose"}
