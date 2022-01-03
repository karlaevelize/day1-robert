//Boleans: true or false
//If & Else Statement: if true, do this, else, do that

//Operators
// Equality operators 
// - === (strict equality, it compares the datatype and the value)
// - == (compares only the value)

//I have a robot and I want the robot to greet my clients
//If the store is open, I want the robot to say "Welcome"
//If the store if close, I want the robot to say "We are closed"

const open = true

if (open === true) {
  console.log("Welcome")
} else {
  console.log("We are closed")
}

// Logical Operators
// - && (it resolves to true if both statements are true)
// - || (it resolves to true, if one of the statements is true)

// && case
if (3 + 3 === 6 && 1 + 1 === 2) { //both conditions are true, so it's equal
  console.log("it's equal")
} else {
  console.log("it's not equal")
}

// || case
const weather = "sunny"

if( weather === "rainy" || weather === "cold"){
  console.log("Wear a jacket")
} else {
  console.log("You don't need a jacket")
}

// Comparison Operatos
// - > (greater than) >= (greater or equal)
// - < (smaller than) <= (smaller or equal)

const customerAge = 17
const drinkingAge = 18

if(customerAge >= 18){
  console.log("you can sell alcohol to this person")
} else {
  console.log("this person is not allowed to buy alcohol")
}


//Ternary Operator: shorter way of writing it



