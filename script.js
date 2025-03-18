// Variáveis para armazenar o estado original
const coresOriginais = {};
const tamanhosOriginais = {};

function mostrarDataHora() {
    document.getElementById('demo').innerHTML = Date();
}

function mudarCorTabela() {
    const elementosTab = document.querySelectorAll('.tab');
    elementosTab.forEach(elemento => {
        const id = elemento.id;
        if (!coresOriginais[id]) {
            // Armazena a cor original se ainda não foi armazenada
            coresOriginais[id] = elemento.style.backgroundColor;
        }
        if (elemento.style.backgroundColor === 'gold') {
            // Retorna à cor original
            elemento.style.backgroundColor = coresOriginais[id];
        } else {
            // Muda para vermelho
            elemento.style.backgroundColor = 'gold';
        }
    });
}

function mudarTamanhoLetra() {
    const elementosPrimeiro = document.querySelectorAll('.primeiro');
    elementosPrimeiro.forEach(elemento => {
        const id = elemento.id;
        if (!tamanhosOriginais[id]) {
            // Armazena o tamanho original se ainda não foi armazenado
            tamanhosOriginais[id] = elemento.style.fontSize;
        }
        if (elemento.style.fontSize === '50px') {
            // Retorna ao tamanho original
            elemento.style.fontSize = tamanhosOriginais[id];
        } else {
            // Muda para 100px
            elemento.style.fontSize = '50px';
        }
    });
}