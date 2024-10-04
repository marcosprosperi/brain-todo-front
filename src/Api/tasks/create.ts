import { apiInstance } from "@/config/client";
import { Task, TaskCreate } from "./types/task";


export interface ApiResponse {
  task: Task;
}

export async function create(params: TaskCreate) {
  return apiInstance.post<ApiResponse>(`v1/tasks`, params);
}
