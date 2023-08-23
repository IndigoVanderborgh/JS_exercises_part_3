// we're going to learn about truthy and falsy values, using a slot machine example

const credits = 0 // initial credits

if (credits > 0) {
    console.log("Let's play 🎰") // allowed to play credits higher than 0
} else {
    console.log("Sorry, you have no credits 😭") // no credit = no play
}

// truthy
// falsy