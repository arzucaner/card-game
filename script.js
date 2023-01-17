//console.log(4 === 3)  //false
//console.log(5 > 2)    //true
//console.log(12 > 12)  //false
//console.log(3 < 0)    //false
//console.log(3 >= 3)   //true
//console.log(11 <= 11) //true
//console.log(3 <= 2)   //false

let firstCard = 10
let secondCard = 7
let sum = firstCard = secondCard
let hasBlackJack = false
Create a variable called isAlive and assign it to true
let isAlive = true

// Declare a variable called message and assign it's value to an empty string
let message = ""

//Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame() {
   if (sum <= 20) {
   message = "Do you want to draw a new card?"
   } else if (sum === 21) {
   message = "Wohoo! You've got Card"
   hasCard = true
   } else {
   message = "You're out of the game!"
   isAlive = false
   }
   //console.log(message)
   //Display the message in the messageEl using messageEL.textContent
   messageEl.textContent = message
}


//if(sum < 21) {
  // console.log("Do you want to draw a new card? ")
//} else if (sum === 21) {
  //  console.log("Wohoo! You've got Cardgames!")
  //  hasCard = true
//} else {
   // console.log ("You're out of the game!")
  //  isAlive = false
//}

//Log it out to check that you're doing it right
//console.log(isAlive)

// Check if the person is old enough to enter the nightclub (21)
 // Log a suitable message to the console in both cases  

let age = 22

 // if less than 21 -> "You can not enter the club!"
 // else            -> "Welcome!"

 if (age <= 20) {
    console.log("You can not enter the club!")
 } else {
    console.log("Welcome!")
 }

 //Check if the person is elegible for a birthday card from the Lady! (100)

let age = 100

 // if less than 100     -> "Not elegible"
 // else if exactly 100  -> "Here is your birthday card from the King!"
 // else                 -> "Not elegible, you have already gotten one"

 if (age < 100) {
    console.log("Not elegible")
 } else if (age=== 100) {
    console.log("Here is your birthday card from the Lady!")
 } else {
    console.log("Not elegible, you have already gotton one")
 }

 // Write the conditional according to this rules:

 // if less than or equal to 20 -> "Do you want to draw a new card?"
 //else if exactly 21 -> "Wohoo! You've got Card!"
 //else -> "You're out of the game!"

 //if (sum <= 20) {
     //console.log("Do you want to draw a new card?")
 //} else if (sum === 21) {
    // console.log("Wohoo! You've got Card")
   //  hasCard = true
 //} else {
 //  console.log("You're out of the game!")
 //}
 
 // CASH OUT!
 console.log(hasCard)