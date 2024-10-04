import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TaskCreate } from "@/Api/tasks/types/task";

interface TaskFormProps {
  onAddTask: ({ title, description, deadline }: TaskCreate) => void;
  isLoading: boolean;
}

export function TaskForm({ onAddTask, isLoading }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState<Date | null>(null);

  const isValidateTask = Boolean(
    title.trim() !== "" && description.trim() !== "" && deadline
  );

  const handleSubmit = () => {
    console.log(isValidateTask);
    if (isValidateTask) {
      onAddTask({
        title: title.trim(),
        description: description.trim(),
        deadline: deadline!,
      });
      setTitle("");
      setDescription("");
      setDeadline(null);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Agregar Nueva Tarea</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="task-title">Título</Label>
            <Input
              id="task-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ingrese el título de la tarea"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="task-description">Descripción</Label>
            <Textarea
              id="task-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingrese la descripción de la tarea"
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="w-full" htmlFor="task-deadline">
              Fecha límite
            </Label>
            <DatePicker
              id="task-deadline"
              selected={deadline}
              onChange={(date: Date | null) => setDeadline(date)}
              showTimeSelect
              dateFormat="dd/MM/yyyy HH:mm"
              placeholderText="Seleccione fecha y hora"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <Button
            onClick={handleSubmit}
            disabled={isLoading || !isValidateTask}
            className="w-full disabled:opacity-20"
          >
            Agregar Tarea
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
