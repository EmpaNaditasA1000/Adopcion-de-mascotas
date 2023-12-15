window.addEventListener("load", () => {
    // Espera 2 segundos
    setTimeout(() => {
      // Escala la imagen un 20%
      const img = document.querySelector(".img1");
      img.style.transform = "scale(3.5)";
      img.style.transition = "transform 0.3s ease-in-out";
  
      // Oculta la imagen después de 2 segundos
      setTimeout(() => {
        img.style.display = "none";
        const layout = document.querySelector(".layout");
        layout.style.display = "flex";
      }, 2000);
    }, 2000);
  });

  const btnSiguiente1 = document.getElementById("btnsig1");

btnSiguiente1.addEventListener("click", () => {
  const layout = document.querySelector(".layout");
  const layout2 = document.querySelector(".layout2");

  layout.style.display = "none";
  layout2.style.display = "flex";
});