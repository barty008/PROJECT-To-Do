function header() {
  const headerContainer = document.createElement("header")
  const title = document.createElement("h1")
  title.textContent = "TO-DO"

  headerContainer.appendChild(title)

  return headerContainer
}

function navBar() {
  const navContainer = document.createElement("nav")
  const all = document.createElement("h2")
  const today = document.createElement("h2")
  const week = document.createElement("h2")
  const project = document.createElement("h2")

  all.textContent = "All Tasks"
  today.textContent = "Todays Tasks"
  week.textContent = "Weeks Tasks"
  project.textContent = "Working Project"

  const navEl = [all, today, week, project]

  navEl.forEach((el) => navContainer.appendChild(el))

  return navContainer
}

function main() {
  const mainContainer = document.createElement("main")

  return mainContainer
}

function pageLoad() {
  const content = document.getElementById("content")

  const element = [header(), navBar(), main()]

  element.forEach((el) => content.appendChild(el))
}

export default pageLoad
