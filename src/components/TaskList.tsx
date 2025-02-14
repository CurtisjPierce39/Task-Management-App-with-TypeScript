import React from 'react';
import { Task } from '../types/Task';

const TaskList: React.FC<{ tasks: Task[]; onEdit: (task: Task) => void; onDelete: (id: number) => void }> = ({ tasks, onEdit, onDelete }) => {
    return (
        <ul className="list-group">
            {tasks.map((task) => (
                <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                        <span className={`badge bg-${task.status === 'open' ? 'primary' : task.status === 'in progress' ? 'warning' : 'success'}`}>{task.status}</span>
                    </div>
                    <div>
                        <button className="btn btn-sm btn-warning me-1" onClick={() => onEdit(task)}>Edit</button>
                        <button className="btn btn-sm btn-danger" onClick={() => onDelete(task.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;