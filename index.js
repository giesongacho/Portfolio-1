const menu = document.querySelector(".menu-icon-active");
const mark = document.querySelector(".x-mark")

const list = document.querySelector(".navigation-list-container")

menu.addEventListener('click', ()=>{
    list.style.display="flex"
    menu.style.display="none"
    mark.style.display="flex"
})
mark.addEventListener('click',()=>{
    list.style.display="none"
    menu.style.display="flex"
    mark.style.display="none"
})

// TRANSITION

const animate = document.querySelectorAll(".animate");


window.addEventListener("scroll", ()=>{
    const triggerBot = window.screen.height - 450;
    animate.forEach((div)=>{
        const boxTop = div.getBoundingClientRect().top;
        if(boxTop < triggerBot){
            div.classList.add("active")
        }
    })
})