var throttle = require('lodash.throttle');

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(videoplayerCurrentTime, 1000));
checkingLocalStorage();

function videoplayerCurrentTime(e) {
  const currentTime = JSON.stringify(e.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime);
}

function checkingLocalStorage() {
  const timeBeforeUpdate = localStorage.getItem('videoplayer-current-time');
  if (timeBeforeUpdate) {
    player.setCurrentTime(timeBeforeUpdate);
  }
}
