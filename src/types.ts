export type Category = {
  id: string,
  name: string
}

export type CategoryTasks = {
  id: string,
  name: string,
  tasks: Task[]
}

export type Task = {
  id: string,
  name: string,
  priority: string,
  complete: boolean
}