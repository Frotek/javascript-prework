const playerMove = getMoveName(Number(prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier'))),
  argPlayerMove = getMoveName(playerMove);

console.log('Gracz wpisał: ' + playerMove);

const randomNumber = Math.floor(Math.random() * 3 + 1),
  argComputerMove = getMoveName(randomNumber);

console.log('Wylosowana liczba to: ' + randomNumber);

const computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

printMessage('Twój ruch to: ' + playerMove);

function getMoveName(argMoveId) {
  if (argMoveId === 1) {
    return 'kamień';
  } 
  if (argMoveId === 2) {
    return 'nożyce';
  }
  if (argMoveId === 3) {
    return 'papier';
  } else if (argMoveId >= 4) (
    printMessage('Nie znam ruchu o id ' + argMoveId + '.'));
    return 'nieznany ruch';
}

const displayResult = function displayResult(argComputerMove, argPlayerMove) {

  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
    return 'Ty wygrywasz!';
  } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
    return 'Ty wygrywasz!';
  } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
    return 'Ty wygrywasz!';
  } else if (argComputerMove === argPlayerMove) {
    return 'REMIS !!';
  } else {
    return 'Przegrywasz!';
  }
}