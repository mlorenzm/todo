import { getAllProjects } from './appModel.js'
import { renderTodoList, renderProjectList } from './appView.js'

// Initialize the app
function initApp() {
  renderTodoList('all')
  renderProjectList(getAllProjects())
}

// Export any necessary functions
export { initApp }
