//1. What are functions?
// - It's a block of a code, pieces of code that belong together
// - A set of instructions, a bit like a recipe

//2. Why do we use functions?
// - Perform specific tasks
// - Prevent repeating ourselves

//3. How to declare a function

const name = "Karla" //this is in global scope

function sayHello(){
  const test = "only inside the function" //this is in function local scope
  console.log(test, "hello")
}

// console.log(test) // I won't get it, it only existis inside the function

//4. How to call a function
//if you don't call the function, it won't be executed

sayHello()

//5. Return & console.log (output in the terminal) in a function

function sayHi(){
  console.log("Hi from console.log") //only prints in the terminal
  return "Hi from return" //you can save this value
  console.log("We will never see this") //functions ends on return
}

const myReturn = sayHi()
console.log(myReturn)

//6. Passing parameters to a functions

function multiply(number1, number2){ 
  return number1 * number2
}

const myResult = multiply(3, 5) //passing arguments 3 and 5
console.log(myResult)

function allowedToDrink(age){
  if(age > 17){
    return "You can drink"
  } else {
    return "You can not drink"
  }
}

// const canIDrink = allowedToDrink(17)
// console.log(canIDrink)

function greetSomeone(name){
  return `Hello, ${name}`
}

const greetingSomeone = greetSomeone("Karla")
console.log(greetingSomeone)

//7. Arrow functions

const arrowSayHi = () => {
  console.log("Hi from console.log") 
  return "Hi from return" 
  console.log("We will never see this") 
}

const arrowMultiply = (number1, number2) => { 
  return number1 * number2
}

const arrowAllowedToDrink = (age) => {
  if(age > 17){
    return "You can drink"
  } else {
    return "You can not drink"
  }
}

const arrowGreetSomeone = (name) => `Hello, ${name}` 

//8. What is scope?
// - global scope: everything on the file itself, not inside a specific block
// - function scope: variables declared inside the function, only exist inside the function