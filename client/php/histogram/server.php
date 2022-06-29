<?php
    
    
    $a=$_POST['data'];
    $name=$_POST['file_name'];
    $XY0=$_POST['cordes'];
    echo $XY0.'///'.$X1.'///'.$Y1.'///'.$RGB;

    $a=str_replace('data:image/png;base64,','',$a);
    echo '<h1>'.$name.'</h1>';
    file_put_contents('img.png',base64_decode($a));
   
    

    
   
?>

<html>
<head>
    <script>alert('<?=$a; ?>')</script>
</head>
<body>
    <h1>2434<h1>
</body>
</html>