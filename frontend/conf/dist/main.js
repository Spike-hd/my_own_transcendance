"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("new-player-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const firstName = document.getElementById("firstName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (!name.trim() || !firstName.trim() || !email.trim() || !password.trim()) {
            const errorMessage = document.getElementById("error-message");
            if (errorMessage) {
                errorMessage.textContent = "Tous les champs sont obligatoires.";
            }
            return; // Stoppe l'exécution pour ne pas envoyer le formulaire
        }
    });
});
