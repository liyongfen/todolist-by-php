<?php
	require ('../util/controlDatas.php'); 

	$id = isset($_GET['id']) ? $_GET['id'] : '';
	$todoListDatas = array();
	if($id != ''){
		$file = fopen('../dao/data.csv','r');
		$rows = array();
		while(!feof($file)){
			$line = fgets($file);
			$arr = explode(",",$line);
			if($arr[0] != $id){
			  	array_push($rows, $line);
			}
		}
		fclose($file);
		file_put_contents("../dao/data.csv","");
		$file = fopen('../dao/data.csv','a');
		foreach ($rows as $key => $value) {
			fwrite($file, $value);
		}
		fclose($file);
		$todoListDatas = getTodoLists();
		echo '{"status":0,"notice":"del","data":['.$todoListDatas.']}';
	}else{
    	$todoListDatas = getTodoLists();
		echo '{"status":1,"notice":"del","data":['.$todoListDatas.']}';
	}
?>