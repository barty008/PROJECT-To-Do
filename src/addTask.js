import close from "./pageLoad"

const content = document.querySelector("#content")
const submitButton = document.querySelector(".btn-secondary")
const main = document.createElement("main")
let taskEl = document.createElement("div")
function taskAdd() {
  let taskValue = {
    taskTitle: document.getElementById("task-input").value,
    taskNote: document.getElementById("task-note").value,
  }

  //  pushing value to the DOM ---------------------------------------

  content.appendChild(main)

  taskEl.innerHTML = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task Title</th>
      <th scope="col">Task note</th>
      <th scope="col">Priority</th>
      <th scope="col">Date Due</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${taskValue.taskTitle}</td>
      <td>${taskValue.taskNote}</td>
      <td>Priortity</td>
    </tr>
    <tr>

</table> 
  
  `
  main.appendChild(taskEl)
  return main
}
submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  taskAdd()
  const modalContainer = document.querySelector(".modal-container")
  modalContainer.style.display = "none"
})

export default taskAdd
