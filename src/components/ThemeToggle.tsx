type ThemeToggleProps = {
    darkMode: boolean;
    toggleTheme: () => void;
};

function ThemeToggle({
    darkMode,
    toggleTheme
}: ThemeToggleProps) {

    return (

        <button
            onClick={toggleTheme}
        >
            {darkMode
                ? "☀️ Light Mode"
                : "🌙 Dark Mode"}
        </button>

    );
}

export default ThemeToggle;