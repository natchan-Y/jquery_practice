
  $(function() {
    $("ul.dropdwn li").hover( function() {              //ホバーしたときに実行
      $(".dropdwn_menu", this).stop().slideDown();      //ドロップダウンメニューをスライドしながら表示（stopでアニメーションの中断も可能にしている）
      },
      function() {                                      //（ホバーしていない時）
      $(".dropdwn_menu", this).slideUp();               //ドロップダウンメニューをスライドしながら非表示
      }
    );
  });