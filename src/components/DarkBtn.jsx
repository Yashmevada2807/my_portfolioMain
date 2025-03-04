import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const DarkBtn = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); 
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded flex items-center gap-2"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkBtn;
