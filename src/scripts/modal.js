
export class ModalRender{
    
    static homePage = document.querySelector(".body-page")
    static verifyModal(data){
 
        if(data.length < 3){
            const backgroundModal = document.createElement("div")
            const cardModal = document.createElement("div")
            const content = document.createElement("div")
            const titleModal = document.createElement("h2")
            const msgModal = document.createElement("p")
            const buttonModal = document.createElement("button")

            titleModal.innerText = data[0]
            msgModal.innerText = data[1]
            buttonModal.innerText = "Tentar Novamente"

            backgroundModal.className = "modal-background-erro"
            cardModal.className="modal-card-erro"

            content.append(titleModal,msgModal)
            cardModal.append(content,buttonModal)
            backgroundModal.appendChild(cardModal)
            this.homePage.appendChild(backgroundModal)
            buttonModal.addEventListener("click",function(){
                location.reload()
            })
        }

    }
}

