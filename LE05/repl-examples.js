/*
||  REPL Examples
||  WBE Lab 5
*/

//  Define some functions
let F = function (n) { this.a = n }
let f = function () { return this.a }
let fs = function () { "use strict"; return this.a }

//  F is a constructor
let value = new F(12)
console.log("value.a is", value.a)

//  function evocation
//  f in normal mode: this is the global object
//  fs in strict mode: this is undefined and undefined.a throws an exception
console.log("f() is", f())
try {
	console.log("fs() is", fs())
} catch (error) {
	console.error(error.message)
}

//  call and apply to bind this
console.log("fs.call({ a: 11, b: 22 })  is", fs.call({ a: 11, b: 22 }))
console.log("fs.apply({ a: 11, b: 22 }) is", fs.apply({ a: 11, b: 22 }))

//  avoid function invocation of a constructor
//  (creates global variables)
F(99)
console.log("F(99), then a is", a)

//  f now is a method of the prototype of obj
//  or: obj inherits method f
//  obj.f(): method invocation, this refers to obj
let obj = Object.create({ f })
obj.a = "yeah"
console.log("obj is", obj)
console.log("obj.f() is", obj.f())

console.log("property names of obj:", Object.getOwnPropertyNames(obj))
console.log("property names of obj’s prototype:", 
	Object.getOwnPropertyNames(Object.getPrototypeOf(obj)))

//  add method beget to the Object constructor (aka static method)
if (typeof Object.beget !== "function") {
	Object.beget = function (o) {
		var F = function () {}
		F.prototype = o
		return new F()
	}
}

//  use Object.beget instead of Object.create
let obj2 = Object.beget({ f })
obj2.a = "yeah"
console.log("obj2 is", obj2)
console.log("obj2.f() is", obj2.f())
