import React, { useState } from 'react';
import Auth from './components/Auth';
import TaskList from './components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="App">
            {isLoggedIn ? (
                <TaskList />
            ) : (
                <Auth />
            )}
        </div>
    );
};

export default App;