//移除class
function removeClass(element,className){
	var classStr = element.getAttribute('class');
	if(classStr !== '' && classStr !== null && classStr !== 'undefind'){
		element.setAttribute('class',classStr.replace(className,'').trimLeft().trimRight())
	}
}
//添加class
function addClass(element,className){
	var classStr = element.getAttribute('class');
	if(classStr === '' && classStr === null && classStr === undefind){
		element.setAttribute('class',className.trimLeft().trimRight())
	}else{
		element.setAttribute('class',(classStr+' '+className).trimLeft().trimRight());
	}
}
function hasClass(element,className){
	var classStr = element.getAttribute('class');
	var arr = classStr.split(" ");
	for(var i = 0, j = arr.length; i < j; i++){
		if(arr[i] == className){
			return true;
		}
	}
	return false;
}