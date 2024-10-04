import { apiInstance } from "@/config/client";
import { Task } from "./types/task";

export interface ApiResponse {
  tasks: Task[];
}

export async function getAll() {
  return apiInstance.get<ApiResponse>("v1/tasks");
}
