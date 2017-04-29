// String inference
let myString = 'this is a string';

// Type annotation
let thisString: string = 'this string is awesome!';

function ReturnNumber(): number {
    return 42;
}

function DoNotDoThis(): any { // any type: You are telling the compiler that
                            // I konw what I am doing and leave me along.

}

// emum
//enum Category { Biography, Poetry, Fiction }; // 0, 1, 2

enum Category { Biography = 5, Poetry, Fiction }; // 0, 1, 2

console.log(Category.Biography);
console.log(Category[Category.Biography]);

// tuple is a speical type of an array
let myTuple: [number, string] = [25, 'truck', 'this works!']