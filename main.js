let v1 = document.getElementById('v1');
let v2 = document.getElementById('v2');
let submit = document.getElementById('submit');
let texto = document.getElementById('texto');
let texto2 = document.getElementById('texto2');

let calcula = function(e){
    let a = (parseFloat(v1.value) * 0.4 + parseFloat(v2.value) * 0.6);
	texto.innerHTML = 'Sua media é = '+ a;
	e.preventDefault();
	status();
}

let status = function(){
    let a = (parseFloat(v1.value) * 0.4 + parseFloat(v2.value) * 0.6);
    if(a>=7){
    return texto2.innerHTML = "Aprovado";
	}
	else if(a<4){
	return texto2.innerHTML = "Reprovado sem direito a VS";
    }
    else{
        return texto2.innerHTML = "Está de VS";
    }
}

//submit.addEventListener("click",calcula);

submit.onclick = calcula;