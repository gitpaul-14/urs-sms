<script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"></script>

document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("toggleDark");
    const darkMode = localStorage.getItem("darkMode");

    // Apply dark mode if it's enabled in localStorage
    if (darkMode === "enabled") {
        document.documentElement.classList.add("dark");
        if (darkModeToggle) {
            darkModeToggle.checked = true; // Keep toggle in sync
        }
    }

    // Toggle dark mode
    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", () => {
            if (darkModeToggle.checked) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("darkMode", "enabled");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});