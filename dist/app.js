"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "rose" }, { age: 6 });
const mergedObj2 = merge({ name: "rose" }, [1, 2, 3]);
console.log("mergedObj = ", mergedObj);
console.log("mergedObj2 = ", mergedObj2);
//# sourceMappingURL=app.js.map