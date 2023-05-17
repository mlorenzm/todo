function CreateItem(name, dueDate, isImportant, project) {
  const getName = () => name

  const getDueDate = () => dueDate
  const getImportance = () => isImportant
  const getProject = () => project
  return {
    getName,
    getDueDate,
    getImportance,
    getProject,
  }
}

export { CreateItem }
