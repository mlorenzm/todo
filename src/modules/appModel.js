// Model: it's the main logic for our app. It needs to store tasks and projects, also holds the blueprint to create a task

let tasks = []

class Task {
  constructor(title, priority) {
    this.title = title
    this.priority = priority
  }
}
addTask('a', true)
addTask('b', false)

function addTask(title, priority = false) {
  const task = new Task(title, priority)
  tasks.push(task)
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

// Export the necessary functions or classes
export { addTask, deleteTask, getAllTasks, toggleImportant }
