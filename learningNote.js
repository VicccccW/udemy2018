/****************************************************
 * 036 How Our Code Is Executed JavaScript Parsers and Engines
 */

/**
 * a host, where the js file is hosted, like a broswer or node.js webserver, 
 * has a js engine. it takes all code and excute it.
 * a js engine is a programe that excute the js code.
 * 
 * first thing happen in the engine is, code is parsed by a parser
 * if all good, the parser produce a data structure: abstract syntax tree
 * then convert it to machine code, which can be handled by computer processor
 */

/****************************************************
 * 037 Execution Contexts and the Execution Stack
 */

/**
* all js code needs to run in a environment 
* it calls execution context 
* think it is a box or a container
* which stores the variables and in which a piece of our code is evaluated and executed
* 
* the default execution context is always the gloabl context
* in this context, all code(variables and FUNCTIONS) that is not inside a function is executed
* or think it as an object
* it associated with the global object
* which of the broswer, is the window object
* so every thing that we declare in the global context,
* automatically gets attached to the window object,
* which is lastName === window.lastName
* it's like lastName is a property of window object
* 
* 
* each time we call a function,
* it get its own brand new execution context
*/

/****************************************************
 * 038 Execution Contexts in Detail Creation and Execution Phases and Hoisting
 */

/**
 * execution context object
 * this object has three properties
 * 
 * the Variable Object, 
 * which will contain function arguments, 
 * inner variable declarations, 
 *      (a property is created in the VO for each variable, 
 *       and set to undefined, it will only be define in the execution phase)
 * function DECLARATIONS, 
 *      (a property is created in the VO for each function, poninting to the function
 *       only for function declarations, not function expressions)
 * 
 * Scope Chain,
 * which contains current variable objects,
 * the variable object of all its parents,
 * 
 * This variable
 * 
 * when function called
 * create a new context on the top of execution stack
 * this has 2 phases
 * 
 * the creation phase 
 * creation of variable object
 * creation of scope chain 
 * This variable is determined and set
 * 
 * the execution phase
 * the code of the function that generated the 
 * current execution phase is ran line by line
 * 
 * hoisting 变量提升
 * functions and variables are hoisted in JS
 * which means they are avaibale before the execution phase actually starts
 */

/****************************************************
* 040 Scoping and the Scope Chain
*/

/**
 * the only way to define a new scope is create a new function
 * 
 * lexical scoping: a function that is written in another function,
 *                  get access to the scope of the outter function/ parent function
 *                  it also get access to the variables and functions that the parent function defines
 * 
 * scope chain
 * 
 * upper context will never ever have access to the child variable,
 * unless the variable returned from the function
 * 
 * local variables are not defined in parent scope
 * 
 * in creation phase of execution context object
 * each execution context object will get exact scope chain,
 * which is basically all the variable objects that an executon object has access to
 */


/****************************************************
* 041 The this Keyword
*/

/**
 * in the last creation phase of execution context, determine and set This variable
 * each execution context has a This variable
 * it stores in the execution context object
 * 
 * where does it points?
 * in regular funciton call, This points to the global object, which is the window object in browser 
 * in method call, it points to the object that is calling the method
 * 
 * This key word is not assigned a value until a function where it is defined is actually called 
 * 
 */

/****************************************************
* 045 The DOM and DOM Manipulation
*/

/**
 * the HTML web content page is store in the DOM
 * DOM is fully a OO representation
 * for each of the HTML element, there is an object in the DOM
 * Document Object Model
 */

/****************************************************
* 045 The DOM and DOM Manipulation
*/


/****************************************************
* 060 Everything Is an Object Inheritance and the Prototype Chain
*/

/**
 * Primitives and Objects
 * 
 * Primitives are: String, Boolean, Number, Null, Undefined 
 * 
 * Objects are all things else: Date, Array, Function, Object, etc
 * 
 * 
 * The Object Oriented Paraigm
 * OOP
 * object interacting with one another through methods and properties
 * used to store data, structure applications into modules and keep code clean
 *  
 * 
 * 
 * Constructors/prototype and Instance in JS
 * 
 * Inheritance in general 
 * JS is a prototype based language, 
 * which means that inheritance works by using something called prototypes
 * In practice, this means each and every JS object has a prototype property
 * whic makes inheritance possible in JS 
 * inheritance is made possible through the prototype property that every object has
 *  
 * How does inheritance actually work?
 * Person object is the constructor 
 * John is an instance
 * if we want to John to inherit a method or a property from person object
 * we have to add that method or property to the Person's prototype property
 * the prototype property of an object is where we put properties or methods
 * that we want other objects to inherit 
 * IMPORTANT: the person's prototype IS NOT the prototype of the PERSON itself
 * but of all instances that are created through the Person blueprint, like John,
 * so in other words, the person's prototype property is the prototype of John 
 * the Person object itself is an instance of even bigger constructor
 * which is the Object object 
 * each and every object is an instance of object constructor
 * which has a bunch of method in its prototype property
 * the Person object inherit these methods and can call them
 * 
 * Prototype chain
 * when we try to access a certain method or property on an object/ instance
 * JS will first try to find the method or property on that exact object/ instance
 * but if it cannot find it, it will look in the object prototype,
 * which is the prototype property of its parent, (the Person prototype property)
 * so it moves up in the prototype chain,
 * if it is still not there, it continues until there's no more prototype to look at,
 * which is null,
 * null is the only one that does not have a prototype
 * and is therefore the final link of the prototype chain
 * and in this case, undefined is returned
 * 
 * 
 * SUMMARY
 * every JS object has a prototype property, which makes inheritance possible
 * 
 * the prototype property of an object is 
 * where we put methods and properties that we want other objects to inherit
 * 
 * the constructor's prototype property is NOT the prototype of the constructor itself,
 * it's the prototype of all instances that are created through it
 * 
 * when a certain property or method is called, 
 * the search starts in the object itself, 
 * and if it cannot be found, the search moves on to the object's prototype,
 * this continues until the methodis found: prototype chain.
 * 
 */


/****************************************************
* 061 Creating Objects Function Constructors
*/

/**
 * Function Constructor
 * 
 * one of the ways write the blueprint
 * 
 * var Person = function(name, yearOfBirth, job){
 * 
 * }
 * 
 * 
 * we create a function, called Person
 * 
 * var john = new Person('John', 1990, 'Teacher');
 * this john object is an instance of Person object
 * 
 * the new operator
 * create a brand new empty object
 * 
 * then the constructor function, Person() is called
 * 
 * then the This variable in the constructor points to 
 * the empty object that was created in the begining by the new operator
 * 
 * what the new operator does is to point This variable to 
 * the new empty object, not the global object
 * 
 * This variabe is equal to an object
 * 
 * Person.prototype.calculateAge = function(){};
 * 
 */

/****************************************************
* 062 The Prototype Chain in the Console
*/

// var Person = function (firstName, age, job) {
//   this.firstName = firstName;
//   this.age = age;
//   this.job = job;
// }

// Person.prototype.lastName = 'Wang';
// Person.prototype.getFullName = function(){
//   console.log(this.firstName + ' '+ this.lastName);
// }

// var Victor = new Person("Victor", 28, 'Salesforce Developer');
// //Victor.getFullName();

// Victor.yearOfBirth = 1991;

// console.log(console.log('Hi'));
// console.log('Hiii');

/****************************************************
* 065 First Class Functions Passing Functions as Arguments
*/

/**
 * functions are also objects
 * 
 * a function is an instance of Object type
 * a function behaves like any other object
 * we can store function in a variable
 * we can pass a function as an argument to another function
 * we can return a function from a function
 * 
 * First Class Functions
 */

/****************************************************
* 067 Immediately Invoked Function Expressions IIFE
*/

/**
 * just for data privacy
 * create a new scope
 * hidden from outside scope
 */

//  (function () {
//      var score = Math.random() * 10;
//      console.log(score >= 5);
//    })();

/****************************************************
* 068 Closures 闭包
*/

/**
 * an inner function has always access to the variables and parameters 
 * of its outer function, even after the outer function has returned 
 */

// function interviewQuestion(Job){
//   var str = 'Talk about your Job as a ';
//   return function myFunc(name){
//     if(Job === 'Teacher') {
//       console.log(name + ', ' + str + Job);
//     } else {
//       console.log(name + ', ' + str + 'Freelancer');
//     }
//   }
// }

// var myFunction = interviewQuestion('Teacher');

// console.log(myFunction);

/****************************************************
* 069 Bind Call and Apply 
*/

/**
 * function is an object
 * so function also has some special method
 * which inherit from function constructor object
 * 
 * call()
 * bind()
 * apply()
 * 
 * allow us to call a function and set the This variable manually
 * 
 * method borrowing
 * call(This variable, [...],[...],[...]);
 * 
 * apply(This variable, [parameter array]);
 * 
 * bind(This variable);
 * it generates a copy of the function
 * 
 */