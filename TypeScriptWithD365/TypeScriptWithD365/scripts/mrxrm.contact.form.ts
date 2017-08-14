/// <reference path="../typings/XRM/xrm.d.ts" />

let firstname = Xrm.Page.data.entity.attributes["firstname"];
console.log(firstname);