<?php
 mb_internal_encoding("utf8");  
 $pdo = new
 PDO("mysql:dbname=lesson01;host=localhost;" ,"root" ,"");
 $pdo->exec("insert into DIWORKS_KEIJIBAN(handlename,title,comments)
 values('".$_POST['handlename']."','".$_POST['title']."','".$_POST['comments']."');");

 header("Location:http://localhost/diworks_keijiban/index.php");

 ?>
 