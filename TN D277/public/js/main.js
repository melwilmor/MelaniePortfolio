    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', function(event) {
        const email = document.querySelector('#email').value;
        const emailConfirm = document.querySelector('#emailConfirm').value;

        if (email !== emailConfirm) {
            alert('Error: E-mails do not match.');

            event.preventDefault();
        }
    });
