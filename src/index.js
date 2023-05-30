import './style.scss'
import { CreateItem } from './modules/itemfactory.js'
import { createTaskItemContainer, renderTask } from './modules/dom'
import {
  input,
  cancelBtn,
  projectBtn,
  calendarBtn,
  importantBtn,
  form,
} from './modules/dom'

const item = CreateItem('Start with this todo app', '1', '0', 'odin')
const item2 = CreateItem('Continue with this app', '1', '0', 'odin')

form.addEventListener('submit', function (e) {
  console.log('a')
  console.dir(e.currentTarget)
  e.preventDefault()
})
const taskArray = [
  item2,
  item2,
  item2,
  item2,
  item2,
  item2,
  item2,
  item2,
  item2,
  item2,
  item2,
  item2,
]

for (let a of taskArray) {
  renderTask(a)
}
