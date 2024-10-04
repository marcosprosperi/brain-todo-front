import { API } from "@/Api";
import { TaskCreate } from "@/Api/tasks/types/task";
import { CREATE_TASK } from "@/config/QueryKeys/Task/keys";
import { useMutation } from "@tanstack/react-query";

export default function useCreateTask() {
  const mutation = useMutation({
    mutationKey: [CREATE_TASK],
    mutationFn: async (params: TaskCreate) => {
      return API.Tasks.create(params);
    },
  });

  return mutation;
}
