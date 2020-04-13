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
})