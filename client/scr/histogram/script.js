var canvas = document.querySelector("#img_canvas");
var context_canvas = canvas.getContext('2d');
var file_input = document.querySelector("#file");
var file_name = document.querySelector("#file_name");
file_input.addEventListener('change',function(e){
	canvas.width = 900;
	canvas.height = 600;
	var image = new Image;
	image.src = URL.createObjectURL(e.target.files[0]);
	
	image.onload = function() {
		if(image.width>900 || image.height>600){
			if(image.width>image.height){
				for(let i=1;i>0;i=i-0.0001){
					if(image.width*i<=900){
						image.width*=i;
						image.height*=i;
						break;
					}
				}
			}
			if(image.height>600){
				for(let i=1;i>0;i=i-0.0001){
					if(image.height*i<=600){
						image.width*=i;
						image.height*=i;
						break;
					}
				}
			}
		}
		
		
		alert(image.width+" "+image.height);
	    context_canvas.drawImage(image, 0, 0,image.width,image.height);
        file_name.value=file_input.files[0].name;
	}
});
var canvasZoom = document.querySelector("#canvasZoom");
var context_canvasZoom = canvasZoom.getContext('2d');
canvas.addEventListener('mousemove',function(e){
	let rect=canvas.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let y = e.clientY - rect.top;
	console.log("x: " + x + " y: " + y);
	canvasZoom.width=200;
	canvasZoom.height=200;		
	context_canvasZoom.drawImage(canvas,x-50,y-50,100,100,0,0,200,200);
	context_canvasZoom.fillRect(98,98,3,3);	
    
 
});
var button_coordinates = document.querySelectorAll('.button_coordinates');
function action_button(e){
	for(let i=0;i<button_coordinates.length;i++){
		if(button_coordinates[i]==e){
				
					button_coordinates[i].disabled=true;
				}
			
		
			else{
				button_coordinates[i].disabled=false;
			}
		
	}			
}
function RGB_color(x,y){
    var RGB_result=document.querySelector('#RGB')
    var imgData=context_canvas.getImageData(x,y,1,1);
    
    
    return imgData.data[0]+","+imgData.data[1]+","+imgData.data[2];

}
var input_coordinates = document.querySelectorAll('input[type="text"]');
canvas.addEventListener('click',function(e){
	let rect=canvas.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let y = e.clientY - rect.top;
	console.log("x: " + x + " y: " + y);		
	for(let i=0;i<button_coordinates.length;i++){
		if(button_coordinates[i].disabled){
			if(i==0 || i==1 || i==4 || i==5){
			input_coordinates[i+1].value=x;
			}
			else if(i==2){
				input_coordinates[i+1].value=y;
			}
            else if(i==3){
                input_coordinates[i+1].value=RGB_color(x,y);
            }
		}
		else{
			button_coordinates[i].disabled=false;
		}
	}
});

    
$(document).on('click','#botton_send_form',function(){
	let dataURL=canvas.toDataURL("image/png");
	date={'data':dataURL};
	console.log(date.data);
	let file_name=document.querySelector('#file_name').value;
	let XY0=document.querySelector('#XY0').value;
	let X1=document.querySelector('#X1').value;
	let Y1=document.querySelector('#Y1').value;
	let RGB=document.querySelector('#RGB').value;
	if(file_name=="" || XY0=="" || X1=="" || Y1=="" || RGB==""){
		alert('Что-то не указано');
	}
	else{
		$.ajax({
			url: "http://localhost:8000/uploer",
			type: "POST",
			data: {
				'data':dataURL,
				'cordes':[XY0,X1,Y1],
				'RGB':RGB
			},
			success: function(data){
				$('p.out').text(data);
		  	},
		   	error: function(){
		   		console.log('ERROR');
		   	}
		});
		
	}
	return false;
});