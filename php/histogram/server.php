<?php
    
    $a=$_POST['data'];
        echo $a;
    $a=str_replace('data:image/png;base64,','',$a);
    file_put_contents('img.png',base64_decode($a));
    header("location: main.php")
    
   
?>