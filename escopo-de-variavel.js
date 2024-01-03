/* 
Quando uma variavel ou função e declarada em um determinado escopo,
ela só pode ser acessada dentro daquele escopo ou de escopos internos a ele.
*/

// cosidere o seguinte exemplo:

let variavelGlobal = 10;


function foo() {
	let variavelLocal = 20;
	console.log(variavelGlobal);
	console.log(variavelLocal);
}

foo();
console.log(variavelGlobal); 
console.log(variavelLocal);
