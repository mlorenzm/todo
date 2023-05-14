import './style.scss'
import { CreateItem } from './modules/itemfactory.js'
import { createTaskItemContainer, renderTask } from './modules/dom'

const item = CreateItem('Start with this todo app', 'desc', '1', '0', 'odin')
const item2 = CreateItem('Start with this todo app', 'desc', '1', '0', 'odin')

renderTask(item)
renderTask(item2)
