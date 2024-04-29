function setupAudio() {

    // background music
    const musicAudio = new Howl({
      src: ['./assets/music.mp3'],
      autoplay: true,
      loop: true,
    });
    
    const musicId = musicAudio.play();
    musicAudio.fade(.2, .8, 20000, musicId);
  
}

const CRASH = new Audio();
CRASH.src = "./assets/crash.mp3";

const BONUS = new Audio();
BONUS.src = "./assets/points.mp3";

function backgroundMusic() {
    BACKGROUND.currentTime = 0;
    BACKGROUND.play();
}

function playCollision(type) {
    if(type === 'obstacle') {
        CRASH.currentTime = 0;
        CRASH.play();
    }
    else {
        BONUS.currentTime = 0;
        BONUS.play();
    }
}