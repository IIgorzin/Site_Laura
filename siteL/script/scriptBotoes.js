// Function para ativacao do botao
function mostrarSurpresa() {
    const surpresa = document.getElementById("surpresa");
    surpresa.style.display = "block";
    surpresa.classList.add("aparecer");
    event.target.style.display = "none"; // Desaparece com o botao pos clique
}
// Function para ativacao do segundo botao
function mostrarHistoria(){
    const historia = document.getElementById("historia");
    historia.style.display = "block";
    const eventos = document.querySelectorAll(".evento");
    event.target.style.display = "none";// Desaparece com o botao pos clique
    // Faz a animacao das escritas 
    eventos.forEach((evento, index) => {
        setTimeout(()  => {
            evento.style.transition = 
            "all 0.8s ease";
            evento.style.opacity = "1";
            evento.style.transform = "translateY(0)";
        }, index * 800);
    });
}