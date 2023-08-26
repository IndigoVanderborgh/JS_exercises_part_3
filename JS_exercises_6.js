// Arguments versus parameters difference


// paramters are within the function.

//                  (parameters)
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

// arguements are outside the function. 

//            (arguments)
let hi = "howdy"
greetUser("Howdy", "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)

// time for a challenge: below discern if it is an argument (A) or Parameter (P)?

// What are greeting and name? (P)
// What are "Howdy" and "James"? (A)
// What are num1 and num2? (P)
// What are 3 and 4? (A)

// https://typealias.com/guides/parameters-arguments/