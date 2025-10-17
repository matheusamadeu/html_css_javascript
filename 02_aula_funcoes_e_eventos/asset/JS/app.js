const Nome = document.querySelector("#nome")
const Email = document.querySelector("#email")
const Telefone = document.querySelector("#telefone")
const Nascimento = document.querySelector("#nascimento")
const Btn_Salvar = document.querySelector("#btn-salvar")
const Resultado = document.querySelector("#resultado")
const db_dados = localStorage.getItem("Clientes") ? JSON.parse(localStorage.getItem("Clientes")) : []

const nome_Valor = Nome.value
const email_Valor = Email.value
const telefone_Valor = Telefone.value
const nascimento_Valor = Nascimento.value

Btn_Salvar.addEventListener("click", (e) => {
    e.preventDefault();

    if (!Nome.value || !Email.value || !Telefone.value || !Nascimento.value) {
        return console.log("Os Campos Não podem ficar vazios");
    };

    const dados = {
        nome: Nome.value,
        email: Email.value,
        telefone: Telefone.value,
        nascimento: Nascimento.value,
    };
    db_dados.push(dados)
    console.log(db_dados);
    localStorage.setItem("Clientes", JSON.stringify(db_dados))

    Nome.value = "";
    Email.value = "";
    Telefone.value = "";
    Nascimento.value = "";
});

Nome.addEventListener("input", () => {
    if (Nome.value.length < 2) {
        return console.log("Nome precisa ter mais de 2 caracteres");
    };
});

Email.addEventListener("input", () => { });

Telefone.addEventListener("input", () => { });