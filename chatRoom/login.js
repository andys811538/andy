

const account = document.getElementById("account")
const pass = document.getElementById("pass")
const login = document.getElementById("login")
const user = document.getElementById("user")
const userShow = document.getElementById("userShow")
const checkPass = document.getElementById("checkPass")
const yourUserName = document.getElementById("yourUserName")
const haveAccount = document.getElementById("haveAccount")
const register = document.getElementById("register")
const remember = document.getElementById("remember")
const remenberMe = document.getElementById("remenberMe")
const forgotPassword = document.getElementById("forgotPassword")
const checkPasswordContainer = document.getElementById("checkPasswordContainer")
const yourNameContainer = document.getElementById("yourNameContainer")


var signState = "login"
register.onclick = () => {
  if (signState === "login") {
    remember.classList.add("disapear")
    forgotPassword.classList.add("disapear")
    checkPasswordContainer.classList.remove("disapear")
    yourNameContainer.classList.remove("disapear")
    login.innerText = "註冊"
    register.innerText = "登入"
    haveAccount.innerText = "已經有帳號了嗎？"
    signState = "signUp"
  } else
    if (signState === "signUp") {
      remember.classList.remove("disapear")
      forgotPassword.classList.remove("disapear")
      checkPasswordContainer.classList.add("disapear")
      yourNameContainer.classList.add("disapear")
      login.innerText = "登入"
      register.innerText = "註冊"
      haveAccount.innerText = "還沒有帳號嗎？"
      signState = "login"
    }
}



user.onclick = function () {
  document.querySelector(".topBar+div").classList.toggle("disapear")
  user.classList.toggle("userEffect")
  document.querySelector(".topBar").classList.toggle("topBarShadow")
}

// if(document.querySelector("#remenberMe:checked")){
//   firebase.auth.Auth.Persistence.LOCAL
// } else 
// {
//   firebase.auth.Auth.Persistence.SESSION
// }


login.onclick = async function () {
  if (signState === 'login') {
    firebase.auth()
      .signInWithEmailAndPassword(account.value, pass.value)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error.message);
      });
  } else
    if (signState === 'signUp') {
      firebase.auth()
        .createUserWithEmailAndPassword(account.value, pass.value)
        .then(function () {
          const user = firebase.auth().currentUser
          user.updateProfile({
            displayName: "Andy"
          }).then(res => console.log(res))
        }).catch(function (error) {
          console.log(error.message)
        });
    }
}


//var ooooo = "firstname=John; secondname=Peter; runoob-uuid=600b9afb-92b5-4990-af93-b8ce5f6878ad; _ga=GA1.2.1434708649.1649824807; __gads=ID=e0112c973ba22cc0-224e502ff1d10025:T=1649824807:RT=1649824807:S=ALNI_MYBdXyJTMXhks6W6s-h97NkneCYlg; _gid=GA1.2.1555288344.1650853780; Hm_lvt_3eec0b7da6548cf07db3bc477ea905ee=1650332692,1650439046,1650599008,1650853780; Hm_lpvt_3eec0b7da6548cf07db3bc477ea905ee=1650853780"
function cookie() {
  var cookieTemp = []
  var cookieData = document.cookie
  var cookieArray = cookieData.split(";")
  var temp
  for (let i = 0; i < cookieArray.length; i++) {
    cookieArray[i] = cookieArray[i].trim()
    temp = cookieArray[i].split("=")
    cookieTemp[temp[0]] = temp[1]
  }
  return cookieTemp
}

function getCookieByName(name) {
  var value = cookie()[name]
  return value
}


function checkCookie() {
  var checkTarget = getCookieByName("userName")
  if (checkTarget) {
    console.log("is")
  } else {
    console.log("not")
  }
}

var email = null
var displayName = null
var uid = null
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    email = user.email
    displayName = user.displayName;
    uid = user.uid
    userShow.innerText = displayName
    console.log(displayName, email)
    initial()

  } else {
    loadAnimation.classList.add("vanish")
    setTimeout(function () {
      loadAnimation.remove()
    }, 2000)
  }
});