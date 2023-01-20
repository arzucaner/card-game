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

let cards = [7,4]
cards.push(6)

//console.log(cards)

//push the newMassage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",
    "I'm good, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages)

//How can you remove the last item in an array? Try to google it!
messages.pop()
console.log(messages)