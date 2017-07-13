<?php
	require ('../util/controlDatas.php'); 

	$status = isset($_POST['status']) ? $_POST['status'] : '';
	$time = isset($_POST['time']) ? $_POST['time'] : '';
	$importance = isset($_POST['importance']) ? $_POST['importance'] : '';
	$desc = isset($_POST['desc']) ? $_POST['desc'] : '';
	$title = isset($_POST['title']) ? $_POST['title'] : '';
	$todoListDatas = array();
	
	if($status != '' && $time != '' && $importance != '' && $title != ''){ 
	// if(!preg_match('/,/', $title) && $status != '' && $time != '' && $importance != '' && $title != '')
	// { 
		// $todo = uniqid().",".$title.",".$status.','.$desc.','.$time.','.$importance."\n";
		// if(!empty($todo)){
		// 	$file = fopen('../dao/data.csv', 'a');
		// 	fwrite($file,$todo);
		// 	fclose($file);
		// }
		$id = uniqid();
		$conn = setMysqlContent();
		$sql = "INSERT INTO list (id,title,status,importance,todo_time,todo_desc) VALUES ('$id','$title','$status','$importance','$time','$desc')";
		if(!mysqli_query($conn,$sql)){
			die('Error'.mysqli_error($conn));
		}else{
			mysqli_close($conn);
			$todoListDatas = getTodoLists();
			echo '{"status":0,"notice":"add","data":['.$todoListDatas.']}';
		}
	}else{
		$todoListDatas = getTodoLists();
		echo '{"status":1,"notice":"add","data":['.$todoListDatas.']}';
		
	}
?>