var resultado  = document.getElementById ("resultado");

function Acessar_Sessao()
{
    let email = document.getElementById ("email");
    let senha = document.getElementById ("senha");

    
     if ( email.value == "julinda@gmail.com"  &&  senha.value == "julinda1234")
    {
        resultado.style.color = ("green");
        
        resultado.textContent = "Correto , Seja Bem Vindo...";

    }
     else
    {
        resultado.style.color = ("red");

        resultado.textContent = "Email ou Senha Ivalidos...";

    }
}