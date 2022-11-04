const dogs = [
   { name: "Snickers", age: 2 },
   { name: "hugo", age: 8 },
]

function makeGreen() {
   const p = document.querySelector("p")
   p.style.color = "#BADA55"
   p.style.fontSize = "50px"
}

// Regular
console.log("hello")

// Interpolated
console.log("Hello I'm a %s string!", "💩")

// Styled
console.log("%c I am some great text! ", "font-size: 20px; color: yellow; background-color: blue;")
console.log("%c I am some great text! ", "font-size: 20px; color: blue; background-color: yellow;")

// warning!
console.warn("OH NOOO")

// Error :|
console.error("Shit!")

// Info
console.info("I don't trust stairs. They're always up to something.")

// Testing
const p = document.querySelector("p")
console.assert(p.classList.contains("ouch"), "That is wrong!")

// clearing
// console.clear()

// Viewing DOM Elements
console.log(p)
// console.dir(p)

// Grouping together
dogs.forEach(dog => {
   console.groupCollapsed(`${dog.name}`)
   console.log(`This is ${dog.name}.`)
   console.log(`${dog.name} is ${dog.age} years old.`)
   console.log(`${dog.name} is ${dog.age * 7} dogs years old.`)
   console.groupEnd(`${dog.name}`)
})

// counting
console.count("Lik")
console.count("Lik")
console.count("Lik")
console.count("Lik")
console.count("Lik")

// timing
console.time("fetching data")
fetch("https://api.github.com/users/liknox")
   .then(data => data.json())
   .then(data => {
      console.timeEnd("fetching data")
      console.log(data)
   })

// table
console.table(dogs)