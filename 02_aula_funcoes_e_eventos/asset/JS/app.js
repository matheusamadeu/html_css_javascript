const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const nascimento = document.querySelector("#nascimento");
const btn_salvar = document.querySelector("#btn-salvar")

const nomeValor = nome.Value
const emailValor = email.Value
const telefoneValor = telefone.Value
const nascimentoValor = nascimento.Value

btn_salvar.addEventListener("click", (e) => {
    e.preventDefault
    
console.log(nomeValor)
console.log(emailValor)
console.log(telefoneValor)
console.log(nascimentoValor)  
});


nome .addEventListener("input", () => {});
email .addEventListener("input", () => {});
telefone .addEventListener("input", () => {});