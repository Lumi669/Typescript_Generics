"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "rose" }, { age: 90 });
console.log("mergedObj = ", mergedObj);
mergedObj.age;
//# sourceMappingURL=app.js.map