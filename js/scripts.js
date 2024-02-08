var telefoneInput = document.getElementById('telefone');
        telefoneInput.addEventListener('input', function (e) {
            var tel = e.target.value.replace(/\D/g, '');
            tel = tel.replace(/^(\d{2})(\d)/g, '($1) $2');
            tel = tel.replace(/(\d)(\d{4})$/, '$1-$2');
            e.target.value = tel;
        });
