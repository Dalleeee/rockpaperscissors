//Sets initial score//
let myscore = 0;
let cpuscore = 0;

//Computers pick//
function computerplay() {
  let pick = Math.floor((Math.random() * 3) + 1);
  switch (pick) {
    case 1: return "Rock";
    case 2: return "Paper";
    case 3: return "Scissors";
    }
  }

//Removes use of buttons after game is over//
function removebutton(){
  document.querySelector("#Rock").disabled = true;
  document.querySelector("#Paper").disabled = true;
  document.querySelector("#Scissors").disabled = true;
}

//Restarts game//
function restart() {
  document.querySelector("#restart").addEventListener('click', () => {
    document.location.reload()
  })
}

//Checks if anyone has won the game yet//
function checkwinner(){
  if (cpuscore == 3){
    document.querySelector("#finalscore").textContent = "Oof, do you want to try again?"
    removebutton()
    restart()
    }
  else if (myscore == 3){
    document.querySelector("#finalscore").textContent = "You won the game!"
    removebutton()
    restart()
    }
  else if (myscore > cpuscore) {
    document.querySelector("#finalscore").textContent = "Keep it up!"
  }
  else if (cpuscore > myscore) {
    document.querySelector("#finalscore").textContent = "Pick up the pace"
  }
}

//Plays one round//
function game1(playerselection) {
  var computerselection = computerplay()

  if (playerselection == "Rock" && computerselection == "Scisssors" || playerselection == "Paper" && computerselection == "Rock" ||
        playerselection == "Scissors" && computerselection == "Paper") {
          console.log ("Win!")
          myscore += 1;
          checkwinner();
          document.querySelector("#userscore").textContent = myscore
          document.querySelector("#cpuscore").textContent = cpuscore;
        }
  else if (computerselection == "Rock" && playerselection == "Scissors" || computerselection == "Paper" && playerselection == "Rock" || computerselection == "Scissors" && playerselection == "Paper") {
            console.log ("Lose")
            cpuscore += 1;
            checkwinner();
            document.querySelector("#userscore").textContent = myscore
            document.querySelector("#cpuscore").textContent = cpuscore;
              }
  else if (computerselection == playerselection) {
    console.log("Draw")
    document.querySelector("#finalscore").textContent = "Redraw"
  }
      }

//Buttons using DOM//
document.querySelector("#Rock").addEventListener('click', () => {
    game1("Rock")
})

document.querySelector("#Paper").addEventListener('click', () => {
    game1("Paper")
})

document.querySelector("#Scissors").addEventListener('click', () => {
    game1("Scissors")
})

