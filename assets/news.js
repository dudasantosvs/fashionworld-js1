const form = document.querySelector("form");
const emailInput = document.querySelector("#emailNews");
const subscribeButton = document.querySelector("#subscribeNews");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

subscribeButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  localStorage.setItem("email", email);

  // Limpa o campo de entrada após salvar o email
  emailInput.value = "";

  // Exibe o email salvo no console
  const savedEmail = localStorage.getItem("email");
  console.log("Email salvo:", savedEmail);

  const nameProduct = "Newsletter Subscription";
  swal(nameProduct, "Email cadastrado com sucesso!", "success");
  // Adicione aqui o código adicional que você deseja executar após salvar o email e exibir no console
});
