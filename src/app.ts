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

//add generic constraints
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "rose" }, { age: 6 });
console.log("mergedObj = ", mergedObj);

//another generic function
interface Lengthy {
  length: number;
}

//set specificlly the return type to a tuple and its two element types
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("hello rose")); //["hello rose", "Got 10 elements."]
console.log(countAndDescribe([2, 1, 4, 5, 6])); //[[2, 1, 4, 5, 6], "Got 5 elements."]

//keyof constraint in generic function
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

const aa = extractAndConvert({ name: "orvoki" }, "name");
console.log("aa = ", aa);

//keyof + generics can ensure that we don't make dumb mistakes
//where we tried to call this function,
const bb = extractAndConvert({ name: "Mikko" }, "age");
console.log("bb = ", bb);
