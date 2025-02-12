const resultado = document.getElementById('resultado');
const equacao = document.getElementById('equacao');

equacao.value = ''

function limpar(valor) {
    equacao.value = valor;
    resultado.textContent = '0';
    equacao.textContent = equacao.value
}

function adicionarValor(valor) {
    if (equacao.value === 'error' || equacao.value === '0' || equacao.value.includes("(")){
        limpar('');
    }
    equacao.value += valor;
    equacao.textContent = equacao.value;
}

function calcular(){
    try {
        equacao.value = eval(equacao.value)
        resultado.textContent = equacao.value
    } catch {
        resultado.textContent = 'error'
    }
}

function calcularQuadrado() {
    try {
        let valor = parseFloat( eval(equacao.value) );
        equacao.value = '(' + equacao.value + ')²'
        equacao.textContent = equacao.value
        resultado.textContent = valor ** 2;
    } catch {
        resultado.textContent = 'error';
    }
}

function calcularRaizQuadrada() {
    try {
        let valor = parseFloat( eval(equacao.value));
        if (valor < 0) {
            resultado.textContent = 'error';
        } else {
            resultado.textContent = Math.sqrt(valor);
            equacao.value = '√(' + equacao.value + ')'
            equacao.textContent = equacao.value

        }
    } catch {
        resultado.textContent = 'error';
    }
}

limpar('0')