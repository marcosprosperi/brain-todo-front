export type Task = {
  id: string;
  title: string;
  isDone: boolean;
  description: string;
  deadline: Date;
  createdAt: Date;
  updatedAt: Date;
}


export type TaskUpdate = {
  isDone: boolean
}

export type TaskCreate = Omit<Task, "id" | "createdAt" | "updatedAt" | "isDone"> & {
  isDone?: boolean
}