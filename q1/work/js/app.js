//Q1-1 読み込み時に文字の色変化
$("document").ready(function () {  //HTMLをすべて読み込んだ後に処理を実行
  $("#q1").css("color","green");  //q1の文字色をグリーンに変更
});


//Q1-2 クリックしてボタンの色変更
$("#q2").on("click" ,function() {  //q2のボタンをクリックした時に処理を実行
  $("#q2").css("background","pink");    //q2のボタン背景をピンクに変更
});

//Q1-3 クリックしてフェードアウト
$("#q3").on("click", function() {  //q3のボタンをクリックした時に処理を実行
  $("#q3").fadeOut(3000);          //q3のボタンを3秒かけてフェードアウト
});

//Q1-4 クリックしてサイズ変更
$("#q4").on("click", function() {  //q4のボタンをクリックした時に処理を実行
  $("#q4").css({            //q4のcssプロパティを以下にまとめて追加
    "padding":"50px" ,      //paddingを50px
    "width": "300px" ,      //widthを300px
    "font-size" :"20px"     //font-sizeを20px
  });
});

//Q1-5 クリックしてDOMの挿入
$("#q5").on("click", function() {  //q5のボタンをクリックした時に処理を実行
  $("#q5").append("DOMの中の後");   //指定した子要素の最後に「DOMの中の後」という文字を追加
  $("#q5").prepend("DOMの中の前");  //指定した子要素の先頭に「DOMの中の前」という文字を追加
  $("#q5").after("DOMの後");       //要素外の最後に「DOMの後」という文字を追加
  $("#q5").before("DOMの前");      //要素外の先頭に「DOMの前」という文字を追加
});

//Q1-6 クリックして移動
$("#q6").on("click", function() {  //q6のボタンをクリックした時に処理を実行
  $("#q6").animate({               //アニメーションを実装するメソッド
    "margin-top" : "100px",        //margin-topを100pxに指定
    "margin-left" : "100px"        //margin-leftを100pxに指定
  },2000);                         //q6のボタンを2秒かけて移動
});

//Q1-7 クリックしてidのノードをコンソールで表示
$("#q7").on("click", function() {  //q7のボタンをクリックした時に処理を実行
  console.log(this);               //コンソールログで要素（ノード）を表示
});


//Q1-8 ホバー時にサイズ変更
$("#q8").hover(                     //q8のボタンをホバー時に実行
  function() {
  $("#q8").addClass("large"); },    //cssのクラス「large」を追加
  function() {                      //ホバーしていない時に
  $("#q8").removeClass("large");    //cssのクラス「large」を削除
});


//Q1-9 クリックして配列のアラート表示
$("#q9 li").on("click", function() {    //q9のボタンをクリックした時に処理を実行
  let index = $("#q9 li").index(this);  //クリックしたそのもののインデックス番号を取得
  alert(index);                         //アラートでindexを表示
});


//Q1-10 Q10をクリックしてQ11を操作
$("#q10 li").on("click", function() {    //q10のボタンをクリックした時に処理を実行
  let change = $("#q10 li").index(this);   //クリックしたそのもののインデックス番号を取得
  $("#q11 li").eq(change).addClass("large-text");   //前の行で取得したインデックス番号を引数に、q11のcssのクラス「large-text」を追加
});
