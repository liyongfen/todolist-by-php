//清空表单数据
function cleanModal(){
	document.getElementById('id').value = '';
	document.getElementById('title').value = '';
	document.getElementById('desc').value = '';
	document.getElementById('time').value = '';
	document.getElementById('status').value = '0';
	document.getElementById('importance').value = '0';
}
function writeModal(data){
	document.getElementById('id').value = data.id;
	document.getElementById('title').value = data.title;
	document.getElementById('desc').value = data.desc;
	document.getElementById('time').value = data.time;
	document.getElementById('status').value = data.status;
	document.getElementById('importance').value = data.importance;
}
function centerModal(element){
	return ;
	if(document.body.style.overflow == "hidden" || document.body.scroll != "no" || document.body.scrollHeight < document.body.offsetHeight){
		document.body.style.paddingRight = 15 + 'px';
	}
	document.body.style.overflow = 'hidden';
	var w = window.innerWidth || document.documentElemet.clientWidth || document.body.clientWidth; 
	var h = window.innerHeight || document.documentElemet.clientHeight || document.body.clientHeight;
	element.style.marginTop = (h-element.offsetHeight)/2+'px';
	window.onresize = function(){
    	var w = window.innerWidth || document.documentElemet.clientWidth || document.body.clientWidth; 
		var h = window.innerHeight || document.documentElemet.clientHeight || document.body.clientHeight;
		element.style.marginTop = (h-element.offsetHeight)/2+'px';
		// if(document.body.clientWidth<400){ 
		// 	window.resizeTo(400,document.body.clientHeight); 
		// 	console.log(document.body.clientWidth);
		// } 
	}
}
function hiddenModal(){
	var modal = document.getElementsByClassName('modal')[0];
	modal.className = 'modal';
	$(modal).removeClass('show');
	//document.body.style.overflow = 'auto';
	//document.body.style.paddingRight = 0 + 'px';
}
