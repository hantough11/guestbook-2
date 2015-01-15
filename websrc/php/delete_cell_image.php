<?php	
	require_once 'get_user_email.php';
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
		
	$file_list = file_get_contents('gs://popon-tv/'.$user_email.'/cell_images/cell_images_list.json');
	
	if($file_list) {
		$file_list_json = json_decode($file_list, true);
		var_dump($file_list_json);
		echo "<br>";	
		echo "삭제 전 count : ".count($file_list_json['cell_images_list']);
		echo "<br>";	
		
		// 지울 이미지 번호 읽기		
    echo "삭제 이미지 No : ".$_GET['selectedMyImagesNo'];
    echo "<br>";
		$deleteNumner = count($file_list_json['cell_images_list']) - $_GET['selectedMyImagesNo'] + 1;
		echo "삭제 배열 No : ".$deleteNumner;
		echo "<br>";	
		
		
		// 이미지 파일 삭제
		$filename = $file_list_json["cell_images_list"][$deleteNumner-1]["filename"];
		$object_image_file = "gs://popon-tv/".$user_email."/cell_images/".$filename;
		unlink($object_image_file);		
		
		// json 배열 삭제
		array_splice($file_list_json["cell_images_list"], $deleteNumner-1, 1);    // $deleteNumner-1 번째것 1개 삭제
		var_dump($file_list_json);
		echo "<br>";	
		echo count($file_list_json['cell_images_list']);
		echo "<br><br>";
		
		// json 업로드
		$handle = fopen("gs://popon-tv/".$user_email."/cell_images/cell_images_list.json", "w");
		$write_handle = json_encode($file_list_json);
		echo $write_handle;
		$handle = fwrite($handle, $write_handle);
		
		fclose($handle);
	}	
	else {		
		echo "No file";
		echo "<br><br>";
	}	
	
	// cell_images 삭제 완료 이벤트 전달
	echo("<script language='javascript'>parent.window.php_complete_cell_images_delete();</script>");
	
	// body_dimmed 닫기
	echo("<script language='javascript'>parent.window.body_dimmed_close();</script>");
	
	// 창 닫기
	//echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");
?>