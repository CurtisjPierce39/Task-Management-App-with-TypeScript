import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

export interface Task {
    id: number;
    text: string;
}

interface TaskItemProps {
    task: Task;
    onEdit: (task: Task) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(task.text);

    const handleSave = () => {
        onEdit({ ...task, text: editedText });
        setIsEditing(false);
    };

    return (
        <Card>
            <Card.Body>
                {isEditing ? (
                    <Form.Control type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
                ) : (
                    <Card.Text>{task.text}</Card.Text>
                )}
                {isEditing ? (
                    <Button variant="success" onClick={handleSave}>Save</Button>
                ) : (
                    <>
                        <Button variant="warning" onClick={() => setIsEditing(true)}>Edit</Button>
                        <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
                    </>
                )}
            </Card.Body>
        </Card>
    );
};

export default TaskItem;