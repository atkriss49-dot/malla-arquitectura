const celdas = document.querySelectorAll(".celda");

celdas.forEach(celda => {
  celda.addEventListener("click", () => {
    celda.style.backgroundColor = "#4CAF50";
  });
});
