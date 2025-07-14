
async function checkUserExist(email: string, pseudo: string): Promise<{ emailExists: boolean; pseudoExists: boolean }> {
	const response = await fetch("http://user-service:3000/api/users/check", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({email: email, pseudo: pseudo})
	});
	if (!response.ok) {
		throw new Error("Erreur lors de la vérification du pseudo/email");
	}

	const data = await response.json();

	return {
		emailExists: data.emailExists,
		pseudoExists: data.pseudoExists
	};
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("new-player-form") as HTMLFormElement;

	form.addEventListener("submit", async (event) => {
	  event.preventDefault();

	const name = (document.getElementById("name") as HTMLInputElement).value;
	const firstName = (document.getElementById("firstName") as HTMLInputElement).value;
	const pseudo = (document.getElementById("pseudo") as HTMLInputElement).value;
	const email = (document.getElementById("email") as HTMLInputElement).value;
	const password = (document.getElementById("password") as HTMLInputElement).value;

	// On vérifie que les champs sont bien remplies
	if (!name.trim() || !firstName.trim() || !email.trim() || !password.trim()) {
		const errorMessage = document.getElementById("error-message");
		if (errorMessage) {
			errorMessage.textContent = "All fields are required !";
		}
	return;
	}

	// On fait un appel API pour vérifier que les pseudos et email sont nouveaux
	try {
		const {emailExists, pseudoExists} = await checkUserExist(email, pseudo);
		const errorMessage = document.getElementById("error-message");
		if (!errorMessage) return;
		if (emailExists) {
			errorMessage.textContent = "Email already used !";
			return;
		}
		else if (pseudoExists) {
			errorMessage.textContent = "Pseudo already used !";
			return;
		}
	} catch (error) {
		console.error("Erreur lors de la vérification :", error);
	}

  });
});
