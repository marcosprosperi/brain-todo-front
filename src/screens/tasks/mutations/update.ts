import { API } from "@/Api";
import { TaskUpdate } from "@/Api/tasks/types/task";
import { UPDATE_TASK } from "@/config/QueryKeys/Task/keys";
import { useMutation } from "@tanstack/react-query";

export default function useUpdateTask() {
  const mutation = useMutation({
    mutationKey: [UPDATE_TASK],
    mutationFn: async ({ id, params }: { id: string; params: TaskUpdate }) => {
      return API.Tasks.update(id, params);
    },
  });

  return mutation;
}
