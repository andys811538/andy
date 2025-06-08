var data = {}

async function getData() {
    var promise = new JSZip.external.Promise(function (resolve, reject) {
        JSZipUtils.getBinaryContent(`data.zip?v=${Date.now()}`, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });

    promise.then(JSZip.loadAsync)                     // 2) chain with the zip promise
        .then(function (zip) {
            return zip.file("data.json").async("string"); // 3) chain with the text content promise
        })
        .then(function success(text) {                    // 4) display the result

            data = JSON.parse(text)
            console.log("success")

        }, function error(e) {
            console.log("fail")
        });
}

function compare(data, target) {

    const options = {
        includeScore: true,
        keys: ['name', 'descript']
    }
    const fuse = new Fuse(data, options)
    const result = fuse.search(target)
    return result

}

const myCollapse = document.getElementById('collapseSearchArea')
const bsCollapse = new bootstrap.Collapse(myCollapse, {
    toggle: false
})

var searchFoodModal = new bootstrap.Modal(document.getElementById('searchFood'), {
    keyboard: false
})

const search = document.getElementById("search");
const target = document.getElementById("target");
const searchResult = document.getElementById("searchResult");
const showResult = document.getElementById("show-result");
search.addEventListener("click", () => {

    if (!target.value) { return }

    searchResult.textContent = null
    bsCollapse.hide()

    var list = compare(data, target.value)
    var t = document.getElementById("data");


    for (let i = 0; i < list.length; i++) {
        tr = t.content.querySelector("tr")
        th = t.content.querySelector("th")
        td = t.content.querySelectorAll("td");
        input = t.content.querySelector('input')
        input.dataset.number = list[i].item.number
        if (addData.includes(list[i].item.number)) {
            input.checked = true
            tr.className = "active"
        } else {
            input.checked = false
            tr.className = null
        }
        td[0].textContent = list[i].item.name[0]
        td[1].textContent = list[i].item.name.slice(1).toLocaleString()
        td[2].textContent = list[i].item.description
        var clone = document.importNode(t.content, true);
        searchResult.appendChild(clone);
    }

    setTimeout(() => {
        bsCollapse.show()
    }, 350);

})

function tableActive(target) {
    target.classList.toggle('active')
}

var nutriData = []  //nutriData => 添加後的食物資料

var addData = []    //addData => 搜尋後待添加的食物資料
const addItemArea = document.getElementById("add-item");
function addItem(target) {
    const number = Number(target.dataset.number)
    // <span class="badge rounded-pill bg-success fw-lighter">雞胸肉</span>
    
    if (target.checked) {
        const badge = document.createElement("div")
        badge.style = "font-size:0.5rem"
        badge.className = "badge rounded-pill bg-success fw-lighter me-2"
        badge.textContent = data[number].name[0]
        badge.dataset.number = number
        addItemArea.appendChild(badge)
        addData.push(number)
    } else {
        index = addData.indexOf(number)
        addData.splice(index, index + 1)
        disappear(addItemArea.querySelector(`.badge[data-number='${number}']`))
        
    }

}


function add() {
    searchFoodModal.hide()
    if (!addData.length) { return }
    addItemArea.textContent = null
    bsCollapse.hide()
    const t = document.getElementById("nutri-item-template");
    const nutriItem = document.getElementById("nutri-item");
    var itemInput = t.content.querySelector('.item-input')
    var itemLabel = t.content.querySelector('.item-label')
    var itemKal = t.content.querySelector('.item-kal')
    var itemFat = t.content.querySelector('.item-fat')
    var itemProtein = t.content.querySelector('.item-protein')
    var itemCarb = t.content.querySelector('.item-carb')
    var itemCollapseBtn = t.content.querySelector('.item-collapse-btn')
    var itemCollapse = t.content.querySelector('.item-collapse')
    var itemClose = t.content.querySelector('.item-close')

    
    addData.forEach((number,i) => {
        var food = data[number]


        kal = round(food['熱量'],2)
        fat = round(food['粗脂肪'],2)
        protein = round(food['粗蛋白'],2)
        carb = round(food['總碳水化合物'],2)

        console.log(kal,fat,protein,carb)

        itemInput.id = `item-${number}`
        nutriData[itemInput.id] ={
            kal,
            fat,
            protein,
            carb
        }

        itemClose.dataset.id = itemInput.id
        itemInput.dataset.kal = kal
        itemInput.dataset.fat = fat
        itemInput.dataset.protein = protein
        itemInput.dataset.carb = carb
        itemInput.value = 100
        itemLabel.setAttribute("for", `item-${number}`)
        itemLabel.textContent = food['name'][0]
        itemKal.textContent = kal
        itemFat.textContent = fat
        itemProtein.textContent = protein
        itemCarb.textContent = carb
        itemCollapseBtn.href = `#item-collapse-${number}`
        itemCollapse.id = `item-collapse-${number}`
        var clone = document.importNode(t.content, true);
        nutriItem.appendChild(clone)

    })
    totalCalc()
    nutriExist()
    addData = []
}

function calcItem(element){
    const parent = element.parentElement.parentElement.parentElement.parentElement.parentElement
    const itemKal = parent.querySelector('.item-kal')
    const itemFat = parent.querySelector('.item-fat')
    const itemProtein = parent.querySelector('.item-protein')
    const itemCarb = parent.querySelector('.item-carb')
    kal =  round(element.value / 100 * element.dataset.kal,2)
    fat = round(element.value / 100 * element.dataset.fat,2)
    protein = round(element.value / 100 * element.dataset.protein,2)
    carb = round(element.value / 100 * element.dataset.carb,2)

    itemKal.textContent =  kal
    itemFat.textContent = fat
    itemProtein.textContent = protein
    itemCarb.textContent = carb

    nutriData[element.id].kal = kal
    nutriData[element.id].fat = fat
    nutriData[element.id].protein = protein
    nutriData[element.id].carb = carb

    totalCalc()

}

function totalCalc(){
    total = {
        kal:0,
        fat:0,
        protein:0,
        carb:0
    }
    Object.values(nutriData).forEach(i=>{
        total.kal += i.kal
        total.fat += i.fat
        total.protein += i.protein
        total.carb += i.carb
    })
    document.getElementById("kal").textContent= round(total.kal,2);
    document.getElementById("fat").textContent = round(total.fat,2);
    document.getElementById("protein").textContent = round(total.protein,2);
    document.getElementById("carb").textContent = round(total.carb,2);
}

var ttt = true
showResult.addEventListener("click",()=>{
    const nutriResult = document.getElementById("nutri-result");
    
    if(ttt==true){
        ttt = false
        showResult.classList.add("show")
        nutriResult.classList.add('active')
            
        setTimeout(function(){
            nutriResult.style.opacity = 1
        },10)

    } else if(ttt==false){
        ttt = true
        showResult.classList.remove("show")
        nutriResult.style.opacity = 0
        setTimeout(function(){
            nutriResult.classList.remove('active')
        },350)
    }
    
    
    
    // setTimeout(function(){
    //     nutriResult.style.opacity = 1
    // },10)

})

function deleteItem(element){
    disappear(element.parentElement.parentElement.parentElement)
    delete nutriData[element.dataset.id]
    totalCalc()
    nutriExist()
}

function round(num,count){
    return Math.round(num*Math.pow(10,count))/Math.pow(10,count)
}



function nutriExist(){
    const nutriResult = document.getElementById("nutri-result");
    if(Object.keys(nutriData).length){
        // nutriResult.classList.remove('d-none')
        setTimeout(function(){
            nutriResult.classList.add('show')         
            showResult.classList.add('active')
        },1)
    } else {
        nutriResult.classList.remove('show')
        nutriResult.addEventListener('transitionend',e=>{
            if(e.propertyName=='opacity'){
                // nutriResult.classList.add('d-none')
                showResult.classList.remove('active')
            }
        })
        showResult.addEventListener("transitionend",e=>{
            if(e.propertyName=='opacity'){
                // nutriResult.classList.add('d-none')
                showResult.classList.remove('active')
            }
        })
    }
}

function disappear(element){
    // element.style.height = element.offsetHeight
    element.style.transition = "transform .35s, opacity .35s"
    setTimeout(function(){
        // element.style.height = 0
        element.style.transform = 'scale(0)'
        element.style.opacity = '0'
    },1)
    element.addEventListener('transitionend',e=>{
        if(e.propertyName==='opacity'){
            element.remove()
        }
    })
}

function toggle(element){
    element.classList.toggle('toggle')
}

async function initial() {
    await getData()

}

initial()




