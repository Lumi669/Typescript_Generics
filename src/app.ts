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
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}

//use type casting
const mergedObj = merge({ name: "rose" }, { age: 90 }) as {
  name: string;
  age: number;
};

//bellow type casting using <> als works
//const mergedObj = <{name: string, age: number}> merge({ name: "rose" }, { age: 90 });
console.log("mergedObj = ", mergedObj);

mergedObj.age;
