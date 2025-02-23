function calcularTempoRestante(dataFutura) {
    const dataAtual = new Date().getTime();
    const tempoRestante = dataFutura - dataAtual;

    const segundosMinuto = 60 * 1000;
    const segundosHora = 60 * segundosMinuto;
    const segundosDia = 24 * segundosHora;

    const dias = Math.floor(tempoRestante / segundosDia);
    const horas = Math.floor((tempoRestante % segundosDia) / segundosHora);
    const minutos = Math.floor((tempoRestante % segundosHora) / segundosMinuto);
    const segundos = Math.floor((tempoRestante % segundosMinuto) / 1000);

    return {dias, horas, minutos, segundos};
}

const atualizarTemporizador = () => {
    const dataFutura = new Date("2026-01-01T00:00:00").getTime();
    const tempoRestante = calcularTempoRestante(dataFutura);

    document.getElementById('dias').innerText = `${tempoRestante.dias} dias`;
    document.getElementById('horas').innerText = `${tempoRestante.horas} horas`;
    document.getElementById('minutos').innerText = `${tempoRestante.minutos} minutos`;
    document.getElementById('segundos').innerText = `${tempoRestante.segundos} segundos`;

}

const intervalo = setInterval(atualizarTemporizador, 1000);