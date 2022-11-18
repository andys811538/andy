

function slidShow(){
    const last = document.querySelector("#last")
    const next = document.querySelector("#next")
    next.addEventListener("click",()=>{        
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
    })
    last.addEventListener("click",()=>{        
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
    })

}

slidShow()