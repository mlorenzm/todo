// Model: it's the main logic for our app. It needs to store tasks and projects, also holds the blueprint to create a task

let tasks = []
let projects = []
class Task {
  constructor(title, priority, project, dueDate) {
    this.title = title
    this.priority = priority
    this.project = project
    this.dueDate = dueDate
  }
}
addTask('Walk the turtle', true, 'Personal', '25/03/2023')
addTask('Go to cytometer', false, 'Laboratory', '02/12/2023')
addTask('End thesis', true, 'Laboratory', '10/02/2024')

function addTask(title, priority = false, project, dueDate) {
  const task = new Task(title, priority, project, dueDate)
  tasks.push(task)
  if (task.project != 'All projects') {
    if (!projects.includes(task.project)) {
      projects.push(task.project)
    }
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
