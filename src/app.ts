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

//demonstration  a generic function
//using type casting to get rid of error on Line31
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB) as { name: string; age: number };
}

// use <> version of type casting also works
// function merge(objA: object, objB: object) {
//   return <{ name: string; age: number }>Object.assign(objA, objB);
// }

const mergedObj = merge({ name: "rose" }, { age: 90 });
console.log("mergedObj = ", mergedObj);
