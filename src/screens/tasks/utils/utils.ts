import { Task } from "@/Api/tasks/types/task";

export type SortOption = "createdAsc" | "createdDesc" | "deadlineAsc" | "deadlineDesc"

export const sortTasks = (
  tasksToSort: Task[],
  sortOption: SortOption
): Task[] => {
  return [...tasksToSort].sort((a, b) => {
    switch (sortOption) {
      case "createdAsc":
        return a.createdAt.getTime() - b.createdAt.getTime();
      case "createdDesc":
        return b.createdAt.getTime() - a.createdAt.getTime();
      case "deadlineAsc":
        return a.deadline.getTime() - b.deadline.getTime();
      case "deadlineDesc":
        return b.deadline.getTime() - a.deadline.getTime();
      default:
        return 0;
    }
  });
};
