let phase=0;
let point=1;
let point_dom = document.getElementById("click");
let click=1;
let gold=5000;

let weapon=document.getElementById("weapon");
const weapon_name = new Array("ナイフ", "ロングソード", "デュアルソード","刀","ファイアソード");
const weapon_png = new Array("ナイフ.png", "ロングソード.png", "デュアルソード.png","刀.png","ファイアソード.png")
let now_weapon=document.getElementById("now_weapon");
let now_weapon_png=document.getElementById("now_weapon_png");
let next_weapon=document.getElementById("next_weapon");
let next_weapon_png=document.getElementById("next_weapon_png");

let upgrade_alert=document.getElementById("upgrade_alert");
const upgrade_price = new Array(5000, 10000, 20000,30000,50000);
let now_gold=document.getElementById("now_g");
let upgrade_button=document.getElementById("upgrade_button");

let gold_count=function(){
    now_gold.innerHTML="現在の所持金:"+gold+"G";
}

let upgrade_alert_reset=function(){
    upgrade_alert.innerHTML="";
}

window.addEventListener("DOMContentLoaded", function () {
    quantity=localStorage;  //武器の個数の配列
    for(let i=0;i<5;i++){   //武器の個数を初期化
        quantity[i]=0;
    }
    point_dom.innerHTML = point;
    setInterval(gold_count,100);
});

upgrade_button.addEventListener("click", function(){
    if(upgrade_price[phase]<=gold){
        gold-=upgrade_price[phase];
        upgrade_alert.innerHTML="アップグレードに成功しました!("+upgrade_price[phase]+"G消費)";
        phase+=1;
        click=1;
        point=1;
        now_weapon.innerHTML=weapon_name[phase];
        next_weapon.innerHTML=weapon_name[phase+1];
        now_weapon_png.src="images/"+weapon_png[phase];
        next_weapon_png.src="images/"+weapon_png[phase+1];
        weapon.src="images/"+weapon_png[phase];
        setTimeout(upgrade_alert_reset,1500);
    }else{
        upgrade_alert.innerHTML="アップグレードに失敗しました。("+(upgrade_price[phase]-gold)+"G不足)";
        setTimeout(upgrade_alert_reset,1500);
    }
});

let clickpoint = document.getElementById('clickpoint');
weapon.onclick = function() {
    quantity[phase]+=click;
    point_dom.innerHTML = point;
    $('#clickpoint').fadeOut();
    clickpoint.innerHTML = clickpoint;
    setTimeout(function(){
        clickpoint.style.display = "none";
        $('#clickpoint').fadeOut();
        }, 1000);
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

