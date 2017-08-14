/// <reference path="./typings/XRM/xrm.d.ts" />

class HelloWorld {
    constructor(public message: string) {}
}

var hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);
console.log("Hello Visual Studio Code")

Xrm.Page.data.entity.attributes["fus_firstname"];

function ScopeTest(){
    if (true){
        var foo = 'use anywhere';
        let bar = 'use in this block';
    }

    console.log(foo);
    //console.log(bar); //error
}

ScopeTest();