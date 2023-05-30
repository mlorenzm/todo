import checkMark from '../assets/checkmark.svg'

const createTaskItemContainer = (item) => {
  const container = document.createElement('div')
  container.classList.add('task-item-container')
  container.title = 'Show details'
  const title = document.createElement('div')
  title.textContent = item.getName()
  title.classList.add('item-title')
  const completeBtn = document.createElement('img')
  completeBtn.classList.add('complete-btn')
  completeBtn.src = checkMark
  completeBtn.width = '26'
  completeBtn.title = 'Mark complete'

  completeBtn.addEventListener('click', () => {
    console.log(item)
  })

  container.append(title, completeBtn)

  return container
}
const renderTask = (item) => {
  const mainContainer = document.getElementById('tasks-container')
  const taskContainer = createTaskItemContainer(item)

  mainContainer.append(taskContainer)
}
const markComplete = () => {}
// General buttons
const input = document.getElementById('input-container')
const cancelBtn = document.getElementById('cancel-btn')
const projectBtn = document.getElementById('project-btn')
const calendarBtn = document.getElementById('calendar-btn')
const importantBtn = document.getElementById('important-btn')
const form = document.getElementById('form')
export {
  renderTask,
  createTaskItemContainer,
  form,
  input,
  cancelBtn,
  projectBtn,
  calendarBtn,
  importantBtn,
}
