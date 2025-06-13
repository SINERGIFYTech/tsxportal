/*! investment auth.js | Adminuiux 2023-2024 */

/* ==========================================================================
Auth pages js
========================================================================== */

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  // main links active
  setActivelink();

  // set header space
  fixedHeaderSpace();

  // auto theme mode
  //autoThemeMode();

  //feature icons
  featherjs();

  // cover img background set
  coverimg();

  // don't close dropdown
  dontclosedd();

  // check strength password
  checkstrength();

  // bs tooltip
  bstooltip();

  //swiper carousel
  swipernavpagination();

  // hide page loader
  PageLoaderHide();

  // Referencia al formulario
  const loginForm = document.getElementById("loginForm");

  // Evento submit del formulario
  loginForm.addEventListener("submit", async (event) => {
    console.log('entra')
    event.preventDefault(); // Evita recargar la página

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validaciones básicas
    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("El email no tiene un formato válido.");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      // Enviar la solicitud al backend
      const response = await fetch(`${backendURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error en el login.");
      }

      // Guardar el token en localStorage
      AuthHelper.saveToken(data.token);
      AuthHelper.savePayload(data.payload);

      alert("Inicio de sesión exitoso.");
      // Redirigir o realizar acciones posteriores al login
      window.location.href = "/investment-dashboard.html"; // Cambia por la ruta deseada
    } catch (error) {
      console.error("Error en el login:", error);
      alert(error.message);
    }
  });
});
