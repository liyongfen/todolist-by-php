<?php

	require ('../util/controlDatas.php'); 

	$status = isset($_POST['status']) ? $_POST['status'] : '';
	$time = isset($_POST['time']) ? $_POST['time'] : '';
	$importance = isset($_POST['importance']) ? $_POST['importance'] : '';
	$desc = isset($_POST['desc']) ? $_POST['desc'] : '';
	$title = isset($_POST['title']) ? $_POST['title'] : '';
	$id = isset($_POST['id']) ? $_POST['id'] : '';

	$todoListDatas = array();
	$today = date('Y-m-d');
	/*if(!preg_match('/,/', $title) && $status != '' && $time != '' && $importance != '' && $title != '' && $id != '')
	{*/
	if($status != '' && $time != '' && $importance != '' && $title != '' && $id != ''){
		/*$todo = $id.",".$title.",".$status.','.$desc.','.$time.','.$importance."\n";
		$file = fopen('../dao/data.csv','r');
		$rows = array();
		while(!feof($file)){
		  $line = fgets($file);
		  $arr = explode(",",$line);
		  if($arr[0] == $id){
		  	$line = $todo;
		  }
		  array_push($rows, $line);
		}
		file_put_contents("../dao/data.csv","");
		fclose($file);
		$file = fopen('../dao/data.csv','a+');
		foreach ($rows as $key => $value){
			fwrite($file, $value);
		}
		fclose($file);*/
		$conn = setMysqlContent();
		$sql = "UPDATE todolists SET status = '$status',importance = '$importance',title = '$title',todo_time = '$time',todo_desc = '$desc'  WHERE id = '$id'";
		if(!mysqli_query($conn,$sql)){
			die('Error'.mysqli_error($conn));
		}else{
			mysqli_close($conn);
			$todoListDatas = getTodoLists();
			echo '{"status":0,"notice":"add","data":['.$todoListDatas.']}';
		}
	}else{
		$todoListDatas = getTodoLists();
		echo '{"status":1,"notice":"edit","data":['.$todoListDatas.']}';
	}
?>