<?php
	require_once 'get_user_email.php';	
	
	require_once 'google/appengine/api/cloud_storage/CloudStorageTools.php';
	use google\appengine\api\cloud_storage\CloudStorageTools;
	
	// publish 모드 불러오기
	$publish_type = "myProject";
	$publish_list = file_get_contents('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json');
		
	if($publish_list) {
		$publish_list_json = json_decode($publish_list, true);
		$number_of_publish = count($publish_list_json['publish_list']);		
	}
	else {
		$number_of_publish = 0;
		$handle = fopen('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_list.json', "w");
		$handle = fwrite($handle, '{"publish_list":[]}');		
		fclose($handle);		
		
		echo "<br><br>json file is built<br><br>";
	}
	
	// number_of_publish 전달
	echo("<script language='javascript'>parent.window.php_load_number_of_publish(\"$publish_type\", \"$number_of_publish\");</script>");
  
  // load_publish
  $k = -1;
  for( $j=$number_of_publish-1; $j>=0; $j-- )
  {
    $k++;
		$publishNo = $j;
		
		$publish_content = file_get_contents('gs://popon-tv/'.$user_email.'/'.$publish_type.'/'.$publish_type.'_'.$k.'.json');
		$publish_content_json = json_decode($publish_content, true);
		
		var_dump($publish_content_json);
		echo "<br><br>";
		
		$divided = $publish_content_json["publish_list"][0][0]["divided"];
		$background_kind = $publish_content_json["publish_list"][0][1]["background"]["kind"];
		$background_color = $publish_content_json["publish_list"][0][1]["background"]["color"];
		$background_image_url = $publish_content_json["publish_list"][0][1]["background"]["image"]["url"];
    $background_image_top = $publish_content_json["publish_list"][0][1]["background"]["top"];
		$background_image_left = $publish_content_json["publish_list"][0][1]["background"]["left"];
		$background_image_width = $publish_content_json["publish_list"][0][1]["background"]["width"];
		$background_image_height = $publish_content_json["publish_list"][0][1]["background"]["height"];
		$background_image_per = $publish_content_json["publish_list"][0][1]["background"]["percentage"];
    $project_name = $publish_content_json["publish_list"][0][2]["project_name"];
		
		for($i=1; $i<=25; $i++){
			$cell_kind[$i] = $publish_content_json["publish_list"][$i][0]["cell[$i]"]["kind"];
			$cell_x[$i] = $publish_content_json["publish_list"][$i][0]["cell[$i]"]["x"];
			$cell_y[$i] = $publish_content_json["publish_list"][$i][0]["cell[$i]"]["y"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["url[1]"];
			$cell_image_imageInCellPercentage_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellPercentage[1]"];
			$cell_image_imageInCellTop_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellTop[1]"];
			$cell_image_imageInCellLeft_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellLeft[1]"];
			$cell_image_imageInCellWidth_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellWidth[1]"];
			$cell_image_imageInCellHeight_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellHeight[1]"];
			$cell_image_imageInEditPercentage_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPercentage[1]"];
			$cell_image_imageInEditPositionX_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionX[1]"];
			$cell_image_imageInEditPositionY_1[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionY[1]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["url[2]"];
			$cell_image_imageInCellPercentage_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellPercentage[2]"];
			$cell_image_imageInCellTop_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellTop[2]"];
			$cell_image_imageInCellLeft_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellLeft[2]"];
			$cell_image_imageInCellWidth_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellWidth[2]"];
			$cell_image_imageInCellHeight_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellHeight[2]"];
			$cell_image_imageInEditPercentage_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPercentage[2]"];
			$cell_image_imageInEditPositionX_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionX[2]"];
			$cell_image_imageInEditPositionY_2[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionY[2]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["url[3]"];
			$cell_image_imageInCellPercentage_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellPercentage[3]"];
			$cell_image_imageInCellTop_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellTop[3]"];
			$cell_image_imageInCellLeft_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellLeft[3]"];
			$cell_image_imageInCellWidth_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellWidth[3]"];
			$cell_image_imageInCellHeight_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellHeight[3]"];
			$cell_image_imageInEditPercentage_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPercentage[3]"];
			$cell_image_imageInEditPositionX_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionX[3]"];
			$cell_image_imageInEditPositionY_3[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionY[3]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["url[4]"];
			$cell_image_imageInCellPercentage_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellPercentage[4]"];
			$cell_image_imageInCellTop_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellTop[4]"];
			$cell_image_imageInCellLeft_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellLeft[4]"];
			$cell_image_imageInCellWidth_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellWidth[4]"];
			$cell_image_imageInCellHeight_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellHeight[4]"];
			$cell_image_imageInEditPercentage_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPercentage[4]"];
			$cell_image_imageInEditPositionX_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionX[4]"];
			$cell_image_imageInEditPositionY_4[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionY[4]"];
			
			$cell_image_theFirstOrderFiveImages[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["theFirstOrderFiveImages"];
			$cell_image_selectedFiveImageNo[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["selectedFiveImageNo"];
			$cell_image_url_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["url[5]"];
			$cell_image_imageInCellPercentage_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellPercentage[5]"];
			$cell_image_imageInCellTop_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellTop[5]"];
			$cell_image_imageInCellLeft_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellLeft[5]"];
			$cell_image_imageInCellWidth_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellWidth[5]"];
			$cell_image_imageInCellHeight_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInCellHeight[5]"];
			$cell_image_imageInEditPercentage_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPercentage[5]"];
			$cell_image_imageInEditPositionX_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionX[5]"];
			$cell_image_imageInEditPositionY_5[$i] = $publish_content_json["publish_list"][$i][1]["cell[$i]"]["image"]["imageInEditPositionY[5]"];
			
			$cell_widget_image_url[$i] = $publish_content_json["publish_list"][$i][2]["cell[$i]"]["widget"]["image_url"];
			$cell_widget_vod_id[$i] = $publish_content_json["publish_list"][$i][2]["cell[$i]"]["widget"]["vod_id"];
      $cell_widget_widget_kind[$i] = $publish_content_json["publish_list"][$i][2]["cell[$i]"]["widget"]["widget_kind"];
      $cell_widget_weather_id[$i] = $publish_content_json["publish_list"][$i][2]["cell[$i]"]["widget"]["weather_id"];
      $cell_widget_weather_kind[$i] = $publish_content_json["publish_list"][$i][2]["cell[$i]"]["widget"]["weather_kind"];
      
      $cell_text_contents[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["contents"];
			$cell_text_font_size[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["font_size"];
			$cell_text_font_color[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["font_color"];
			$cell_text_font_family[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["font_family"];
			$cell_text_font_align[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["font_align"];
			$cell_text_font_back_color[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["font_back_color"];
			$cell_text_font_weight[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["font_weight"];
			$cell_text_font_vertical[$i] = $publish_content_json["publish_list"][$i][3]["cell[$i]"]["text"]["font_vertical"];
		}
		
		// publish 정보 전달
		echo("<script language='javascript'>parent.window.php_load_publish_divided(\"$publish_type\", \"$publishNo\", \"$divided\");</script>");
		echo("<script language='javascript'>parent.window.php_load_publish_background(\"$publish_type\", \"$publishNo\", \"$background_kind\", \"$background_color\", \"$background_image_url\", \"$project_name\", \"$background_image_top\", \"$background_image_left\", \"$background_image_width\", \"$background_image_height\", \"$background_image_per\");</script>");
		
		for($i=1; $i<=25; $i++){
			echo("<script language='javascript'>parent.window.php_load_publish_cell_info(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_kind[$i]\", 
				\"$cell_x[$i]\", 
				\"$cell_y[$i]\", 
				
				\"$cell_image_theFirstOrderFiveImages[$i]\", 
				\"$cell_image_selectedFiveImageNo[$i]\"
			);</script>");
			
			echo("<script language='javascript'>parent.window.php_load_publish_cell_img_1(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_1[$i]\",
				\"$cell_image_imageInCellPercentage_1[$i]\",
				\"$cell_image_imageInCellTop_1[$i]\",
				\"$cell_image_imageInCellLeft_1[$i]\",
				\"$cell_image_imageInCellWidth_1[$i]\",
				\"$cell_image_imageInCellHeight_1[$i]\",
				\"$cell_image_imageInEditPercentage_1[$i]\",
				\"$cell_image_imageInEditPositionX_1[$i]\",
				\"$cell_image_imageInEditPositionY_1[$i]\"
			);</script>");
			
			echo("<script language='javascript'>parent.window.php_load_publish_cell_img_2(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_2[$i]\",
				\"$cell_image_imageInCellPercentage_2[$i]\",
				\"$cell_image_imageInCellTop_2[$i]\",
				\"$cell_image_imageInCellLeft_2[$i]\",
				\"$cell_image_imageInCellWidth_2[$i]\",
				\"$cell_image_imageInCellHeight_2[$i]\",
				\"$cell_image_imageInEditPercentage_2[$i]\",
				\"$cell_image_imageInEditPositionX_2[$i]\",
				\"$cell_image_imageInEditPositionY_2[$i]\"
			);</script>");
			
			echo("<script language='javascript'>parent.window.php_load_publish_cell_img_3(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_3[$i]\",
				\"$cell_image_imageInCellPercentage_3[$i]\",
				\"$cell_image_imageInCellTop_3[$i]\",
				\"$cell_image_imageInCellLeft_3[$i]\",
				\"$cell_image_imageInCellWidth_3[$i]\",
				\"$cell_image_imageInCellHeight_3[$i]\",
				\"$cell_image_imageInEditPercentage_3[$i]\",
				\"$cell_image_imageInEditPositionX_3[$i]\",
				\"$cell_image_imageInEditPositionY_3[$i]\"
			);</script>");
			
			echo("<script language='javascript'>parent.window.php_load_publish_cell_img_4(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_4[$i]\",
				\"$cell_image_imageInCellPercentage_4[$i]\",
				\"$cell_image_imageInCellTop_4[$i]\",
				\"$cell_image_imageInCellLeft_4[$i]\",
				\"$cell_image_imageInCellWidth_4[$i]\",
				\"$cell_image_imageInCellHeight_4[$i]\",
				\"$cell_image_imageInEditPercentage_4[$i]\",
				\"$cell_image_imageInEditPositionX_4[$i]\",
				\"$cell_image_imageInEditPositionY_4[$i]\"
			);</script>");
			
			echo("<script language='javascript'>parent.window.php_load_publish_cell_img_5(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_image_url_5[$i]\",
				\"$cell_image_imageInCellPercentage_5[$i]\",
				\"$cell_image_imageInCellTop_5[$i]\",
				\"$cell_image_imageInCellLeft_5[$i]\",
				\"$cell_image_imageInCellWidth_5[$i]\",
				\"$cell_image_imageInCellHeight_5[$i]\",
				\"$cell_image_imageInEditPercentage_5[$i]\",
				\"$cell_image_imageInEditPositionX_5[$i]\",
				\"$cell_image_imageInEditPositionY_5[$i]\"
			);</script>");	
			
			echo("<script language='javascript'>parent.window.php_load_publish_widget(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				\"$cell_widget_image_url[$i]\",
				\"$cell_widget_vod_id[$i]\",
        \"$cell_widget_widget_kind[$i]\",
        \"$cell_widget_weather_id[$i]\",
        \"$cell_widget_weather_kind[$i]\"
			);</script>");	
			
			echo("<script language='javascript'>parent.window.php_load_publish_text(
				\"$publish_type\",
				\"$publishNo\",
				\"$i\", 
				
				\"$cell_text_contents[$i]\",
				\"$cell_text_font_size[$i]\",
				\"$cell_text_font_color[$i]\",
				\"$cell_text_font_family[$i]\",
				\"$cell_text_font_align[$i]\",
				\"$cell_text_font_back_color[$i]\",
				\"$cell_text_font_weight[$i]\",
				\"$cell_text_font_vertical[$i]\"
			);</script>");						
		}
	// publish 로드 완료 이벤트 전달
  }

  echo("<script language='javascript'>parent.window.php_complete_publish_load(\"$publish_type\");</script>");  
 

	// body_dimmed 닫기
	echo("<script language='javascript'>parent.window.body_dimmed_close();</script>");
	
	// 창 닫기
  //echo("<script language='javascript'>window.opener = window.location.href; self.close();</script>");	
?>