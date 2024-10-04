import { apiInstance } from "@/config/client";
import { Task } from "./types/task";


export interface ApiResponse {
  task: Task;
}

export async function getById(id: string) {
  return apiInstance.get<ApiResponse>(`v1/tasks/${id}`);
}
