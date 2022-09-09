export class ApiRequests{

    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("@TechPosters:token")
    static headers = {
        "Content-Type": "application/json",
        Autorization: `Bearer ${this.token}`
    }

    static async login(body){
        const userLogin = await fetch(`${this.baseUrl}/users/login`,{
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res =>{
        return res
    })
    .catch(err => console.log(err))

    return userLogin
    }

    static async createUser(body){

        const newUser = await fetch(`${this.baseUrl}/users/register`, {
            method: "POST",
            headers: this.headers,
            body:JSON.stringify(body)
        })
        .then(res => res.json())
        .then(res =>{
            return res
        })
        .catch(err=>console.log(err))

        return newUser
    }

}