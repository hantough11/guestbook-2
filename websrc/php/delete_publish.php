<?php	
	require_once 'get_user_email.php';
	// publish 모드 불러오기
	$publishName = $_GET['publishName'];
	if(!$publishName)exit(0);
	else if($publishName == "playlist") $publish_type = "publishMe";
	else if($publishName == "myproject") $publish_type = "myProject";
	
	// 지울 슬라이드 번호 불러오기
	$selectedSlideListNo = $_GET['selectedSlideListNo'];
	
	// publish 번호 불러오기	
	$publish_list_forCount = file_get_contents('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json');
	$publish_list_json_forCount = json_decode($publish_list_forCount, true);
	$number_of_publish = count($publish_list_json_forCount['publish_list']);
	
	// 해당 슬라이드 지우기
	$number_of_publish--;
	$deleted_contents = 'gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.($selectedSlideListNo - 1).'.json';
	unlink($deleted_contents);

	// 슬라이드 번호 재정렬하기
	if($number_of_publish == 0) {
	}
	
	else {
		for($i = $selectedSlideListNo; $i <= $number_of_publish; $i++)
			rename('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.$i.'.json', 'gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.($i - 1).'.json');
	}
	
	// json 개수 업데이트 하기
	array_pop($publish_list_json_forCount["publish_list"]);
	$handle = fopen('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json', "w");
	$write_handle = json_encode($publish_list_json_forCount);
	$handle = fwrite($handle, $write_handle);		
	fclose($handle);		
  
  
	// number_of_publish 전달
	echo("<script language='javascript'>parent.window.php_load_number_of_publish(\"$publish_type\", \"$number_of_publish\");</script>");
	
	// body_dimmed 닫기
	//echo("<script language='javascript'>parent.window.body_dimmed_close();</script>");

// publish 삭제 완료 이벤트 전달
	echo("<script language='javascript'>parent.window.php_complete_publish_delete(\"$publish_type\");</script>");
	
	
?>