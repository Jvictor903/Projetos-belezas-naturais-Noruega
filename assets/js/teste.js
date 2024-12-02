<<<<<<< HEAD
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();
=======
let btnEnviar = document.getElementById("validar")
function validarEnvio (){
>>>>>>> 5e2b9da ( alteracao)

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
<<<<<<< HEAD
      alert("Por favor, preencha todos os campos.");
      return;
=======
    alert("Por favor, preencha todos os campos.");
    return;
>>>>>>> 5e2b9da ( alteracao)
  }
  const feedbackMessage = document.getElementById("feedbackMessage");
  feedbackMessage.innerText = "Obrigado pelo feedback!";
  feedbackMessage.style.color = "green";
<<<<<<< HEAD

  document.getElementById("feedbackForm").reset();
});
=======
  
  document.getElementById("feedbackForm").reset();

}
btnEnviar.addEventListener ('click', validarEnvio)
>>>>>>> 5e2b9da ( alteracao)
