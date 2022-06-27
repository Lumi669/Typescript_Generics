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
const aa = extractAndConvert({ name: "orvokki" }, "name");
console.log("aa = ", aa);
//# sourceMappingURL=app.js.map