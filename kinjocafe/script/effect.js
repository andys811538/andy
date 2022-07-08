
const menu_option = document.querySelector(".menu-content .container")

function menuContent(){
    const title = document.querySelector(".menu-content>header>h1")
    const addItem = document.getElementById("addItem")
    document.body.addEventListener("click",e=>{
        const item = e.target
        const dish = item.dataset
        
        if(e.target.className!="dish"){return}

        toggleMenu(target)
        title.textContent = dish.name
        title.dataset.price = dish.price
        addItem.value = `$${dish.price} 加入`
        const temp = document.querySelectorAll(".menu-content .container > *")
        for(let i = 0;i<temp.length;i++){
            menu_option.removeChild(temp[i])
        }
        
        const list = dish_list()
        const select = list[dish.name].select
        if(!select){return}
        select.forEach(item=>{

            const h2 = document.createElement("h2")
            const div = document.createElement("div")
            menu_option.append(div)     
            div.append(h2)   
            h2.textContent = item.name
            Object.keys(item.option)
            .forEach(name=>{
                const label = document.createElement("label")
                const radio = document.createElement("input")
                const item_name = document.createTextNode(name)
                radio.setAttribute("value",name)
                radio.setAttribute("type","radio")
                radio.setAttribute("name",item.name)                
                radio.setAttribute("data-price",item.option[name].price)
                label.append(radio,item_name)                
                div.append(label)
            })
    
        })        
    })
}
menuContent()

function addItem(){
    const cart = document.getElementById("cart")
    const dish = document.querySelector(".menu-content header h1")
    const li = document.createElement("li")
    const optionName = document.querySelectorAll
    (".menu-content .container input:checked")

    const num = document.createElement("div")
    const name = document.createElement("div")
    const option = document.createElement("div")
    const price = document.createElement("div")
    num.classList.add("num")
    name.classList.add("name")
    option.classList.add("option")
    price.classList.add("price")

    let dishPrice = Number(dish.dataset.price)

    li.append(num,name,option,price)
    optionName.forEach(item=>{
        dishPrice = dishPrice + Number(item.dataset.price)
        option.append(` ${item.value}`)
    })

    if(optionName.length===0){
        option.remove()
    }
    

    num.textContent = 0
    name.textContent = dish.textContent
    price.textContent = `$${dishPrice}`

    cart.append(li)
    

    
}


function dish_list(){    
    const list = []
    menu2.kind.forEach(e=>{
        Object.assign(list,e.dish)
    })
    return list
} 


const title = document.getElementById("title")
const subtitle = document.getElementById("subtitle")
const address = document.getElementById("address")
const phone = document.getElementById("phone")
const main = document.getElementById("main")

title.textContent = menu2.title
subtitle.textContent = menu2.subtitle
address.textContent = menu2.address
phone.textContent = menu2.phone

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

// generation(menu)



function generation2(data){
    data.kind.forEach(kind=>{
        const ul = document.createElement("ul")
        ul.setAttribute("data-kind",kind.name)
        ul.classList.add("kind")

        const h1 = document.createElement("h1")
        h1.textContent = kind.name
        ul.append(h1)

        Object.keys(kind.dish).forEach(name=>{
            const dish = kind.dish[name]
            const li = document.createElement("li")
            li.classList.add("dish")
            li.setAttribute("data-name",name)
            li.setAttribute("data-price",dish.price)


            li.textContent = name
            ul.append(li)         
            
            
            if(dish.tag){

                dish.tag.forEach(item=>{
                    let tag = document.createElement("span")
                    tag.classList.add("tag")
                    tag.textContent = item
                    li.append(tag)
                })

            }   

        })

        main.append(ul)


    })
}

generation2(menu2)













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

footerTogle()
function footerTogle(){
    const footer = document.querySelector("#footer")
    const toggle = document.querySelector("footer .toggle")
    toggle.addEventListener("click",function(){
        footer.classList.toggle("footer-up")
        toggle.classList.toggle("toggle-reverse")
    })
}