const campo_input = document.querySelector("#campo-input");
const form_simples = document.querySelector("#form-simples");
const btnEnviar = document.querySelector("#btn-enviar");
const resultado = document.querySelector("#resultado")


// Eventos:

// click, focus, input, change,

function mostrar_mensagem(valorInput){
    const msg = `
    Nome do cliente é: ${valorInput}
    `; 

    resultado.innerHTML = msg;
}

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    const campo_input_valor = campo_input.value;
    // resultado.innerHTML = campo_input_valor;
    mostrar_mensagem(campo_input_valor);
});