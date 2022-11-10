const bands = [
   "The Plot in You",
   "The Devil Wears Prada",
   "Pierce the Veil",
   "Norma Jean",
   "The Bled",
   "Say Anything",
   "The Midway State",
   "We Came as Romans",
   "Counterparts",
   "Oh, Sleeper",
   "A Skylit Drive",
   "Anywhere But Here",
   "An Old Dog",
]

function strip(bandName) {
   return bandName.replace(/^(an |a |the )/i, "").trim()
}
const sortedBands = bands.sort((a, b) => strip(a) > strip(b))
console.log(sortedBands)

const ul = document.querySelector("ul")
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("")
