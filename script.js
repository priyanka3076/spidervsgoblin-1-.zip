score = 0;
cross = true;
audio = new Audio('background.mp3');
audiogo = new Audio('laser.mp3');
setTimeout(() => {
  audio.play()
}, 1000);
document.onkeydown = function(e) {
  console.log("Key code is:", e.key)
  if(e.key == "ArrowUp"){
    const spider = document.querySelector('.spider');
    if(spider){
      spider.classList.add('animateSpider');
      setTimeout(() => {
        spider.classList.remove('animateSpider');
      }, 700);
    }
  }
}


setInterval(() => {
  const spider = document.querySelector('.spider');
  const gameOver = document.querySelector('.gameOver');
  const goblin = document.querySelector('.goblin');

  dx = parseInt(window.getComputedStyle(spider , null).getPropertyValue('right'));
  dy = parseInt(window.getComputedStyle(spider , null).getPropertyValue('top'));


  ox = parseInt(window.getComputedStyle(goblin , null).getPropertyValue('right'));
  oy = parseInt(window.getComputedStyle(goblin , null).getPropertyValue('top'));

  offsetX = Math.abs(dx - ox );
  offsetY = Math.abs(dy - oy );
  console.log( offsetX, offsetY)

  if(offsetX < 75 && offsetY < 60){
    gameOver.innerHTML = "Game Over!- Reload to play again";
    goblin.classList.remove('goblinAni');
    audiogo.play();
    setTimeout(() => {
      audiogo.pause();
      audio.pause();
      
    }, 1000);
  }

  else if(offsetX < 145 &&cross) {
    score+= 1;
    updateScore(score);
    cross = false;

    setTimeout(() => {
      cross = true;
    }, 1000);

    setTimeout(() => {
      const aniDur = parseFloat(window.getComputedStyle(goblin, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.008;
      goblin.style.animationDuration = newDur + 's';
      console.log("New animation duration: ", newDur);
    }, 500);
    
  }
}, 10);



function updateScore() {
  scoreCont.innerHTML = "Your score: " + score

}