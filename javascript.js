var msjs = document.getElementsByClassName('mensaje');
var cantidad = msjs.lenght; 
 

function sonMuchos(){
	if(cantidad == 1){
		document.write("Es muy poco");
	}
	if(cantidad >= 2){
		document.write("No está mal");
	}
	if(cantidad >= 4){
		document.write("¡Son muchos!");
	}

}

sonMuchos(); 