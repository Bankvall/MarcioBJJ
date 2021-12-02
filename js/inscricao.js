let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{
	let inputSenha = document.querySelector('#senha')

	if (inputSenha.getAttribute('type') == 'password'){
		inputSenha.getAttribute('type', 'text')		
	} else {
		inputSenha.getAttribute('type', 'password')
	} 
})


let btnConfirm = document.querySelector('#verConfirmSenha')

btnConfirm.addEventListener('click', ()=>{
	let inputConfirmSenha = document.querySelector('#confirmSenha')

	if (inputConfirmSenha.getAttribute('type') == 'password'){
		inputConfirmSenha.getAttribute('type', 'text')		
	} else {
		inputConfirmSenha.getAttribute('type', 'password')
	} 
})
