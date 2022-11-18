const speed = document.querySelector(".speed")
const bar = speed.querySelector(".speed-bar")
const video = document.querySelector(".flex")

speed.addEventListener("mousemove", function (e) {
   const y = e.pageY - this.offsetTop
   const percent = y / this.offsetHeight
   const MIN = 0.4
   const MAX = 4.01
   const height = Math.round(percent * 100) + "%"
   const playbackRate = percent * (MAX - MIN) + MIN // universal formula in order to situate your percent into min and max borders

   bar.style.height = height
   bar.textContent = playbackRate.toFixed(2) + "×"
   video.playbackRate = playbackRate
   console.log(y)
})