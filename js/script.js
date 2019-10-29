function playGame(playerInput) {
  clearMessages();

  const playerMove = getMoveName(playerInput);

  //const playerMove = getMoveName(Number(prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier')));

  console.log('Gracz wpisał: ' + playerMove);

  const randomNumber = Math.floor(Math.random() * 3 + 1);

  argComputerMove = getMoveName(randomNumber);
  argPlayerMove = getMoveName(playerInput);

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

  function displayResult(argComputerMove, argPlayerMove) {

    console.log('moves:', computerMove, playerMove);

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
  displayResult(argComputerMove, argPlayerMove);
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