$(function () {
  $(".btn__submit").on("click", function () {     //アカウント作成ボタンをクリックしたときに
    console.clear();       //コンソール画面をクリアにする
    console.log("名字");    //「名字」と表示
    console.log($("#family__name").val());        //入力された「名字」を取得し表示
    console.log("名前");    //「名前」と表示
    console.log($("#given__name").val());    //入力された「名前」を取得し表示
    console.log("生年月日");      //「生年月日」と表示
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日"); //指定された生年月日を取得し表示（間に「年、月、日」も表示）
    console.log("性別");    //「性別」と表示
    console.log($('[name="gender"]:checked').val()); //チェックされた性別を表示
    console.log("職業");    //「職業」と表示
    console.log($(".occupation").val()); //職業を取得し表示
    console.log("アカウント名"); //「アカウント名」と表示
    console.log($("#account__name").val()); //アカウント名を取得し表示
    console.log("メールアドレス"); //「メールアドレス」と表示
    console.log($("#email").val()); //emailを取得し表示
    console.log("パスワード"); //「パスワード」と表示
    console.log($("#password").val()); //パスワードを取得し表示
    console.log("確認パスワード"); //「確認パスワード」と表示
    console.log($("#duplication__password").val()); //確認パスワードを取得し表示
    console.log("住所"); //「住所」と表示
    console.log($("#address").val()); //住所を取得し表示
    console.log("電話番号"); //「電話番号」と表示
    console.log($("#tel").val()); //電話番号を取得し表示
    console.log("購読情報"); //「購読情報」と表示
    $('[name="subscription"]:checked').each(function () { console.log($(this).val()) }) //購買情報のチェックボックスがチェックされていた場合、チェックされたそのものを取得し表示
  })
});
