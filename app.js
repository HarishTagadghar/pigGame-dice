let score, roundScore, active, gameplaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gameplaying) {
        document.querySelector('.dice').style.display = 'block';

        let dice = Math.floor((Math.random() * 6) + 1);
        document.querySelector('.dice').src = `dice-${dice}.png`

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + active).innerHTML = roundScore;
        } else {
            nextplaye()
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) {
        score[active] += roundScore;
        document.querySelector('#score-' + active).innerHTML = score[active]

        if (score[active] >= 100) {

            document.querySelector('#name-' + active).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + active + '-panel').classList.add('winner')
            document.querySelector('.player-' + active + '-panel').classList.remove('active')

            gameplaying = false
        }
        nextplaye();
    }
})

function nextplaye() {
    active === 0 ? active = 1 : active = 0;
    roundScore = 0
    document.querySelector('#current-0').innerHTML = 0;
    document.querySelector('#current-1').innerHTML = 0;


    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active')

}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    score = [0, 0];
    roundScore = 0;
    active = 0;

    document.querySelector('.dice').style.display = 'none';

    gameplaying = true;

    document.querySelector('#score-0').innerHTML = 0;
    document.querySelector('#score-1').innerHTML = 0;
    document.querySelector('#current-0').innerHTML = 0;
    document.querySelector('#current-1').innerHTML = 0;
    document.querySelector('#name-0').innerHTML = 'Player 1';
    document.querySelector('#name-1').innerHTML = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}