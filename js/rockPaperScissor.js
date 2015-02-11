function determineCpuChoice() {
    'use strict';
    var choices = [];
    choices[0] = document.getElementById('rock');
    choices[1] = document.getElementById('scissors');
    choices[2] = document.getElementById('paper');
    return choices[(Math.floor(Math.random() * choices.length) + 1) - 1];
}

function cpuWins() {
    'use strict';
    alert('YOU LOST!!');
}

function playerWins() {
    'use strict';
    alert('YOU WIN!!');
}

function reset() {
    'use strict';
    var imgPlayer = document.getElementById('player'),
        imgCpu = document.getElementById('cpu');
    imgPlayer.src = '../bilder/rockPaperScissors/player.jpg';
    imgCpu.src = '../bilder/rockPaperScissors/cpu.jpg';
}

function determineWinningId(firstId, secondId) {
    'use strict';
    if ((firstId === 'rock' && secondId === 'scissors') || (secondId === 'rock' && firstId === 'scissors')) {
        return 'rock';
    } else if ((firstId === 'scissors' && secondId === 'paper') || (secondId === 'scissors' && firstId === 'paper')) {
        return 'scissors';
    } else if ((firstId === 'paper' && secondId === 'rock') || (secondId === 'paper' && firstId === 'rock')) {
        return 'paper';
    }
}

function analyzeOutcome(playerChoice, cpuChoice) {
    'use strict';
    var idCpuChoice = cpuChoice.getAttribute('id'),
        idPlayerChoice = playerChoice.getAttribute('id'),
        winningId = determineWinningId(idCpuChoice, idPlayerChoice);
    if (idCpuChoice === winningId) {
        cpuWins();
    } else if (idPlayerChoice === winningId) {
        playerWins();
    }
    reset();
}

function play() {
    var imgPlayer = document.getElementById('player'),
        imgCpu = document.getElementById('cpu'),
        cpuChoice = determineCpuChoice();
    imgPlayer.src = this.src;
    imgCpu.src = cpuChoice.src;
    analyzeOutcome(this, cpuChoice);
}

function userChoice() {
    'use strict';
    var imgRock = document.getElementById('rock'),
        imgPaper = document.getElementById('paper'),
        imgScissors = document.getElementById('scissors');
	imgRock.onclick = play;
    imgPaper.onclick = play;
    imgScissors.onclick = play;
}

function init() {
    'use strict';
    userChoice();
}

window.onload = init;
