// const email = document.querySelector("#email");
// const password = document.querySelector("#password");

// document.querySelector("form").addEventListener("submit", async (e) => {
    // e.preventDefault();
  //   document.querySelector("#message").innerHTML = "";
   //  let find = false;
   //  if(localStorage.getItem("users")){
    //     const users = JSON.parse(localStorage.getItem("users"))
    //     console.log(users);

       //  users.forEach((e) => {
        //     if(e.email === email.value && e.password === password.value){
               // document.querySelector("#message").innerHTML = 'Olá, ${e.name}! Você está autorizado à atualizar seu perfil, clique no link abaixo';
               // find === true;
               // return;
            //    localStorage.setItem("activeUser", e.name);
            //    window.location.href = 'index.html';
           //  }
           //  else{
            //     document.querySelector("#message").innerHTML = "Email e/ou senha não cadastrados!";
         //    }
        // });
   //  }
// });


const form = document.querySelector("form");
let users = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  const email = emailInput.value;
  const password = passwordInput.value;

  // Obtém os usuários registrados no localStorage
  if (localStorage.getItem("users")) {
    users = JSON.parse(localStorage.getItem("users"));
  }

  // Procura pelo usuário com o email e senha fornecidos
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    window.location.href = 'index.html';
   
  } else {
    document.querySelector("#message").innerHTML = "Email e/ou senha não cadastrados!";
  }

  // Limpa os campos de entrada após o login
  emailInput.value = "";
  passwordInput.value = "";
});
