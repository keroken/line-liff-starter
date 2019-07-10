window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
  var color = '#' + parseInt(Math.random() * 0xffffff).toString(16);
  document.getElementById('sendmessagebutton').addEventListener('click', function () {
    liff.sendMessages([
    {
        type: "template",
        altText: "ラッキーカラー",
        template: {
        type: 'buttons',
        thumbnailImageUrl: 'https://liff-starter98.herokuapp.com/index.html/img/spacer.gif',//背景はファイルサイズ抑えるため透過のGIF画像を入れて見ました
        imageAspectRatio: 'square',
        imageSize: 'contain',
        imageBackgroundColor: color,
        text: color + ' がラッキーそうです。',
        actions: [//トーク内に表示される投稿からのリンクが設定できる
            {
            type: "uri",
            label: "ラッキーカラーを見てみよう",
            uri: "line://app/1597874033-mnPKGEXb"//ここに先ほど取得したliffIdを
            }
        ]
        }
    }
    ]).then(function () {
        liff.closeWindow();
    }).catch(function (error) {
        window.alert("Error sending message: " + error);
    });
  });
}
