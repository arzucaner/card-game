let firstCard = 10
let secondCard = 7
let sum = firstCard = secondCard + 6 // 23

if(sum < 21) {
   console.log("Do you want to draw a new card? ")
} else if (sum === 21) {
    console.log("Wohoo! You've got Cardgames!")
} else {
    console.log ("You're out of the game!")
}

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

 if (sum <= 20) {
     console.log("Do you want to draw a new card?")
 } else if (sum === 21) {
     console.log("Wohoo! You've got Card")
 } else {
   console.log("You're out of the game!")
 }
 
 