const fotos = [

{
    imagem: "pics/admirando.jpg",
    texto: "<strong>Nossa primeira foto depois das declarações </strong> 👩‍❤️‍👨"
},

{
    imagem: "pics/servindosemear.jpg",
    texto: "<strong>Esse dia eu lembro de estar <em>tão feliz ao seu lado</em></strong> 😄"
},

{
    imagem: "pics/beliscaofofo.jpeg",
    texto: "<strong>Nós <mark>sempre</mark> combinamos </strong>👀"
},

{
    imagem: "pics/nosbus.jpg",
    texto: "<strong>Aqui eu já sentia que tinhamos chance de ser algo </strong>🤯"
},

{
    imagem: "pics/esfiha.jpeg",
    texto: "<strong>Eu já via diferença no nosso comportamento, só tinha muitas dúvidas ainda </strong>🫠"
},

{
    imagem: "pics/andandorua.jpeg",
    texto: "<strong>Estava doido de paixão por você kkkkkk, porém cuidando para não ser nenhuma carência </strong>😬"
},

{
    imagem: "pics/nosdiadeclaracao.jpg",
    texto: "<strong>Sendo feliz em contar para você e <u>sendo feliz em te escutar</u> </strong>🥹"
},

{
    imagem: "pics/calcada.jpg",
    texto: "<strong>Amo ter momentos de conversa com você, e amo como <mark>fazemos lugares simples</mark> como uma calçada, serem <mark>lugares especiais</mark></strong>💓"
},

{
    imagem: "pics/elakissme.jpg",
    texto: "<strong>Desfrutando de te amar abertamente </strong>💜"
},

{
    imagem: "pics/amarrando.jpeg",
    texto: "<strong>Amo ver você fazendo qualquer coisinha que seja </strong>🥺"
},

{
    imagem: "pics/presentecoxa.jpg",
    texto: '<strong>Eu amo você por causa que mesmo com <del>muitos motivos para "me odiar"</del>, <mark>você continuou sendo minha amiga e me amando</mark></strong>🫂'
},

{
    imagem: "pics/eukisshead.jpg",
    texto: "<strong>Eu amo poder estar criando um futuro com você </strong>⏳"
},

{
    imagem: "pics/elalindaespelho.jpg",
    texto: "<strong>Eu te amo porque vejo Jesus em você, e isso é o ponto principal sobre ti </strong>✝️"
},

{
    imagem: "pics/elalindadeverde.jpg",
    texto: "<strong>Eu te amo por causa que você é amorosa, gentil, respeitosa e carinhosa </strong>🥰"
},

{
    imagem: "pics/elalindaperfeita.jpg",
    texto: "<strong>Você é uma <mark>obra de arte</mark></strong>😻"
},

{
    imagem: "pics/noscarro.jpg",
    texto: "<strong><b>Eu te amo, Laura.</b></small>"
}];
// faz var para comecar as fotos 
let indice = 0;
// funcao para atualizar qual foto esta
function atualizar() {
    const img = document.getElementById("fotoAtual");
    img.src = fotos[indice].imagem;
    document.getElementById("fotoAtual").src = fotos[indice].imagem;
    document.getElementById("legenda").innerHTML = fotos[indice].texto;
    document.getElementById("contadorFotos").textContent = `${indice + 1}/${fotos.length}`;
}
//funcao para ir para a proxima foto
function proxima() {
    indice++;
    if(indice >= fotos.length) {
        indice = 0;
    }
    atualizar();
}
//funcao para ir para a foto anterior
function anterior() {
    indice--;
    if(indice < 0) {
        indice = fotos.length - 1;
    }
    atualizar();
}
//executa a func
atualizar();
