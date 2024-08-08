export type Category = {
  id: string,
  name: string
  tasks: Task[]
}

export type Task = {
  id: string,
  name: string,
  priority: string,
  complete: boolean
}

export type TaskToPost = {
  name: string,
  category: string
  priority: string,
  complete: boolean
}

export type TaskToUpdate = {
  id: string,
  name: string,
  category: string
  priority: string,
  complete: boolean
}