let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
  let usuario = document.querySelector('#email')
  let userLabel = document.querySelector('#emailLabel')
  
  let senha = document.querySelector('#senha')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    cpf: '',
    telefone: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.emailCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.emailCad,
         cpf: item.cpfCad,
         telefone: item.telCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    let format = 
    "Usuário logado com sucesso!\n" +
    "Nome: " + userValid.nome + "\n" +
    "E-mail: " + userValid.user + "\n" +
    "Telefone: " + userValid.telefone + "\n" +
    "CPF : " + userValid.cpf;

    alert(format);
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid));

    limparEstiloMensagem();
    userLabel.setAttribute('style', 'color: green')
    usuario.setAttribute('style', 'border-color: green')
    senhaLabel.setAttribute('style', 'color: green')
    senha.setAttribute('style', 'border-color: green')
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = 'Usuário Logado!'
  } else {
    limparEstiloMensagem();
    userLabel.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    senhaLabel.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }

  function limparEstiloMensagem() {
    userLabel.setAttribute('style', '');
    usuario.setAttribute('style', '');
    senhaLabel.setAttribute('style', '');
    senha.setAttribute('style', '');
    msgSuccess.setAttribute('style', 'display: none');
    msgError.setAttribute('style', 'display: none');
}
  
}