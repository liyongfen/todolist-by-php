<?php
	require ('../util/controlDatas.php'); 

	$status = isset($_POST['searchstatus']) ? $_POST['searchstatus'] : '';
	$time = isset($_POST['searchdate']) ? $_POST['searchdate'] : '';
	$importance = isset($_POST['searchimportance']) ? $_POST['searchimportance'] : '';
	$keywords = isset($_POST['keywords']) ? $_POST['keywords'] : '';

	$todoListDatas = array();
	if($status != '' || $time != '' || $importance != '' || $keywords != ''){
		$conn = setMysqlContent();
		$sql = "SELECT * FROM todolists WHERE 1=1";
    	if($status != "" || $status != null){
    		$sql =$sql." AND status = '$status'";
    	}
    	if ($time != "" || $time != null){
			$sql =$sql." AND todo_time = '$time'";
		}
		if ($importance != "" || $importance != null){
			$sql =$sql." AND importance = '$importance'";
		}
		if ($keywords != "" || $keywords != null){
			$sql =$sql." AND CONCAT(title,todo_desc) like '%".$keywords."%'";
		}
		$result=mysqli_query($conn,$sql);
		while($row = mysqli_fetch_array($result)) {  
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
		$todoListDatas = implode(',',$todoListDatas);
		mysqli_close($conn);
		echo '{"status":0,"data":['.$todoListDatas.']}';
		/*
		//收获所有输入的字段
		$data = array();
		if($status != ''){
			$data['status'] = $status;
		}
		if($time != ''){
			$data['time'] = $time;
		}
		if($importance != ''){
			$data['importance'] = $importance;
		}
		//将所有数据装入数组
		$searchDatas = array();
		$file = fopen('../dao/data.csv','r');
		while(!feof($file)){
			$line = fgets($file);
			if(trim($line) != ''){
				array_push($searchDatas,$line);
			}
		}
		//根据字段查询
		$temp = array();
		if(!empty($data)){
			foreach ($data as $key => $value) {
				  foreach ($searchDatas as $key2 => $item) {
				  	$arr = explode(",",$item);
				  	switch($key){
				  	 	case "status":
				  	 		if($arr[2] == $value){
				  	 			array_push($temp,$item);
				  	 		}
				  			break;
				  	 	case "importance":
				  	 		if($value==chop($arr[5])){
				  	 			array_push($temp,$item);
				  	 		}
				  	 		break;
				  		case "time":
				  			if($arr[4]==$value){
				  				array_push($temp,$item);
				  			}
				  	 		break;
				  	 	default:
				  	 		break;
				  	}
				  }
				$searchDatas = $temp;
				$temp = array();
			}
		}
		//
		//根据关键字查询
		if($keywords != '' && count($searchDatas)){
			$data['keywords'] = $keywords;
			foreach ($searchDatas as $value) {
				$arr  = explode(',',chop($value));
				$str = $arr[1].$arr[3];
				if(preg_match('/'.$keywords.'/', $str)){
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
		}else{
			foreach ($searchDatas as $value) {
				$arr  = explode(',',chop($value));
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
		}*/

	}else{
		$todoListDatas = getTodoLists();
		echo '{"status":1,"data":['.$todoListDatas.']}';
	}
?>