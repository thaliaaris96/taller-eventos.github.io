document.addEventListener("DOMContentLoaded", function () {
    const saludoDiv = document.querySelector("div");
    saludoDiv.addEventListener("click", function () {
        alert("Hola, soy el div");
    });
});