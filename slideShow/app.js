

var ani_run = false
function slidShow(){
    const last = document.querySelector("#last")
    const next = document.querySelector("#next")
    
    next.addEventListener("click",()=>{ 
        if(ani_run){return}
        ani_run = true
        var item_0 = document.querySelector(".item-0")
        var item_1 = document.querySelector(".item-1")
        var item_2 = document.querySelector(".item-2")
        var item_3 = document.querySelector(".item-3")
        var item_4 = document.querySelector(".item-4")
        var item = [item_0,item_1,item_2,item_3,item_4]
        item.forEach((e,i)=>{
            index = i + 1
            if(index>4){
                index = 0
            }
            e.className = "item-" + index
        })
        item_0.addEventListener("transitionend",ani_run_state)
        function ani_run_state(){
            ani_run = false     
            item_0.removeEventListener("transitionend",ani_run_state)   
        }
    })
    last.addEventListener("click",()=>{      
        if(ani_run){return}  
        ani_run = true
        var item_0 = document.querySelector(".item-0")
        var item_1 = document.querySelector(".item-1")
        var item_2 = document.querySelector(".item-2")
        var item_3 = document.querySelector(".item-3")
        var item_4 = document.querySelector(".item-4")
        var item = [item_0,item_1,item_2,item_3,item_4]
        item.forEach((e,i)=>{
            index = i - 1
            if(index<0){
                index = 4
            }
            e.className = "item-" + index
        })
        item_0.addEventListener("transitionend",ani_run_state)
        function ani_run_state(){
            ani_run = false     
            item_0.removeEventListener("transitionend",ani_run_state)   
        }
    })
}

slidShow()
