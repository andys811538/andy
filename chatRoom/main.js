  const mes = document.getElementById("message")
  const userName = document.querySelector("#userName")
  const message =  document.querySelector("#message")
  const input = document.getElementById("input")


  mes.addEventListener("keyup",function(e){
    if(e.key==="Enter" && e.shiftKey){return}
    if(e.key==="Enter"){
      input.click()
    }
  })


  function filterNum(id){
    var n = id.replace("number","")
    return Number(n)
  }

  function dayStr(day){
    var w = ["周日","周一","周二","周三","周四","周五","周六"]
    return w[day]
  }


  const afk = document.getElementById("afk")
  var lastContent
  var lastEmail = null
  var row = 0 //計算資料筆數
  function append(data,start,end,state=true){  
    //state:true0 = 按照資料庫資料順序排列  state:false = 插入至最後一筆資料 
    for(i=start;i<=end;i++){

      if(document.getElementById("number" + data[i]["number"])){continue}

      row = row + 1
      let date = new Date(data[i]["time"])
      let ymdValue = "y"+date.getFullYear() + "m" + (date.getMonth()+1) + "d" + date.getDate()
      let ymdText = date.getMonth() + 1 + "月" + date.getDate() + "日 " + dayStr(date.getDay())
      date = date.toLocaleString('cn-TW', { minute: 'numeric' ,hour: 'numeric', hour12: true })
      
      const message = document.createElement("div")
      const mesText = document.createTextNode(data[i]["message"])
      message.appendChild(mesText)
      message.classList.add("message")

      const time = document.createElement("div")
      const timeText = document.createTextNode(date)
      time.appendChild(timeText)
      time.classList.add("time")
      time.id = "time" + data[i]["number"]
      
      const fit = document.createElement("div")
      fit.appendChild(message)
      fit.appendChild(time)
      fit.classList.add("fit")

      const name = document.createElement("div")
      const nameText = document.createTextNode(data[i]["userName"])
      name.appendChild(nameText)
      name.classList.add("name")
      if(lastEmail===data[i]["email"]){
        name.innerText = ""
      }
      lastEmail = data[i]["email"]

      const content = document.createElement("div")      
      content.appendChild(name)
      content.appendChild(fit)
      content.classList.add("content")
      content.id = "number" + data[i]["number"]


      if(data[i]["email"]===email){
        message.classList.add("meMessage")
        fit.classList.add("me")
        name.classList.add("meName")
        content.classList.add("me")
        name.innerText = ""
      }

      const number1 = document.getElementById("number1")      
      const information = document.getElementById("information")

      lastContent = content

      if(document.getElementById(ymdValue)){       
      


        if(state===false){
          information.appendChild(content)
          return
        }

        // console.log(information.lastChild.id)
        if(filterNum(information.lastChild.id)>(data[i]["number"])){
          
          // console.log("有下一個",data[i]["number"])
          information.insertBefore(content,information.lastChild)
          continue 

        }

        if(document.getElementById("number" + (data[i]["number"] - 1))){
          var target = document.getElementById("number" + (data[i]["number"] - 1))
          information.insertBefore(content,target.nextSibling)
          // console.log("沒有下一個",data[i]["number"])
          continue        
        }

        continue
      }

      const ymd = document.createElement("div")
      const ymdStr = document.createElement("div")
      ymdStr.append(ymdText)
      ymd.append(ymdStr)
      ymd.id = ymdValue
      ymd.classList.add("ymd")
      ymdStr.classList.add("ymdStr")

      information.append(ymd)

      information.insertBefore(content,ymd.nextSibling)

    }
    lastContent.scrollIntoView()
  }

  var lastKey = null
  var postFinish = false
  async function post(data){ 
    postFinish = true 
    db.ref("/information").push(data)
    .then(res=>{
      console.log("sucess")
    })
    .catch(err=>{
      document.querySelector(`#time${dataCount}`).innerText = "發送失敗"
      console.log(err)
    })
  }
  
  var dataCount = 1
  function iniData(){
    db.ref("/information")
    .once("value", function(e){
      let data = e.val()
      data = Object.entries(data)
      for(let i = 0; i<data.length;i++){
        let d =[{
          "number": i+2,
          "userName": data[i][1].userName,
          "message":  data[i][1].message,
          "time":data[i][1].time,
          "email":data[i][1].email
        }]
        append(d,0,0,true)
        dataCount = i + 2
      }
    })
  }

  var timeStart = Date.now()
  function updata(){
    db.ref("/information").orderByChild("time")
    .startAt(timeStart).on("child_added", function(e){

      dataCount = dataCount + 1
      let data = e.val()
      let d =[{
        "number": dataCount,
        "userName": data.userName,
        "message":  data.message,
        "time":data.time,
        "email":data.email
      }]
      append(d,0,0,true)
    })
  }


  var postReturn = {status:"", key:"", number:""}  
  input.onclick = async function(){
    if(message.value===""){alert("請輸入訊息");return}
    var postData ={
      time:firebase.database.ServerValue.TIMESTAMP,
      userName:displayName,
      message:message.value,
      email,
    }
    message.value = ""
    postReturn = post(postData)
  }
    

  var count = 0
  async function upData(){
    const data = await get()
    if(data.length-count===0){return}
    append(data,count,data.length-1)
    count = data.length
    lastContent.scrollIntoView()
  }
  


      



// 初始推播
  async function sleep(ms = 0) {
      return new Promise(r => setTimeout(r, ms));
  }
  async function start(){
    var now = new Date()
    var D =[{
        "number":"Admin1",
        "userName": "Admin",
        "message":  "這是一個留言板喔~",
        "time":now
      },{
        "number":"Admin2",
        "userName": "Admin",
        "message":  "請在這邊留言~",
        "time":now
      }
    ]
    append(D,0,0,false)
    await sleep(700)
    append(D,1,1,false)
  }
  
  // start()  //初始推播

  
  // loadData()

//   clock(true)

//   afkCheck()

//   upData()
const loadAnimation = document.getElementById("loadAnimation")
async function initial(){
  await iniData()
  await updata()  
  if(loadAnimation){
    await setTimeout(function (){
      loadAnimation.classList.add("vanish")  
      loadAnimation.remove()  
    },2000)
  }
  user.click()
  
}



