<?php
	require('../config/mysql.php');
	function getTodoLists(){
		$conn = setMysqlContent();
		//执行MySQL语句
		mysqli_query($conn,"set names 'utf8'");
		$result=mysqli_query($conn,"SELECT * FROM list");
		//提取数据
		$todoListDatas = array();
		$today = date('Y-m-d');
		while($row = mysqli_fetch_array($result)) {  
			if($row['todo_time'] == $today){
				$todo = array(
		 			'id' => $row['id'],
		 			'title' => $row['title'],
		 			'status' => $row['status'],
		 			'desc' => $row['todo_desc'],
		 			'time' => $row['todo_time'],
		 			'importance' => $row['importance']
			 	);
			 	array_push($todoListDatas, json_encode($todo));
			}
			//var_dump($row['title']);
		} 
		$todoListDatas = implode(',',$todoListDatas);
		mysqli_close($conn);
		return $todoListDatas;
	}
	// function getTodoLists(){
	// 	$todoListDatas = array();
	// 	$today = date('Y-m-d');
 	//  if (file_exists("../dao/data.csv")){
	// 	 	$file = fopen("../dao/data.csv",'r');
	// 	 	while (!feof($file)) {
	// 	 		$line = fgets($file);
	// 	 		if($line != ''){
	// 	 			$arr = explode(',',chop($line));
	// 	 			if($arr[4] == $today){
	// 	 				$todo = array(
	// 			 			'id' => $arr[0],
	// 			 			'title' => $arr[1],
	// 			 			'status' => $arr[2],
	// 			 			'desc' => $arr[3],
	// 			 			'time' => $arr[4],
	// 			 			'importance' => $arr[5]
	// 	 				);
	// 	 				array_push($todoListDatas, json_encode($todo));
	// 	 			}
	// 	 		}
	// 	 	}
	// 	 	$todoListDatas = implode(',',$todoListDatas);
	// 	}
	// 	return $todoListDatas;
	// }
?>