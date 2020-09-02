alert(
  "Khabib Time! \n Welcome to the UFC Lightweight Championship fight! \n You're in the last round against the champion, Khabib Nurmagomadov. You made it to the 5th round against the champ, but you're exhausted. You must make a few crucial decisions in this last round."
)

const gameOver = false
const gameCrash = false
const start = confirm("Click OK if you're willing to continue!")
if (start == false) {
  alert("Come get smashed next time!")
  gameCrash = true
} else {
  alert("The round starts and the champ walks you down...")
}

const outcomeOne =
  "Outcome 1: BOTH SHOTS CONNECTED AND ITS A DOUBLE KO! \n Match ended in a draw."
const outcomeTwo =
  "Outcome 2: He grabbed your leg and threw you down. He ended up on your back on you just got choked out! \n GAME OVER!"
const outcomeThree =
  "Outcome 3: Now hes on smashing you for the next 4 minutes and 50 seconds. \n GAME OVER!"

const levelOne = prompt(
  " You decide to... \n Option 1: Keep the fight standing. \n Option 2: Shoot for a takedown."
)

if (levelOne == "1") {
  alert("Good idea! What should we do next?")
} else if (levelOne == "2") {
  alert(
    "For some reason, you thought it was a good idea to shoot on Khabib. \n"
  )
  alert(outcomeThree)
  gameOver = true
} else {
  alert("You crashed the game!!!")
  gameCrash = true
}

let levelTwo = prompt(
  "Option 3: Start working your jabs. \n Option 4: Look for a head kick!"
)

if (levelTwo == "3") {
  alert("Great plan but he swings a heavy Overhand Right!")
} else if (levelTwo == "4") {
  alert(outcomeTwo)
  gameOver = true
} else {
  alert("You crashed the game!!!")
  gameOver = true
}

let levelThree = prompt(
  "Option 5: Put your head down and throw a Overhand Right of your own! \n Option 6: Lean back a bit and throw a heavy Uppercut!"
)

if (levelThree == "5") {
  alert(
    "It was a fake Overhand. While you weren't looking, he shot for a takedown."
  )
  alert()
} else if (levelThree == "6") {
  alert(outcomeOne)
  gameOver = true
} else {
  alert("You crashed the game!!!")
  gameOver = true
}
