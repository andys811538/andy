// ==UserScript==
// @name         HappyMangaUI
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://m.happymh.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @updataURL    https://github.com/andys811538/andy/raw/main/TamperMonkey/HappyMangaUI/HappyMangaUI.user.js
// @downloadURL    https://github.com/andys811538/andy/raw/main/TamperMonkey/HappyMangaUI/HappyMangaUI.user.js
// @grant        none
// ==/UserScript==

(function() {

    console.log("HappyMangaUI")

    var url = window.location.href,
        state = true

    switch (state) {
        case url == "https://m.happymh.com/"
            || url.includes("rank")
            || url.includes("bookcase")
            || url.includes("latest")
            || url.includes("history")
            || url.includes("feedback")
            || url.includes("aboutus"):
console.log("home")
            waitForElementToLoad(".header-logo.mip-border-bottom").then((element) => {
                element.innerHTML = `
            <a href="https://m.happymh.com/" class="logo-link"><span class="logo"></span></a>
            <a href="https://m.happymh.com/bookcase" rel="nofollow" class="search" style="margin-top:0; margin-left:auto; margin-right:10px; display:flex; align-items: center;"><i style="font-weight:600" class="icon icon-heart"></i></a>
            <a href="https://m.happymh.com/sssearch" rel="nofollow" class="search" style="margin-top:5px; margin-right:10px; display:flex; align-items: center; "><i class="icon icon-unie02e"></i></a>
            `
            });

            break;
        case url.includes("/manga"):
console.log("manga")
            waitForElementToLoad(".header-logo.header-transparent").then((element) => {
                element.innerHTML = `
            <a href="https://m.happymh.com/" class="logo-link"><span class="logo"></span></a>
            <a href="https://m.happymh.com/bookcase" rel="nofollow" class="search" style="margin-top:0; margin-left:auto; margin-right:10px; display:flex; align-items: center;"><i style="font-weight:600" class="icon icon-heart"></i></a>
            <a href="https://m.happymh.com/sssearch" rel="nofollow" class="search" style="margin-top:5px; margin-right:10px; display:flex; align-items: center; "> <i class="icon icon-unie02e"></i></a>
            `
            });
            break;

        case url.includes("/reads") || url.includes("/myNotice"):
            waitForElementToLoad(".MuiButtonBase-root.MuiIconButton-root~button").then((element) => {
                element.addEventListener("click",e=>{
                    window.setTimeout(()=>{
                        document.querySelectorAll("a").forEach(e=>{
                            if(e.href==window.location.href){
                                e.scrollIntoView()
                            }
                        })
                    },50)
                })
            })
            waitForElementToLoad(".MuiTypography-subtitle1").then((element) => {
                const HTML = ` <a id="ABC" href="https://m.happymh.com/bookcase" rel="nofollow" class="search" style="width:1em; height:1em; font-size:1.5rem; transform:translateX(-11px)"><svg style="fill:floralwhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg></a>`
                element.insertAdjacentHTML("afterend",HTML)
            })
console.log("reads")
            break;

        default:
            break;
    }
    //var header
    //if(header=document.querySelector(".header-logo.mip-border-bottom")){
    //    header.innerHTML = `
    //    <a href="https://m.happymh.com/" class="logo-link"><span class="logo"></span></a>
    //    <a href="https://m.happymh.com/bookcase" rel="nofollow" class="search" style="margin-top:0; margin-left:auto; margin-right:10px; display:flex; align-items: center;"><i style="font-weight:600" class="icon icon-heart"></i></a>
    //    <a href="https://m.happymh.com/sssearch" rel="nofollow" class="search" style="margin-top:5px; margin-right:10px; display:flex; align-items: center; "><i class="icon icon-unie02e"></i></a>
    //    `
    //}
    //console.log(header)

    //var header_trans
    //if(header_trans=document.querySelector(".header-logo.header-transparent")){
    //    header_trans.innerHTML = `
    //        <a href="https://m.happymh.com/" class="logo-link"><span class="logo"></span></a>
    //        <a href="https://m.happymh.com/bookcase" rel="nofollow" class="search" style="margin-top:0; margin-left:auto; margin-right:10px; display:flex; align-items: center;"><i style="font-weight:600" class="icon icon-heart"></i></a>
    //        <a href="https://m.happymh.com/sssearch" rel="nofollow" class="search" style="margin-top:5px; margin-right:10px; display:flex; align-items: center; "> <i class="icon icon-unie02e"></i></a>
    //        `
    //}
    //console.log(header_trans)

   //var subtitle1
   //if(subtitle1=document.querySelector(".MuiTypography-subtitle1")){
   //    const HTML = `
   //        <a id="ABC" href="https://m.happymh.com/bookcase" rel="nofollow" class="search" style="width:1em; height:1em; font-size:1.5rem; transform:translateX(-11px)"><svg style="fill:floralwhite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg></a>
   //        `
   //    subtitle1.insertAdjacentHTML("afterend",HTML)

   //}
   //console.log(subtitle1)
   //var menu = document.querySelectorAll(".MuiButtonBase-root.MuiIconButton-root")[4]

   //if(window.location.href.includes("/read")){

   //    if(menu){
   //        menu.addEventListener("click",e=>{
   //            window.setTimeout(()=>{
   //                document.querySelectorAll("a").forEach(e=>{
   //                    if(e.href==window.location.href){
   //                        e.scrollIntoView()
   //                    }
   //                })
   //            },50)
   //        })
   //    }


   //}
   //console.log(window.location.href)



    function waitForElementToLoad(element) {
        return new Promise((resolve, reject) => {
            // 確認目標元素是否已經在 DOM 中
            if (document.querySelector(element)) {
                resolve(document.querySelector(element));
            }

            // 使用 MutationObserver 來監測 DOM 變化
            const observer = new MutationObserver((mutations, me) => {
                // 每次 DOM 變化時，檢查元素是否已經載入
                if (document.querySelector(element)) {
                    resolve(document.querySelector(element));
                    me.disconnect(); // 停止監測
                }
            });

            // 配置觀察器選項：在子樹中觀察 DOM 變動
            const config = {
                childList: true,
                subtree: true
            };

            // 將觀察器應用到目標節點
            observer.observe(document.body, config);
        });
    }

    waitForElementToLoad("option[value='5']").then((element) => {
        element.parentElement.value = 5
    });



})();
