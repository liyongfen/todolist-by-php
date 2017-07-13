<?php  
	function setMysqlContent(){
		//设置连接
		$mysql_server="localhost";
		$mysql_username="root";
		$mysql_password="123456";
		$mysql_database="testlist";
		//建立数据库链接
		$conn = mysqli_connect($mysql_server,$mysql_username,$mysql_password) or die("错误链接");
		#or die("数据库链接错误");
		//选择某个数据库
		mysqli_select_db($conn,$mysql_database);
		mysqli_query($conn,"set names 'utf8'");
		return $conn;
	}

?>