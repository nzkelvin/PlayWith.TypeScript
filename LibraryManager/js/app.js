/// <reference path="../typings/XRM/xrm.d.ts" />
var HelloWorld = (function () {
    function HelloWorld(message) {
        this.message = message;
    }
    return HelloWorld;
}());
var hello = new HelloWorld('Hello TypeScript');
console.log(hello.message);
console.log("Hello Visual Studio Code");
Xrm.Page.data.entity.attributes["fus_firstname"];
function ScopeTest() {
    if (true) {
        var foo = 'use anywhere';
        var bar = 'use in this block';
    }
    console.log(foo);
    //console.log(bar); //error
}
ScopeTest();
//# sourceMappingURL=app.js.map