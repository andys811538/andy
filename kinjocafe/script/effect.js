function menuContent(){
    const title = document.querySelector(".menu-content>header>h1")
    const addItem = document.getElementById("addItem")
    document.body.addEventListener("click",e=>{
        const item = e.target
        const dish = item.dataset
        if(e.target.className==="dish"){
            toggleMenu(target)
            title.textContent = dish.name
            addItem.value = `$${dish.price} 加入`
        }
        
        // console.log(e.target.dataset)
    })
}
menuContent()






const title = document.getElementById("title")
const subtitle = document.getElementById("subtitle")
const address = document.getElementById("address")
const phone = document.getElementById("phone")
const main = document.getElementById("main")

title.textContent = menu.title
subtitle.textContent = menu.subtitle
address.textContent = menu.address
phone.textContent = menu.phone

function generation(data){
    data.kind.forEach(kind=>{
        const ul = document.createElement("ul")
        ul.setAttribute("data-kind",kind.name)
        ul.classList.add("kind")

        const h1 = document.createElement("h1")
        h1.textContent = kind.name
        ul.append(h1)

        kind.dish.forEach(dish=>{
            const li = document.createElement("li")
            li.classList.add("dish")
            li.setAttribute("data-name",dish.name)
            li.setAttribute("data-price",dish.price)
            if(dish.note!="" && dish.note!=null){
                li.setAttribute("data-note",dish.note)
            }            
            li.textContent = dish.name
            ul.append(li)
        })

        main.append(ul)


    })
}

generation(menu)

















const target = document.querySelector("#menu-toggle-A")
function toggleMenu(target){
    const transition = target.parentElement.getElementsByClassName("menu-frame")[0]
    target.setAttribute("data-show","")        
    setTimeout(function(){
        target.click()
        transition.addEventListener("transitionend",()=>{
            target.removeAttribute("data-show")
        })
    },1)        
}