import { LoginPage, SignUp } from "./singup.js"

const homeBtLogin = document.getElementsByClassName("home-button-login")
const homeBtRegister = document.getElementsByClassName("home-button-register")
const homeBody = document.querySelector(".body-login-cadastro")


function verificarButton(){
    for(let i=0 ; i<homeBtRegister.length;i++){
        homeBtRegister[i].addEventListener("click",renderRegister)
    }
    for(let i=0 ; i<homeBtLogin.length;i++){
    homeBtLogin[i].addEventListener("click",renderLoginTela)
    }
    
}

function cleanScreen(){
    while (homeBody.firstChild) {
        homeBody.removeChild(homeBody.firstChild);
      }
}

function renderLoginTela(){
    cleanScreen()

    const loginCard = document.createElement("div")
    const title = document.createElement("h1")
    const emailInput = document.createElement("input")
    const senhaInput = document.createElement("input")
    const buttonLogar = document.createElement("button")
    const textoAux = document.createElement("p")
    const buttonRegister = document.createElement("button")

    emailInput.id = "email"
    senhaInput.id = "password"
    buttonLogar.id = "entrar"
    senhaInput.type ="password"

    title.innerText="Login"
    emailInput.placeholder="Insira se e-mail"
    senhaInput.placeholder="Insira sua senha"
    buttonLogar.innerText="Logar"
    textoAux.innerText="Se ainda não possuir cadastro..."
    buttonRegister.innerText="Ir para página de registro"

    loginCard.className = "login-card"
    title.className = "title-1"
    emailInput.className = "input-default"
    senhaInput.className = "input-default"
    buttonLogar.className = "font-button-default button-primary"
    textoAux.className = "text-3"
    buttonRegister.className = "button-outline-medium home-button-register"

    loginCard.append(title,emailInput,senhaInput,buttonLogar,textoAux,buttonRegister)
    homeBody.appendChild(loginCard)

    LoginPage.renderLoginPage()
    verificarButton()
}

function renderRegister(){
    cleanScreen()

    const registerCard = document.createElement("div")
    const title = document.createElement("h1")
    const name = document.createElement("input")
    const emailInput = document.createElement("input")
    const senhaInput = document.createElement("input")
    const prof = document.createElement("input")
    const fotoPerfil = document.createElement("input")
    const buttonRegistrar = document.createElement("button")
    const textoAux = document.createElement("p")
    const buttonIrParaLogin = document.createElement("button")

    name.id = "username"
    emailInput.id = "email"
    senhaInput.id = "password"
    prof.id = "work_at"
    fotoPerfil.id = "image"
    buttonRegistrar.id = "cadastrar"

    title.innerText="Cadastro"
    name.placeholder="Insira seu nome"
    emailInput.placeholder="Insira se e-mail"
    senhaInput.placeholder="Insira sua senha"
    prof.placeholder="Qual seu trabalho?"
    fotoPerfil.placeholder="URL da imagem de perfil"
    buttonRegistrar.innerText="Registrar"
    textoAux.innerText="Ja possui login ?"
    buttonIrParaLogin.innerText="Ir para página de login"

    registerCard.className = "login-card"
    title.className = "title-1"
    name.className = "input-default"
    emailInput.className = "input-default"
    senhaInput.className = "input-default"
    prof.className ="input-default"
    fotoPerfil.className="input-default"
    buttonRegistrar.className = "font-button-default button-primary"
    textoAux.className = "text-3"
    buttonIrParaLogin.className = "button-outline-medium home-button-login"
    
    registerCard.append(title,name,emailInput,senhaInput,prof,fotoPerfil,buttonRegistrar,textoAux,buttonIrParaLogin)
    homeBody.appendChild(registerCard)
    verificarButton()
    SignUp.createNewUser()
}
renderLoginTela()

