// const open = document.getElementById("open")
// open.onclick = function(){
//     document.documentElement.requestFullscreen()
// }

Height()
function Height(){
    let vh = window.innerHeight;
    let vmin = 0
    calcHeight()
    window.addEventListener("resize", function(){
        calcHeight()
    });
    function calcHeight(){
        vh = window.innerHeight;
        if(innerHeight>=innerWidth){
            vmin = innerWidth
        } else {
            vmin = innerHeight
        }
        document.documentElement.style.setProperty('--vh', `${vh}px`);    
        document.documentElement.style.setProperty('--vmin', `${vmin}px`); 
    }
}

setClockTime()
function setClockTime(){
    time()
    setInterval(time,1000)
    function time(){
        let current = new Date(Date.now())
        let h = current.getHours()
        let m = current.getMinutes()
        let s = current.getSeconds()
        let hour = h + (m*60+30)/3600
        let min = m + s/60
        let sec = s
    
        document.documentElement.style.setProperty('--hour', `${hour*30}deg`)
        document.documentElement.style.setProperty('--sec', `${sec*6}deg`)
        document.documentElement.style.setProperty('--min', `${min*6}deg`)
    }

}

function checkReadyState(win=window){return new Promise(resolve=>{const clock = setInterval(function(){let target = win.document.readyState;if(target==="complete"){clearInterval(clock);console.log("complete");resolve();}},50);});};

function detectClass(className){
    return new Promise((resolve) => {
        setInterval(function(){
            // if(!document.getElementById("copy-element")){return}
            if(document.getElementById("copy-element").classList.contains(className)){
                resolve("123")
                return
            }
        },50)
    })
}

var option = {
    messageDelay:90,
    dialogClick:true,
    dialogPause:false,
    currentTool:"",    
}

var answer = {
    hand:{
        question:"switch",
        result:function(){
            const copyElement = document.querySelector("#copy-element") 
            const stage_background = document.querySelector(".stage .background")           
            copyElement.classList.toggle("turn-off")
            document.getElementById("switch")
            .classList.toggle("turn-off")
            stage_background.classList.toggle("dark")
            option.dialogPause = false            
        }
    }
}



async function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function message(text) {
    
    return new Promise(resolve=>{
        const dialog = document.querySelector(".dialog")
        const inter = document.querySelector(".interaction")
        dialog.dataset.state = "running"
        dialog.dataset.next = "false"
        if (document.querySelector(".dialog > p")) {
            document.querySelector(".dialog > p").remove()
        }
        var msg = document.createElement("p")
        document.querySelector(".dialog").append(msg)
        msg = document.querySelector(".dialog > p")
        let t = []
        for (let i = 0; i < text.length; i++) {
            t[i] = document.createElement("span")
            t[i].innerText = text[i]
            t[i].className = "hideText"
            msg.appendChild(t[i])
        }

        i = 0
        const type = setInterval(function () {
            if(dialog.dataset.state === "finish"){                    
                clearInterval(type)
                dialog.dataset.next = "true"                    
                dialog.querySelector("p").lastChild.scrollIntoView()
                return
            }
            if (i >= text.length) {
                clearInterval(type)
                dialog.dataset.state = "finish"
                dialog.dataset.next = "true"
                return
            }
            t[i].className = ""
            t[i].scrollIntoView()
            i = i + 1
        }, option.messageDelay)

        document.body.addEventListener("click",function myclick(e){
            if(option.dialogPause===true){return}
            if(dialog.dataset.next==="true"){
                document.body.removeEventListener("click",myclick)
                resolve()
            }
        })

        inter.addEventListener("pointerup",()=>{
            if(!answer[option.currentTool]){return}
            if(answer[option.currentTool].question===inter.dataset.content){
                resolve()
            }              
        })

    })
    
    
}

function OpenGift() {
    const ribbon = document.getElementById("ribbon")
    const ribbon_rope = document.getElementById("ribbon_rope")
    const gift_cover = document.getElementById("gift_cover")
    ribbon.addEventListener("animationend", function ribbonAni(){
        gift_cover.classList.add("ani-gift-cover")
        ribbon.removeEventListener("animationend",ribbonAni)
    })
    ribbon_rope.addEventListener("animationend", function ribbon_ropeAni(){
        ribbon.classList.add("ani-ribbon")
        ribbon_rope.removeEventListener("animationend",ribbon_ropeAni)
    })
    ribbon_rope.classList.add("ani-ribbon_rope")

}

function drag(element) {

    let state = false,
        beforeX = 0,
        beforeY = 0,
        originX = 0,
        originY = 0,
        x = 0,
        y = 0

    // element.addEventListener("mousedown", e => {
    //     element.style.position = "fixed"
    //     element.style.pointerEvents = "none"
    //     const css = window.getComputedStyle(element)        
    //     if (css.position != "absolute" && css.position != "fixed") {
    //         console.log("position needs absolute or fixed")
    //         return
    //     }
    //     if(element.dataset.drag!="true"){return}


    //     beforeX = e.x
    //     beforeY = e.y
    //     originX = parseInt(css.left)
    //     originY = parseInt(css.top)
    //     boundX = window.innerWidth
    //     boundY = window.innerHeight
    //     option.currentTool=e.target.id
    //     state = true

    // })

    // window.addEventListener("mouseup", e => {
    //     state = false
    //     element.style.position = null
    //     element.style.top = null
    //     element.style.left = null
    //     element.style.transform = null
    //     element.style.pointerEvents = null
    //     option.currentTool=null
    // })

    // window.addEventListener("mousemove", e => {

    //     if (!state) { return }

    //     x = originX + e.x - beforeX
    //     y = originY + e.y - beforeY

    //     element.style.left = `${x}px`
    //     element.style.top = `${y}px`
    // })

    element.addEventListener("pointerdown", e => {
        element.style.position = "fixed"
        element.style.pointerEvents = "none"
        const css = window.getComputedStyle(element)
        if (css.position != "absolute" && css.position != "fixed") {
            console.log("position needs absolute or fixed")
            return
        }
        if(element.dataset.drag!="true"){return}       
        beforeX = e.x
        beforeY = e.y
        originX = parseInt(css.left)
        originY = parseInt(css.top)
        boundX = window.innerWidth
        boundY = window.innerHeight
        option.currentTool=e.target.id
        state = true
        
    })

    window.addEventListener("pointerup", e => {
        state = false
        element.style.position = null
        element.style.top = null
        element.style.left = null
        element.style.transform = null
        option.currentTool = null
        element.style.pointerEvents = null
    })

    window.addEventListener("pointermove", e => {
        element.releasePointerCapture(e.pointerId)
        if (!state) { return }
        if(window.innerWidth>window.innerHeight){
            x = originX + e.x - beforeX
            y = originY + e.y- beforeY
        }
        if(window.innerWidth<window.innerHeight){
            x = originX + (e.y - beforeY)
            y = originY - (e.x - beforeX)
        }

        
        element.style.left = `${x}px`
        element.style.top = `${y}px`



    })

}

document.body.addEventListener("click", e => {
    if(
        e.target.nodeName==="BUTTON"||
        e.target.dataset.type==="button"||
        option.dialogClick===false){return}
    option.dialogClick=true
    const dialog = document.querySelector(".dialog")
    if (dialog.dataset.state === "running") {
        dialog.dataset.state = "finish"
        return
    }
    if(dialog.dataset.state === "complete"){
        dialog.dataset.state = ""
    }
})

function interaction() {
    // setClockTime()
    const interaction = document.querySelector(".interaction")
    state = interaction.dataset.state
    interaction.addEventListener("transitionend", function foo(e) {
        interaction.removeEventListener("transitionend",foo)
        if (state === "close") { return }
        if( state === "open"){
            interaction.style.display = "none"
            if(document.querySelector("#copy-element")){
                document.querySelector("#copy-element").remove()
            }
        }
       
    })

    if (state === "close") {
        interaction.dataset.state = "open"
        interaction.removeAttribute("style")
    } else
    if (state === "open") {
        interaction.dataset.state = "close"        
    }
}   



// document.addEventListener("readystatechange",e=>{
//     console.log(e.target.readyState)
// })


async function chose(){
    const choseFrame = document.querySelector(".dialog .chose")
    choseFrame.dataset.show="true"
    const yes = document.querySelector(".dialog .chose .yes")
    const no = document.querySelector(".dialog .chose .no")
    return new Promise(resolve=>{

        yes.addEventListener("click",function foo(){
            yes.removeEventListener("click",foo)
            choseFrame.dataset.show=""
            resolve("yes")
        })
        no.addEventListener("click",function foo(){
            no.removeEventListener("click",foo)
            choseFrame.dataset.show=""
            resolve("no")
        })

    })


}

async function password(target,process){
    const parent = target.parentElement
    const textarea = parent.querySelector('textarea')
    if(process==="number"){
        if(textarea.value.length>=4){
            textarea.childNodes[0].remove()
        }
        textarea.append(target.innerText) 
        return
    }
    if(process==="reset"){
        textarea.innerText = ""
        return
    }
    if(process==="ok"){               

    }               
}

async function getSerialNumber(){
    const password = document.querySelector(".password")
    const passShow = document.querySelector(".password .pass-show")
    const submit = document.querySelector(".password .submit")        
    show(password,"show")
    return new Promise(resolve=>{
        submit.addEventListener("click",async function submit_click(){                
            if(passShow.value.length<4){
                passShow.innerText = ""
                message("請輸入4位數邀請碼！")
                return
            }
            submit.removeEventListener("click",submit_click)
            show(password,"hide")
            let pass = passShow.value
            passShow.innerText = ""
            message("驗證邀請碼中~")
            var data = {
                pass
            }
            const url = 'https://script.google.com/macros/s/AKfycbxF4sCS7DVjTg2T0ZvUUpzbxL44sq86Zez5xZImyVd0dLHTRQJBh7c7EaNRf8ExjC69/exec'
            fetch(url, {
                header:{
                    "Content-Type": "application/json;charset=utf-8",
                    },
                method: 'POST',
                body: JSON.stringify(data),
                })
                .then((response) =>  response.json())
                .then(text=>{
                return resolve(text)
            })
        })
    })

    
}

function show(targetElement,state="show"){     
    const inter = document.querySelector(".interaction")
    const stage_background = document.querySelector(".stage .background")
    if(state==="show"){
        interaction() 
        inter.append(targetElement)
    } else
    if(state==="hide"){
        interaction() 
        stage_background.append(targetElement)
    } 
}

function tutorialAni(state){
    
    const finger = document.getElementById("index_finger")
    const hand = document.getElementById("hand")   
    if(state==="go"){
        hand.classList.add("shine-finger")
        hand.onanimationend = function(){        
            finger.style.display = "block"
            finger.classList.add("move-finger")
        }
    }
    if(state==="stop"){
        hand.classList.remove("shine-finger")
        finger.classList.remove("move-finger")
    }
}

function copy(targetElement){    
    const inter = document.querySelector(".interaction")
    const copyElement = targetElement.cloneNode(true)
    copyElement.id = "copy-element"
    inter.dataset.content = targetElement.id
    inter.append(copyElement)
}

function getTime(){
    const current = new Date(Date.now())
    return current.toLocaleString("zh-TW",{
        hour12:true,
        hour:"numeric",
        minute:"numeric",
    })
}





function addActor(){    

    const actor = [
        ["sofa","這是沙發。","你累了嗎？"],
        ["lamp","這是檯燈"],
        ["clock","Func()"],
        ["closet","這是櫥櫃"],
        ["bed","這是床"],
        ["plant","這是植物"],
        ["safe_box","這是保險箱"],
        ["border","這是布告欄"],
        ["table","這是桌子"],
        // ["pancel","這是鉛筆"],
        ["switch","這是開關"],
    ]


actor.forEach(i=>{        
        const target = document.getElementById(i[0])
        const close_frame = document.querySelector(".interaction .close_frame")
        target.addEventListener("click",async()=>{            
            if(document.querySelector("#copy-element")){return}    
            option.dialogClick=false
            const dialog = document.querySelector(".dialog")   
            const stage_background = document.querySelector(".stage .background")
            interaction()
            copy(target)
            close_frame.classList.add("disable")
            stage_background.classList.add("disable")

            for(let j = 1; j<i.length; j++){
                if(j===i.length-1){
                    close_frame.classList.remove("disable")
                }

                if(i[j]==="Func()"){
                    await message("現在時刻是 " + getTime() + " 分")
                    continue
                }
                await message(i[j])
            }          

            stage_background.classList.remove("disable")
            dialog.dataset.state = ""            
        })
    })

} 


function toolBox(){
    const hand = document.getElementById("hand")
    drag(hand)
    const pancel = document.getElementById("pancel")
    pancel.onclick = function(){
        drag(pancel)
        const target = checkToolBox()
        target.append(pancel)
        pancel.onclick = null
    }


    function checkToolBox(){
        const boxs = document.querySelectorAll(".toolBox .item")
        for(let i = 0;i<boxs.length;i++){
            if(boxs[i].dataset.exist==="false"){                
                return boxs[i]
            }
        }
    }
}

function solveQuestion(){
    const inter = document.querySelector(".interaction")
    window.addEventListener("pointermove",e=>{
        if(!option.currentTool){return}  
        if(!e.target.classList.contains("interaction")){
            inter.style.outline = null
            inter.style.backgroundColor = null
            return
        }   
        inter.style.outline = "hsl(200,70%,60%) 3px solid"    
        inter.style.backgroundColor = "rgba(255, 255, 255, 0.85)"    
    })
    inter.addEventListener("pointerup",function foo(e){        
        inter.style.outline = null
        inter.style.backgroundColor = null
        if(!answer[option.currentTool]){return}
        if(answer[option.currentTool].question===inter.dataset.content){
            answer[option.currentTool].result()
        }    
    })
}


async function ini() {

   
    const stage = document.querySelector(".stage")
    const stage_background = document.querySelector(".stage .background")
    const dialog = document.querySelector(".dialog")      
    const switcher = document.getElementById("switch")
    const toolBox = document.querySelector("footer .toolBox")
    const close_frame =  document.querySelector(".interaction .close_frame")
    stage_background.classList.add("disable")
    close_frame.classList.add("disable")
    stage.scroll((stage.scrollWidth-stage.clientWidth)/2,0)    
    toolBox.style.display = "none"
    // let state = dialog.dataset.state
    await message("歡迎來到密室之尋寶遊戲！")
    while(true){
        await message("請先輸入您的邀請碼。")        



        let get = await getSerialNumber()
        console.log(get.serialNumber)
        if(get.serialNumber==="wrong password"){
            await message("您輸入的邀請碼錯誤。")   
            await message("錯誤的邀請碼，將無法獲得通關獎品。")  
            await message("是否要再輸入一次邀請碼？")  
            let chose_result = await chose()
            if(chose_result==="yes"){
                continue
            }   
        } else
        if(get.serialNumber){
            await message("驗證成功！")                
        }
        break
    }

    await message("進入教學")
    
    copy(switcher)
    interaction()

    await message("這是一個開關")
    await message("房間似乎有點暗。")
    option.dialogPause = true
    toolBox.removeAttribute("style")  
    tutorialAni("go")
    await message("請拖曳左下角的手掌工具，來打開開關。") 
    tutorialAni("stop")
    await message("恩～似乎明亮了許多！")
    await message("這個房間藏有一個寶物，接下來請用您過人的腦袋找到他吧！")
    
    dialog.dataset.state = ""
    interaction()
    close_frame.classList.remove("disable")
    stage_background.classList.remove("disable")
}


function startScenes(){
    const start  = document.querySelector(".start")
    const stage = document.querySelector(".stage")
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")    
    const elements = [stage,header,footer]
    elements.forEach(elemenet=>{
        elemenet.style.display = "none"
    })
    start.style.display = "block"
    start.onclick = function(){
        var elem = document.documentElement;
        if (elem.requestFullscreen) {
        elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
        }
        start.style= null
        elements.forEach(elemenet=>{
            elemenet.style = null
        })        
    }
}


// document.querySelector(".background").classList.remove("dark")

workFlow()

async function workFlow(){
    startScenes()
    addActor()
    toolBox()
    solveQuestion()
    ini()
}