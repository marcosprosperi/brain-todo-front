import { Task } from "@/Api/tasks/types/task";

export type SortOption =
  | "createdAsc"
  | "createdDesc"
  | "deadlineAsc"
  | "deadlineDesc";

export const sortTasks = (
  tasksToSort: Task[],
  sortOption: SortOption
): Task[] => {
  return [...tasksToSort].sort((a, b) => {
    const createdAtA = new Date(a.createdAt);
    const createdAtB = new Date(b.createdAt);
    const deadlineA = new Date(a.deadline);
    const deadlineB = new Date(b.deadline);

    switch (sortOption) {
      case "createdAsc":
        return createdAtA.getTime() - createdAtB.getTime();
      case "createdDesc":
        return createdAtB.getTime() - createdAtA.getTime();
      case "deadlineAsc":
        return deadlineA.getTime() - deadlineB.getTime();
      case "deadlineDesc":
        return deadlineB.getTime() - deadlineA.getTime();
      default:
        return 0;
    }
  });
};
