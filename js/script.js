let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber === 1) {
  computerMove = 'kamień';
} else if (randomNumber === 2) {
  computerMove = 'nożyce';
} else if (randomNumber === 3) {
  computerMove = 'papier';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'nożyce';
} else if (playerInput == '3') {
  playerMove = 'papier';
} else if (playerInput >== 4) {
  printMessage('Liczby tylko od 1-3')
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove === 'kamień' && playerMove === 'papier') {
  printMessage('Ty wygrywasz!')
} else if (computerMove === 'papier' && playerMove === 'nożyce') {
  printMessage('Ty wygrywasz!')
} else if (computerMove === 'nożyce' && playerMove === 'kamień') {
  printMessage('Ty wygrywasz!')
} else if (computerMove === 'papier' && playerMove === 'kamień') {
  printMessage('Komputer wygrywa!')
} else if (computerMove === 'nożyce' && playerMove === 'papier') {
  printMessage('Komputer wygrywa!')
} else if (ComputerMove === 'kamień' && playerMove === 'nożyce') {
  printMessage('Komputer wygrywa!')
}

if (computerMove === playerMove) {
  printMessage('REMIS !!')
}