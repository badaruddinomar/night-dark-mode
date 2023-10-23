const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

// Event handlers --

btn.addEventListener("click", (e) => {
  btn.classList.toggle("day");

  if (btn.classList.contains("day")) {
    container.classList.add("day");
    container.classList.remove("night");
  } else {
    container.classList.add("night");
    container.classList.remove("day");
  }
});
