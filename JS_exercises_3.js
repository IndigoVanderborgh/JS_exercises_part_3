// exercise JS: writing function parameters.

// by introducing parameters in the function it is expecting us to use that parameter within it
// for example:

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser() {
//     welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋"    
// }

// greetUser()

// we'll enter in name in the function greetUser() parameter on line 8:

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(name) {
//     welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋"    
// }

// greetUser()

// we are now expected to use name in the function. see line 29

// // const welcomeEl = document.getElementById("welcome-el")

// function greetUser() {
//     welcomeEl.textContent = "Welcome back, " + name + " 👋"    
// }

// greetUser()

// it will return errors, because we need to pass it on in the greetUser() as well.

// const welcomeEl = document.getElementById("welcome-el")

// function greetUser(name) {
//     welcomeEl.textContent = "Welcome back, " + name + " 👋"    
// }

// greetUser("Adam") // we pass in a value when its invoked, that value
// // becomes the name value in the functions, and changed the name to adam on line 39

// lets try another exercise out:

// const welcomeEl = document.getElementById("welcome-el")

// // Give the function a parameter, greeting, that replaces "Welcome back"
// function greetUser() {
//     welcomeEl.textContent = "Welcome back, Per Harald Borgen 👋"    
// }

// -----------------------------------------------------------------
// answer

greetUser()

const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back" with parameters
function greetUser(greeting) {
    welcomeEl.textContent = greeting + ", Per Harald Borgen 👋"    
}

greetUser("Welcome back")