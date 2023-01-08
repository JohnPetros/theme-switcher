const themeSwitcher = document.getElementById("theme-switcher");
const switch_ = document.getElementById("switch");
const body = document.body;

function moveSwitchTo(direction) {
  const currentDirection = direction === "left" ? "right" : "left";
  switch_.classList.remove(currentDirection);
  switch_.classList.add(direction);

  localStorage.setItem("direction", direction);
}

function switchTo(theme) {
  const currentTheme = theme === "dark" ? "light" : "dark";
  body.classList.remove(currentTheme);
  body.classList.add(theme);

  localStorage.setItem("theme", theme);
}

function switchTheme() {
  if (body.classList.contains("light")) {
    switchTo("dark");
    moveSwitchTo("left");
    return;
  }

  switchTo("light");
  moveSwitchTo("right");
}

themeSwitcher.addEventListener("click", switchTheme);

window.onload = () => {
  const theme = localStorage.getItem("theme") ?? "light";
  const direction = localStorage.getItem("direction") ?? "right";

  switchTo(theme);
  moveSwitchTo(direction);
};
