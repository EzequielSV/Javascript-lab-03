// This is what a programmer would write
console.log(someVar)
var someVar = "algo" 

// But Js interpreter hoist var variables to the top of their scope
var someVar
console.log(someVar)// undefined
var someVar = "algo"