import { RequestsDashboard } from "../../pages/request.js"
import { ModalRender } from "../modal.js"

export class ApiRequests{

    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("@TechPosters:token")
    static headers = {
        "Content-Type": "application/json",
        Autorization: `Bearer ${this.token}`
    }

    static async login(body){
           
        const userLogin = await fetch(`${this.baseUrl}users/login/`,{
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
        
    })
    .then(res => res.json())
    .then(res =>{
    
        if(res.token != null){
            localStorage.setItem("@TechPosters:token",res.token)
            localStorage.setItem("@TechPosters:User_id",res.user_uuid)
            window.location.assign("src/pages/dashboard.html")
        }
        else{
            let data = []
            //data.push("User not found or password invalid !")
            data.push("Access denied")
            data.push(res.non_field_errors[0])
            ModalRender.verifyModal(data)
        }
       
    })
    .catch(err =>{console.log(err)})

    return userLogin
    }

    static async createUser(body){

        const newUser = await fetch(`${this.baseUrl}users/`, {
            method: "POST",
            headers: this.headers,
            body:JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res =>{
            if(res.email[0] == "user with this email already exists."){            
            }
            else{
                alert("Cadastro realizado com sucesso. Redirecionando para pagina de login")
                location.reload()
            }
            return res
        })
        .catch(err=>console.log(err))

        return newUser
    }

}