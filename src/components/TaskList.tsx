import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import TaskItem, { Task } from './TaskItem';

const TaskList: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask }]);
            setNewTask('');
        }
    };

    const handleEditTask = (updatedTask: Task) => {
        setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    };

    const handleDeleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Add a new task</h2>
                    <Form onSubmit={(e) => { e.preventDefault(); handleAddTask(); }}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Enter task" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Add Task</Button>
                    </Form>
                    {tasks.map(task => (
                        <TaskItem key={task.id} task={task} onEdit={handleEditTask} onDelete={handleDeleteTask} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default TaskList;