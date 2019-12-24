document.querySelectorAll('input').forEach(a=>a.addEventListener('focus',focus))
document.querySelectorAll('input').forEach(a=>a.addEventListener('blur',blur))
function focus(e){
	e.target.classList.add('onFocus')
}
function blur(e){
	e.target.classList.remove('onFocus')
	if(e.target.value.length>0){
		e.target.nextElementSibling.classList.remove('displayBlock')
		e.target.classList.remove('onFocusError')
	}else{
		e.target.classList.add('onFocusError')
		e.target.nextElementSibling.classList.add('displayBlock')
	}
}
document.querySelector('#email').addEventListener('blur',checkEmail)
function checkEmail(e){
		var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/; 
    	var value =e.target.value
    	if(!regex.test(value)){
    		e.target.nextElementSibling.classList.add('displayBlock')
    		e.target.classList.add('onFocusError')
    		e.target.value="email@example/com"		
    	}else{
    		e.target.nextElementSibling.classList.remove('displayBlock')
    		e.target.classList.remove('onFocusError')
    	}
	
}