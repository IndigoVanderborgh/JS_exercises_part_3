// we're going to learn about truthy and falsy values, using a slot machine example

const credits = 0 // initial credits

// if (credits > 0) {
//     console.log("Let's play 🎰") // allowed to play credits higher than 0
// } else {
//     console.log("Sorry, you have no credits 😭") // no credit = no play
// }

// truthy
// falsy

// if we replaced the credits to string "yolo" it still runs through.
if (true) {
    console.log("Let's play 🎰") // allowed to play credits higher than 0
} else {
    console.log("Sorry, you have no credits 😭") // no credit = no play
}

// all we need to know is the falsy statements:
// false
// 0
// ""
// null -> emptiness
// undefined -> how JS signals emptiness
// NaN
// 
// If we are setting up a livestreaming app we would use:

// let currentViewers = null

// currentViewers = ["jane", ""nick"] // this will only fire if set to an array

// but if we lose the viewers

// cuurentViewers = null

// if (currentViewers) { --> will be false now
//  notify the live streamer
// console.log("we have viewers")
// }


// basically the default is truth unless its stated false via the former false commands