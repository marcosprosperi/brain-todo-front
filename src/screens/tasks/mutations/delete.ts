import { API } from "@/Api"
import { DELETE_TASK } from "@/config/QueryKeys/Task/keys"
import { useMutation } from "@tanstack/react-query"

export default function useDeleteTask() {
  const mutation = useMutation({
    mutationKey: [DELETE_TASK],
    mutationFn: async (id: string) => {
      return API.Tasks.delete(id)
    }
  })

  return mutation
}
