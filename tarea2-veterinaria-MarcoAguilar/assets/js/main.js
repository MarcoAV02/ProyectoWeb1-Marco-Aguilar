// Validación del login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const usuario = document.getElementById("usuario").value.trim();
      const clave = document.getElementById("clave").value.trim();
      const mensajeError = document.getElementById("mensaje-error");

      if (usuario === "cenfo" && clave === "123") {
        window.location.href = "inicio.html";
      } else {
        mensajeError.textContent = "Usuario o clave incorrectos";
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 400);
      }
    });
  }
});
