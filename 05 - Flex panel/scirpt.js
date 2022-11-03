const panels = document.querySelectorAll(".panel")
console.log(panels)

function toggleOpen() {
   this.classList.toggle("open")
}

function toggleActive(e) {
   if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active")
   }
}

panels.forEach(e => e.addEventListener("click", toggleOpen))
panels.forEach(e => e.addEventListener("transitionend", toggleActive))
