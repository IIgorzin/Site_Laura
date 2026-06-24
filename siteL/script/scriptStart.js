//func para rodar o botao do inicio
function iniciar(){
    const intro = 
        document.getElementById("introducao");
    intro.style.opacity = "0";
    setTimeout(() => {
        intro.style.display = "none";
        document.getElementById("conteudoPrincipal").classList.remove("escondido");
    }, 800);
}
