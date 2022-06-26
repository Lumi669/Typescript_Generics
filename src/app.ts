//generics used for array
const names: Array<string> = [];
names[0].split(" ");

//generics used for promise
const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
