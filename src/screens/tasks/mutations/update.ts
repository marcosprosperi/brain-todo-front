import { API } from "@/Api";
import { TaskUpdate } from "@/Api/tasks/types/task";
import { GET_ALL_TASKS, UPDATE_TASK } from "@/config/QueryKeys/Task/keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateTask() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: [UPDATE_TASK],
    mutationFn: async ({ id, params }: { id: string; params: TaskUpdate }) => {
      return API.Tasks.update(id, params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_TASKS] });
    },
    onError: (error) => {
      console.error("Error al actualizar la tarea:", error.message);
    }
  });

  return mutation;
}
