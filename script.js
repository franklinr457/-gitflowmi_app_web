document.getElementById("btnClick").addEventListener("click", function () {
  document.getElementById("output").textContent = "¡Botón clicado!";
});

//Este es otro metodo para hacer
//Este codigo tambien tiene codigo takeit
//puño de hierro
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    document.getElementById("formOutput").textContent =
      "Nombre: " + name + ", Email: " + email;
  });
