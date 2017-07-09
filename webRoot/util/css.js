function removeClass(element,className){
	var classStr = element.getAttribute('class');
	if(classStr !== '' && classStr !== null && classStr !== 'undefind'){
		element.setAttribute('class',classStr.replace(className,'').trimLeft().trimRight())
	}
}

function addClass(element,className){
	var classStr = element.getAttribute('class');
	if(classStr === '' && classStr === null && classStr === undefind){
		element.setAttribute('class',className.trimLeft().trimRight())
	}else{
		element.setAttribute('class',(classStr+' '+className).trimLeft().trimRight());
	}
	
}