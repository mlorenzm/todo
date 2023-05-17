import checkMark from '../assets/checkmark.svg'

const createTaskItemContainer = (item) => {
  const container = document.createElement('div')
  container.classList.add('task-item-container')
  container.title = 'Show details'
  const title = document.createElement('div')
  title.textContent = item.getName()
  title.classList.add('item-title')
  console.log(title)
  const completeBtn = document.createElement('img')
  completeBtn.classList.add('complete-btn')
  completeBtn.src = checkMark
  completeBtn.width = '30'
  completeBtn.title = 'Mark complete'

  container.append(title, completeBtn)

  return container
}
const renderTask = (item) => {
  const mainContainer = document.getElementById('tasks-container')
  const taskContainer = createTaskItemContainer(item)

  mainContainer.append(taskContainer)
}
const markComplete = () => {}
export { renderTask, createTaskItemContainer }
