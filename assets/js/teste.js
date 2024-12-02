let btnEnviar = document.getElementById("validar")
function validarEnvio (){

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {

      alert("Por favor, preencha todos os campos.");
      return;
  }
  const feedbackMessage = document.getElementById("feedbackMessage");
  feedbackMessage.innerText = "Obrigado pelo feedback!";
  feedbackMessage.style.color = "green";
  document.getElementById("feedbackForm").reset();
};

  document.getElementById("feedbackForm").reset();

btnEnviar.addEventListener ('click', validarEnvio)
