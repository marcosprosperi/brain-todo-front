import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useCreateTask from "../mutations/create";

interface TaskFormProps {
  isLoading: boolean;
}

export function TaskForm({ isLoading }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState<Date | null>(null);
  const { mutate: createTaskMutation, isSuccess, isPending } = useCreateTask();

  const isValidateTask = Boolean(
    title.trim() !== "" && description.trim() !== "" && deadline
  );

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setDescription("");
      setDeadline(null);
    }
  }, [isSuccess]);

  const handleSubmit = () => {
    if (isValidateTask) {
      createTaskMutation({
        title: title.trim(),
        description: description.trim(),
        deadline: deadline!,
      });
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
              disabled={isLoading || isPending}
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
              disabled={isLoading || isPending}
              id="task-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ingrese la descripción de la tarea"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="w-full" htmlFor="task-deadline">
              Fecha límite
            </Label>
            <DatePicker
              disabled={isLoading || isPending}
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
            disabled={isLoading || !isValidateTask || isPending}
            className="w-full disabled:opacity-20"
          >
            Agregar Tarea
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
