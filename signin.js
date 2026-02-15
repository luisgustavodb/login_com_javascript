let email = document.getElementById("email");
let senha_1 = document.getElementById("senha_1");
let senha_2 = document.getElementById("senha_2");
let alerta_senha = document.getElementById("alerta_senha");
let signin_btn = document.getElementById("signin");
let visu_senha = document.getElementById("visualizar_senha_btn");
let visu_fech_icon = document.getElementById("visualizar_senha_fechado");
let visu_aber_icon = document.getElementById("visualizar_senha_aberto");


signin_btn.onclick = function () {
    if (email.value.length <= 0) {
        alerta_senha.textContent = "adicione um Email primeiro";
        alerta_senha.style.color = "rgb(255, 87, 87)";
    }
    else if (email.value.includes("@") == true || email.value.includes(".com") == true || email.value.includes(".org") == true || email.value.includes(".br") == true || email.value.includes(".gov") == true) {
        alerta_senha.textContent = "Email invalido (exemplo@gmail.com)";
        alerta_senha.style.color = "rgb(255, 87, 87)";

        if (senha_1.value.length < 8) {
            alerta_senha.textContent = "senha muito curta (menor de 8 caracteres)";
            alerta_senha.style.color = "rgb(255, 87, 87)";
        }
        else if (senha_1.value != senha_2.value) {
            alerta_senha.textContent = "as senhas devem ser iguais";
            alerta_senha.style.color = "rgb(255, 87, 87)";
        }
        else {
            alerta_senha.textContent = "as senhas são iguais";
            alerta_senha.style.color = "rgb(82, 238, 82)";
            window.alert("voce criou sua conta!!");
        }
    }
    else {
        alerta_senha.textContent = "Email invalido (ex: teste@gmail.com)";
        alerta_senha.style.color = "rgb(255, 87, 87)";
    }
}

visu_senha.onclick = function () {
    if (senha_1.type == "password") {
        senha_1.type = "text";
        senha_2.type = "text";
        visu_fech_icon.style.display = "none";
        visu_aber_icon.style.display = "flex";
    }
    else {
        senha_1.type = "password";
        senha_2.type = "password";
        visu_fech_icon.style.display = "flex";
        visu_aber_icon.style.display = "none";
    }
}