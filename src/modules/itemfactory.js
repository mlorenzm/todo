function CreateItem(name, description, dueDate, priority, project) {
  const getName = () => name
  const getDescription = () => description
  const getDueDate = () => dueDate
  const getPriotiry = () => priority
  const getProject = () => project
  return {
    getName,
    getDescription,
    getDueDate,
    getPriotiry,
    getProject,
  }
}

export { CreateItem }
