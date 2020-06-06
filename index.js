// Response for Uptime Robot
const http = require('http');
http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Discord bot is active now \n');
}).listen(3000);

// Discord bot implements
const discord = require('discord.js');
const client = new discord.Client();
const token = 'MzU2MDgxNjQyNDQ5NjY2MDUw.Xtsx2w.mXCOms8EWBzbgpogsrO-0XD0m_o'
//const prefix = '!';
//const HandleOrder = require('./handle_order.js');

client.on('ready', message =>
{
  client.user.setPresence({ game: { name: '地底管理'}})
	console.log('bot is ready!');
});

client.on('message', message =>
{
	if(message.isMemberMentioned(client.user)&& message.author != client.user)
	{
    var talk =[
      "呼びました？",
      "地底は暑いと思われがちですが、意外と快適なんですよ？",
      "やっぱり髪の毛整えた方がいいかしら……。あっ！　き、気にしないで！　ただの独り言だから",
      "心を読む能力は素晴らしい。どんな相手にも通用する最高の力だわ",
      "こいし？　そうねぇ、やっぱり姉としては妹のことはいつも心配よ。どこに行ってるのか、危ない目に合っていないか気が気じゃないわ",
      "大丈夫、あなたがいつも頑張っているのは私が誰よりも知っているから",
      "この前見せてくれたあの話、とっても良かったわよ",
      "あなたも私のことが怖い？　いいの、慣れっこだから",
      "ふふっ。お燐はね、とてもふわふわしていて撫でると気持ちいいのよ",
      "ごめんなさい、今仕事中なの。ちょっと待っててくれる？",
      "かっぱっぱー、かっぱっぱー、きゅうりのキュウちゃん丸かじりー……あなたも歌います？",
      "地霊殿は広いからペット達が手分けして掃除してくれるの……もっと汚れることもあるけどね",
      "あなたも私のペットになる？",
      "あんまり混み混みした所は好きじゃないけれど賑やかなのは嫌いじゃないわ",
      "さあ、これからが本番よ！　眠りを覚ます恐怖の記憶で眠るがいい！",
      "ワンライのお題は出してあげるけど、管理はしてないわ。何か要望があるんだったら"+"<@!303760572158050326>"+"に言ってくれる？",
      "「やらなきゃ、やらなきゃ」って思えば思うほどやる気ってなくなるのよね",
      "地霊殿が爆発……？　起こりませんよそんなこと",
      "もぐもぐ、むぐ！？　……な、何も食べてませんよ？",
      "欲、ですか？　私にもありますよ。誰か5000兆円くれないかなぁとか",
      "私の想起は別にトラウマを見せるだけじゃなくて他にも色々使い道があるんですよ？",
      "最近嬉しかったこと……？　今朝割った卵が黄身2つだったことかしら",
      "こいしが産まれてきてくれて本当に感謝しているの。孤影悄然だーとか言われてもやっぱり独りは寂しいもの",
      "今新しいお話を考えているの。空飛ぶ核融合炉のお話よ。……え、面白くなさそう……？",
      "旧地獄の管理者なんて私には身に余る立場だけれど、色んな方の力添えで何とかやってきているわ",
      "あれ？　ここにあったスコーンは？",
      "温泉入りたいなぁ",
      "お燐もお空も立派に人化してくれてとっても嬉しいわ。ペットは飼い主に似るとはよく言ったものね",
      "私の能力を使えば心地よく眠ることだってできるのよ？",
      "私のことは嫌いになってもこいしのことは嫌いにならないであげてね",
      "心が読めるってどんな感じか……？　うーん、あなたは何か考えるときどんな感じで考えている？　……上手く説明できないでしょう？　それと同じよ",
      "「このさとり様作るのめちゃくちゃ大変だった……」……ごめんなさい、誰かの心の声が聞こえたみたい",
      "末永くこのサーバーを楽しんでもらえると私も嬉しいわ",
      "何かを作り出すってとても大変で時間のかかることだけれど、とても素晴らしいものだと思うわ",
      "ワンライのお題を増やしたかったら"+"<#490841209636651008>" + "に【登場人物】・【環境】・【テーマ】・【必須キーワード】のどれかを明記した上で"+"<@!303760572158050326>"+"に声をかけてみなさい",
    ]
    var randomtalk = Math.floor( Math.random() * talk.length);
		message.reply(talk[randomtalk]);
		return;
	}
  
  //ワンライのお題を出すプログラム、いずれは時間帯指定もしたい
  if(message.content.match(/!onewrite/)&& message.author != client.user){
  
  	var genre = [
		  "不問",
      "あなたの一番好きなキャラ",
	  	"旧作キャラ",
	  	"紅魔郷キャラ",
	  	"妖々夢キャラ",
	  	"萃夢想キャラ",
	  	"永夜抄キャラ",
	  	"花映塚キャラ",
	  	"文花帖・ダブルスポイラーキャラ",
	  	"風神録キャラ",
	  	"緋想天・非想天則キャラ",
	  	"地霊殿キャラ",
	  	"星蓮船キャラ",
	  	"妖精大戦争キャラ",
	  	"神霊廟キャラ",
	  	"心綺楼キャラ",
	  	"輝針城キャラ",
	  	"弾幕アマノジャクキャラ",
	  	"深秘録キャラ",
	  	"紺珠伝キャラ",
	  	"憑依華キャラ",
	  	"天空璋キャラ",
	  	"秘封ナイトメアダイアリーキャラ",
	  	"鬼形獣キャラ",
	  	"音楽CD（秘封含む）キャラ",
	  	"香霖堂キャラ",
	  	"三月精キャラ",
	  	"儚月抄キャラ",
	  	"茨華仙キャラ",
	  	"鈴奈庵キャラ",
	  	"智霊奇伝キャラ",
	  	"酔蝶華キャラ",
      "霊夢を出さない（メイン・モブを問わず）",
      "紅魔郷のボスキャラ（ポジ不問）",
	  ];
    
    var scene = [
	  	"入浴",
	  	"飲酒",
	  	"ベルが鳴る場面から開始",
	  	"夢の中（自覚の有無は不問）",
	  	"朝",
	  	"路上",
	  	"不問",
      "幻想郷",
	];
    
    var theme = [
		  "不問",
	  	"救う",
	  	"遭遇",
	  	"才能",
	  	"時間",
	  	"科学",
	  	"記録",
	  	"朝食",
	  	"「」の使用禁止",
      "泥酔",
      "ショット",
      "省略",
      "いと",
      "祈り",
      "さびる",
      "しみ",
      "壁",
      "笑",
      "苦",
      "行事",
      "絶景",
      "本能",
      "リメイク",
      "水晶",
      "師匠",
      "立秋",
      "煙草",
      "大失敗",
      "箱庭",
      "ゴミ",
      "嘘",
      "多い",
      "あかり",
      "祭り",
    ];
    
    var key = [
	  	"火",
	  	"水",
	  	"人",
	  	"サイド",
	  	"ロック",
	  	"トリガー",
	  	"不滅",
	  	"危険",
	  	"黒",
	  	"性格",
	  	"記憶",
	  	"特異",
	  	"振る",
	  	"回す",
	  	"潰す",
	  	"理性",
	  	"散歩",
	  	"光",
	  	"輝き",
	  	"不可",
	  	"トップ",
	  	"納戸",
	  	"砂糖",
	  	"炊き",
	  	"舞台",
	  	"メモ",
	  	"陸",
	  	"海",
	  	"空",
	  	"友",
	  	"努",
	  	"勝",
	  	"気",
	  	"液",
	  	"固",
	  	"晴",
		  "雨",
		  "曇",
      "オフ",
      "風",
      "区別",
      "斜め",
      "早朝",
      "生卵",
      "雲",
      "骨",
      "露",
      "紙",
      "都合",
      "愛",
      "鈴",
      "境",
      "幻",
      "九十九",
      "目",
      "耳",
      "本",
      "太陽",
      "猫",
      "肩",
      "足",
      "指",
      "空虚",
      "残酷",
      "知",
      "上",
      "下",
      "管理",
      "権限",
      "春",
      "秋刀魚",
      "荷物",
      "櫛",
      "禁止",
      "音楽",
      "悪役",
      "乙女",
      "動画",
      "準備",
      "滴",
      "オマケ",
      "所在",
      "針",
      "図星",
      "噂",
      "足跡",
      "超越",
      "回る",
      "三度",
      "地図",
      "梅",
      "浴槽",
      "火星",
      "板",
      "タオル",
      "箱庭",
      "文",
      "午前4時",
      "紅葉",
      "新しい",
      "旅",
      "部室",
      "庭",
      "氷",
      "先祖",
      "小指",
      "時計",
      "霞",
      "泡",
	];
    
    var randomg = Math.floor( Math.random() * genre.length);
    var randoms = Math.floor( Math.random() * scene.length);
    var randomt = Math.floor( Math.random() * theme.length);
       
    
    var keyflag =true;
    while ( keyflag ){
      var randomk = Math.floor( Math.random() * key.length);
      var randome = Math.floor( Math.random() * key.length);
      var randomy = Math.floor( Math.random() * key.length); 
      
      if(!(randomk == randome , randome == randomy , randomy == randomk)){
        var ky = "【必須キーワード3種】\n" + "　" + key[randomk] + "　" + key[randome] + "　" + key[randomy];
        keyflag = false;
      }
    }

    
    let gr = "【登場人物】\n" + "　" + genre[randomg];
    let sn = "【環境】\n" + "　" + scene[randoms];
    let tm = "【テーマ】\n" + "　" + theme[randomt];
    
    client.channels.get("489800717675134979").send("\n================================================\n【古明地さとりの挑戦状】\n　下記条件で1時間以内に1000文字以内の即興作品を完成させよ\n\n" +
                  gr + "\n\n"+ 
                  
                  sn + "\n\n" + 
                  
                  tm + "\n\n" + 
                  
                  ky + 
                  "\n================================================\n出来上がったら下の"+"<#489801186174828555>"+"に投稿してください\n終了後、他者の作品感想は"+"<#490450418376376336>"+"によろしくお願いします\n\n" +
                  "原稿を書く際は以下を参考にしてくださいね\n" +
                 "-----------------------------------------------\n【タイトル】\n\n【著者】\n\n【主演】\n\n【本文】\n\n-----------------------------------------------\n"　+
                 "文字数の確認は所有ソフトか下記ページを参照すると便利かもしれないわね\nhttp://www1.odn.ne.jp/megukuma/count.htm\n\n" 
                 );
    
    return;
  }
  
	//musicbotの機能 ※テスト中
//	if (message.content.startsWith(prefix)) {
//    HandleOrder.call(message);
//  }
   
//    return;
});
  
 
if(token == undefined)
{
	console.log('please set ENV: DISCORD_BOT_TOKEN');
	process.exit(0);
}

client.login( token );