

$(function() {
  $(".select-box").on("change", function() {     //　選択肢を変更したときに
    const category = $(this).val();              //　変更したもののvalueを取得
    let foodList = $(".food-list li");           //　food-listを取得
    if ("all" === category) {                    //　もしcategoryがallだったら
      foodList.show();                           //　foodlistを表示する
      return false;                              //　処理を終了する
    }
    $.each(foodList, function(index, element){   //　ループ処理の構文
      const categoryType = $(element).data("category-type");  //data-category-typeを取得
      if (category === categoryType) {           //　もし　category　と　categoryType が一致していたら
        $(element).show();                       //　要素を表示する
      } else {                                   //　異なっている場合には
        $(element).hide()                        //　要素を非表示にする
      }
    })
  });
});