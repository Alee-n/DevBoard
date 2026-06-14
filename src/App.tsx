import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/users"
        element={<Users />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/profile"
            element={<ProfilePage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;