function clearScreen(){
	document.getElementById("result").value = "";	
}

function display(value) {
	document.getElementById("result").value += value;
}

function calculate() {
	var sum = document.getElementById("result").value.replace(/X/g, "*");
	var output = eval(sum);
	document.getElementById("result").value= output;
}