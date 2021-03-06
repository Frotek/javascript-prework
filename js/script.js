{
function playGame(playerInput) {
  clearMessages();

  const getMoveName = function(argMoveId) {
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

  const playerMove = getMoveName(playerInput);

  //const playerMove = getMoveName(Number(prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier')));

  console.log('Gracz wpisał: ' + playerMove);

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  printMessage('Twój ruch to: ' + playerMove);

  const displayResult = function(argComputerMove, argPlayerMove) {

    console.log('moves:', argComputerMove, argPlayerMove);

    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove === 'kamień' && argPlayerMove === 'papier') {
      printMessage('Ty wygrywasz');
    } else if (argComputerMove === 'papier' && argPlayerMove === 'nożyce') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove === 'nożyce' && argPlayerMove === 'kamień') {
      printMessage('Ty wygrywasz!');
    } else if (argComputerMove === argPlayerMove) {
      printMessage('REMIS !!');
    } else {
      printMessage('Przegrywasz!');
    }
  }
  displayResult(computerMove, playerMove);
}
document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(2);
});

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(3);
});
}