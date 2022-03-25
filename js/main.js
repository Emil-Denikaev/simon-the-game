"use strict"

let correct = [];

let users = [];

function blue() {
  playSound('do');
  usersAnswer(1);
}
function red() { 
  playSound('re');
  usersAnswer(2);
}

function green() {
  playSound('mi');
  usersAnswer(3);
}

function yellow() {
  playSound('fa');
  usersAnswer(4);
}

function level(time) {

}

function startGame() {
  randomNumber()
}

function playSound(tile) {
  var audio = new Audio(`sounds/${tile}.mp3`);
  audio.play();	
}

function randomNumber() {
  return correctAnswer(Math.floor((Math.random()*4)+1));
}

function correctAnswer(answer) {
  
  correct.push(answer);
  console.log(correct);
}

function usersAnswer(answer) {
  
  users.push(answer);
  console.log(users);
}


