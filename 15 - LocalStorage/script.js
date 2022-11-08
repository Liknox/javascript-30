const addItems = document.querySelector(".add-items")
const itemsList = document.querySelector(".plates")
const items = JSON.parse(localStorage.getItem("items")) || []

function addItem(e) {
   e.preventDefault()
   const text = this.querySelector("[name=item]").value
   const item = {
      // text: text,
      text,
      done: false,
   }
   items.push(item)
   populateList(items, itemsList)
   localStorage.setItem("items", JSON.stringify(items))
   this.reset()
}
function populateList(plates = [], platesList) {
   platesList.innerHTML = plates
      .map((plate, i) => {
         return `
         <li>
            <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? "checked" : ""}>
            <label for="item${i}">${plate.text}</label>
         </li>
      `
      })
      .join("")
}

function toggleDone(e) {
   if (!e.target.matches("input")) return
   const el = e.target
   const index = el.dataset.index
   items[index].done = !items[index].done
   localStorage.setItem("items", JSON.stringify(items))
   populateList(items, itemsList)
}
function reCheck() {
   if (this.dataset.action === "unCheck") {
      for (let i = 0; i < items.length; i++) {
         items[i].done = false
      }
   } else {
      for (let i = 0; i < items.length; i++) {
         items[i].done = true
      }
   }
   localStorage.setItem("items", JSON.stringify(items))
   populateList(items, itemsList)
}
function clearItems() {
   if (this.dataset.action === "clearLocally") {
      while (items.length > 0) {
         items.pop()
      }
      const span = document.querySelector("span")
      span.style.opacity = 1
      setTimeout(() => {
      span.style.opacity = 0
         
      }, 1000);
   } else {
      while (items.length > 0) {
         items.pop()
      }
      localStorage.setItem("items", JSON.stringify(items))
   }
   populateList(items, itemsList)
}

addItems.addEventListener("submit", addItem)
itemsList.addEventListener("click", toggleDone)

populateList(items, itemsList)

const btnUnCheck = document.querySelector("[data-action=unCheck]")
const btnCheck = document.querySelector("[data-action=check]")
const btnClearLocally = document.querySelector("[data-action=clearLocally]")
const btnClearFinally = document.querySelector("[data-action=clearFinally]")
btnUnCheck.addEventListener("click", reCheck)
btnCheck.addEventListener("click", reCheck)
btnClearLocally.addEventListener("click", clearItems)
btnClearFinally.addEventListener("click", clearItems)
