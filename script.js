const SectionSobre = document.getElementById("sobre");
const SectionDownload = document.getElementById("download");
const botaoDownload1 = document.getElementById("download1");
const botaoDownload2 = document.getElementById("download2");
const detalhesBotao = document.getElementById("sobre");

function irParaSecao(nome) {
    document.getElementById(nome).scrollIntoView({
        behavior: "smooth"
    });
}

botaoDownload1.addEventListener("click", function() {
    irParaSecao("Download");
});

detalhesBotao.addEventListener("click", function() {
    irParaSecao("detalhes");
});

botaoDownload2.addEventListener("click", function() {
    irParaSecao("Download");
});