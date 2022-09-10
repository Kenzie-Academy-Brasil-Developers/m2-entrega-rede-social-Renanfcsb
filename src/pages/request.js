import { RenderDashboard } from "./dashboard.js"

export class RequestsDashboard{
    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("@TechPosters:token")
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Token ${this.token}`
    }

    static async profile(body){
        
        const userLog = await fetch(`${this.baseUrl}users/${localStorage.getItem("@TechPosters:User_id")}`,{
        method: "GET",
        headers: this.headers,
        
    })
    .then(res => res.json())
    .then(res => {RenderDashboard.profile(res)})
    .catch(err =>{console.log(err)})

    }

    static async profileInfo(){
        const userLog = await fetch(`${this.baseUrl}users/`,{
            method: "GET",
            headers: this.headers,
        })
    }
}
await RequestsDashboard.profile()

