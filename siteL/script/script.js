function atualizarContadores() {
    const declara = new Date(2026, 3, 20); // 20 de abril (mês começa em 0)
    const hoje = new Date();

    // zera horas pra evitar bug de fuso
    declara.setHours(0, 0, 0, 0);
    hoje.setHours(0, 0, 0, 0);

    const diasDeclaracao = Math.floor(
        (hoje - declara) / (1000 * 60 * 60 * 24)
    );

        // Insere essa escrita na div 
    document.getElementById("contadorConhecemos").innerHTML =
        `✨ Você faz parte da minha vida desde 2015 ✨`;

    document.getElementById("contadorNamoro").innerHTML =
        `Nos declaramos um para o outro há ${diasDeclaracao} dias ❤️`;
}
atualizarContadores();
