import { apiInstance } from "@/config/client";
import { Task, TaskUpdate } from "./types/task";


export interface ApiResponse {
  task: Task;
}

export async function update(id: string, params: TaskUpdate) {
  return apiInstance.put<ApiResponse>(`v1/tasks/${id}`, params);
}
