<?php
	function getTodoLists(){
		$todoListDatas = array();
		$today = date('Y-m-d');
    	if (file_exists("../dao/data.csv")){
		 	$file = fopen("../dao/data.csv",'r');
		 	while (!feof($file)) {
		 		$line = fgets($file);
		 		if($line != ''){
		 			$arr = explode(',',chop($line));
		 			if($arr[4] == $today){
		 				$todo = array(
				 			'id' => $arr[0],
				 			'title' => $arr[1],
				 			'status' => $arr[2],
				 			'desc' => $arr[3],
				 			'time' => $arr[4],
				 			'importance' => $arr[5]
		 				);
		 				array_push($todoListDatas, json_encode($todo));
		 			}
		 		}
		 	}
		 	$todoListDatas = implode(',',$todoListDatas);
		}
		return $todoListDatas;
	}
?>