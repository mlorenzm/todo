import './style.scss'
import { CreateItem } from './modules/itemfactory.js'
import { createTaskItemContainer, renderTask } from './modules/dom'

const item = CreateItem('Start with this todo app', 'desc', '1', '0', 'odin')
const item2 = CreateItem('Continue with this app', 'desc', '1', '0', 'odin')
const array = [item, item2]
console.log(array)

for (let a of array) {
  renderTask(a)
}
