function handleCredentialResponse(response) {

    /* MUDA  PARA A  TELA DE PLANOS APÓS VALIDAR O LOGIN */
     console.log("Encoded JWT ID token: " + response.credential);
  
     window.location.href = "cadUsuario.html";
   }
   window.onload = function () {
     
    /* CARREGA O CLIENTE ID QUANDO A TELA DO FORMULÁRIO FOR CARREGADA */
     google.accounts.id.initialize({
       client_id: "204556370665-4cdvpqbbb2vh1g3ogaitu6mlkeejvb2i.apps.googleusercontent.com",
       callback: handleCredentialResponse
     });
  
     /* CRIAÇÃO E CUSTOMIZAÇÃO DO BOTÃO DO GOOGLE */
     google.accounts.id.renderButton(
       document.getElementById("buttonDiv"),
       {
         type:"standard",
         shape:"pill",
         theme:"filled_black",
         text:"signin",
         size:"medium",
         locale:"pt-BR",
         logo_alignment:"left" 
     }  // customization attributes
   );
    // google.accounts.id.prompt(); also display the One Tap dialog
   }

   function validarLogin (){
    let login = document.getElementById("login").value
    let password = document.getElementById("senha").value
 
   let usuario = "admin"
   let senha = "060660"
 
   if(login == usuario && password == senha){
     window.location.href = "cadUsuario.html";
   }else{
     alert("Usuário ou senha incorreto")
   }
   }