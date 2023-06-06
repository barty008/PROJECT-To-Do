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
  const today = document.createElement("h2")
  const week = document.createElement("h2")
  const project = document.createElement("h2")
  const circleAroundLogo = document.createElement("div")
  const addLogo = document.createElement("i")

  circleAroundLogo.setAttribute("class", "add-container")
  addLogo.setAttribute("class", "fa-solid fa-plus")

  circleAroundLogo.appendChild(addLogo)

  all.textContent = " - All Tasks"
  today.textContent = " - Todays Tasks"
  week.textContent = " - Weeks Tasks"
  project.textContent = " - Projects"

  const navEl = [all, today, week, project, circleAroundLogo]

  navEl.forEach((el) => navContainer.appendChild(el))

  return navContainer
}

function main() {
  const mainContainer = document.createElement("main")

  const addtask = document.createElement("div")

  mainContainer.appendChild(addtask)
  mainContainer.setAttribute("class", "main-container")

  return mainContainer
}

function openModal() {
  const addTaskBtn = document.querySelector(".add-container")
  const modalContainer = document.querySelector(".modal-container")
  addTaskBtn.addEventListener("click", () => {
    modalContainer.classList.add = "display-flex"
  })
}

function pageLoad() {
  const content = document.getElementById("content")

  const element = [header(), navBar(), main()]

  element.forEach((el) => content.appendChild(el))
  openModal()
}

export default pageLoad
