import {
  input,
  cancelBtn,
  projectBtn,
  calendarBtn,
  importantBtn,
} from './dom.js'
cancelBtn.addEventListener('click', createTask())
const createTask = (e) => {
  e.preventDefault()
  console.log('a')
}
