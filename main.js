let phase=0;    //フェーズ。何を今作っているか。例:0=ナイフ、1=ロングソード
let item_phase=0; //現在作っている物に応じて右の購入画面を変えるためのもの
let now_make=0;
let point=1;    
let point_dom = document.getElementById("click");

/*　配列だと動作しない為各個変数　*/
let click1=1;
let click2=1;
let click3=1;
let click4=1;
let click5=1;
let click6=1;
let click7=1;
let quantity1=0;
let quantity2=0;
let quantity3=0;
let quantity4=0;
let quantity5=0;
let quantity6=0;
let quantity7=0;
let weapon_sell1=10;
let weapon_sell2=100;
let weapon_sell3=1000;
let weapon_sell4=10000;
let weapon_sell5=100000;
let weapon_sell6=1000000;
let weapon_sell7=10000000;

let weapon_sell_price=document.getElementById("now_weapon_price");
let gold=500;  //ここの値が初期の所持金になる

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
    item_phase=0;
    weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell1+"G/1個";
}
weapon2.onclick=function(){
    if(phase>=1){
        weapon.src="images/"+weapon_png[1]; 
        now_make=1;
        item_phase=1;
        weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell2+"G/1個";
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon3.onclick=function(){
    if(phase>=2){
        weapon.src="images/"+weapon_png[2]; 
        now_make=2;
        item_phase=2;
        weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell3+"G/1個";
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon4.onclick=function(){
    if(phase>=3){
        weapon.src="images/"+weapon_png[3]; 
        now_make=3;
        item_phase=3;
        weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell4+"G/1個";
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon5.onclick=function(){
    if(phase>=4){
        weapon.src="images/"+weapon_png[4]; 
        now_make=4;
        item_phase=4;
        weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell5+"G/1個";
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon6.onclick=function(){
    if(phase>=5){
        weapon.src="images/"+weapon_png[5]; 
        now_make=5;
        item_phase=5;
        weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell6+"G/1個";
    }else{
        alert("その武器を作るには工房のランクが足りません。");
    }
}
weapon7.onclick=function(){
    if(phase>=6){
        weapon.src="images/"+weapon_png[6]; 
        now_make=6;
        item_phase=6;
        weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell7+"G/1個";
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
let upgrade_price=document.getElementById("upgrade_price");
const upgrade_prices = new Array(9000, 90000, 900000, 9000000, 90000000, 900000000);//アップグレードに必要な価格を入れた配列
let upgrade_button=document.getElementById("upgrade_button");   //工房のアップグレードボタン 

/*　アップグレード時のアラートメッセージを空白に*/
let upgrade_alert_reset=function(){ 
    upgrade_alert.innerHTML="";
}

/* 購入で使ったやつ -------------------------- */
const item1=new Array("良質な鋼板","良質なヤスリ","魔獣の骨","ナイフ職人");
const item2=new Array("良質なインゴット","業物のハンマー","魔獣の革","剣鍛冶");
const item3=new Array("巨獣の大角","黒金","魔物の素材","双剣鍛冶");
const item4=new Array("玉鋼","東洋の鍛冶台","黄金の鍔","刀匠");
const item5=new Array("精霊の火種","ドワーフの炉","付与術","魔法剣職人");
const item6=new Array("魔族の角","屍者の生首","魔族の墓石","魔剣職人");
const item7=new Array("オリハルコン","魔力合金","世界樹の木材","伝説の鍛冶師");
const item_sold=new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
const item_price=new Array(300,600,900,1800,
                           3000,6000,9000,18000,
                           30000,60000,90000,180000,
                           300000,600000,900000,1800000,
                           3000000,6000000,9000000,18000000,
                           30000000,60000000,90000000,180000000,
                           300000000,600000000,900000000,1800000000);
let item1_name=document.getElementById("item1_name");
let item1_text=document.getElementById("item1_text");
let item2_name=document.getElementById("item2_name");
let item2_text=document.getElementById("item2_text");
let item3_name=document.getElementById("item3_name");
let item3_text=document.getElementById("item3_text");
let item4_name=document.getElementById("item4_name");
let item4_text=document.getElementById("item4_text");
let buy_button_1=document.getElementById("buy_button_1");
let buy_button_2=document.getElementById("buy_button_2");
let buy_button_3=document.getElementById("buy_button_3");
let buy_button_4=document.getElementById("buy_button_4");

/* 売却で使ったやつ ---------------------------- */
let sell_button=document.getElementById("sell_button");
let weapon_sell_text=document.getElementById("weapon_sell");

/*　現在の状況を表示 */
let now_gold1=document.getElementById("now_g1");                  //右画面の、現在の所持金を出す部分
let now_gold2=document.getElementById("now_g2");
let all_sell=0; //合計金額
let count=function(){
    all_sell=quantity1*weapon_sell1+quantity2*weapon_sell2+quantity3*weapon_sell3
    +quantity4*weapon_sell4+quantity5*weapon_sell5+quantity6*weapon_sell6+quantity7*weapon_sell7;
    now_gold1.innerHTML="現在の所持金:"+gold+"G";
    now_gold2.innerHTML="現在の所持金:"+gold+"G";
    weapon_sell_text.innerHTML="合計金額:"+all_sell+"G";
    now_1.innerHTML="ナイフ:"+quantity1;
    now_2.innerHTML="ロングソード:"+quantity2;
    now_3.innerHTML="デュアルソード:"+quantity3;
    now_4.innerHTML="刀:"+quantity4;
    now_5.innerHTML="ファイアソード:"+quantity5;
    now_6.innerHTML="魔剣:"+quantity6;
    now_7.innerHTML="聖剣:"+quantity7;
    switch(now_make){
        case 0:
            weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell1+"G/1個";
            point_dom.innerHTML = "1クリック /"+click1+"個生産";
            item1_name.innerHTML=item1[0];
            item2_name.innerHTML=item1[1];
            item3_name.innerHTML=item1[2];
            item4_name.innerHTML=item1[3];
            item1_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[0]+"G)";
            item2_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[1]+"G)";
            item3_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[2]+"G)";
            item4_text.innerHTML="クリックの度に作れる本数が1本増える。("+item_price[3]+"G)";
            break;
        case 1:
            weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell2+"G/1個";
            point_dom.innerHTML = "1クリック /"+click2+"個生産";
            item1_name.innerHTML=item2[0];
            item2_name.innerHTML=item2[1];
            item3_name.innerHTML=item2[2];
            item4_name.innerHTML=item2[3];
            item1_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[4]+"G)";
            item2_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[5]+"G)";
            item3_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[6]+"G)";
            item4_text.innerHTML="クリックの度に作れる本数が1本増える。("+item_price[7]+"G)";
            break;
        case 2:
            weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell3+"G/1個";
            point_dom.innerHTML = "1クリック /"+click3+"個生産";
            item1_name.innerHTML=item3[0];
            item2_name.innerHTML=item3[1];
            item3_name.innerHTML=item3[2];
            item4_name.innerHTML=item3[3];
            item1_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[8]+"G)";
            item2_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[9]+"G)";
            item3_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[10]+"G)";
            item4_text.innerHTML="クリックの度に作れる本数が1本増える。("+item_price[11]+"G)";
            break;
        case 3:
            weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell4+"G/1個";
            point_dom.innerHTML = "1クリック /"+click4+"個生産";
            item1_name.innerHTML=item4[0];
            item2_name.innerHTML=item4[1];
            item3_name.innerHTML=item4[2];
            item4_name.innerHTML=item4[3];
            item1_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[12]+"G)";
            item2_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[13]+"G)";
            item3_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[14]+"G)";
            item4_text.innerHTML="クリックの度に作れる本数が1本増える。("+item_price[15]+"G)";
            break;
        case 4:
            weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell5+"G/1個";
            point_dom.innerHTML = "1クリック /"+click5+"個生産";
            item1_name.innerHTML=item5[0];
            item2_name.innerHTML=item5[1];
            item3_name.innerHTML=item5[2];
            item4_name.innerHTML=item5[3];
            item1_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[16]+"G)";
            item2_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[17]+"G)";
            item3_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[18]+"G)";
            item4_text.innerHTML="クリックの度に作れる本数が1本増える。("+item_price[19]+"G)";
            break;
        case 5:
            weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell6+"G/1個";
            point_dom.innerHTML = "1クリック /"+click6+"個生産";
            item1_name.innerHTML=item6[0];
            item2_name.innerHTML=item6[1];
            item3_name.innerHTML=item6[2];
            item4_name.innerHTML=item6[3];
            item1_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[20]+"G)";
            item2_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[21]+"G)";
            item3_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[22]+"G)";
            item4_text.innerHTML="クリックの度に作れる本数が1本増える。("+item_price[23]+"G)";
            break;
        case 6:
            weapon_sell_price.innerHTML="現在の武器の価格:"+weapon_sell7+"G/1個";
            point_dom.innerHTML = "1クリック /"+click7+"個生産";
            item1_name.innerHTML=item7[0];
            item2_name.innerHTML=item7[1];
            item3_name.innerHTML=item7[2];
            item4_name.innerHTML=item7[3];
            item1_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[24]+"G)";
            item2_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[25]+"G)";
            item3_text.innerHTML=weapon_name[item_phase]+"の価格が2倍になる。("+item_price[26]+"G)";
            item4_text.innerHTML="クリックの度に作れる本数が1本増える。("+item_price[27]+"G)";
            break;
    }
    if(item_sold[item_phase*4+0]==1){
        buy_button_1.value="購入済み";
    }else{
        buy_button_1.value="購入する";
    }

    if(item_sold[item_phase*4+1]==1){
        buy_button_2.value="購入済み";
    }else{
        buy_button_2.value="購入する";
    }

    if(item_sold[item_phase*4+2]==1){
        buy_button_3.value="購入済み";
    }else{
        buy_button_3.value="購入する";
    }

    if(item_sold[item_phase*4+3]==1){
        buy_button_4.value="購入済み";
    }else{
        buy_button_4.value="購入する";
    }
}

window.addEventListener("DOMContentLoaded", function () {
    setInterval(count,100);    //0.1秒ごとに、現在の所持金と武器の個数の表示を更新
});

upgrade_button.addEventListener("click", function(){
    if(phase!=6){
        if(upgrade_prices[phase]<=gold){
            gold-=upgrade_prices[phase]; //アップグレード分のお金を引く
            upgrade_alert.innerHTML="アップグレードに成功しました!("+upgrade_prices[phase]+"G消費)"; //アラートメッセージ表示
            phase+=1;   //フェーズを進める(次の武器を作るので)
            now_make=phase;
            item_phase=now_make;
            point=1;    //一度に作れる個数を1にリセット
            if(phase!=6){
                now_weapon.innerHTML=weapon_name[phase];            //アップグレード画面のテキストを次の武器に更新
                next_weapon.innerHTML=weapon_name[phase+1];         //アップグレード画面のテキストを次の武器に更新
                now_weapon_png.src="images/"+weapon_png[phase];     //アップグレード画面の画像を次の武器に更新
                next_weapon_png.src="images/"+weapon_png[phase+1];  //アップグレード画面の画像を次の武器に更新
                weapon.src="images/"+weapon_png[phase];             //左画面の画像を次の武器に更新
                upgrade_price.innerHTML="必要料金:"+upgrade_prices[phase]+"G";
            }else{
                now_weapon.innerHTML=weapon_name[phase];
                next_weapon.innerHTML="なし";
                now_weapon_png.src="images/"+weapon_png[phase];
                next_weapon_png.src="images/"+weapon_png[phase];
                weapon.src="images/"+weapon_png[phase];
                upgrade_price.innerHTML="なし";
            }
            setTimeout(upgrade_alert_reset,1500);               //1.5秒後、アラートメッセージ削除
        }else{
            upgrade_alert.innerHTML="アップグレードに失敗しました。("+(upgrade_prices[phase]-gold)+"G不足)"; //アラートメッセージ表示
            setTimeout(upgrade_alert_reset,1500);   //1.5秒後、アラートメッセージ削除
        }
    }else{
        upgrade_alert.innerHTML="これ以上アップグレードできません!"; //アラートメッセージ表示
        setTimeout(upgrade_alert_reset,1500);   //1.5秒後、アラートメッセージ削除
    }
});

let item1_alert=document.getElementById("item1_alert");
let item2_alert=document.getElementById("item2_alert");
let item3_alert=document.getElementById("item3_alert");
let item4_alert=document.getElementById("item4_alert");

let item1_alert_reset=function(){ 
    item1_alert.innerHTML="";
}
let item2_alert_reset=function(){ 
    item2_alert.innerHTML="";
}
let item3_alert_reset=function(){ 
    item3_alert.innerHTML="";
}
let item4_alert_reset=function(){ 
    item4_alert.innerHTML="";
}

//アイテム1の購入
buy_button_1.addEventListener("click", function(){
    let i=item_phase*4+0;
    if(item_sold[i]==0){
        if(item_price[i]<=gold){
            switch(item_phase){
                case 0:weapon_sell1*=2; break;
                case 1:weapon_sell2*=2; break;
                case 2:weapon_sell3*=2; break;
                case 3:weapon_sell4*=2; break;
                case 4:weapon_sell5*=2; break;
                case 5:weapon_sell6*=2; break;
                case 6:weapon_sell7*=2; break;
            }
            item_sold[i]=1;
            gold-=item_price[i];
            item1_alert.innerHTML="購入しました!";
            setTimeout(item1_alert_reset,3000);
        }
    }else{
        item1_alert.innerHTML="購入済みです。";
        setTimeout(item1_alert_reset,1500);
    }
});

//アイテム2の購入
buy_button_2.addEventListener("click", function(){
    let i=item_phase*4+1;
    if(item_sold[i]==0){
        if(item_price[i]<=gold){
            switch(item_phase){
                case 0:weapon_sell1*=2; break;
                case 1:weapon_sell2*=2; break;
                case 2:weapon_sell3*=2; break;
                case 3:weapon_sell4*=2; break;
                case 4:weapon_sell5*=2; break;
                case 5:weapon_sell6*=2; break;
                case 6:weapon_sell7*=2; break;
            }
            item_sold[i]=1;
            item2_alert.innerHTML="購入しました!";
            gold-=item_price[i];
            setTimeout(item2_alert_reset,3000);
        }
    }else{
        item2_alert.innerHTML="購入済みです。";
        setTimeout(item2_alert_reset,1500);
    }
});

//アイテム3の購入
buy_button_3.addEventListener("click", function(){
    let i=item_phase*4+2;
    if(item_sold[i]==0){
        if(item_price[i]<=gold){
            switch(item_phase){
                case 0:weapon_sell1*=2; break;
                case 1:weapon_sell2*=2; break;
                case 2:weapon_sell3*=2; break;
                case 3:weapon_sell4*=2; break;
                case 4:weapon_sell5*=2; break;
                case 5:weapon_sell6*=2; break;
                case 6:weapon_sell7*=2; break;
            }
            item_sold[i]=1;
            item3_alert.innerHTML="購入しました!";
            gold-=item_price[i];
            setTimeout(item3_alert_reset,3000);
        }
    }else{
        item3_alert.innerHTML="購入済みです。";
        setTimeout(item3_alert_reset,1500);
    }
});

//アイテム4の購入
buy_button_4.addEventListener("click", function(){
    let i=item_phase*4+3;
    if(item_sold[i]==0){
        if(item_price[i]<=gold){
            item_sold[i]=1;
            item4_alert.innerHTML="購入しました!";
            gold-=item_price[i];
            switch(item_phase){
                case 0:click1*=2; break;
                case 1:click2*=2; break;
                case 2:click3*=2; break;
                case 3:click4*=2; break;
                case 4:click5*=2; break;
                case 5:click6*=2; break;
                case 6:click7*=2; break;
            }
            setTimeout(item4_alert_reset,3000);
        }
    }else{
        item4_alert.innerHTML="購入済みです。";
        setTimeout(item4_alert_reset,1500);
    }
});

let sell_alert=document.getElementById("sell_alert");
let sell_alert_reset=function(){ 
    sell_alert.innerHTML="";
}
sell_button.addEventListener("click",function(){
    if(all_sell!=0){
        gold+=all_sell;
        quantity1=0;
        quantity2=0;
        quantity3=0;
        quantity4=0;
        quantity5=0;
        quantity6=0;
        quantity7=0;
        sell_alert.innerHTML="売却しました!";
        setTimeout(sell_alert_reset,3000);
    }else{
        sell_alert.innerHTML="売却する武器がありません。";
        setTimeout(sell_alert_reset,1500);
    }
})

let clickpoint = document.getElementById('clickpoint');
weapon.onclick = function() {
    switch(now_make){
        case 0:quantity1+=click1; break;
        case 1:quantity2+=click2; break;
        case 2:quantity3+=click3; break;
        case 3:quantity4+=click4; break;
        case 4:quantity5+=click5; break;
        case 5:quantity6+=click6; break;
        case 6:quantity7+=click7; break;
    }
}


document.querySelector( ".make" ).addEventListener( "click", function( event ) {
    /** クリックしたら weapon のしたに追加 **/
    // id属性で要素を取得
    var wp_element = document.getElementById('weapon');

    // 新しいHTML要素を作成
    var new_element1 = document.createElement('p');
    new_element1.className = "clickpoint";
    new_element1.textContent = '+1';
    
    // 指定した要素の後に挿入
    wp_element.after(new_element1);

	var clickX = event.pageX ;
	var clickY = event.pageY ;

	// 要素の位置を取得
	var clientRect = this.getBoundingClientRect() ;
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	// 要素内におけるクリック位置を計算
	var x = clickX - positionX ;
	var y = clickY - positionY ;

    new_element1.style.top = y;
    new_element1.style.left = x;

    new_element1.classList.remove('fadeout');
    window.setTimeout(function(){
        new_element1.classList.add('fadeout');
    }, 250);


    clickpoint.remove();
} ) ;