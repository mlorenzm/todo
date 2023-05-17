function CreateItem(name, description, dueDate, isImportant, project) {
  const getName = () => name
  const getDescription = () => description
  const getDueDate = () => dueDate
  const getImportance = () => isImportant
  const getProject = () => project
  return {
    getName,
    getDescription,
    getDueDate,
    getImportance,
    getProject,
  }
}

export { CreateItem }
