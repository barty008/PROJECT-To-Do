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
  <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All tasks</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Today</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Week</a>
  </div>
  `

  // card 2
  const cardTwoNav = document.createElement("div")
  cardTwoNav.innerHTML = `
  <div class="card card-one-container ">
  <div class="nav flex-column nav-pills " id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link " id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Working projects:</a>

  </div>
  `

  // all.textContent = " - All Tasks"
  // today.textContent = " - Todays Tasks"
  // week.textContent = " - Weeks Tasks"
  // project.textContent = " - Projects"

  const navEl = [cardOneNav, cardTwoNav, circleAroundLogo]

  navEl.forEach((el) => navContainer.appendChild(el))

  return navContainer
}

// function main() {
//   const mainContainer = document.createElement("main")

//   const addtask = document.createElement("div")

//   mainContainer.appendChild(addtask)
//   mainContainer.setAttribute("class", "main-container")

//   return mainContainer
// }

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

  const element = [header(), navBar()]

  element.forEach((el) => content.appendChild(el))
  openModal()
}

// export close
export default pageLoad
