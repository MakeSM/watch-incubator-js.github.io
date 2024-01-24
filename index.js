let timerId;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', function () {
   if (!timerId) {
      timerId = setInterval(updateClock, 1000);
   }
   // startButton.disabled = true;
   // stopButton.disabled = false;
});

stopButton.addEventListener('click', function () {
   if (timerId) {
      clearInterval(timerId);
      timerId = null;
      // startButton.disabled = false;
      // stopButton.disabled = true;
   }
});

function updateClock() {
   const clock = document.getElementById('clock');
   const now = new Date();
   const hours = now.getHours();
   const minutes = now.getMinutes();
   const seconds = now.getSeconds();

   clock.textContent = hours + ':' + minutes + ':' + seconds;
}
