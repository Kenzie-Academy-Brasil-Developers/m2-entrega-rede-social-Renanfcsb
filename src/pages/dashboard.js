export class RenderDashboard{

    static profileCard = document.querySelector(".container-postagem")

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

}