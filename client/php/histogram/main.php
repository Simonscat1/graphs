
<html>
<head>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="../../scr/histogram/script.js" defer></script>
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
			<form method="POST" action="">
			<div>
					<span>Имя файла:</span><input id="file_name" name="file_name" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)" value="XY0="></input><input id="XY0" name="XY0=" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)" value="X1="></input><input id="X1" name="X1=" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)"value="Y1="></input><input id="Y1" name="Y1=" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)"value="RGB"></input><input id="RGB" name="RGB" type="text" required disabled/>
				</div>
				<div>
					<input type="button" class="button_coordinates" onclick="action_button(this)"value="Y01/len"></input><input id="Y01" name="Y01" type="text" required disabled/>
				</div>
				<div>
					<button  type="submit" id="botton_send_form" name="send"> Отправить</button>
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