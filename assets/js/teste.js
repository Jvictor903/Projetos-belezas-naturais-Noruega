document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
  }

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
  }

  
  const feedbackMessage = document.getElementById("feedbackMessage");
  feedbackMessage.innerText = "Obrigado pelo feedback!";
  feedbackMessage.style.color = "green";

  
  document.getElementById("feedbackForm").reset();
});
