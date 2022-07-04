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

// //add generic constraints
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: "rose" }, { age: 6 });
// console.log("mergedObj = ", mergedObj);

// //another generic function
// interface Lengthy {
//   length: number;
// }

// //set specificlly the return type to a tuple and its two element types
// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//   let descriptionText = "Got no value";
//   if (element.length === 1) {
//     descriptionText = "Got 1 element.";
//   } else if (element.length > 1) {
//     descriptionText = `Got ${element.length} elements.`;
//   }
//   return [element, descriptionText];
// }

// console.log(countAndDescribe("hello rose")); //["hello rose", "Got 10 elements."]
// console.log(countAndDescribe([2, 1, 4, 5, 6])); //[[2, 1, 4, 5, 6], "Got 5 elements."]

// //keyof constraint in generic function
// function extractAndConvert<T extends object, U extends keyof T>(
//   obj: T,
//   key: U
// ) {
//   return obj[key];
// }

// const aa = extractAndConvert({ name: "rose" }, "name");
// console.log("aa = ", aa);

//keyof + generics can ensure that we don't make dumb mistakes
//where we tried to call this function,
// const bb = extractAndConvert({ name: "Mikko" }, "age");
// console.log("bb = ", bb);

//Generic Classes
// class DataStorage<T extends string | number | boolean> {
//   private data: T[] = [];
//   addItem(item: T) {
//     this.data.push(item);
//   }

//   removeItem(item: T) {
//     if (this.data.indexOf(item) === -1) {
//       return;
//     }
//     this.data.splice(this.data.indexOf(item), 1);
//   }

//   getItems() {
//     return [...this.data];
//   }
// }

//union type used in a class
//Eventhough line82 is fine, but Line85 and Line89 Line92 show error
//so, we should use generic class, if we want the data type to be
//either only string type, or only number type
class DataStorage {
  private data: string[] | number[] | boolean[] = [];

  addItem(item: string | number | boolean) {
    this.data.push(item);
  }

  removeItem(item: string | number | boolean) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

//set T to string
const textStorage = new DataStorage();
textStorage.addItem("apple");
textStorage.addItem(6);
console.log("textStorage = ", textStorage.getItems());

// textStorage.removeItem("apple");
// console.log("textStorage after removing apple = ", textStorage.getItems());
// textStorage.removeItem("book");
// console.log(
//   "textStorage after removing apple and book = ",
//   textStorage.getItems()
// );

// //set T to number
// const numberStorage = new DataStorage<number>();

// //set T to boolean
// const boolStorage = new DataStorage<boolean>();
// boolStorage.addItem(true);
// boolStorage.addItem(false);
// boolStorage.addItem(true);
// console.log("boolStorage = ", boolStorage.getItems());
// boolStorage.removeItem(false);
// console.log("boolStorage after reomve false = ", boolStorage.getItems());
// boolStorage.removeItem(true);
// console.log(
//   "boolStorage after reomve false and one true = ",
//   boolStorage.getItems()
// );

//set T to object

//const objStore = new DataStorage<object>();

// const rosey = { name: "rosey" };
// objStore.addItem(rosey);
// objStore.addItem({ name: "ben" });

// console.log("objStore = ", objStore.getItems());

// objStore.removeItem(rosey);
// console.log("objStore after removing rose = ", objStore.getItems());

// //set T to union type
// const mixedStorage = new DataStorage<string | number>();

// //set T to object type
// const objStore = new DataStorage();
// objStore.addItem({ name: "rose" });
// objStore.addItem({ name: "ben" });

// console.log("objStore = ", objStore);
// objStore.removeItem({ name: "rose" });
// console.log("objStore after remove rose = ", objStore);

//Demonstration of Generic Utility Types
//Partial
// interface CourseGoal {
//   title: string;
//   description: string;
//   completeUntil: Date;
// }

// function createCourseGoas(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   let courseGoal: Partial<CourseGoal> = {};
//   courseGoal.title = title;
//   courseGoal.description = description;
//   courseGoal.completeUntil = date;
//   return <CourseGoal>courseGoal;
// }

// const newTeacher22 = createCourseGoas(
//   "assitence",
//   "a good teacher",
//   new Date("2022-6-6")
// );

//note the difference between const and Readonly
//Readonly<Type> is to create a readonly type, it is a generic utility
//whereas readony is to make a property as read-only in the class, type or interface
// const names: Readonly<string[]> = ["anna", "rose"];
// //names.push("ben");
// console.log("names array = ", names);
