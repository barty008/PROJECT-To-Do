import { set } from "lodash"

function header() {
  const headerContainer = document.createElement("header")
  const title = document.createElement("h1")
  title.textContent = "// TO-DO"

  const taskIcon = document.createElement("i")
  taskIcon.setAttribute("class", "fa-solid fa-list-check")

  headerContainer.appendChild(title)
  headerContainer.appendChild(taskIcon)

  return headerContainer
}

function navBar() {
  const navContainer = document.createElement("nav")
  const all = document.createElement("h2")
  // const today = document.createElement("h2")
  // const week = document.createElement("h2")
  // const project = document.createElement("h2")
  const circleAroundLogo = document.createElement("div")
  const addLogo = document.createElement("i")

  circleAroundLogo.setAttribute("class", "add-container")
  addLogo.setAttribute("class", "fa-solid fa-plus")

  circleAroundLogo.appendChild(addLogo)

  // card 1
  const cardOneNav = document.createElement("div")
  cardOneNav.innerHTML = `
  <div class="card card-one-container">
  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link bg-secondary" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All tasks</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Today</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Week</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Completed tasks</a>
  </div>
  `

  // card 2
  const cardTwoNav = document.createElement("div")

  cardTwoNav.innerHTML = `
  <div class="card card-one-container ">
  <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link bg-secondary" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Working projects:</a>

  </div>
  <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link bg-danger" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">High priority:</a>

  </div>
  <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link bg-warning" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Medium priority:</a>

  </div>
  <div class="nav  flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link bg-success low-priority" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Low priority:</a>
  </div>
  `

  const navEl = [cardOneNav, cardTwoNav, circleAroundLogo]

  navEl.forEach((el) => navContainer.appendChild(el))

  return navContainer
}
// --------------main----------------
function main() {
  const mainContainer = document.createElement("main")
  mainContainer.setAttribute("class", "main-container")
  // table content
  // table
  const table = document.createElement("table")
  table.setAttribute("class", "table")
  // thead
  const tableHead = document.createElement("thead")
  tableHead.innerHTML = `
  
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task Title</th>      
      <th scope="col">Priority</th>
      <th scope="col">Date Due</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  `
  table.appendChild(tableHead)
  mainContainer.appendChild(table)

  return mainContainer
}

function openModal() {
  const addTaskBtn = document.querySelector(".add-container")
  const modalContainer = document.querySelector(".modal-container")
  addTaskBtn.addEventListener("click", (e) => {
    modalContainer.style.display = "flex"
  })
}

//
function close() {
  const modalContainer = document.querySelector(".modal-container")
  modalContainer.style.display = "none"
}
function escapeClose(event) {
  if (event.keyCode === 27) {
    close()
  }
}
document.body.addEventListener("keydown", escapeClose)

function pageLoad() {
  const content = document.getElementById("content")

  const element = [header(), navBar(), main()]

  element.forEach((el) => content.appendChild(el))
  openModal()
}

// export close
export default pageLoad
