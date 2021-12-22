let phase=0;    //フェーズ。何を今作っているか。例:0=ナイフ、1=ロングソード
let point=1;    
let point_dom = document.getElementById("click");
let click=1;
let gold=105000;  //ここの値が初期の所持金になる

/* アップグレードで使ったやつ -------------------------- */

let weapon=document.getElementById("weapon"); //左画面の武器の画像
const weapon_name = new Array("ナイフ", "ロングソード", "デュアルソード","刀","ファイアソード");    //武器名を入れた配列
const weapon_png = new Array("ナイフ.png", "ロングソード.png", "デュアルソード.png","刀.png","ファイアソード.png")  //武器の画像名を入れた配列
let now_weapon=document.getElementById("now_weapon");           //現在作っている武器の名前
let now_weapon_png=document.getElementById("now_weapon_png");   //右画面の、現在作っている武器の画像
let next_weapon=document.getElementById("next_weapon");         //次に作る武器の名前
let next_weapon_png=document.getElementById("next_weapon_png"); //右画面の、次に作る武器の画像

let upgrade_alert=document.getElementById("upgrade_alert");     //アップグレード時のアラートメッセージ
const upgrade_price = new Array(5000, 10000, 20000,30000,50000);//アップグレードに必要な価格を入れた配列
let now_gold=document.getElementById("now_g");                  //右画面の、現在の所持金を出す部分
let upgrade_button=document.getElementById("upgrade_button");   //工房のアップグレードボタン 

/*　アップグレード時のアラートメッセージを空白に*/
let upgrade_alert_reset=function(){ 
    upgrade_alert.innerHTML="";
}

/*　現在の所持金を表示 */
let gold_count=function(){
    now_gold.innerHTML="現在の所持金:"+gold+"G";
}

/* ----------------------------------------- */

window.addEventListener("DOMContentLoaded", function () {
    quantity=localStorage;  //武器の個数の配列
    for(let i=0;i<5;i++){   //武器の個数を初期化
        quantity[i]=0;
    }
    point_dom.innerHTML = point;
    setInterval(gold_count,100);    //0.1秒ごとに、現在の所持金の表示を更新
});

upgrade_button.addEventListener("click", function(){
    if(upgrade_price[phase]<=gold){
        gold-=upgrade_price[phase]; //アップグレード分のお金を引く
        upgrade_alert.innerHTML="アップグレードに成功しました!("+upgrade_price[phase]+"G消費)"; //アラートメッセージ表示
        phase+=1;   //フェーズを進める(次の武器を作るので)
        click=1;    //一度に作れる個数を1にリセット
        point=1;    //一度に作れる個数を1にリセット
        now_weapon.innerHTML=weapon_name[phase];            //アップグレード画面のテキストを次の武器に更新
        next_weapon.innerHTML=weapon_name[phase+1];         //アップグレード画面のテキストを次の武器に更新
        now_weapon_png.src="images/"+weapon_png[phase];     //アップグレード画面の画像を次の武器に更新
        next_weapon_png.src="images/"+weapon_png[phase+1];  //アップグレード画面の画像を次の武器に更新
        weapon.src="images/"+weapon_png[phase];             //左画面の画像を次の武器に更新
        setTimeout(upgrade_alert_reset,1500);               //1.5秒後、アラートメッセージ削除
    }else{
        upgrade_alert.innerHTML="アップグレードに失敗しました。("+(upgrade_price[phase]-gold)+"G不足)"; //アラートメッセージ表示
        setTimeout(upgrade_alert_reset,1500);   //1.5秒後、アラートメッセージ削除
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

