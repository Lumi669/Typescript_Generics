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
function createCourseGoas(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const newTeacher22 = createCourseGoas("assitence", "a good teacher", new Date("2022-6-6"));
//# sourceMappingURL=app.js.map