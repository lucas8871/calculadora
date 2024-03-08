document.addEventListener('DOMContentLoaded', function() {
    var inputValor = document.querySelector('.input-valor');
    var buttons = document.querySelectorAll('.key li');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var buttonText = this.textContent;

            if (buttonText === '=') {
                try {
                    inputValor.textContent = eval(inputValor.textContent);
                } catch (error) {
                    inputValor.textContent = 'Erro';
                }
            } else if (buttonText === 'c') {
                inputValor.textContent = '';
            } else {
                inputValor.textContent += buttonText;
            }
        });
    });
});
