let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let telefone = document.querySelector('#telefone')
let labelTelefone = document.querySelector('#labelTel')
let validTel = false

let cpf = document.querySelector('#cpf')
let labelCpf = document.querySelector('#labelCpf')
let validCpf = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

email.addEventListener('keyup', () => {
    let emailValue = email.value;
    var emailRegix = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegix.test(emailValue)){
        email.setCustomValidity('');
        email.setAttribute('style', 'border-color :green')
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        validEmail = true;
    } else {
        email.setCustomValidity('E-mail invalido')
        email.setAttribute('style', 'border-color :red')
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email *email invalido*'
        validEmail = false
    }
})

telefone.addEventListener('keyup', () =>{
    let telValue = telefone.value;
    var limpo = telValue.replace(/\D/g, '');
    var format;
    if(limpo.length <= 10){
        format = limpo.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})$/, '($1) $2-$3');
    } else {
        format = limpo.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})$/, '($1) $2-$3');
    }
    telefone.value = format;
    if (telefone.value.length == 15){
        telefone.setAttribute('style', 'border-color: green');
        labelTelefone.setAttribute('style', 'color: green');
        labelTelefone.innerHTML = 'Telefone';
        validTel = true
    } else if (telefone.value.length > 0 && telefone.value.length < 14 ) {
        telefone.setAttribute('style', 'border-color: red');
        labelTelefone.setAttribute('style', 'color: red');
        labelTelefone.innerHTML = 'Telefone *telefone invalido*';
        validTel = false;
    }
})

cpf.addEventListener('keyup', () => {
    let cpfValue = cpf.value;
    let limpo = cpfValue.replace(/\D/g, '');
    let format = limpo.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/, '$1.$2.$3-$4');
    cpf.value = format
    if(cpf.value.length == 14){
        cpf.setAttribute('style', 'border-color: green')
        labelCpf.setAttribute('style', 'color: green')
        labelCpf.innerHTML = 'CPF'
        validCpf = true
    } else if(cpf.value.length > 0 && cpf.value.length < 13){
        cpf.setAttribute('style', 'border-color: red')
        labelCpf.setAttribute('style', 'color: red')
        labelCpf.innerHTML = 'CPF *cpf invalido*'
        validCpf = false
    }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validNome && validEmail && validTel && validCpf && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      emailCad: email.value,
      telCad: telefone.value,
      cpfCad: cpf.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = 'login.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})