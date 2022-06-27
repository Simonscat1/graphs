<?php
	 $img = $_POST['img'];
   
	 if (strpos($img, 'data:image/png;base64') === 0) {
		 
		$img = str_replace('data:image/png;base64,', '', $img);
		$img = str_replace(' ', '+', $img);
		$data = base64_decode($img);
		$file = 'uploads/img'.date("YmdHis").'.png';
	 
		if (file_put_contents($file, $data)) {
		   echo "$file.";
		} else {
		   echo '123';
		}   
	   
	 }
?>
<html>
<head>
<script src="../../scr/histogram/script.js" defer></script>
<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="../../css/histogram.css">
</head>
<body>
	
	<div>
		<div class="menu">
			<div class="box_canvasZoom">
				<canvas id="canvasZoom" class="canvasZoom"></canvas>
			</div>
			<div>
				<label for="file">Выбрать файл</label><input type="file" id="file">
			</div>
			<form onsubmit = "download_img(event)">
			<div>
					<span>Имя файла:</span><input id="file_name" name="file_name" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)" value="X0="></input><input id="X0=" name="X0=" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)" value="X1="></input><input id="X1=" name="X1=" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)" value="Y0="></input><input id="Y0=" name="Y0=" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)"value="Y1="></input><input id="Y1=" name="Y1=" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)"value="RGB"></input><input id="RGB" name="RGB" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)"value="X0Tower"></input><input id="X0Tower" name="X0Tower" type="text" required disabled/>
				</div>
				<div>
					<input type="button" name="33" class="button_coordinates" onclick="action_button(this)"value="X1Tower"></input><input id="X1Tower" name="X1Tower" type="text" required disabled/>
				</div>
				<div>
					<button  type="submit" name="send"> Отправить</button>
				</div>
			</form>
		</div>
		<div class="box_img_canvas">
			<canvas id="img_canvas" class="img_canvas" style="cursor: crosshair;">	
			</canvas>
		</div>
	</div>		
</body>
</html>