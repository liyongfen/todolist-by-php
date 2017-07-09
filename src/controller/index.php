<?php
	require ('../util/controlDatas.php'); 

	if(!empty($_GET['base'])){ 
		$todoListDatas = getTodoLists();
		$time = date('Y-m-d');
    	$base = '{"status":"0","username":"liyongfen","time":"'.$time.'","data":['.$todoListDatas.']}';
    	echo $base;
	}
?>