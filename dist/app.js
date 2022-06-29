"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "rose" }, { age: 6 });
console.log("mergedObj = ", mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("hello rose"));
console.log(countAndDescribe([2, 1, 4, 5, 6]));
function extractAndConvert(obj, key) {
    return obj[key];
}
const aa = extractAndConvert({ name: "rose" }, "name");
console.log("aa = ", aa);
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("apple");
textStorage.addItem("book");
console.log("textStorage = ", textStorage.getItems());
textStorage.removeItem("apple");
console.log("textStorage after removing apple = ", textStorage.getItems());
textStorage.removeItem("book");
console.log("textStorage after removing apple and book = ", textStorage.getItems());
const numberStorage = new DataStorage();
const boolStorage = new DataStorage();
boolStorage.addItem(true);
boolStorage.addItem(false);
boolStorage.addItem(true);
console.log("boolStorage = ", boolStorage.getItems());
boolStorage.removeItem(false);
console.log("boolStorage after reomve false = ", boolStorage.getItems());
boolStorage.removeItem(true);
console.log("boolStorage after reomve false and one true = ", boolStorage.getItems());
const mixedStorage = new DataStorage();
const objStore = new DataStorage();
objStore.addItem({ name: "rose" });
objStore.addItem({ name: "ben" });
console.log("objStore = ", objStore);
objStore.removeItem({ name: "rose" });
console.log("objStore after remove rose = ", objStore);
//# sourceMappingURL=app.js.map