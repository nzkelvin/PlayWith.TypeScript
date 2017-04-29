// String inference
var myString = 'this is a string';
// Type annotation
var thisString = 'this string is awesome!';
function ReturnNumber() {
    return 42;
}
function DoNotDoThis() {
    // I konw what I am doing and leave me along.
}
// emum
//enum Category { Biography, Poetry, Fiction }; // 0, 1, 2
var Category;
(function (Category) {
    Category[Category["Biography"] = 5] = "Biography";
    Category[Category["Poetry"] = 6] = "Poetry";
    Category[Category["Fiction"] = 7] = "Fiction";
})(Category || (Category = {}));
; // 0, 1, 2
console.log(Category.Biography);
console.log(Category[Category.Biography]);
// tuple is a speical type of an array
var myTuple = [25, 'truck', 'this works!'];
//# sourceMappingURL=basics.types.js.map