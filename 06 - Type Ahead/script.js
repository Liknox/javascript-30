const endpoint = "https://gist.githubusercontent.com/Liknox/09eca60b360ee731dc65ee7861112274/raw/90be28e52d2c60c3ba4b222a90698c6b838aaebd/us-cities.json"
const cities = []

fetch(endpoint)
   .then(blob => blob.json())
   .then(data => cities.push(...data))

function findMatches(wordToMatch) {
   return cities.filter(place => {
      const regex = new RegExp(wordToMatch, "gi")

      return place.city.match(regex) || place.state.match(regex)
   })
}

function numberWithCommas(x) {
   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

function displayMatches() {
   const matchArray = findMatches(this.value)
   const html = matchArray
      .map(place => {
         const regex = new RegExp(this.value, "gi")
         const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
         const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

         return `
         <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
         </li>
      `
      })
      .join("")
   suggestions.innerHTML = html
}

const searchInput = document.querySelector(".search")
const suggestions = document.querySelector(".suggestions")

searchInput.addEventListener("keyup", displayMatches)
