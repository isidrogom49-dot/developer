document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  // MENU HAMBURGUESA
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if(window.innerWidth <= 768){
        navMenu.classList.remove("show");
      }
    });
  });

  // EFECTO 3D TARJETAS
  const cards = document.querySelectorAll(".integrante-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.transform = `perspective(700px) rotateY(${(x - rect.width/2)/25}deg) rotateX(${-(y - rect.height/2)/25}deg) scale(1.05)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
    });
  });
});
