function scrollDetect(){
    const information = document.getElementById("information")
    information.addEventListener("scroll",e=>{
        information.classList.add("scrolling")
        setTimeout(()=>{
            information.classList.remove("scrolling")
        },1000)
    })
}
scrollDetect()
