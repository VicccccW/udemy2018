/**
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

/**
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



/**
 * 038 Execution Contexts in Detail Creation and Execution Phases and Hoisting
 */

/**
 * execution context object
 * this object has three properties
 * the Variable Object, 
 * which will contain function arguments, 
 * inner variable declarations, 
 * function declarations
 * Scope Chain,
 * which contains current variable objects,
 * the variable object of all its parents,
 * This variable
 * 
 * when function called
 * creaet a new context
 * 
 * hoisting 变量提升
 * 
 */