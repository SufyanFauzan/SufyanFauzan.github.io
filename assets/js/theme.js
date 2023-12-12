const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check the user's preference in local storage
let currentTheme = localStorage.getItem("theme") || "light";
body.classList.add(currentTheme);

// Toggle between light and dark mode
themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("light") ? "dark" : "light";
  body.classList.replace(currentTheme, newTheme);
  currentTheme = newTheme;

  // Save the user's preference in local storage
  localStorage.setItem("theme", newTheme);
});