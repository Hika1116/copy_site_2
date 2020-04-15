import $ from 'jquery';
import additionCalculator from './modules/addition-calculator';
import taxCalculator from './modules/tax-calculator';

import '../scss/reset.scss';
import '../scss/base.scss';

// 変数定義
const $win = $(window);


window.addEventListener('DOMContentLoaded', function() {
    // 初期化処理（こちらの方が早いかも）
    console.log("DOMContentLoaded");
    if ($win.width() > 1024) {
        $(".wrap-contents").wrapAll('<div class="desktop">')
    } else {
        $(".wrap-contents").unwrap()
    }
})

$(".menu-trigger").click(()=> {
    console.log("toggle active");
    $(".menu-trigger").toggleClass("active");
    $("header").toggleClass("open");
});

//初期化、画面リサイズ時のイベント
$(window).on('load resize', function () {
    if($win.width() >= 1024){
        $(".wrap-contents").wrapAll('<div class="desktop">')
    } else {
        $(".wrap-contents").unwrap()
    }
});