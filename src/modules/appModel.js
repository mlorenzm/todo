// Model: it's the main logic for our app. It needs to store tasks and projects, also holds the blueprint to create a task

let tasks = []
let projects = []
class Task {
  constructor(title, priority, project) {
    this.title = title
    this.priority = priority
    this.project = project
  }
}
addTask('a', true, 'ayy')
addTask('b', false, 'lmao')

function addTask(title, priority = false, project) {
  const task = new Task(title, priority, project)
  tasks.push(task)
  if (project != 'All projects') {
    projects.push(task.project)
  }
}

// Delete a task from the tasks array
function deleteTask(index) {
  tasks.splice(index, 1)
}

// Mark task important on the array
function toggleImportant(index) {
  let priority = tasks[index].priority
  console.log(priority)
  if (priority) {
    tasks[index].priority = false
  } else {
    tasks[index].priority = true
  }
}

// Retrieve all tasks
function getAllTasks() {
  return tasks
}

// Retrieve all projects
function getAllProjects() {
  return projects
}

function filterTasks(selectedProject) {
  if (selectedProject == 'all') {
    // Return all tasks if "All Projects" is selected
    return tasks
  }

  return tasks.filter((task) => task.project == selectedProject)
}
// Export the necessary functions or classes
export {
  addTask,
  deleteTask,
  getAllTasks,
  toggleImportant,
  getAllProjects,
  filterTasks,
}
