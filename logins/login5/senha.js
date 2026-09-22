let senha = document.getElementById("senha")


function mostrar_senha(){
   if (senha.type == "password"){
       senha.type = "text" 
       console.log(senha.type)
    }
    else{
        senha.type = "password"
    }
    }