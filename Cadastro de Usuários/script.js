let form = document.getElementById("form");
let nome = document.getElementById("name");
let sobrenome = document.getElementById("secname");
let email = document.getElementById("email");
let age = document.getElementById("age");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        idade: age.value
    };

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    nome.value = '';
    sobrenome.value = '';
    email.value = '';
    age.value = '';

    exibirUsuario();
});

function exibirUsuario() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    let lista = document.getElementById("userList")
    lista.innerHTML = "";

    if (usuarios.length === 0) {
        let vazio = document.createElement("p");
        let lista = document.getElementById("userList");

        vazio.textContent = ("Não há usuários registrados.")
        lista.appendChild(vazio);

    } else {
        usuarios.forEach((usuario) => {
            let item = document.createElement("li");
            
            let nome = document.createElement("span");
            nome.innerHTML = `<strong>Nome:</strong> ${usuario.nome}`;

            let sobrenome = document.createElement("span");
            sobrenome.innerHTML = ` <strong>Sobrenome:</strong> ${usuario.sobrenome}`;

            let email = document.createElement("span");
            email.innerHTML = ` <strong>Email:</strong> ${usuario.email}`;

            let idade = document.createElement("span");
            idade.innerHTML = ` <strong>Data de Nascimento:</strong> ${usuario.idade}`;

            item.appendChild(nome);
            item.appendChild(sobrenome);
            item.appendChild(email);
            item.appendChild(idade);

            lista.appendChild(item);
        });
    }
}

exibirUsuario();