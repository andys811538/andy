
var me = {
    uid:"abc",
    email:"joy@gmail.com"
}

var user = {
    abc:{    
        name:"Joy",
        email:"joy@gmail.com",
        photoURL:"cat.png"
    },
    bcd:{    
        name:"Joy2",
        email:"joy2@gmail.com",
        photoURL:"cat.png"
    }
}

var message_data = [
    {
        uid:"bcd",
        message:"嗨嗨嗨~",
        time:1654150429025
    },
    {
        uid:"bcd",
        message:"嗨嗨嗨~",
        time:1654150429025
    },
    {
        uid:"bcd",
        message:"嗨嗨嗨~",
        time:1654150429025
    },
    {
        uid:"bcd",
        message:"嗨嗨嗨~",
        time:1654150429025
    },
    {
        uid:"bcd",
        message:"嗨嗨嗨~",
        time:1654150429025
    },
    {
        uid:"bcd",
        message:"嗨嗨嗨~",
        time:1654150429025
    },
    {
        uid:"bcd",
        message:"嗨嗨嗨~",
        time:1654150429025
    }
]



function appendMessage(data){

    const information = document.getElementById("information")

    let time = transDateForm(data.time)

    let message_wrapper = document.createElement("div")
    let ymds = document.createElement("div")   
    let ymds_div = document.createElement("div")
    let userIcon = document.createElement("div")
    let img = document.createElement("img")
    let message = document.createElement("div")
    let timestamp = document.createElement("div")

    let last_ymds = document.querySelectorAll("[data-ymds]")
    let last_ymds_data = last_ymds[last_ymds.length-1].getAttribute("data-ymds")

    let last_message = document.querySelector(".message-wrapper:last-child")
    let last_email = last_message.getAttribute("data-email")

    if(user[data.uid].email===me.email){
        message_wrapper.setAttribute("data-email","me")
    } else {
        message_wrapper.setAttribute("data-email",user[data.uid].email)
    }

    message_wrapper.classList.add("message-wrapper")
    
    if(last_ymds_data===time.ymdsID){
        ymds.classList.add("ymds")
        ymds_div.innerText = ""
    } else {
        ymds.setAttribute("data-ymds",time.ymdsID)
        ymds.classList.add("ymds")
        ymds_div.innerText = time.ymds
    }

    if(last_email===user[data.uid].email && ymds_div.innerText === ""){
        userIcon.setAttribute("data-username","")
    } else {
        userIcon.setAttribute("data-username",user[data.uid].name)
    }
    
    userIcon.classList.add("userIcon")
    img.src = user[data.uid].photoURL
    message.classList.add("message")
    message.innerText = data.message
    timestamp.classList.add("timestamp")
    timestamp.innerText = time.timestamp

    ymds.appendChild(ymds_div)
    userIcon.appendChild(img)

    message_wrapper.append(ymds,userIcon,message,timestamp)
    information.appendChild(message_wrapper)

    function transDateForm(time){

        let newTime = {}
        time = new Date(time)
        newTime.year = time.getFullYear()
        newTime.month = time.getMonth() + 1
        newTime.date = time.getDate()
        newTime.ymds = time.toLocaleString("zh-Tw",{ month:"long",day:"numeric",weekday: 'short'})
        newTime.timestamp = time.toLocaleString("zh-TW",{minute:"numeric",hour:"numeric",hour12:true})
        newTime.ymdsID = `y${newTime.year}m${newTime.month}d${newTime.date}`
        return newTime
        
    }

}


message_data.forEach(data => {
    appendMessage(data)
});


