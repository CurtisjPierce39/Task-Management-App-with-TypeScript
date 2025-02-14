import React from 'react';
import { Task } from '../types/Task';


const TaskForm: React.FC<{ task?: Task; onSave: (task: Task) => void; onCancel: () => void }> = ({ task, onSave, onCancel }) => {
    const [title, setTitle] = React.useState(task?.title || '');
    const [description, setDescription] = React.useState(task?.description || '');
    const [status, setStatus] = React.useState<Task['status']>(task?.status || 'open');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ id: task?.id || Date.now(), title, description, status });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value as Task['status'])}>
                    <option value="open">Open</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </form>
    );
};


export default TaskForm;