// ## Array Cardio Day 2

const people = [
   { name: "Wes", year: 1988 },
   { name: "Kait", year: 1986 },
   { name: "Irv", year: 1970 },
   { name: "Lux", year: 2015 },
]

const comments = [
   { text: "Love this!", id: 523423 },
   { text: "Super good", id: 823423 },
   { text: "You are the best", id: 2039842 },
   { text: "Ramen is my fav food ever", id: 123523 },
   { text: "Nice Nice Nice!", id: 542328 },
]

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?

const isAdult1 = people.some(function (person) {
   const currentYear = new Date().getFullYear()
   if (currentYear - person.year >= 19) {
      return true
   }
})
// console.log(isAdult1)

const isAdult2 = people.some(person => {
   const currentYear = new Date().getFullYear()
   return currentYear - person.year >= 19
})
// console.log(isAdult2)

const isAdult3 = people.some(person => new Date().getFullYear() - person.year >= 19)
// console.log(isAdult3)

// Array.prototype.every() // is everyone 19 or older?

const everyAdults = people.every(e => new Date().getFullYear() - e.year >= 19)
// console.log(everyAdults)

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(e => e.id === 823423)
// console.log(comment)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
comments.splice(
   comments.findIndex(e => e.id === 823423),
   1
)
console.log(comments)
