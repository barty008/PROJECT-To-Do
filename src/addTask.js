import close from "./pageLoad"

const submitButton = document.querySelector(".btn-secondary")

// form input

// --------------array----------------
const toDoArray = []
const lowPriority = []
const mediumPriority = []
const highPriority = []

// --------------toDo----------------
function ToDo(title, priority, date, status) {
  this.title = title
  this.priority = priority
  this.date = date
  this.status = status
}

ToDo.prototype.removeTask = function (index) {
  toDoArray.splice(index, 1)
  toDoUI()
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
  // --------------delete button----------------
  let deleteBtn = document.createElement("p")
  deleteBtn.textContent = "delete"
  // --------------read status----------------

  const taskDate = getDate.value
  let date = new Date(taskDate)
  const taskTitle = document.getElementById("task-input").value

  const taskStatus = document.createElement("input")
  taskStatus.setAttribute("type", "checkbox")
  taskStatus.setAttribute("name", "Completed")
  console.log(taskStatus)
  //

  // -----------------------------------------NEW TASK----------------------------------------
  const todoItem = new ToDo(
    taskTitle,
    selectedBtn,
    date.toLocaleDateString("en-GB"),
    taskStatus
  )
  if (selectedBtn === "low") {
    const lowPriorityObject = new ToDo(
      taskTitle,
      selectedBtn,
      date.toLocaleDateString("en-GB"),
      taskStatus
    )

    lowPriority.push(lowPriorityObject)
  } else if (selectedBtn === "medium") {
    mediumPriority.push(todoItem)
  } else if (selectedBtn === "high") {
    highPriority.push(todoItem)
  }
  console.log(lowPriority)
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
          <td>${task.status.outerHTML}</td>                      
                          
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
})

// -----------------------priority buttons--------------------

// -----------------------priority buttons--------------------
// -------------------- filter object in priority --------------------------
function lowUI() {
  const mainTable = document.querySelector(".table")
  let tableBody = document.createElement("tbody")

  for (let i = 0; i < lowPriority.length; i++) {
    let task = lowPriority[i]
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

export default toDoUI
