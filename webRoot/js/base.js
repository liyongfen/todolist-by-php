window.onload = function(){
	//基本信息
	base();
	//end base
	var ul = document.getElementById('todolist');
	ul.onclick = function(event){
		classname = event.target.getAttribute('class');
		switch(classname){
			//删除部分
			case 'todo-del':
				var id = event.target.getAttribute('data-id');
				delTodo(id);
				break;
			//end del
			//编辑部分
			case 'todo-edit':
				var data = JSON.parse(event.target.getAttribute('data-todo'));
				editTodo(data);
				break;
			//end edit
			default:break;
		}
	}
	//添加部分
	addTodo();
	//end add
	//查询部分
	var keywords = document.getElementById('keywords');
	hiddenKeywords = document.getElementsByClassName('search-form-keywords-cancel')[0];
	keywords.onfocus = function(){
		if(!hasClass(hiddenKeywords,'search-form-keywords-cancel-show')){
			addClass(hiddenKeywords,'search-form-keywords-cancel-show');
		}
		hiddenKeywords.onclick = function(){
			keywords.value = '';
			if(hasClass(hiddenKeywords,'search-form-keywords-cancel-show')){
				removeClass(hiddenKeywords,'search-form-keywords-cancel-show');
			}
		}
	}
	keywords.onblur = function(){
		if((keywords.value == '' || keywords.value == null) && hasClass(hiddenKeywords,'search-form-keywords-cancel-show')){
			removeClass(hiddenKeywords,'search-form-keywords-cancel-show');
		}
	}
	searchTodos();
	//end search	
}
//获取基本信息
function base(){
	var method = 'get';
	var url = '../../src/controller/index.php';
	var data = 'base=1'; 
	ajax(method,url,data,function(result){
		var datas = JSON.parse(result);
		if(!Number(datas['status'])){
			document.getElementById('username').innerHTML = datas['username'];
			document.getElementById('today').innerHTML = datas['time'];
			var todo = getLists(datas.data);
			var ul = document.getElementById('todolist');
			ul.innerHTML = todo;
		}
	});
}
//end base	
//组装列表
function getLists(todoDatas){
	var todo = '';
	if(todoDatas.length){
		(todoDatas).forEach(function(value,index){
			var statusStyle = '';
			switch (value['status']) {
				case '0' : 
					statusStyle = 'todo-list';
					break;
				case '1' : 
					statusStyle = 'todo-list-doed';
					break;
				case '2' : 
					statusStyle = 'todo-list-giveup';
					break;
				default:
					break;
			}
			var badge = '';
			if(value['importance'] == '0'){
				badge = '<span class="todo-list-badge">重要</span>';
			}
			if(value['desc'] == ''){
				value['desc'] = '(没有说明)';
			}
			todo += '<li class="' + statusStyle + '">'
			+'<p class="todo-title">'
				+ (index+1) + '. ' + value['title'] + badge
				+'<a href="javascript:;" class="todo-edit" data-todo=' + JSON.stringify(value)+'>编辑</a>'
				+'<a href="javascript:;" class="todo-del" data-id="' + value['id'] + '">删除<a/>'
				+'<span class="todo-list-time">时间:' + value['time'] + '</span>'	
			+'</p>'
			+'<p class="todo-desc">' + value['desc'] + '</p>'
			+'</li>';
		});
	}else{
		todo = '<li class="todo-list-empty">没有数据！</li>';
	}
	return todo;
}
// end li	