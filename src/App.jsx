import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { TaskProvider } from "./context/TaskContext";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TaskPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/register" render={() => <RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" render={() => <TaskPage />} />
          </Route>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
