
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nombre, email, mensaje }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                //alert de comfirmacion
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje Enviado',
                    text: 'Tu mensaje ha sido enviado correctamente.'
                });
            })
            .catch((error) => {
                console.error('Error:', error);
                //aleer de error 
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.'
                });
            });
    });
})
