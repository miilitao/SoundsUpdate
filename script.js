
const buttonAudio = new Audio();
buttonAudio.src = "/sound/ES_Button Press 2 - SFX Producer.mp3";
const alarmAudio = new Audio();
alarmAudio.src = "/sound/ES_Cell Alarm Chime 4 - SFX Producer.mp3"

// BOTÃO START

const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const btnRest = document.getElementById('btn-rest');

btnRest.addEventListener('click', () => {
  buttonAudio.play();
})

btnStart.addEventListener('click', () => {
  buttonAudio.play();
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');
  const display = document.getElementById('timer');

  let durationInSeconds = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60)
  + parseInt(seconds.value);

  timer(display, durationInSeconds);
})

const timer = (display, durationInSeconds) => {
  let timer = durationInSeconds;
  let hours, minutes, seconds;
  
  const  interval = setInterval(() => {
    hours = Math.floor((timer / 60) / 60);
    minutes = Math.floor(timer / 60 - (hours * 60));
    seconds = Math.floor(timer % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}`

    timer -= 1;

    if(timer < 0){
      display.innerHTML = 'Descanse.';
      clearInterval(interval);
      alarmAudio.play();
    }

    if(btnRestart.addEventListener('click', () => {
      buttonAudio.play();
      clearInterval(interval);
      display.innerHTML = '00:00:00';
    }));

  }, 1000);
}
