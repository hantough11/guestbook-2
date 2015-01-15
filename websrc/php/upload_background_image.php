<?php
	require_once 'get_user_email.php';
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;

	$options = [ 'gs_bucket_name' => 'popon-tv/'.$user_email.'/background_images', 'max_bytes_per_blob' => 10000000 , 'max_bytes_total' => 20000000 ];
	$upload_url = CloudStorageTools::createUploadUrl('/upload_background_image_completed.php', $options);
	
	require_once("../../html/upload.html");
	
	//var_dump($_FILES);
	//echo $upload_url;
	//$gs_name = $_FILES['uploaded_files']['tmp_name'];
	//move_uploaded_file($gs_name, 'gs://popon-tv/'.$user_email.'/back_01.jpg');
?>


