<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>diworksblog 掲示板</title>
<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
<?php
 mb_internal_encoding("utf8");
 $pdo = new PDO("mysql:dbname=lesson01;host=localhost;","root","");
 $stmt = $pdo->query("select * from diworks_keijiban");

?>



<img src="diblog_logo.jpg">
<header>
    <ul>
        <li>トップ</li>
        <li>プロフィール</li>
        <li>D.I.Blogについて</li>
        <li>登録フォーム</li>
        <li>問い合わせ</li>
        <li>その他</li>
    </ul>
</header>

<main>

<div class="left">
<h1>プログラミングに役立つ掲示板</h1>
<div class="form">
<h2>入力フォーム</h2>
<form method="post" action="insert.php">
    <div>
        <label>ハンドルネーム</label><br>
        <input type="text" class="text" size="50" name="handlename" >
    </div>
    

    
    <div>
        <label>タイトル</label><br>
        <input type="text" class="text"size="50" name="title">
    </div>

    <div>
        <label>コメント</label><br>
    <textarea cols="100" rows="10" name="comments"></textarea>
    </div>

    <div> 
        <input type="submit" class="submit" value="送信する"> 
    </div> 
</form>
</div>


<?php
 
 while ($row = $stmt->fetch()) {
 echo "<div class='kiji'>";
 echo "<h3>".$row['title']."</h3>";
 echo "<div class='contents'>";
 echo $row['comments'];
 echo "<div class='handlename'>posted by".$row['handlename']."</div>";
 echo "</div>";
 echo "</div>";
 }

 ?></div></div>

<div class="right"> 
            
<h3>人気の記事</h3>  
PHPオススメ本<br>
PHP MyAdminの使い方<br>
今人気のエディタのTops<br>
HTMLの基礎

<h3>オススメリンク</h3>
ディーアイワークス株式会社<br>
XAMPPのダウンロード<br>
Eclipseのダウンロード<br>
Braketsのダウンロード<br>
    
<h3>カテゴリ</h3>
HTML<br>
PHP<br>
MySQL<br>
JavaScript<br>
</div>

 </div>
</main>

 
<footer>
Copyright D.I.Works D.I.blog is the one which provides A to Z about programming
</footer>

</body>
</html>
                