const inputs = document.querySelectorAll(".controls input")

function handleUpdate() {
   const suffix = this.dataset.sizing || ""
   document.body.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(e => e.addEventListener("change", handleUpdate))
inputs.forEach(e => e.addEventListener("mousemove", handleUpdate))
