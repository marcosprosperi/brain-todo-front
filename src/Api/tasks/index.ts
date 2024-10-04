import { getAll } from "./getAll";
import { getById } from "./getById";
import { update } from "./update";
import { deleteTask } from "./delete";
import { create } from "./create";


export const TasksAPI = {
  getAll,
  getById,
  delete: deleteTask,
  update,
  create
}
