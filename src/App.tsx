import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Tasks from "./pages/Tasks";
import Navbar from "./components/Navbar";
import Learning from "./pages/Learning";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import Projects from "./pages/Projects";
import { useState, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";



function App() {

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        setDarkMode(true);
    }

  }, []);

  useEffect(() => {

    document.body.className =
        darkMode
            ? "dark"
            : "light";

    localStorage.setItem(
        "theme",
        darkMode
            ? "dark"
            : "light"
    );

  }, [darkMode]);

  function toggleTheme() {

    setDarkMode(
        !darkMode
    );
  }

  return (
    <BrowserRouter>
      
      <ThemeToggle
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <Navbar />

      

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/learning"
        element={<Learning />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/profile"
            element={<ProfilePage />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;