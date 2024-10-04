import { useState, useMemo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format, isAfter } from "date-fns";
import { Task } from "@/Api/tasks/types/task";
import { SortOption, sortTasks } from "../utils/utils";

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  isLoading: boolean;
}

export function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  isLoading,
}: TaskListProps) {
  const [sortOption, setSortOption] = useState<SortOption>("createdDesc");
  const sortedTasks = useMemo(
    () => sortTasks(tasks, sortOption),
    [tasks, sortOption]
  );

  const overdueTasks = useMemo(() => {
    const now = new Date();
    return sortedTasks.filter(
      (task) => !task.isDone && isAfter(now, task.deadline)
    );
  }, [sortedTasks]);

  const renderTask = (task: Task) => (
    <Card key={task.id} className="mb-4">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id={`task-${task.id}`}
              checked={task.isDone}
              onCheckedChange={() => onToggleTask(task.id)}
            />
            <label
              htmlFor={`task-${task.id}`}
              className={`${
                task.isDone ? "line-through" : ""
              } cursor-pointer font-medium`}
            >
              {task.title}
            </label>
          </div>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onDeleteTask(task.id)}
            className="disabled:opacity-20"
            disabled={isLoading}
          >
            Eliminar
          </Button>
        </div>
        <p className={`text-sm mb-2 ${task.isDone ? "line-through" : ""}`}>
          {task.description}
        </p>
        <div className="flex flex-col sm:flex-row justify-between text-xs text-gray-500">
          <span>Creado: {format(task.createdAt, "dd/MM/yyyy HH:mm")}</span>
          <span
            className={
              isAfter(new Date(), task.deadline) && !task.isDone
                ? "text-red-500 font-semibold"
                : ""
            }
          >
            Límite: {format(task.deadline, "dd/MM/yyyy HH:mm")}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Tareas</CardTitle>
        <div className="mt-2">
          <Select onValueChange={(value) => setSortOption(value as SortOption)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="createdDesc">Más recientes primero</SelectItem>
              <SelectItem value="createdAsc">Más antiguas primero</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-10 sm:mb-0 gap-2">
            <TabsTrigger value="all" className="text-xs sm:text-sm">
              Todas
            </TabsTrigger>
            <TabsTrigger value="pending" className="text-xs sm:text-sm">
              Pendientes
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm">
              Terminadas
            </TabsTrigger>
            <TabsTrigger value="overdue" className="text-xs sm:text-sm">
              Vencidas
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">{sortedTasks.map(renderTask)}</TabsContent>
          <TabsContent value="pending">
            {sortedTasks.filter((task) => !task.isDone).map(renderTask)}
          </TabsContent>
          <TabsContent value="completed">
            {sortedTasks.filter((task) => task.isDone).map(renderTask)}
          </TabsContent>
          <TabsContent value="overdue">
            {overdueTasks.map(renderTask)}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
