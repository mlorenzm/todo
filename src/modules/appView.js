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
    addTask(title, priority)
    titleInput.value = ''
    renderTodoList()
  }
}

const formElement = document.getElementById('form')
formElement.addEventListener('submit', handleFormSubmit)

export { renderTodoList }
