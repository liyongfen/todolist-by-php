// var head = document.getElementsTagName('head');
// var script = document.createElement('script');
// script.setAttribute('text','text/javascript');
// script.setAttribute('src','./base.js')
// head[0].appendfirstChild(script);
function delTodo(id){
	var url = '../../src/controller/del.php';
	var data = 'id=' + id;
	var method = 'get';
	ajax(method,url,data,function(result){
		var delDatas = JSON.parse(result);
		notice(delDatas['status'],'del');
		var todo = getLists(delDatas.data);
		var ul = document.getElementById('todolist');
		ul.innerHTML = todo;
	})
}
