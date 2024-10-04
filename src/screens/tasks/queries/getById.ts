import { API } from "@/Api"
import { GET_BY_ID_TASK } from "@/config/QueryKeys/Task/keys"
import { useQuery } from "@tanstack/react-query"

export default function useGetByIdTasks(id: string) {
  const query = useQuery({
    queryKey: [GET_BY_ID_TASK, id],
    queryFn: async () => {
      const { data } = await API.Tasks.getById(id)
      return {
        task: data.task
      }
    },
  })

  return query
}
