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
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const objStore = new DataStorage();
const rosey = { name: "rosey" };
objStore.addItem(rosey);
objStore.addItem({ name: "ben" });
console.log("objStore = ", objStore.getItems());
objStore.removeItem(rosey);
console.log("objStore after removing rose = ", objStore.getItems());
//# sourceMappingURL=app.js.map