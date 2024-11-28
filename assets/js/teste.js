
  document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Verificar se todos os campos foram preenchidos
    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Exibir mensagem de sucesso
    document.getElementById("feedbackMessage").innerText = "Obrigado pelo feedback!";
    document.getElementById("feedbackMessage").style.color = "red";

   
    document.getElementById("feedbackForm").reset();
  });

