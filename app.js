let score, roundScore, active;
score = [0, 0];
roundScore = 0;
active = 0;

document.querySelector('#score-0').innerHTML = 0;
document.querySelector('#score-1').innerHTML = 0;
document.querySelector('#current-0').innerHTML = 0;
document.querySelector('#current-1').innerHTML = 0;

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {

    document.querySelector('.dice').style.display = 'block';

    let dice = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.dice').src = `dice-${dice}.png`

    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + active).innerHTML = roundScore;
    } else {
        nextplaye()
        } 




});
document.querySelector('.btn-hold').addEventListener('click',function(){
    score[active] += roundScore; 
    document.querySelector('#score-'+ active).innerHTML = score[active]


if(score[active] >= 100){
    document.querySelector('#name-' + active).textContent = 'WINNER!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + active + '-panel').classList.remove('active')
    document.querySelector('.player-' + active + '-panel').classList.add('winner')
    // document.querySelector('.player-' + active + '-panel').classList.add('player-name')


}else{
    nextplaye()
}


    nextplaye()



})

function nextplaye(){
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