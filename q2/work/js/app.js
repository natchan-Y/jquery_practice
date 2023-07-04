	//↓開くボタンをクリックしたらモーダルを表示する
	$(".modal_open_button").on('click',function(){    // OPENのボタンを押したときに処理
    $(".modal_win").fadeIn();   //モーダルのウィンドウをフェードイン
	});

	//↓閉じるボタンをクリックしたらモーダルを閉じる
	$(".modal_close_button").on('click',function(){ // 閉じるボタンを押したときに処理
    $(".modal_win").fadeOut();                    // モーダルのウィンドウをフェードアウト
	});