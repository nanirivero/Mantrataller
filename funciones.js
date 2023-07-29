document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
  
    if (form) {
      const successMessage = document.createElement('p');
      successMessage.textContent = '¡Formulario enviado con éxito! Gracias por tu mensaje :).';
      successMessage.style.color = 'green';
      successMessage.style.display = 'none';
  
      function showSuccessMessage() {
        successMessage.style.display = 'block'; 
        setTimeout(() => {
          successMessage.style.display = 'none'; 
        }, 3000); 
        form.reset(); 
      }
  
      form.appendChild(successMessage);
      form.addEventListener('submit', handleSubmit);
    }
  });
  