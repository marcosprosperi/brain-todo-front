import { useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useTasks from "@/screens/tasks/queries/getAll";
import useDeleteTask from "@/screens/tasks/mutations/delete";
import useCreateTask from "@/screens/tasks/mutations/create";
import useUpdateTask from "@/screens/tasks/mutations/update";
import { TaskList } from "./components/taskList";
import { TaskForm } from "./components/taskForm";
import { TaskCreate } from "@/Api/tasks/types/task";

const TodoList = () => {
  const { mutate: deleteTaskMutation, isSuccess: isSuccessDeleteTask } =
    useDeleteTask();
  const { mutate: createTaskMutation, isSuccess: isSuccessCreateTask } =
    useCreateTask();
  const { mutate: updateTaskMutation, isSuccess: isSuccessUpdateTask } =
    useUpdateTask();
  const {
    data: dataTasks,
    refetch: refetchTasks,
    isLoading: isGetTasksLoading,
  } = useTasks();
  const tasks = dataTasks.tasks;

  useEffect(() => {
    refetchTasks();
  }, [isSuccessDeleteTask, isSuccessCreateTask, isSuccessUpdateTask]);

  const addTask = (task: TaskCreate) => {
    createTaskMutation(task);
  };

  const toggleTask = (id: string) => {
    updateTaskMutation({
      id,
      params: {
        isDone: !tasks.find((task) => task.id === id)?.isDone,
      },
    });
  };

  const deleteTask = async (id: string) => {
    deleteTaskMutation(id);
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Tareas</h1>
      <div className="space-y-6">
        <TaskForm onAddTask={addTask} isLoading={isGetTasksLoading} />
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          isLoading={isGetTasksLoading}
        />
      </div>
    </div>
  );
};

export default TodoList;
