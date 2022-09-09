

export class SignUp{
    static createNewUser(){
        const usernameInput = document.getElementById("username")
        const emailInput = document.getElementById("email")
        const passwordInput = document.getElementById("password")
        const work_at = document.getElementById("work_at")
        const avatarUrl = document.getElementById("image")
        const btnLogin = document.getElementById("cadastrar")

        btnLogin.addEventListener("click", (event) =>{
            event.preventDefault()

            const data = {
                username: usernameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                work_at: work_at.value,
                image:avatarUrl.value,
                
            }

            ApiRequests.createUser(data)
        })

    }
}

export class LoginPage{
    static renderLoginPage(){
        const token = localStorage.getItem("@kenzieM2Blog:token")

        if(token){
            window.location.assign("src/pages/dashboard.html")
        }
        const emailInput = document.getElementById("email")
        const passwordInput = document.getElementById("password")
        const btnLogin = document.getElementById("entrar")

        btnLogin.addEventListener("click", (event) =>{
            event.preventDefault()

            const data = {
                email: emailInput.value,
                password: passwordInput.value,

            }

            ApiRequests.login(data)
        })
    }
}