const form = document.querySelector("form");
let users = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Verifica se o usuário já está cadastrado pelo email
  const isUserRegistered = users.some((user) => user.email === email);

  if (isUserRegistered) {
    document.querySelector("#message").innerHTML = "Usuário já cadastrado! ";
  

    // Adicione aqui o código para exibir uma mensagem de erro ao usuário
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  console.log("Usuário registrado:", user);

  // Limpa os campos de entrada após o registro
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
});
