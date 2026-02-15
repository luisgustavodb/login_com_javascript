let senha_btn = document.getElementById("senha_btn");
let email = document.getElementById("email_trocar_senha_container");
let email_input = document.getElementById("email_trocar_senha");
let codigo = document.getElementById("codigo_container");
let codigo_input = document.getElementById("codigo");
let alerta_email = document.getElementById("alerta_email");


codigo.style.display = "none";

senha_btn.onclick = function () {
    if (email_input.value.length > 0 && email_input.value.includes("@") == true && email_input.value.includes(".com") == true
        || email_input.value.includes(".org") == true
        || email_input.value.includes(".br") == true
        || email_input.value.includes(".gov") == true) {
        codigo.style.display = "flex";
        email.style.display = "none";
    }

    else if (email_input.value.length > 0 && email_input.value.includes("@") == false && email_input.value.includes(".com") == false
        || email_input.value.includes(".org") == false
        || email_input.value.includes(".br") == false
        || email_input.value.includes(".gov") == false) {
        alerta_email.textContent = "Email invalido (ex: gmail.com)";
        alerta_email.style.display = "flex";
        alerta_email.style.alignSelf = "center";
        alerta_email.style.fontSize = "17px";
        alerta_email.style.color = "rgb(255, 87, 87)";
    }
    else {
        alerta_email.textContent = "Escreva seu Email";
        alerta_email.style.display = "flex";
        alerta_email.style.alignSelf = "center";
        alerta_email.style.fontSize = "17px";
        alerta_email.style.color = "rgb(255, 87, 87)";
    }
}

let codigo_ant;
let codigo_post;


codigo_input.oninput = function () {
    codigo.addEventListener("input", function (e) {
        if (codigo_input.value.length == 4) {
            if (e.inputType === "insertText") {
                codigo_input.value = codigo_input.value.slice(0, 3) + "-" + codigo_input.value.slice(3, 6);
            }
            else {
                codigo_input.value = codigo_input.value.slice(0, 3)

            }
        }
    });


}