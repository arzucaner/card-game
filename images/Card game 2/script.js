// Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Amazon clone",        // 0
    "Here's the code for my project",   // 1
    "I've just relaunched my portfolio" // 2
]

// console.log( featuredPosts[2] )

console.log( featuredPosts[1])
// Create an arry that lists your i.e experience, education, licenses, skills or similar
// The items of the array should be strings

let experience = ["Junior Frontend Developer"]

console.log(experience[1])
console.log( featuredPosts.length )

//let cards = [7,4]
//cards.push(6)

//console.log(cards)

//push the newMassage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",
    "I'm good, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

//How can you remove the last item in an array? Try to google it!
messages.pop()
console.log(messages)

// START   FINISH   STEP SIZE
for (let count = 1; count < 11; count +=1) {

    console.log(count)
}

for (let i = 0; i < 6; i += 1) {
    console.log(i)
}

for (let i = 10; i < 101; i += 10){
    console.log(i)
}

let cards = [7, 3, 9]

for (let i = ); i < cards.length; i++) {

}

let sentence = ["Hello", "my", "name", "is", "Arzu"]
let greetingEl = document.getElementById("greeting-el")

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent =+ sentence[i] + " "
}

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    }  else if (player2Time < player1Time) {
        return player2Time
    }  else {
        return player1Time
    }
}

function getTotalRaceTime() {
    return player1Time + player2Time
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)

let randomNumber = Math.random()

console.log(randomNumber)

/*

What does Math.random() do?

Your answer: it generates a random number between 0 and 1 (not inclusive of 1)