let phase=0;    //フェーズ。何を今作っているか。例:0=ナイフ、1=ロングソード
let now_make=0;
let point=1;    
let point_dom = document.getElementById("click");
let click=new Array(1,1,1,1,1,1,1,1,1,1);     //クリック毎の生産数
let quantity=new Array(0,0,0,0,0,0,0,0,0,0);  //武器の個数の配列
let gold=105000;  //ここの値が初期の所持金になる

/* 左画面の下部分 --------------- */
let weapon1=document.getElementById("weapon1");
let weapon2=document.getElementById("weapon2");
let weapon3=document.getElementById("weapon3");
let weapon4=document.getElementById("weapon4");
let weapon5=document.getElementById("weapon5");
let weapon6=document.getElementById("weapon6");
let weapon7=document.getElementById("weapon7");

weapon1.onclick=function(){
    weapon.src="images/"+weapon_png[0];
    now_make=0;
}
weapon2.onclick=function(){
    if(phase>=1){
        weapon.src="images/"+weapon_png[1]; 
        now_make=1;
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon3.onclick=function(){
    if(phase>=2){
        weapon.src="images/"+weapon_png[2]; 
        now_make=2;
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon4.onclick=function(){
    if(phase>=3){
        weapon.src="images/"+weapon_png[3]; 
        now_make=3;
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon5.onclick=function(){
    if(phase>=4){
        weapon.src="images/"+weapon_png[4]; 
        now_make=4;
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon6.onclick=function(){
    if(phase>=5){
        weapon.src="images/"+weapon_png[5]; 
        now_make=5;
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon7.onclick=function(){
    if(phase>=6){
        weapon.src="images/"+weapon_png[6]; 
        now_make=6;
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon8.onclick=function(){
    if(phase>=7){
        weapon.src="images/"+weapon_png[7]; 
        now_make=7;
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
let now_1=document.getElementById("now_1");
let now_2=document.getElementById("now_2");
let now_3=document.getElementById("now_3");
let now_4=document.getElementById("now_4");
let now_5=document.getElementById("now_5");
let now_6=document.getElementById("now_6");
let now_7=document.getElementById("now_7");

/* アップグレードで使ったやつ -------------------------- */

let weapon=document.getElementById("weapon"); //左画面の武器の画像
const weapon_name = new Array("ナイフ", "ロングソード", "デュアルソード","刀","ファイアソード","魔剣","聖剣");    //武器名を入れた配列
const weapon_png = new Array("ナイフ.png", "ロングソード.png", "デュアルソード.png","刀.png","ファイアソード.png","魔剣.png","聖剣.png")  //武器の画像名を入れた配列
let now_weapon=document.getElementById("now_weapon");           //現在作っている武器の名前
let now_weapon_png=document.getElementById("now_weapon_png");   //右画面の、現在作っている武器の画像
let next_weapon=document.getElementById("next_weapon");         //次に作る武器の名前
let next_weapon_png=document.getElementById("next_weapon_png"); //右画面の、次に作る武器の画像

let upgrade_alert=document.getElementById("upgrade_alert");     //アップグレード時のアラートメッセージ
const upgrade_price = new Array(5000, 10000, 20000,30000,50000);//アップグレードに必要な価格を入れた配列
let upgrade_button=document.getElementById("upgrade_button");   //工房のアップグレードボタン 

/*　アップグレード時のアラートメッセージを空白に*/
let upgrade_alert_reset=function(){ 
    upgrade_alert.innerHTML="";
}

/*　現在の武器の個数と所持金を表示 */
let now_gold=document.getElementById("now_g");                  //右画面の、現在の所持金を出す部分
let count=function(){
    now_gold.innerHTML="現在の所持金:"+gold+"G";
    point_dom.innerHTML = "1クリック /"+click[now_make]+"個生産";
    now_1.innerHTML="ナイフ:"+quantity[0];
    now_2.innerHTML="ロングソード:"+quantity[1];
    now_3.innerHTML="デュアルソード:"+quantity[2];
    now_4.innerHTML="刀:"+quantity[3];
    now_5.innerHTML="ファイアソード:"+quantity[4];
    now_6.innerHTML="魔剣:"+quantity[5];
    now_7.innerHTML="聖剣:"+quantity[6];
}

/* 購入で使ったやつ -------------------------- */
let item_phase=0;
const item1=new Array(500,500,500,1000);       //ナイフのアイテム
const item2=new Array(1500,1500,1500,3000);    //ロングソードのアイテム
const item3=new Array(4500,4500,4500,9000);    //デュアルソードのアイテム
const item4=new Array(13500,13500,13500,27000);//刀のアイテム
const item5=new Array(40500,40500,40500,71000);//ファイアソードのアイテム
const item6=new Array(121500,121500,121500,213000);//魔剣のアイテム
const item7=new Array(364500,364500,364500,639000);//聖剣のアイテム
let item1_name=document.getElementById("item1_name");
let item1_text=document.getElementById("item1_text");
let item2_name=document.getElementById("item2_name");
let item2_text=document.getElementById("item2_text");
let item3_name=document.getElementById("item3_name");
let item3_text=document.getElementById("item3_text");
let item4_name=document.getElementById("item4_name");
let item4_text=document.getElementById("item4_text");

/*
quantitiy=武器の個数を管理する配列
[0]=ナイフの個数
[1]=ロングソードの個数
[2]=デュアルソードの個数
[3]=刀の個数
[4]=ファイアソードの個数
[5]=魔剣の個数
[6]=聖剣の個数
*/

window.addEventListener("DOMContentLoaded", function () {
    setInterval(count,100);    //0.1秒ごとに、現在の所持金と武器の個数の表示を更新
});

upgrade_button.addEventListener("click", function(){
    if(upgrade_price[phase]<=gold){
        gold-=upgrade_price[phase]; //アップグレード分のお金を引く
        upgrade_alert.innerHTML="アップグレードに成功しました!("+upgrade_price[phase]+"G消費)"; //アラートメッセージ表示
        phase+=1;   //フェーズを進める(次の武器を作るので)
        now_make=phase;
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
    quantity[phase]+=click[now_make];
    clickpoint.classList.remove('fadeout');
    window.setTimeout(function(){
        clickpoint.classList.add('fadeout');
    }, 500);
}

document.querySelector( ".make" ).addEventListener( "click", function( event ) {
	var clickX = event.pageX ;
	var clickY = event.pageY ;

	// 要素の位置を取得
	var clientRect = this.getBoundingClientRect() ;
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	// 要素内におけるクリック位置を計算
	var x = clickX - positionX ;
	var y = clickY - positionY ;

    clickpoint.style.top = y;
    clickpoint.style.left = x;
} ) ;
