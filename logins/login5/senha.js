let senha = document.getElementById("Senha");
let icone = document.getElementsByClassName("olho");

function mostrar_senha (){
    if (senha.type !== "text"){
        senha.type = "text";
    }
    else{
        senha.type = "password";
    }
}