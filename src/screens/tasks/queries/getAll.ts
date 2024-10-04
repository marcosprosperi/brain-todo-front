import { API } from "@/Api"
import { GET_ALL_TASKS } from "@/config/QueryKeys/Task/keys"
import { useQuery } from "@tanstack/react-query"

export default function useGetAllTasks() {
  const query = useQuery({
    queryKey: [GET_ALL_TASKS],
    queryFn: async () => {
      const { data } = await API.Tasks.getAll()
      return {
        tasks: data.tasks
      }
    },
    initialData: {
      tasks: [],
    },
  })

  return query
}
