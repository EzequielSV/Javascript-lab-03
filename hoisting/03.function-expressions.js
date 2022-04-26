// Function expression are a way to attach functions to variables

console.log(rectArea)
rectArea(3,4) // rectArea is not a function

var rectArea = function(width, height){
    return width * height
}

// FE are hoisted as the variable the are, without definition