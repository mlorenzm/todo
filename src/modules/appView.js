import checkMark from '../assets/checkmark.svg'
import { addTask, deleteTask, getAllTasks } from './appModel.js'

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

    taskElement.appendChild(completeBtn)
    container.appendChild(taskElement)
  })
}

function handleFormSubmit(event) {
  event.preventDefault()
  // Task title
  const titleInput = document.getElementById('input-container')
  const title = titleInput.value

  if (title) {
    let priority = handlePriority()
    addTask(title, priority)
    titleInput.value = ''
    handlePriority()
    renderTodoList()
  }
}

function handlePriority() {
  let priority = false
  const priorityBtn = document.getElementById('important-btn')
  priorityBtn.addEventListener('click', () => {
    priority = !priority
    console.log(priority)
    if (priority) {
      priorityBtn.classList.add('important-clicked')
      priority = true
    } else {
      priorityBtn.classList.remove('important-clicked')
      priority = false
    }
    return priority
  })
}

const formElement = document.getElementById('form')
formElement.addEventListener('submit', handleFormSubmit)
handlePriority()
export { renderTodoList }
