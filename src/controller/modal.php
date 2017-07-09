<?php
	$bodyStyle  = '';
	if(isset($_GET['edit'])){
		$bodyStyle = "body-modal";
	}
	echo '<body class="'.$bodyStyle.'">';
?>