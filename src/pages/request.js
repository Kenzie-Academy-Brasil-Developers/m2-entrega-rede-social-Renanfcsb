import { RenderDashboard } from "./dashboard.js"

export class RequestsDashboard{
    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("@TechPosters:token")
    static headers = {
        "Content-Type": "application/json",
        "Authorization": `Token ${this.token}`
    }
    static followers  = []
    static sugestFollowers = []

    static async profile(body){
        
        const userLog = await fetch(`${this.baseUrl}users/${localStorage.getItem("@TechPosters:User_id")}`,{
        method: "GET",
        headers: this.headers,
        
    })
    .then(res => res.json())
    .then(res => {RenderDashboard.profile(res),
        res.followers.forEach(element =>{
            if(this.followers.includes(element.followers_users_id.uuid) == false){
                
                this.followers.push(element.followers_users_id.uuid)
            }
        })
    })
    .catch(err =>{console.log(err)})

    }

    static async users(){

        const pageSurf = parseInt(Math.random()*(100-1)+1) * 10 

        const userLog = await fetch(`${this.baseUrl}users/?limit=10&offset=${pageSurf}`,{
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .then(res => {RenderDashboard.sugestFollows(res),console.log(res)})
        .catch(err => {console.log(err)})
        
    }

    static async posts(){

        const userLog = await fetch(`${this.baseUrl}posts/`,{
            method: "GET",
            headers: this.headers,
        })
        .then(res => res.json())
        .then(res => {console.log(res),RenderDashboard.postsAtt(res)})
        .catch(err => {console.log(err)})
        
    }

    }
await RequestsDashboard.profile()
await RequestsDashboard.users()
await RequestsDashboard.posts()

