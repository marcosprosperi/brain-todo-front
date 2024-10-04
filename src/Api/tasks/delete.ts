import { apiInstance } from "@/config/client";


export async function deleteTask(id: string) {
  return apiInstance.delete<void>(`v1/tasks/${id}`);
}
