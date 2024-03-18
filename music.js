/* search-button-appear */
let icon = document.querySelector('.icon');
let form = document.querySelector('.search-form');
icon.onclick = () => {
  form.classList.toggle('active');
}

/* song-buttons */
let song1 = document.querySelector('.song1');
let song2 = document.querySelector('.song2');
let song3 = document.querySelector('.song3');
let icon1 = document.querySelector('.music-sign1');
let icon2 = document.querySelector('.music-sign2');
let icon3 = document.querySelector('.music-sign3');
let song_1 = document.querySelector('.song-1');
let song_2 = document.querySelector('.song-2');
let song_3 = document.querySelector('.song-3');

song_1.addEventListener('click', () => {
  song1.play();
  icon1.style.display = "block";
  icon1.src="blogs/images/pause.png";
  icon2.style.display = "none";
  song2.pause();
  icon3.style.display = "none";
  song3.pause();
}) 

song_2.addEventListener('click', () => {
  song2.play();
  icon2.style.display = "block";
  icon2.src="blogs/images/pause.png";
  icon1.style.display = "none";
  song1.pause();
  icon3.style.display = "none";
  song3.pause();
}) 

song_3.addEventListener('click', () => {
  song3.play();
  icon3.style.display = "block";
  icon3.src="blogs/images/pause.png";
  icon1.style.display = "none";
  song1.pause();
  icon2.style.display = "none";
  song2.pause();
}) 

icon1.onclick = function() {
  if(song1.paused) {
    song1.play();
    icon1.src="blogs/images/pause.png";
  } else {
    song1.pause();
    icon1.src="blogs/images/play.png";
  }
}

icon2.onclick = function() {
  if(song2.paused) {
    song2.play();
    icon2.src="blogs/images/pause.png";
  } else {
    song2.pause();
    icon2.src="blogs/images/play.png";
  }
}

icon3.onclick = function() {
  if(song3.paused) {
    song3.play();
    icon3.src="blogs/images/pause.png";
  } else {
    song3.pause();
    icon3.src="blogs/images/play.png";
  }
}