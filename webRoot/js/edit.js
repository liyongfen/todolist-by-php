function editTodo(data){
	writeModal(data);
	document.getElementById('modal-header-text').innerHTML = '编辑活动';
	var modal = document.getElementsByClassName('modal')[0];
	addClass(modal,'show');
	var modalOk = document.getElementById('modalOk');
	modalOk.onclick = function(){
		var method = 'post';
		var url = '../../src/controller/edit.php';
		var data = serializeForm('modalData');
		ajax(method,url,data,function(result){
			removeClass(modal,'show');
			cleanModal();
			var editDatas = JSON.parse(result);
			notice(editDatas['status'],'edit');
			var todo = getLists(editDatas.data);
			var ul = document.getElementById('todolist');
			ul.innerHTML = todo;
		});	
	}
	var modalCancel = document.getElementById('modalCancel');
	modalCancel.onclick = function(){
		removeClass(modal,'show');
		cleanModal();
	}
	var modalIconCancel = document.getElementById('modal-icon-cancel');
	modalIconCancel.onclick = function(){
		removeClass(modal,'show');
		cleanModal();
	}
}