<?php	
	require_once 'get_user_email.php';
  require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
	
  $today = date("Y-m-d");
  $file_count = count($_FILES['uploaded_files']['name']);
  
	// 빈파일이라면 exit
	if(!$file_count){
		echo("<script language='javascript'>parent.window.php_close_background_image_upload();</script>");
	}

	// json 읽기
	$file_list = file_get_contents('gs://popon-tv/'.$user_email.'/cell_images/cell_images_list.json');	
	if($file_list) {
		$file_list_json = json_decode($file_list, true);
		$filename = array();
		$object_image_file = array();
		$object_image_url = array();
    $object_date = array();
		
		$number_of_cell_images = count($file_list_json['cell_images_list']);			
		
		for($i=0; $i < $number_of_cell_images; $i++){
			$filename[$i] = $file_list_json["cell_images_list"][$i]["filename"];
			$object_image_file[$i] = "gs://popon-tv/".$user_email."/cell_images/".$filename[$i];
			$object_image_url[$i] = CloudStorageTools::getImageServingUrl($object_image_file[$i], ['crop' => false]);	
      $object_date[$i] = $file_list_json["cell_images_list"][$i]["upload_date"];
		}		
	}	
	else {
		$number_of_cell_images = 0;
	}


	// 파일 이름 원래이름으로 변환
  for($i=0; $i<$file_count; $i++)
  {
	  $file_name = $_FILES['uploaded_files']['name'][$i]."_".time();         // 파일이름
	  $gs_name = $_FILES['uploaded_files']['tmp_name'][$i];       // 업로드 시킬 파일경로
    $file_size = $_FILES['uploaded_files']['size'][$i];

	  $new_file_name = 'gs://popon-tv/'.$user_email.'/cell_images/'.$file_name;
	  move_uploaded_file($gs_name, $new_file_name);

    // url 주소 알아내기
	  $new_url_name = CloudStorageTools::getImageServingUrl($new_file_name, ['crop' => false]);

    // json 정보 업데이트
	  $inserFileName = array("filename" => $file_name, "filesize" => $file_size, "upload_date"=>$today);
	  array_push($file_list_json["cell_images_list"], $inserFileName);
	  $object_image_file[$number_of_cell_images] = $new_file_name;
	  $object_image_url[$number_of_cell_images] = $new_url_name;
    $object_date[$number_of_cell_images] = $today;

    $number_of_cell_images++;
  }
	
	// json 업로드
	$handle = fopen("gs://popon-tv/".$user_email."/cell_images/cell_images_list.json", "w");
	$write_handle = json_encode($file_list_json);
	//echo $write_handle;
	$handle = fwrite($handle, $write_handle);		
	fclose($handle);		
	
	// number_of_cell_images 전달
	echo("<script language='javascript'>parent.window.php_load_number_of_cell_images(\"$number_of_cell_images\");</script>");
	
	// cell_images URL 전달
  $j = 0;
  for($i=$number_of_cell_images-1; $i > -1; $i--){
		$j++;
		echo("<script language='javascript'>parent.window.php_load_cell_images_url(\"$j\", \"$object_image_file[$i]\", \"$object_image_url[$i]\", \"$object_date[$i]\");</script>");
	}
  
	// cell_images 업로드 완료 이벤트 전달
	echo("<script language='javascript'>parent.window.php_complete_cell_images_upload();</script>");
	
	// body_dimmed 닫기
	//echo("<script language='javascript'>parent.window.body_dimmed_close();</script>");
	// 창닫기
	//echo("<script language='javascript'>window.close();</script>");
?>




