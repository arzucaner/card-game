// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one arruy
// Log out at least two of the keys using the dot notation

let castle = {
    title: "Gorgeous Bridge",
    price: 250,
    isSuperHost: true,
    images: ["img/bridge.png", "img/bridge.png"]
}

console.log(bridge.price)
console.log(bridge.isSuperHost)

let person = {
    name: "Lily",
    age: 30,
    country: "UK"    
}

function logData() {
    console.log(person.name + " is " + person.age + "years old and lives in" + person.country)
}

logData()

let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 old          -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
   console.log ("free")
} else if (age < 18) {
    console.log("child discount")
} else if (age < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

/* Use a for loop to log the following ti the console:

The 5 largest countries in the the world:
-China
-India
-Unided States
-Indinesia
-Pakistan

*/

for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

