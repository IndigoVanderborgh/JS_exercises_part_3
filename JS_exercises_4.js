// now isntead of just one parameter, lets use two parameters this time
// you can have as many parameters as you want in the function
// however, it needs to correlate, if there are to parameters, there must be 
// two calls for invoking it.

// below is when there are 2 parameters but one invocations:

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name) {
//     welcomeEl.textContent = greeting + name + " 👋"    
// }

// greetUser("Howdy") --> will return "howdy, undefined"

// -------------------------------------------------------------- 
// now with two parameters:

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name) {
//     welcomeEl.textContent = greeting + ", " + name + " 👋"
// }

// greetUser("Howdy", "James") --> will return "Howdy, James 👋"

// -------------------------------------------------------------- 
// this is still clunky, so we really need to refactor it with template literals.

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(greeting, name) {
//     // Rewrite the expression using template literals
//     welcomeEl.textContent = `${greeting}, ${name} 👋`
// }

// greetUser("Howdy", "James")

// will return with "Howdy, James 👋"

// --------------------------------------------------------------

// lets add a third parameter now:

const welcomeEl = document.getElementById("welcome-el")

// Add the ability to choose the emoji as well!

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emo}`
}

greetUser("Howdy", "James")