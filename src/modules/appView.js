import checkMark from '../assets/checkmark.svg'
import exclamation from '../assets/exclamation.svg'
import {
  addTask,
  deleteTask,
  getAllTasks,
  toggleImportant,
} from './appModel.js'

function renderTodoList() {
  const container = document.getElementById('tasks-container')
  container.innerHTML = ''

  const tasks = getAllTasks()

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('li')
    taskElement.classList.add('task-item-container')
    taskElement.textContent = task.title
    if (task.priority) {
      taskElement.style.backgroundColor = '#ffbb01'
    }
    const buttonsContainer = document.createElement('div')
    buttonsContainer.classList.add('buttons-container')
    const completeBtn = document.createElement('img')
    completeBtn.classList.add('complete-btn')
    completeBtn.src = checkMark
    completeBtn.width = '26'
    completeBtn.title = 'Mark complete'
    completeBtn.textContent = 'Delete'
    completeBtn.addEventListener('click', () => {
      deleteTask(index)
      renderTodoList()
    })

    const importantBtn = document.createElement('img')
    importantBtn.classList.add('important-btn')
    importantBtn.src = exclamation
    importantBtn.width = 26
    importantBtn.title = 'Mark as important'
    importantBtn.addEventListener('click', () => {
      toggleImportant(index)
      console.log(getAllTasks())
      renderTodoList()
    })

    buttonsContainer.append(importantBtn, completeBtn)
    taskElement.appendChild(buttonsContainer)
    container.appendChild(taskElement)
  })
}

function handleFormSubmit(event) {
  event.preventDefault()
  // Task title
  const titleInput = document.getElementById('input-container')
  const title = titleInput.value

  if (title) {
    addTask(title)
    titleInput.value = ''
    renderTodoList()
  }
}

const formElement = document.getElementById('form')
formElement.addEventListener('submit', handleFormSubmit)

export { renderTodoList }
