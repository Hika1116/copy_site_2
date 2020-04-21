import $ from 'jquery';
// import additionCalculator from './modules/addition-calculator';
// import taxCalculator from './modules/tax-calculator';

import {DefaultClass} from "./modules/default.js";

import '../scss/reset.scss';
import '../scss/base.scss';

// 変数定義
const $win = $(window);

const defaultClass = new DefaultClass();


window.addEventListener('DOMContentLoaded', ()=> {
    // 初期化処理（こちらの方が早いかも）
    console.log("DOMContentLoaded");
    resizeWindow();
})


document.getElementsByClassName("menu-trigger")[0].onclick = (() => {
    console.log("click toggle");
    document.getElementsByClassName("menu-trigger")[0].classList.toggle("active");
    document.getElementsByTagName("header")[0].classList.toggle("open");
});


window.addEventListener("resize", ()=>{
    resizeWindow();
});

const resizeWindow = () => {
    if ($win.width() > 1024) {
        // main部分
        let div = document.createElement("div");
        div.classList.add("desktop");
        defaultClass.wrapAll(document.querySelectorAll(".wrap-contents"), div);


        let div_footer = document.createElement("div");
        div_footer.classList.add("footer-width");
        defaultClass.wrapAll(document.querySelectorAll(".footer-wrap"), div_footer);

    } else {
        defaultClass.unwrap(document.querySelector(".desktop"));
        defaultClass.unwrap(document.querySelector(".footer-width"));
    }
}


document.getElementById("text-button").onclick = (() => {
    // 処理の経過をみるメソッド

    // let object_temp_list = document.querySelectorAll(".article-list-area article h3");

    // console.log(object_temp_list.length);
    // Array.prototype.forEach.call(object_temp_list, (element)=> {
    //     console.log(element);

    //     let object = document.createElement("div");
    //     object.textContent = "hikaru & miyuki";
    //     object.style.backgroundColor = "red";


    //     element.insertBefore(object, element.firstChild);
    // });
    // console.log("click text-button");
});