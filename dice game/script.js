"use strict";

// select

let scorep1 = document.querySelector("#score--0");
let currentscorep1 = document.querySelector("#current--0");
let scorep2 = document.getElementById("score--1");
let currentscorep2 = document.querySelector("#current--1");

let dice = document.querySelector(".dice");
dice.classList.add("hidden");

// btn
let btnNewGame = document.querySelector(".btn--new");
let btnnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

scorep1.textContent = 0;
scorep2.textContent = 0;
let currentscore = 0;
let activeplayer = 0;

// dice roll
btnnRoll.addEventListener("click", function () {
  // randomdice
  let randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(randomDiceNumber);

  //   dice display
  dice.classList.remove("hidden");
  dice.src = `dice-${randomDiceNumber}.png`;

  // dice 1mea switch player
  if (randomDiceNumber !== 1) {
    currentscore = currentscore + randomDiceNumber;
    document.querySelector(`#current--${activeplayer}`).textContent =
      currentscore;
  } else {
    currentscore = 0;
    document.querySelector(`#current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 0 : 1;
  }
});
