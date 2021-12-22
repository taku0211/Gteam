let phase=0;
let click=1;
window.addEventListener("DOMContentLoaded", function () {
    quantity=localStorage;  //武器の個数の配列
    for(let i=0;i<5;i++){   //武器の個数を初期化
        quantity[i]=0;
    }
    let count=document.getElementsById("count");
    let count_int=quantity[0];
    count.appendChild(count_int);
});

let weapon=document.getElementsById("weapon")
weapon.onclick = function(phase,click) {
    quantity[phase]+=click;
}