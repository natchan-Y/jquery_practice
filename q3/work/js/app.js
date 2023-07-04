

$(function (){
  $(".drawer_button").on("click", function (){    //ハンバーガーメニューボタンをクリックしたときに
    $(".drawer_bg").fadeToggle();                 //フェードインフェードアウトで切り替え。
    $(".drawer_button").toggleClass("active");    //drawer_buttonにactiveクラスに切り替え。
    $("nav").toggleClass("open") });              //navののクラスをopenに切り替え。
  $(".drawer_bg").on("click", function (){        //ハンバーガーメニューボタン（このときは☒ボタン）をクリックしたときに
    $(".drawer_bg").hide();                       //drawer_bgを非表示にする
    $(".drawer_button").removeClass("active");    //.drawer_buttonのactiveクラスを排除。
    $("nav").removeClass("open")                  //navのopenクラスを排除
  })
});