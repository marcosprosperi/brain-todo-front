
import "react-datepicker/dist/react-datepicker.css";
import useTasks from "@/screens/tasks/queries/getAll";
import { TaskList } from "./components/taskList";
import { TaskForm } from "./components/taskForm";

const TodoList = () => {
  const { data: dataTasks, isLoading } = useTasks(); 
  const tasks = dataTasks.tasks;

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Tareas</h1>
      <div className="space-y-6">
        <TaskForm isLoading={isLoading} />
        <TaskList
          tasks={tasks}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default TodoList;
