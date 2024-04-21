const form = document.getElementById('form');
const inputs = document.querySelectorAll('.formcontato__input');
const textArea = document.getElementById('mensagem');
const spans = document.querySelectorAll('.span__erro');
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const buttonSubmit = document.querySelector('.formcontato__botao');

document.addEventListener('DOMContentLoaded', function () {
    inputs.forEach(input => {
        input.addEventListener('keyup', function () {
            if (input.value && !input.checkValidity()) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }

            if (validarFormulario(inputs)) {
                buttonSubmit.disabled = false;
            } else {
                buttonSubmit.disabled = true;
            }
        })
    });
});

const validarFormulario = (elementos) => {
    let validos = true;

    elementos.forEach(function (input) {
        if (!input.checkValidity()) {
            validos = false;
        }
    });

    return validos;
}

const mostrarErro = (index, mensagem) => {
    if (index !== 3) {
        inputs[index].style.border = '2px solid #f89999';
        spans[index].innerHTML = mensagem;
        spans[index].style.display = 'block';
    } else {
        textArea.style.border = '2px solid #f89999';
        spans[index].innerHTML = mensagem;
        spans[index].style.display = 'block';
    }
}

const removerErro = (index) => {
    if (index !== 3) {
        inputs[index].style.border = '';
        spans[index].style.display = 'none';
    } else {
        textArea.style.border = '';
        spans[index].style.display = 'none';
    }
}

const validarNome = () => {
    if (inputs[0].value.length < 3) {
        mostrarErro(0, 'Nome deve ter no mínimo 3 caracteres');
    } else if (inputs[0].value.length > 50) {
        mostrarErro(0, 'Nome maior que 50 caracteres, abrevie os sobrenomes');
    } else {
        removerErro(0);
    }
}

const validarEmail = () => {
    if (!inputs[1].value.length) {
        mostrarErro(1, 'Preencha o e-mail');
    } else if (regexEmail.test(inputs[1].value) === false) {
        mostrarErro(1, 'Digite um e-mail válido');
    } else {
        removerErro(1);
    }
}

const validarAssunto = () => {
    if (!inputs[2].value.length) {
        mostrarErro(2, 'Preencha o assunto');
    } else if (inputs[2].value.length > 50) {
        mostrarErro(2, 'Assunto pode ter no máximo 50 caracteres');
    } else {
        removerErro(2);
    }
}

const validarMensagem = () => {
    if (!textArea.value.length) {
        mostrarErro(3, 'Digite uma mensagem');
    } else if (textArea.value.length > 300) {
        mostrarErro(3, 'A mensagem pode ter no máximo 300 caracteres');
    } else {
        removerErro(3);
    }
}
