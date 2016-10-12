// promedio
function callBackPromedio(a,b,c,callback){
	var promedio=(a+b+c)/3;
	
	return callback(promedio);
}

//segundero

function segundero(){
	var contador=1;

	setInterval(function(){
	document.getElementById("titulo").innerHTML= contador++;
	},1000);
}
segundero();