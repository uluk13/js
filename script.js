const Btn = document.querySelector("#Btn");

const saved = localStorage.getItem("theme");

if (saved === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}


Btn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
