function notice(flag,type){
	var notice = document.getElementById('notice');
	addClass(notice,'show-notice');
	var noticeIcon = document.getElementById('notice-icon');
	var noticeText = document.getElementsByClassName('notice-text')[0];
	var title = '';
	if(!Number(flag)){
		switch(type){
			case 'add' : 
				title = '添加成功！';
				break;
			case 'del' : 
				title = '删除成功！';
				break;
			case 'edit' :
				title = '修改成功！';
				break;
			default:
				break;
		}
		noticeText.innerHTML = title;
		noticeIcon.innerHTML = '✓';
		noticeIcon.setAttribute('class','notice-icon');
	}else{
		switch(type){
			case 'add' : 
				title = '添加失败！';
				break;
			case 'del' :
				title = '删除失败！';
				break;
			case 'edit' :
				title = '修改失败！';
				break;
			default:
				break;
		}
		noticeText.innerHTML = title;
		noticeIcon.innerHTML = '✗';
		noticeIcon.setAttribute('class', 'notice-icon-fail');
	}
	setTimeout(function(){
		removeClass(notice,'show-notice');
	},1000); 
	var noticeOk = document.getElementById('notice-ok');
	noticeOk.onclick = function(){
		removeClass(notice,'show-notice');
	}
}