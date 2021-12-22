let phase=0;
let point=1;
let point = document.getElementById("click");

window.addEventListener("DOMContentLoaded", function () {
    quantity=localStorage;  //武器の個数の配列
    for(let i=0;i<5;i++){   //武器の個数を初期化
        quantity[i]=0;
    }
    point.innerHTML = point;
});

let weapon=document.getElementById("weapon");
weapon.onclick = function(phase,click) {
    quantity[phase]+=click;
    click++;
    point.innerHTML = point;
}


/*
quantitiy=武器の個数を管理するローカルストレージ
[0]=ナイフの個数
[1]=ロングソードの個数
[2]=デュアルソードの個数
[3]=刀の個数
[4]=ファイアソードの個数
[5]
[6]
[7]
[8]
[9]
*/
