import close from "./pageLoad"

const content = document.querySelector("#content")
const submitButton = document.querySelector(".btn-secondary")
const main = document.createElement("main")
let taskEl = document.createElement("div")

// form input

// --------------array----------------
const toDoArray = []
// --------------toDo----------------
function ToDo(title, note, priority) {
  ;(this.title = title), (this.note = note), (this.priority = priority)
}

// --------------selecting priority status ----------------
const addPriorityStatus = document.querySelector(".add-To-item")
const priorityBtns = document.querySelectorAll('input[name="options-outlined"]')
let selectedBtn
addPriorityStatus.addEventListener("click", () => {
  for (const priorityBtn of priorityBtns) {
    if (priorityBtn.checked) {
      selectedBtn = priorityBtn.value
      console.log(selectedBtn)
      break
    }
  }
})
// --------------add item to list----------------
function addToDo() {
  const taskTitle = document.getElementById("task-input").value
  const taskNote = document.getElementById("task-note").value

  //

  const todoItem = new ToDo(taskTitle, taskNote, selectedBtn)
  toDoArray.push(todoItem)
}
// --------------ui----------------
// ----------------
// function taskAdd() {
//   let taskValue = {
//   }

//  pushing value to the DOM ---------------------------------------

//   content.appendChild(main)

//   taskEl.innerHTML = `<table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Task Title</th>
//       <th scope="col">Task note</th>
//       <th scope="col">Priority</th>
//       <th scope="col">Date Due</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>${taskValue.taskTitle}</td>
//       <td>${taskValue.taskNote}</td>
//       <td>Priortity</td>
//     </tr>
//     <tr>

// </table>

//   `
//   main.appendChild(taskEl)
//   return main
// }
submitButton.addEventListener("click", (e) => {
  e.preventDefault()

  const modalContainer = document.querySelector(".modal-container")
  modalContainer.style.display = "none"
  addToDo()
  console.table(toDoArray)
})

// export default taskAdd
