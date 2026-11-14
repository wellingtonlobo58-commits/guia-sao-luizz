const botao = document.getElementById("boasVindas");

botao.addEventListener("click", function() {
    alert("Seja bem-vindo ao Guia de São Luís!");
});

const botaoTema = document.querySelector("#botao-tema");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botaoTema.textContent = "Modo claro";
    } else {
        botaoTema.textContent = "Modo escuro";
    }
});

const botoesCurtir = document.querySelectorAll(".botao-curtir");

botoesCurtir.forEach(function(botao) {
    botao.addEventListener("click", function() {
        const contador = botao.nextElementSibling;
        let curtidas = Number(contador.textContent);

        curtidas++;

        contador.textContent = curtidas;
    });
});

const formulario = document.querySelector("#contato form");
console.log(formulario);

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
    const imagem = document.querySelector("#imagem").files[0];
    const resultado = document.querySelector("#resultado");

    if (nome === "" || mensagem === "" || !imagem) {
        resultado.textContent = "Preencha todos os campos e escolha uma imagem.";
        resultado.style.color = "red";
    } else if (mensagem.length < 10) {
        resultado.textContent = "A mensagem precisa ter pelo menos 10 caracteres.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "Obrigado, " + nome + "! Mensagem enviada.";
        resultado.style.color = "green";

        formulario.reset();
    }
});