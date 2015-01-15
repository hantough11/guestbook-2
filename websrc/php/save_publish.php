<?php
	require_once 'get_user_email.php';
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
		
	// publish 모드 불러오기
	$publishName = $_GET['publishName'];
  $project_name = $_GET['project_name'];
  $saveNo = $_GET['saveNo'];
  $publish_type = "myProject";
  
	// publish 번호 불러오기 from list.json
	$publish_list_forCount = file_get_contents('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json');
  $publish_list_json_forCount = json_decode($publish_list_forCount, true);
	$number_of_publish = count($publish_list_json_forCount['publish_list']);
	
	$publish_list = '{"publish_list":[]}';
	$publish_list_json = json_decode($publish_list, true);
	
	// category 불러오기
	$category = $_GET['category'];
  
	if($category == "background") {
		// background 정보 불러오기
		$divided = $_GET['divided'];
		
		$background_kind = $_GET['background_kind'];
		$background_color = $_GET['background_color'];
		$background_image_url = $_GET['background_image_url'];
    $background_image_top = $_GET['background_image_top'];
		$background_image_left = $_GET['background_image_left'];
		$background_image_width = $_GET['background_image_width'];
		$background_image_height = $_GET['background_image_height'];
    $background_image_per = $_GET['background_image_per'];
		
		// background 정보 배열에 넣기
		$insert_divided = array("divided" => (int)$divided);
		$insert_background = array("background" =>
						array("kind" => $background_kind,
							"color" => $background_color,
							"image" => array("url" => $background_image_url),
              "top" => $background_image_top,
              "left" => $background_image_left,
              "width" => $background_image_width,
              "height" => $background_image_height,
              "percentage" => $background_image_per
          ));
		$insert_project_name = array("project_name" => $project_name);
		
    
		$array_background = '{}';
		$array_background = json_decode($array_background, true);
		array_push($array_background, $insert_divided);
		array_push($array_background, $insert_background);
    array_push($array_background, $insert_project_name);
		
		// background 정보 서버에 업로드
		$handle = fopen('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.$number_of_publish.'_background.json', "w");	
		$write_handle = json_encode($array_background);
		echo $write_handle;
		$handle = fwrite($handle, $write_handle);		
		fclose($handle);

		// background 업로드 완료 이벤트 전달
		echo("<script language='javascript'>parent.window.php_complete_phpUpload_background(\"$publish_type\");</script>");
		
		// 창 닫기
		echo("<script language='javascript'>window.parent = window.location.href; self.close();</script>");
	}

	else if($category == "cell") {
		// cell 정보 불러오기
		$i = $_GET['cell_no'];
		$cell_kind[$i] = $_GET['kind_'.$i];
		$cell_x[$i] = $_GET['x_'.$i];
		$cell_y[$i] =$_GET['y_'.$i];		
		
		$cell_image_theFirstOrderFiveImages[$i] = $_GET['theFirstOrderFiveImages_'.$i];
		$cell_image_selectedFiveImageNo[$i] = $_GET['selectedFiveImageNo_'.$i];
		
		$cell_image_url_1[$i] = $_GET['image_url_1_'.$i];
		$cell_image_imageInCellPercentage_1[$i] = $_GET['percentage_1_'.$i];
		$cell_image_imageInCellTop_1[$i] = $_GET['top_1_'.$i];
		$cell_image_imageInCellLeft_1[$i] = $_GET['left_1_'.$i];
		$cell_image_imageInCellWidth_1[$i] = $_GET['width_1_'.$i];
		$cell_image_imageInCellHeight_1[$i] = $_GET['height_1_'.$i];
		$cell_image_imageInEditPercentage_1[$i] = $_GET['editPercentage_1_'.$i];
		$cell_image_imageInEditPositionX_1[$i] = $_GET['positionX_1_'.$i];
		$cell_image_imageInEditPositionY_1[$i] = $_GET['positionY_1_'.$i];
		
		$cell_image_url_2[$i] = $_GET['image_url_2_'.$i];
		$cell_image_imageInCellPercentage_2[$i] = $_GET['percentage_2_'.$i];
		$cell_image_imageInCellTop_2[$i] = $_GET['top_2_'.$i];
		$cell_image_imageInCellLeft_2[$i] = $_GET['left_2_'.$i];
		$cell_image_imageInCellWidth_2[$i] = $_GET['width_2_'.$i];
		$cell_image_imageInCellHeight_2[$i] = $_GET['height_2_'.$i];
		$cell_image_imageInEditPercentage_2[$i] = $_GET['editPercentage_2_'.$i];
		$cell_image_imageInEditPositionX_2[$i] = $_GET['positionX_2_'.$i];
		$cell_image_imageInEditPositionY_2[$i] = $_GET['positionY_2_'.$i];
		
		$cell_image_url_3[$i] = $_GET['image_url_3_'.$i];
		$cell_image_imageInCellPercentage_3[$i] = $_GET['percentage_3_'.$i];
		$cell_image_imageInCellTop_3[$i] = $_GET['top_3_'.$i];
		$cell_image_imageInCellLeft_3[$i] = $_GET['left_3_'.$i];
		$cell_image_imageInCellWidth_3[$i] = $_GET['width_3_'.$i];
		$cell_image_imageInCellHeight_3[$i] = $_GET['height_3_'.$i];
		$cell_image_imageInEditPercentage_3[$i] = $_GET['editPercentage_3_'.$i];
		$cell_image_imageInEditPositionX_3[$i] = $_GET['positionX_3_'.$i];
		$cell_image_imageInEditPositionY_3[$i] = $_GET['positionY_3_'.$i];
		
		$cell_image_url_4[$i] = $_GET['image_url_4_'.$i];
		$cell_image_imageInCellPercentage_4[$i] = $_GET['percentage_4_'.$i];
		$cell_image_imageInCellTop_4[$i] = $_GET['top_4_'.$i];
		$cell_image_imageInCellLeft_4[$i] = $_GET['left_4_'.$i];
		$cell_image_imageInCellWidth_4[$i] = $_GET['width_4_'.$i];
		$cell_image_imageInCellHeight_4[$i] = $_GET['height_4_'.$i];
		$cell_image_imageInEditPercentage_4[$i] = $_GET['editPercentage_4_'.$i];
		$cell_image_imageInEditPositionX_4[$i] = $_GET['positionX_4_'.$i];
		$cell_image_imageInEditPositionY_4[$i] = $_GET['positionY_4_'.$i];
		
		$cell_image_url_5[$i] = $_GET['image_url_5_'.$i];
		$cell_image_imageInCellPercentage_5[$i] = $_GET['percentage_5_'.$i];
		$cell_image_imageInCellTop_5[$i] = $_GET['top_5_'.$i];
		$cell_image_imageInCellLeft_5[$i] = $_GET['left_5_'.$i];
		$cell_image_imageInCellWidth_5[$i] = $_GET['width_5_'.$i];
		$cell_image_imageInCellHeight_5[$i] = $_GET['height_5_'.$i];
		$cell_image_imageInEditPercentage_5[$i] = $_GET['editPercentage_5_'.$i];
		$cell_image_imageInEditPositionX_5[$i] = $_GET['positionX_5_'.$i];
		$cell_image_imageInEditPositionY_5[$i] = $_GET['positionY_5_'.$i];

		$cell_widget_image_url[$i] = $_GET['image_url_'.$i];
    $cell_widget_vod_id[$i] = $_GET['vod_id_'.$i];
    $cell_widget_widget_kind[$i] = $_GET['widget_kind_'.$i];
    $cell_widget_weather_id[$i] = $_GET['weather_id_'.$i];
    $cell_widget_weather_kind[$i] = $_GET['weather_kind_'.$i];
    
    
		$cell_text_contents[$i] = $_GET['contents_'.$i];
		$cell_text_font_size[$i] = $_GET['font_size_'.$i];
		$cell_text_font_color[$i] = "#".$_GET['font_color_'.$i];
		$cell_text_font_family[$i] = $_GET['font_family_'.$i];
		$cell_text_font_align[$i] = $_GET['font_align_'.$i];
		$cell_text_font_back_color[$i] = "#".$_GET['font_back_color_'.$i];
		$cell_text_font_weight[$i] = $_GET['font_weight_'.$i];
		$cell_text_font_vertical[$i] = $_GET['font_vertical_'.$i];
		
		// cell 정보 배열에 넣기 (기본 정보)
		$insert_cell = array("cell[$i]" => 
							array("kind" => $cell_kind[$i], 
								"x" => (int)$cell_x[$i], 
								"y" => (int)$cell_y[$i]
							)									
						);
		
		$array_cell = '{}';
		$array_cell = json_decode($array_cell, true);
		array_push($array_cell, $insert_cell);
		
		
		// cell 정보 배열에 넣기 (image)
		$insert_cell = array("cell[$i]" => 
							array("image" => 
								array("theFirstOrderFiveImages" => $cell_image_theFirstOrderFiveImages[$i], 
									"selectedFiveImageNo" => $cell_image_selectedFiveImageNo[$i],
									
									"url[1]" => $cell_image_url_1[$i],
									"imageInCellPercentage[1]"  => $cell_image_imageInCellPercentage_1[$i],
									"imageInCellTop[1]"  => $cell_image_imageInCellTop_1[$i],
									"imageInCellLeft[1]"  => $cell_image_imageInCellLeft_1[$i],
									"imageInCellWidth[1]"  => $cell_image_imageInCellWidth_1[$i],
									"imageInCellHeight[1]"  => $cell_image_imageInCellHeight_1[$i],
									"imageInEditPercentage[1]"  => $cell_image_imageInEditPercentage_1[$i],
									"imageInEditPositionX[1]"  => $cell_image_imageInEditPositionX_1[$i],
									"imageInEditPositionY[1]"  => $cell_image_imageInEditPositionY_1[$i],
	
									"url[2]" => $cell_image_url_2[$i],
									"imageInCellPercentage[2]"  => $cell_image_imageInCellPercentage_2[$i],
									"imageInCellTop[2]"  => $cell_image_imageInCellTop_2[$i],
									"imageInCellLeft[2]"  => $cell_image_imageInCellLeft_2[$i],
									"imageInCellWidth[2]"  => $cell_image_imageInCellWidth_2[$i],
									"imageInCellHeight[2]"  => $cell_image_imageInCellHeight_2[$i],
									"imageInEditPercentage[2]"  => $cell_image_imageInEditPercentage_2[$i],
									"imageInEditPositionX[2]"  => $cell_image_imageInEditPositionX_2[$i],
									"imageInEditPositionY[2]"  => $cell_image_imageInEditPositionY_2[$i],
									
									"url[3]" => $cell_image_url_3[$i],
									"imageInCellPercentage[3]"  => $cell_image_imageInCellPercentage_3[$i],
									"imageInCellTop[3]"  => $cell_image_imageInCellTop_3[$i],
									"imageInCellLeft[3]"  => $cell_image_imageInCellLeft_3[$i],
									"imageInCellWidth[3]"  => $cell_image_imageInCellWidth_3[$i],
									"imageInCellHeight[3]"  => $cell_image_imageInCellHeight_3[$i],
									"imageInEditPercentage[3]"  => $cell_image_imageInEditPercentage_3[$i],
									"imageInEditPositionX[3]"  => $cell_image_imageInEditPositionX_3[$i],
									"imageInEditPositionY[3]"  => $cell_image_imageInEditPositionY_3[$i],
									
									"url[4]" => $cell_image_url_4[$i],
									"imageInCellPercentage[4]"  => $cell_image_imageInCellPercentage_4[$i],
									"imageInCellTop[4]"  => $cell_image_imageInCellTop_4[$i],
									"imageInCellLeft[4]"  => $cell_image_imageInCellLeft_4[$i],
									"imageInCellWidth[4]"  => $cell_image_imageInCellWidth_4[$i],
									"imageInCellHeight[4]"  => $cell_image_imageInCellHeight_4[$i],
									"imageInEditPercentage[4]"  => $cell_image_imageInEditPercentage_4[$i],
									"imageInEditPositionX[4]"  => $cell_image_imageInEditPositionX_4[$i],
									"imageInEditPositionY[4]"  => $cell_image_imageInEditPositionY_4[$i],
									
									"url[5]" => $cell_image_url_5[$i],
									"imageInCellPercentage[5]"  => $cell_image_imageInCellPercentage_5[$i],
									"imageInCellTop[5]"  => $cell_image_imageInCellTop_5[$i],
									"imageInCellLeft[5]"  => $cell_image_imageInCellLeft_5[$i],
									"imageInCellWidth[5]"  => $cell_image_imageInCellWidth_5[$i],
									"imageInCellHeight[5]"  => $cell_image_imageInCellHeight_5[$i],
									"imageInEditPercentage[5]"  => $cell_image_imageInEditPercentage_5[$i],
									"imageInEditPositionX[5]"  => $cell_image_imageInEditPositionX_5[$i],
									"imageInEditPositionY[5]"  => $cell_image_imageInEditPositionY_5[$i])									
								)
							);		
    array_push($array_cell, $insert_cell);
		
		
		// cell 정보 배열에 넣기 (widget)
		$insert_widget = array("cell[$i]" => 
							array("widget" => 
								array("image_url" => $cell_widget_image_url[$i],
                      "vod_id" => $cell_widget_vod_id[$i],
                      "widget_kind" => $cell_widget_widget_kind[$i],
                      "weather_id" => $cell_widget_weather_id[$i],
                      "weather_kind" => $cell_widget_weather_kind[$i])
								)
							);	
  
      array_push($array_cell, $insert_widget);
					
		
		// cell 정보 배열에 넣기 (text)
		$insert_text = array("cell[$i]" => 
							array("text" => 
								array("contents" => $cell_text_contents[$i],
									"font_size" => $cell_text_font_size[$i],
									"font_color" => $cell_text_font_color[$i],
									"font_family" => $cell_text_font_family[$i],
									"font_align" => $cell_text_font_align[$i],
									"font_back_color" => $cell_text_font_back_color[$i],
									"font_weight" => $cell_text_font_weight[$i],
									"font_vertical" => $cell_text_font_vertical[$i])
								)
							);
  		array_push($array_cell, $insert_text);
    

		
		
		// cell 정보 서버에 업로드
		$handle = fopen('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.$number_of_publish.'_cell_'.$i.'.json', "w");	
		$write_handle = json_encode($array_cell);
		echo $write_handle;
		$handle = fwrite($handle, $write_handle);		
		fclose($handle);
		
		// cell 업로드 완료 이벤트 전달
		echo("<script language='javascript'>parent.window.php_complete_phpUpload_cell(\"$publish_type\", \"$i\");</script>");
		
		// 창 닫기
		//echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");
	}	
	
	else if($category == "end") {
		// background 불러와서 배열에 넣기
		$tmpUrl = 'gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.$number_of_publish.'_background.json';		
		$slide_background_json = file_get_contents($tmpUrl);
		$slide_background = json_decode($slide_background_json, true);
		array_push($publish_list_json["publish_list"], $slide_background);
		
		// background.json 삭제 하기	
		unlink($tmpUrl);

		// cell 불러와서 배열에 넣기
		for($i=1; $i<=25; $i++){
			$tmpUrl = 'gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.$number_of_publish.'_cell_'.$i.'.json';
			$slide_cell_json[$i] = file_get_contents($tmpUrl);
			$slide_cell[$i] = json_decode($slide_cell_json[$i], true);
			array_push($publish_list_json["publish_list"], $slide_cell[$i]);
			
			// cell.json 삭제 하기
			unlink($tmpUrl);
		}
		
		// 배열에 넣은것 업로드
		$handle = fopen('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.$saveNo.'.json', "w");	
		$write_handle = json_encode($publish_list_json);
		echo $write_handle;
		$handle = fwrite($handle, $write_handle);		
		fclose($handle);
		
		// publish 리스트 서버에 업로드
		//$handle_2 = fopen("gs://popon-tv/".$user_email."/".$publish_type."/".$publish_type."_list.json", "w");
		//$inserPublishName = array("publishName" => $publishName);
		//array_push($publish_list_json_forCount["publish_list"], $inserPublishName);
		
		//$write_handle_2 = json_encode($publish_list_json_forCount);
		//$handle_2 = fwrite($handle_2, $write_handle_2);
		//fclose($handle_2);		



		// 전체 업로드 완료 이벤트 전달
		echo("<script language='javascript'>parent.window.php_complete_phpUpload_all(\"$publish_type\");</script>");
		
		// body_dimmed 닫기
		echo("<script language='javascript'>parent.window.body_dimmed_close();</script>");
	}
?>