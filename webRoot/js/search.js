function searchTodos(){
	var search = document.getElementById('search');
	search.onclick = function(){
		var method = 'post';
		var url = '../../src/controller/search.php';
		var data = serializeForm('searchData');
		ajax(method,url,data,function(result){
			var searchDatas = JSON.parse(result);
			var todo = getLists(searchDatas['data']);
			var ul = document.getElementById('todolist');
			ul.innerHTML = todo;
		})
	}
}

