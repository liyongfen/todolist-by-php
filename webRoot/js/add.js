function addTodo(){
	var add = document.getElementById('add');
	add.onclick = function(){
		var modal = document.getElementsByClassName('modal')[0];
		document.getElementById('modal-header-text').innerHTML = '添加活动';
		addClass(modal,'show');
		var modalOk = document.getElementById('modalOk');
		modalOk.onclick = function(){
			var method = 'post';
			var url = '../../src/controller/add.php';
			var data = serializeForm('modalData');
			ajax(method,url,data,function(result){
				var addDatas = JSON.parse(result);
				removeClass(modal,'show');
				cleanModal();
				notice(addDatas['status'],'add');
				var todo = getLists(addDatas['data']);
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
}
