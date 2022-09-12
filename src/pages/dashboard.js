import { RequestsDashboard } from "./request.js"

export class RenderDashboard{

    static profileCard = document.querySelector(".container-postagem")
    static followers= document.querySelector(".container-seguir")
    static posts = document.querySelector(".posts")

    static async cleanScreen(element){
        while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
    }

    static async profile(data){

        
        const cardInfo = document.createElement("div")
        const cardcontent = document.createElement("div")
        const pic = document.createElement("img")
        const name = document.createElement("h2")
        const followsNumber = document.createElement("p")
        const work = document.createElement("p")
        const titlePost = document.createElement("input")
        const contentPost = document.createElement("textarea")
        const buttonPost = document.createElement("button")

        name.className = "title-2"
        pic.className = "profile-pic"
        followsNumber.className = "text-3"
        work.className = "text-2"
        titlePost.className = "input-default"
        contentPost.className = "textarea-default"
        buttonPost.className = "button-primary"

        buttonPost.innerText = "Postar"
        pic.src=`${data.image}`
        followsNumber.innerText=`${data.followers_amount} seguidores`
        work.innerText = `${data.work_at}`
        name.innerText = `${data.username}`

        cardInfo.append(name,followsNumber,work)
        cardcontent.append(pic,cardInfo)
        this.profileCard.append(cardcontent,titlePost,contentPost,buttonPost)
        

    }

    static async sugestFollows(data){

        this.cleanScreen(this.followers)

        const container = document.createElement("div")
        const header = document.createElement("div")
        const titleContainer = document.createElement("h2")
        const buttonReload = document.createElement("img")

        buttonReload.className = "button-reload-sug-follows"
        titleContainer.innerText = "Sugestões para você seguir"
        buttonReload.src = "../assets/att.svg"
        header.className = "header-follows"
        titleContainer.className = "title-2"
        header.append(titleContainer,buttonReload)
        this.followers.appendChild(header)

        data.results.forEach((element) =>{
            const cardSugest = document.createElement("div")
            const div1 = document.createElement("div")
            const div2 =  document.createElement("div")
            const pic = document.createElement("img")
            const name = document.createElement("h2")
            const work  = document.createElement("p")
            const buttonAdd = document.createElement("button")

            pic.className = "profile-pic"
            pic.src =`${element.image}`
            name.className="title-2"
            work.className="text-2"
            buttonAdd.innerText ="Seguir"
            cardSugest.className = "card-seguir"
            buttonAdd.className = "button-outline-medium"
            work.innerText = `${element.work_at}`
            name.innerText = `${element.username}`
            div1.className = "header-card"

            div2.append(name,work)
            div1.append(pic,div2)
            cardSugest.append(div1,buttonAdd)
            this.followers.appendChild(cardSugest)
            
        })

        
        document.querySelector(".button-reload-sug-follows").addEventListener("click", function(){
            RequestsDashboard.users()
        })
    }

    static async postsAtt(data){
        
        const header = document.createElement("div")
        const titleContainer = document.createElement("h2")
        const buttonReload = document.createElement("img")

        titleContainer.innerText = "Posts"
        titleContainer.className = "title-1"
        buttonReload.src = "../assets/att.svg"
        header.className = "header-post"
        buttonReload.className = "button-reload-posts"
        header.append(titleContainer,buttonReload)
        

        header.append(titleContainer,buttonReload)
        this.posts.appendChild(header)

        data.results.forEach(element=>{
            const cardSugest = document.createElement("div")
            const div1 = document.createElement("div")
            const div2 =  document.createElement("div")
            const pic = document.createElement("img")
            const name = document.createElement("h2")
            const work  = document.createElement("p")
            const titlePost = document.createElement("h2")
            const contentPost = document.createElement("p")
            const buttonOpen = document.createElement("button")
            const like = document.createElement("img")
            const likesCount = document.createElement("p")
            const div3 = document.createElement("div")

            contentPost.className = "text-1"
            titlePost.className = "title-1"
            titlePost.innerText = `${element.title}`
            contentPost.innerText = `${element.description}`
            likesCount.innerText = `${element.likes.length}`
            pic.className = "profile-pic"
            pic.src =`${element.author.image}`
            name.className="title-2"
            work.className="text-2"
            buttonOpen.innerText ="abrir-post"
            cardSugest.className = "card-post"
            buttonOpen.className = "button-grey-1"
            work.innerText = `${element.author.work_at}`
            name.innerText = `${element.author.username}`
            div1.className = "header-card"
            like.src = "../assets/heartBlack.png"

            div3.append(buttonOpen,like,likesCount)
            div2.append(name,work)
            div1.append(pic,div2)
            cardSugest.append(div1,titlePost,contentPost,div3)
            this.posts.appendChild(cardSugest)
        })

    }

}