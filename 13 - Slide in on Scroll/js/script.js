import debounce from "./debounce.js"
const sliderImages = document.querySelectorAll(".slide-in")

function checkSlide(e) {
   sliderImages.forEach(sliderImage => {
      const slideInAt = window.scrollY + window.innerHeight - sliderImage.height / 2 // half way of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height // bottom of the image
      // const isHalfShown = slideInAt > sliderImage.offsetTop
      const isHalfShown = slideInAt > sliderImage.offsetTop
      const isNotScrolledPast = window.scrollY < imageBottom
      if (isHalfShown && isNotScrolledPast) {
         sliderImage.classList.add("active")
      } else {
         sliderImage.classList.remove("active")
      }
   })
}

/* debounce() - функція яка працює весь кожен певний період часу. */
window.addEventListener("scroll", debounce(checkSlide))
