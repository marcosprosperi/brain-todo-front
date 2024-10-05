import { API } from "@/Api"
import { DELETE_TASK, GET_ALL_TASKS } from "@/config/QueryKeys/Task/keys"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export default function useDeleteTask() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: [DELETE_TASK],
    mutationFn: async (id: string) => {
      return API.Tasks.delete(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_TASKS] });
    },
    onError: (error) => {
      console.error("Error al eliminar la tarea:", error.message)
    }
  })

  return mutation
}
