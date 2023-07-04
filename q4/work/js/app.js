$(function(){
  $(".nav li").on("click" ,function(){           //navのliをクリックしたときに
    $(".description li").addClass("is-hidden");  //description li(タブ下のコンテンツ)にis-hidden(すべて非表示にする)クラスを追加する。
    const tab = $(".nav li").index(this);        //クリックしたliのインデックス番号を取得する。
    $(".description li").eq(tab).removeClass("is-hidden"); //先程取得したインデックス番号に対応するdescription li(タブ下のコンテンツ)の非表示にするクラス（is-hidden）を排除する
    })
});