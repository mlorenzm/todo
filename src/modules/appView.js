import checkMark from '../assets/checkmark.svg'
import exclamation from '../assets/exclamation.svg'
import {
  addTask,
  deleteTask,
  getAllTasks,
  toggleImportant,
  getAllProjects,
  filterTasks,
} from './appModel.js'

function renderTodoList(selectedProject) {
  const container = document.getElementById('tasks-container')
  container.innerHTML = ''
  const tasks = filterTasks(selectedProject)

  tasks.forEach((task, index) => {
    if (selectedProject === 'all' || task.project === selectedProject) {
      const taskElement = document.createElement('li')
      taskElement.classList.add('task-item-container')
      taskElement.textContent = task.title + ' - ' + task.project
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
        renderTodoList(selectedProject)
      })

      const importantBtn = document.createElement('img')
      importantBtn.classList.add('important-btn')
      importantBtn.src = exclamation
      importantBtn.width = 26
      importantBtn.title = 'Mark as important'
      importantBtn.addEventListener('click', () => {
        toggleImportant(index)
        console.log(getAllProjects())
        renderTodoList(selectedProject)
      })

      buttonsContainer.append(importantBtn, completeBtn)
      taskElement.appendChild(buttonsContainer)
      container.appendChild(taskElement)
    }
  })
}

function handleFormSubmit(event) {
  event.preventDefault()
  // Task title
  const titleInput = document.getElementById('input-container')
  const title = titleInput.value

  if (title) {
    const projectRegex = /#(\w+)/
    const dateRegex = /(\d{2}\/\d{2}\/\d{4})/
    let taskName = ''
    let project = ''
    let date = ''

    const taskMatch = title.match(/^([^#]+)/)
    if (taskMatch) {
      taskName = taskMatch[0].trim()
    }

    const projectMatch = title.match(projectRegex)
    if (projectMatch) {
      project = projectMatch[1]
    } else {
      project = 'All projects'
    }

    const dateMatch = title.match(dateRegex)
    if (dateMatch) {
      dueDate = dateMatch[1]
    }

    addTask(taskName, false, project)
    renderProjectList(getAllProjects())
    titleInput.value = ''
    renderTodoList('all')
  }
}

const formElement = document.getElementById('form')
formElement.addEventListener('submit', handleFormSubmit)

// Projects

function renderProjectList(projects) {
  const projectsContainer = document.getElementById('projects')
  projectsContainer.innerHTML = ''

  const filterSelect = document.createElement('select')
  filterSelect.id = 'filter-select'
  filterSelect.addEventListener('change', handleFilterChange)

  const allOption = document.createElement('option')
  allOption.value = 'all'
  allOption.textContent = 'View All Projects'
  filterSelect.appendChild(allOption)

  projects.forEach((project) => {
    const option = document.createElement('option')
    option.value = project
    option.textContent = project
    filterSelect.appendChild(option)
  })

  projectsContainer.appendChild(filterSelect)
}

function handleFilterChange() {
  const filterSelect = document.getElementById('filter-select')
  const selectedProject = filterSelect.value

  // Call a function to filter tasks based on the selected project
  // Update the to-do list based on the filtered tasks
  renderTodoList(selectedProject)
}

export { renderTodoList, renderProjectList }
