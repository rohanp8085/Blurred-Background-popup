const container = document.querySelector(".container")

const clickbtn =  document.querySelector(".click-btn")

const popupcontainer = document.querySelector(".popup-container")

const closebtn = document.querySelector(".close-icon")

clickbtn.addEventListener("click", () =>{
    container.classList.add("active")
    popupcontainer.classList.remove("active")
})

closebtn.addEventListener("click" , ()=>{
    container.classList.remove("active")
    popupcontainer.classList.add("active")
})
