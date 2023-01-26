console.log(4 === 3)  //false
console.log(5 > 2)    //true
console.log(12 > 12)  //false
console.log(3 < 0)    //false
console.log(3 >= 3)   //true
console.log(11 <= 11) //true
console.log(3 <= 2)   //false

let firstCard = 10
let secondCard = 7
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard = secondCard
let hasBlackJack = false


//Create a variable called isAlive and assign it to true
let isAlive = true

//let sumEl = document.getElementById(".sum-el")
let sumEl = document.querySelector(".sum-el")

// Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

let playername = "Arzu"
let playerChips = 150

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": $" + playerChips

//Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")

// Make this function return a random number between 1 and 13
function getRandomCard() {
   // if 1     -> return 11
   // if 11-13 -> return 10
   let randomNumer = Math.floor( Math.random()*13 + 1 //1-13
   if (randomNumer > 10) {
      return 10
   } else if (randomNumer === 1) {
      return 11
   } else {
      return randomNumer
   }
}

// 1.Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    return 5
}

function startGame() {
   renderGame()
}

console.log(messageEl)

function randerGame() {
   // Create a for loop that renders out all the cards instead of just two
   for (let i = 0; i <cards.length; i++) {
      cardsEl.textContent += cards[i]
   }

   // Render the cards on the page using this format -> "Cards: 10 4"
   cardsEl.textContent = "Cards: " + Cards[0] + " " + Cards[1]
   sumEl.textContent = "Sum: " + sum
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

function newCard() {
   let card = 6
   sum += card
   renderGame()
}


if(sum < 21) {
  console.log("Do you want to draw a new card? ")
} else if (sum === 21) {
    console.log("Wohoo! You've got Cardgames!")
    hasCard = true
} else {
    console.log ("You're out of the game!")
    isAlive = false
}

//Log it out to check that you're doing it right
console.log(isAlive)

// Check if the person is old enough to enter the nightclub (21)
 // Log a suitable message to the console in both cases  

let age = 22

 //if less than 21 -> "You can not enter the club!"
 // else            -> "Welcome!"

 if (age <= 20) {
    console.log("You can not enter the club!")
 } else {
    console.log("Welcome!")
 }

 //Check if the person is elegible for a birthday card from the Lady! (100)

//let age = 100

 //if less than 100     -> "Not elegible"
 //else if exactly 100  -> "Here is your birthday card from the King!"
 //else                 -> "Not elegible, you have already gotten one"

 if (age < 100) {
    console.log("Not elegible")
 } else if (age=== 100) {
    console.log("Here is your birthday card from the Lady!")
 } else {
    console.log("Not elegible, you have already gotton one")
 }

 // Write the conditional according to this rules:

 //if less than or equal to 20 -> "Do you want to draw a new card?"
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

 function newCard() {
   console.log("Drawing a new card from the deck!")

   // 1.Create a card variable, and hard code it's value to a number (2-11)
   let card = 6
   // Add the new card to the sum variable
   sum += card
   // Call startGame()
   startGame()
 }

function newCard() {
   // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
   if (isAlive === true && hasBlackJack === false) {
   let card = getRandomCard()
      sum += card 
      card.push(card)
      renderGame()
   }
}