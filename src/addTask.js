import close from "./pageLoad"

const submitButton = document.querySelector(".btn-secondary")

// form input

// --------------array----------------
const toDoArray = []
// --------------toDo----------------
function ToDo(title, priority, date) {
  ;(this.title = title), (this.priority = priority), (this.date = date)
}

// --------------selecting priority status ----------------

const addPriorityStatus = document.querySelector(".add-To-item")
const priorityBtns = document.querySelectorAll('input[name="options-outlined"]')
let selectedBtn
// selecting priority
addPriorityStatus.addEventListener("click", () => {
  for (const priorityBtn of priorityBtns) {
    if (priorityBtn.checked) {
      selectedBtn = priorityBtn.value
      console.log(selectedBtn)
      break
    }
  }
})
// --------------selecting date ----------------

const getDate = document.querySelector(".date-input")

// --------------add item to list----------------

function addToDo() {
  const taskDate = getDate.value
  let date = new Date(taskDate)
  const taskTitle = document.getElementById("task-input").value
  const todoItem = new ToDo(
    taskTitle,
    selectedBtn,
    date.toLocaleDateString("en-GB")
  )
  toDoArray.push(todoItem)
}

// --------------------ui--------------------------

function toDoUI() {
  const mainTable = document.querySelector(".table")
  let tableBody = document.createElement("tbody")

  for (let i = 0; i < toDoArray.length; i++) {
    let task = toDoArray[i]
    tableBody.innerHTML = `   
          <tr>
          <th scope="row">${i + 1}</th>
          <td>${task.title}</td>          
          <td>${task.priority}</td>          
          <td>${task.date}</td>          
        </tr>     
    `
    mainTable.appendChild(tableBody)
  }
}

submitButton.addEventListener("click", (e) => {
  const modalContainer = document.querySelector(".modal-container")
  modalContainer.style.display = "none"
  e.preventDefault()
  addToDo()
  toDoUI()
  console.table(toDoArray)
})

export default toDoUI
