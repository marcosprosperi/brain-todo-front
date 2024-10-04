import { Task } from "@/Api/tasks/types/task";

export type SortOption = "createdAsc" | "createdDesc";

export const sortTasks = (tasksToSort: Task[], sortOption: SortOption): Task[] => {
  return [...tasksToSort].sort((a, b) => {
    switch (sortOption) {
      case "createdAsc":
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      case "createdDesc":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      default:
        return 0;
    }
  });
};