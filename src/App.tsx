import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import CallbackPage from "./components/CallbackPage";
import ProtectedPage from "./components/ProtectedPage";
import { useAuth0 } from "@auth0/auth0-react";
import ProfilePage from "./components/ProfilePage";
import AuthenticationGuard from "./components/AuthenticationGuard";
import TaskList from "./components/TaskList";

const App: React.FC = () => {

  const { isLoading } = useAuth0();

  if (isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      />
      <Route
        path="/protected"
        element={<AuthenticationGuard component={ProtectedPage} />}
      />
            <Route
        path="/TaskList"
        element={<AuthenticationGuard component={TaskList} />}
      />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
};

export default App;
