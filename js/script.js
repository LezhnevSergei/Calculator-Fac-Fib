//рассчёт факториала
function getFact(n){
	let result = 1;
	for(let i = 1; i <= n; i++){
		result *= i;
	}
	return result;
}

//рассчёт числа фибониччи
function getFib(n){
	let a = 0;
	let b = 1;
	let c;
	if(n == 0) return 0;
	if(n == 1) return 1;
	for(var i = 2; i <= n; i++){
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

function writeResult(id, id_out, func){
	let val = parseInt(document.getElementById(id).value);
	
	if(isNaN(val))
		document.getElementById(id_out).innerHTML = '<p>Результат</p>'; 
	else
		document.getElementById(id_out).innerHTML = '<p>'+func(val)+'</p>';
}

document.getElementById('fact-btn').onclick = function(){ writeResult(id='fact', id_out='factOut', func=getFact) };

document.getElementById('fib-btn').onclick = function(){ writeResult(id='fib', id_out='fibOut', func=getFib) };

