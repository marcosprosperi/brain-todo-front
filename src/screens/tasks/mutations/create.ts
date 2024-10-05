import { API } from "@/Api";
import { TaskCreate } from "@/Api/tasks/types/task";
import { CREATE_TASK, GET_ALL_TASKS } from "@/config/QueryKeys/Task/keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateTask() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: [CREATE_TASK],
    mutationFn: async (params: TaskCreate) => {
      return API.Tasks.create(params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_TASKS] });
    },
    onError: (error) => {
      console.error("Error al crear la tarea:", error.message);
    },
  });

  return mutation;
}
