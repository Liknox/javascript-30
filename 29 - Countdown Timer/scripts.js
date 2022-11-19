let countdown
const timerDisplay = document.querySelector(".display__time-left")
const endTime = document.querySelector(".display__end-time")
const buttons = document.querySelectorAll("[data-time]")
function timer(seconds) {
   clearInterval(countdown)
   const now = Date.now()
   const then = now + seconds * 1000
   displayTime(seconds)
   displayEndTime(then)

   countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000)
      if (secondsLeft < 0) {
         clearInterval(countdown)
         return
      }
      displayTime(secondsLeft)
   }, 1000)
}

function displayTime(seconds) {
   const minutes = Math.floor(seconds / 60)
   const remainderSeconds = seconds % 60
   const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`
   document.title = `Timer - ${display}`
   timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
   const end = new Date(timestamp)
   const hour = end.getHours()
   const minutes = end.getMinutes()
   endTime.textContent = `Be Back At ${hour}:${minutes}`
}

function startTimer() {
   const seconds = parseInt(this.dataset.time)
   timer(seconds)
}

buttons.forEach(button => button.addEventListener("click", startTimer))
document.customForm.addEventListener("submit", function (e) {
   e.preventDefault()
   const mins = this.minutes.value
   timer(mins * 60)
   this.reset()
})
document.customForm.addEventListener("click", function (e) {
   document.querySelector(".animated").style.opacity = 0
   setTimeout(() => {
   document.querySelector(".animated").style.display = "none"
   }, 400);
})
