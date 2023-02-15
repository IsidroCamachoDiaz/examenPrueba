
function dni(numero){
	//Si no cumple slae la alerta
	if(numero<99999999||numero>999999999){
		alert("Este dni no es valido")
	}
	//Si cumple entra
	else{
		var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
		let numeroLetra=0;
		numeroLetra=numero%23;
		letra=letras[numeroLetra];
		console.log(numero)
		console.log(letra)
		document.write(numero+"-"+letra)
	}
}