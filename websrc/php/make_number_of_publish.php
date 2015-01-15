<?php
	require_once 'get_user_email.php';	
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
	
	// publishMe 파일 만들기
	$publish_type = "publishMe";
	$publish_list = file_get_contents('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json');
		
	
	if($publish_list) {		
	}
	else {
		$handle = fopen('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json', "w");
		$handle = fwrite($handle, '{"publish_list":[]}');		
		fclose($handle);		
		
		echo "<br><br>json file is built<br><br>";
	}

    // publishMe 파일 만들기
	$publish_type = "myProject";
	$publish_list = file_get_contents('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json');		
	
	if($publish_list) {		
	}
	else {
		$handle = fopen('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json', "w");
		$handle = fwrite($handle, '{"publish_list":[]}');		
		fclose($handle);		
		
		echo "<br><br>json file is built<br><br>";
	}
	
	// 창 닫기
	//echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");	
?>
