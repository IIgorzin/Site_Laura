// func para o botao tirar o carrossel
function irParaOutraSecao() {
    document.getElementById("carrossel").style.display = "none";
    document.getElementById("btnCarta").style.display = "none";
    document.getElementById("carta").style.display = "flex";
}
//salva conteudo das cartas
const cartas = [
    {
        data: "<u>22/04/2026</u>",
        titulo: "<strong>Minha primeira carta amorosa para você</strong>",
        texto: 'Estou escrevendo esse texto logo após esse que mandei de madrugada, mas esse aqui vou mandar em outro momento do dia, espero que goste!!<br>Ah Saranzinha, oq falar de vc? uma mulher tão <strong>preciosa</strong> (ksksksksk virou minha palavra favorita) as palavras ficam até sem graça perto doq vc significa, e olha que <mark>vc significa muita coisa</mark>, e vc não significa muita coisa só porq eu gosto de você, mas sim <mark>pela pessoa que você é</mark>, quantas vezes fui um péssimo amigo ou péssima pessoa com vc e você sempre continuou sendo minha amiga, hoje sendo um pouco mais <i>"cabeça"</i>, prometo não ser ruim novamente contigo.<br> Apenas te chamar de linda ou elogiar pela beleza chega a ser um desrepeito com você, essa nem a coisa mais interessante sobre você!!! Uma pessoa tão interessante, super gentil, atenciosa e acho que um dos que eu mais gosto, cuidadosa, é tão bonito ver você fazendo suas coisas, <mark>o que mais me encanta é ver você adorando a Deus</mark>, é tão lindo, também a coisa que eu mais gosto é sua busca por cristo, o quão chegadas és nEle, isso chega até confortar o meu coração, pois <i>"acaso um crente deve-se juntar a um descrente?"(2corintios6:14)</i>.<br> Você é uma querida que as vezes eu até acho que "não sirvo" para você kkkkkkkkkk, irei finalizar por aqui pois estou morrendoooooo de sono e já n consigo formular uma frase com sentido kkkkkkkkk, seu perfume ficou na minha blusa de novo, estou feliz ;) CT 1:15(esse vai ser meu versículo favorito para você) ❗🙃 <mark><strong>Eu te amo</strong></mark> 😄😉'
    },
    {
        data: "<u>23/04/2026</u>",
        titulo: "<strong>Minha segunda carta amorosa para você</strong>",
        texto: 'Tem algo em você que me faz sorrir toda vez que te vejo, algo que me acalma também, algo que me faz feliz mesmo sem você fazer nada, algo que me faz gostar do jeito que você fala, do jeito que faz as coisas(é um jeitinho tão seu) algo que me faz querer te ver todos os dias, algo que me confirma todo dia que é você, algo que deixa tudo leve de uma forma que nada é forçado, <mark>algo que tudo flui natural como se <strong>sempre tivesse que ser assim</strong></mark>, <i>algo que <strong>sempre me fez sonhar com nós dois.</strong></i> Afinal, acho que já descobri o que é esse algo, <mark>esse "algo" <strong>é você mesmo</strong> 🙃💓</mark>'
    },
    {
        data: "<u>22/06/2026</u>",
        titulo: "<strong>Uma carta para meu amor</strong>",
        texto: '<strong>Oii Laurinha</strong>, eu espero que você tenha gostado dessa surpresa, demorou bastante para fazer kkkkkkk mas foi feito com MUITO carinho e cuidado, cada detalhe, animação, cor, tamanho, texto, foi feito com carinho :)<br>Estou ouvindo a sua música favorita do <em>Lagum</em> que você disse que é a nossa música, mas como eu tinha entendido errado a letra eu falei que não era kkkkkkkkkk, e ela diz<br><i>"Momentos turbulentos sei que virão<br>O medo e insegurança<br>Mas não vamos deixar isso crescer<br>Somos maiores que isso tudo"</i><br>Nós vamos passar por MUIIITAS coisas, boas e ruins, mas quero que saiba que eu nunca vou te deixar sozinha, mesmo nos dias mais difíceis estarei por você e por nós.<br>Meu maior sonho é construir uma família com você.<br>Eu te amo, minha gatinha, minha Laurinha & minha melhor amiga.<br><i>Só Tinha de Ser Com Você - Elis Regina</i><br>"Se ao menos pudesse saber<br>Que eu <mark>sempre fui só de você</mark><br>Você <u>sempre foi só de mim.</u>"'
    }
];

// var para a funcao
let cartaAtual = 0;
//funcao para abrir a carta (animacao)
function abrirCarta() {
    const tampa = document.querySelector(".envelopeTampa");
    const envelope = document.getElementById("envelope");
    tampa.classList.add("tampaAberta");
    // abre carta depois de 1s
    setTimeout(() => {
        document.getElementById("conteudoCarta")
            .classList.add("mostrar");
    }, 900);
    // faz envelope sumir depois de um pouco mais
    setTimeout(() => {
        envelope.classList.add("envelopeSumindo");
    }, 1500);
}
// funcao para atualizar qual carta esta
function atualizarCarta(){
    document.getElementById("tituloCarta").innerHTML = cartas[cartaAtual].titulo;
    document.getElementById("textoCarta").innerHTML = cartas[cartaAtual].texto;
    document.getElementById("contadorCarta").textContent = `Carta ${cartaAtual + 1} de ${cartas.length}`;
    document.getElementById("dataCarta").innerHTML = cartas[cartaAtual].data;
    const btnFinalizar = document.getElementById("btnFinalizar");
    if(cartaAtual === cartas.length - 1){
        btnFinalizar.style.display = "block";
    } else {
        btnFinalizar.style.display = "none";
    }
}
//funcao para trocar carta
function proximaCarta(){
    cartaAtual++;
    if(cartaAtual >= cartas.length){
        cartaAtual = 0;
    }
    atualizarCarta();
}
//funcao para voltar carta
function cartaAnterior(){
    cartaAtual--;
    if(cartaAtual < 0){
        cartaAtual = cartas.length - 1;
    }
    atualizarCarta();
}
//executa a func
window.onload = atualizarCarta;

