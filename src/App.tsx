import React from "react";
import { Task } from "./types/Task";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = React.useState<Task | null>(null);
  const [showForm, setShowForm] = React.useState(false);

  const handleAddTask = () => {
    setSelectedTask(null);
    setShowForm(true);
  };

  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
    setShowForm(true);
  };

  const handleSaveTask = (task: Task) => {
    setTasks(prevTasks =>
      prevTasks.some(t => t.id === task.id)
        ? prevTasks.map(t => t.id === task.id ? task : t)
        : [...prevTasks, task]
    );
    setShowForm(false);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleCancelForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container mt-4">
      <h1>Task Management</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddTask}>Add Task</button>
      {showForm && <TaskForm task={selectedTask || undefined} onSave={handleSaveTask} onCancel={handleCancelForm} />}
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default App;