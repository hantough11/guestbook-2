<?php require_once 'get_user_email.php'; ?>


<html>
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      
		<?php
			// 도메인에 따라 Web 버전과 Device 버전으로 분기
			//if( ($_SERVER['HTTP_HOST'] == "popon.tv" || $_SERVER['HTTP_HOST'] == "www.popon.tv"))
			{
				$platform = "web";
				echo("<title>VER 1.0b</title>");
				echo("<link rel='stylesheet' href='../websrc/css/style_common_web.css' />");
				echo("<link rel='stylesheet' href='../websrc/css/editor_layer_web.css' />");
				echo("<script language='javascript' type='text/javascript' src='../websrc/js/widget/auth.js'></script>");
				echo("<script language='javascript' type='text/javascript' src='../websrc/js/widget/client.js?onload=googleApiClientReady'></script>");
			}
			//else
			{
				/*
				$platform = "device";
				echo("<title>Ver 1.0b</title>");
				echo("<link rel='stylesheet' href='../websrc/css/style_common.css' />");
				echo("<link rel='stylesheet' href='../websrc/css/editor_layer.css' />");
				echo("<link rel='stylesheet' href='../websrc/vkeyboard/LgVKeyboard.css' />");
				echo("<script language='javascript' type='text/javascript' src='../websrc/vkeyboard/LgVKeyboard.js' id='mainVKScript'></script>");
				*/
			}
		?>

		<!--JQuery-->
		<script language="javascript" type="text/javascript" src="../websrc/js/jquery/jquery-1.8.2.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/jquery/jquery-ui.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/jquery/jquery.jcarousel.min.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/jquery/jquery.cookie.js"></script>

		<!--Key Event-->
		<script language="javascript" type="text/javascript" src="../websrc/js/key/keycode.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/key/keyevent.js"></script>

		<!--Initialize-->
		<script language="javascript" type="text/javascript" src="../websrc/js/init/initializeFeatured.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/init/initializePlaylists.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/init/initializeTemplate.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/init/initializeMyprojects.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/init/initializeEditlayer.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/init/initializeSelectImageWindow.js"></script>
		
		<!--Templete Data-->
		<script language="javascript" type="text/javascript" src="../websrc/js/templete/featured.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/templete/playlist.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/templete/template.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/templete/myproject.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/templete/selectImageWindow.js"></script>
		
		<!-- Scroll -->
		<script language="javascript" type="text/javascript" src="../websrc/js/scroll/ui.js"></script>

		<!-- PreLoad Image -->
		<!--<script language="javascript" type="text/javascript" src="../websrc/js/preLoad/preloadCssImages.jQuery_v5.js"></script>-->

		<script language="javascript" type="text/javascript" src="../websrc/js/widget/weather.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/widget/player.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/php_function.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/var.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/imageTransition.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/function.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/edit_common.js"></script>
		<script language="javascript" type="text/javascript" src="../websrc/js/main_common.js"></script>
		<script language="javascript" type="text/javascript" src="https://www.youtube.com/iframe_api"></script>

		<script>
        function playAudio(src) {
            if (navigator.userAgent.indexOf('Windows') != -1 || navigator.userAgent.indexOf('Android') != -1 || navigator.userAgent.indexOf('iPhone') != -1) {
				try {
					document.getElementById('audio').setAttribute("src", src);
					document.getElementById('audio').loop = false;
					document.getElementById('audio').play();
				} catch(e) {
				}
			} else {
				try{
					document.getElementById('sound').data = src;
					document.getElementById('sound').setAttribute('playCount', 0);
					document.getElementById('sound').play();
				} catch(e) {
				}
			}
        }
		</script>
    </head>
	<body draggable="false" onkeyDown="keyDown(event);" onresize="resize();">
		<audio id="audio"></audio>
		<!--<embed id="sound" src="" hidden="true" controller="false" type="audio/mp3" autoplay="false" autostart="false"/>-->
		<iframe name="process" style="display:none;background-color:white;" width="1000" height="100" scrollbar="yes"></iframe>
		
		<div id="gnb">
			<span class="gnb_logo"></span>
			<div class = "user_email">guest</div>
		</div>
		<div id="lnb">
			<a class="btn_featured" href="#"><span class="lnb_featured"></span></a>
			<a class="btn_playlists" href="#"><span class="lnb_playlists"></span></a>
			<a class="btn_editor" href="#"><span class="lnb_editor"></span></a>
			<a class="btn_support" href="#"><span class="lnb_support"></span></a>
			<a class="btn_settings" href="#"><span class="lnb_settings"></span></a>
			<div class="lnbBlock"></div>
		</div>

		<div id="body">
			<!-- Featured 시작-->
			<div id="body_featured">
				<div class="body_title">
					<span><img src="../websrc/img/main/tl_main_01.png"></span>
				</div>
				<div class="body_contents">
					<!-- 여기에 동적으로 Featured List 들어감 -->
					<div class="noContents"></div>
		        </div>
				<div class="body_button">
					<a href="#"><span class="body_button_left"></span></a>
					<a href="#"><span class="body_button_right"></span></a>
				</div>
				<div class="body_widget"></div>
				<div id="previewPopupBackBorder">
					<div class="previewPopup_scene">
						<!-- 여기에 동적으로 Featured Popup 들어감 -->
				</div>
				<div class="previewPopup_button">
					<a href="#"><span class="edit"></span></a>
		            <a href="#"><span class="play"></span></a>
					<a href="#"><span class="cancel"></span></a>
				</div>
			</div>
			<div class="editMap">
				<div class="title"></div>
				<div class="editMap_back">
					<a href="#" title="Save as"><div class="editMap_save_as"></div></a>
					<a href="#" title="Publish"><div class="editMap_publish"></div></a>
					<a href="#" title="Back"><div class="editMap_back_btn"></div></a>
				</div>
				<div class="editMap_scene">
					<!-- 여기에 Featured Editor 들어감 -->
				</div>
			</div>
			<div class="player">
		        <div class="player_scene">
					<!-- 여기에 Play Player 들어감 -->
				</div>
			</div>
		</div>
		<!-- Featured 끝-->

		<!-- Playlists 시작-->
		<div id="body_playlists">
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_main_02.png"></span>
			</div>
			<div class="body_contents">
				<!-- 여기에 Play List 들어감 -->
				<div class="noContents"></div>
			</div>
			<div class="body_button">
				<a href="#"><span class="body_button_left"></span></a>
				<a href="#"><span class="body_button_right"></span></a>
			</div>
			<div class="body_widget"></div>
			<div id="previewPopupBackBorder">
				<div class="previewPopup_scene">
					<!-- 여기에 Play Popup 들어감 -->
				</div>
				<div class="previewPopup_button">
					<a href="#"><span class="delete"></span></a>
		            <a href="#"><span class="play"></span></a>
					<a href="#"><span class="cancel"></span></a>
				</div>
			</div>
			<div class="editMap">
				<div class="title"></div>
				<div class="editMap_back">
					<a href="#"><div class="editMap_back_btn"></div></a>
				</div>
				<div class="editMap_scene">
		            <!-- 여기에 Play Editor 들어감 -->
		        </div>
			</div>
			<div class="player">
		        <div class="player_scene">
					<!-- 여기에 Play Player 들어감 -->
				</div>
			</div>
		</div>
		<!-- Playlists 끝-->

		<!-- Editor 시작-->
		<div id="body_editor">
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_main_03.png"></span>
			</div>
			<div class="body_contents">
				<a class="slide_theme" href="#"><div class="body_contents_sub list_1"></div></a>
				<a class="slide_grid" href="#"><div class="body_contents_sub list_2"></div></a>
				<a class="slide_myProjects" href="#"><div class="body_contents_sub list_3"></div></a>
		    </div>
			<div class="body_button">
				<a href="#"><span class="body_button_left"></span></a>
				<a href="#"><span class="body_button_right"></span></a>
			</div>
			<div class="body_widget"></div>
			<div id="body_contents_sub"></div>
		</div>
		<!-- Editor 끝-->

		<!-- Support 시작-->
		<div id="body_support">
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_main_04.png"></span>
			</div>
			<div class="body_contents">
				<a class="slide_about" href="#"><div class="body_contents_sub list_1"></div></a>
				<a class="slide_faq" href="#"><div class="body_contents_sub list_2"></div></a>
				<a class="slide_forum" href="#"><div class="body_contents_sub list_3"></div></a>
		    </div>
		    <div class="body_button">
				<a href="#"><span class="body_button_left"></span></a>
				<a href="#"><span class="body_button_right"></span></a>
			</div>
			<div class="body_widget"></div>
			<div id="lay_support"></div>
		</div>
		<!-- Support 끝-->
		
		<!-- Account 시작-->
		<div id="body_settings">
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_main_05.png"></span>
			</div>
			<div class="body_contents">
				<a class="accounts_signout" href="#">
					<div class="body_contents_sub list_1">
						<div class="account_current"></div>
					</div>
				</a>
				<a class="accounts_myaccount" href="#">
					<div class="body_contents_sub list_2">
						<div class="account_current"></div>
					</div>
				</a>
			</div>
			<div class="body_button">
				<a href="#"><span class="body_button_left"></span></a>
				<a href="#"><span class="body_button_right"></span></a>
			</div>
			<div class="body_widget"></div>
			<div id="lay_settings"></div>
		</div>
		<!-- Account 끝 -->

		<!-- Editor -> Theme Design 시작 -->
		<div id="body_theme">
			<div class="body_back">
				<a href="#"><div class="body_back_btn"></div></a>
			</div>
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_editor_01.png"></span>
		    </div>
			<div class="body_contents">
				<!-- 여기에 Template List 들어감 -->
			</div>
			<div class="body_button">
				<a href="#"><span class="body_button_left"></span></a>
				<a href="#"><span class="body_button_right"></span></a>
			</div>
			<div class="body_widget"></div>
			<div id="previewPopupBackBorder">
				<div class="previewPopup_scene">
					<!-- 여기에 Template Popup 들어감 -->
				</div>
				<div class="previewPopup_button">
					<a href="#"><span class="edit"></span></a>
					<a href="#"><span class="cancel"></span></a>
				</div>
			</div>
			<div class="editMap">
				<div class="title"></div>
				<div class="editMap_back">
					<a href="#" title="Save as"><div class="editMap_save_as"></div></a>
					<a href="#" title="Publish"><div class="editMap_publish"></div></a>
					<a href="#" title="Back"><div class="editMap_back_btn"></div></a>
				</div>
				<div class="editMap_scene">
					<!-- 여기에 Template Editor 들어감 -->
				</div>
			</div>
		</div>
		<!-- Editor -> Theme Design 끝 -->

		<!-- Editor -> My Project 시작 -->
		<div id="body_myprojects">
			<div class="body_back">
				<a href="#"><div class="body_back_btn"></div></a>
			</div>
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_editor_03.png"></span>
			</div>
			<div class="body_contents">
				<!-- 여기에 MyProject List 들어감 -->
				<div class="noContents"></div>
			</div>
			<div class="body_button">
				<a href="#"><span class="body_button_left"></span></a>
				<a href="#"><span class="body_button_right"></span></a>
			</div>
			<div class="body_widget"></div>
		    <div id="previewPopupBackBorder">
				<div class="previewPopup_scene">
					<!-- 여기에 MyProject Popup 들어감 -->
				</div>
				<div class="previewPopup_button">
					<a href="#"><span class="edit"></span></a>
					<a href="#"><span class="delete"></span></a>
					<a href="#"><span class="cancel"></span></a>
				</div>
			</div>
			<div class="editMap">
				<div class="title"></div>
				<div class="editMap_back">
					<a href="#" title="Save"><div class="editMap_save"></div></a>
					<a href="#" title="Save as"><div class="editMap_save_as"></div></a>
					<a href="#" title="Publish"><div class="editMap_publish"></div></a>
					<a href="#" title="Back"><div class="editMap_back_btn"></div></a>
				</div>
				<div class="editMap_scene">
					<!-- 여기에 MyProject Editor 들어감 -->
				</div>
			</div>
		</div>
		<!-- Editor -> My Project 끝 -->

		<!-- Support -> About 시작 -->
		<div id="body_about">
			<div class="body_back">
				<a href="#"><div class="body_back_btn"></div></a>
			</div>
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_support_01.png"></span>
			</div>
			<div class="body_contents">
				<div class="body_movie_loading"></div>
				<!--<iframe class="body_movie" width="498" height="281" src="http://www.youtube.com/embed/_WDa6CG8_1w" frameborder="0" allowfullscreen=""></iframe>-->
				<a href="#">
					<div class="body_email">
						<span class="email_address"></span>
					</div>
				</a>
				<a href="#"><div class="close"></div></a>
			</div>
		</div>
		<!-- Support -> About 끝 -->
		
		<!-- Support -> faq 시작 -->
		<div id="body_faq">
			<div class="body_back"><a href="#"><div class="body_back_btn"></div></a></div>
			<div class="body_title"><span><img src="../websrc/img/main/tl_support_02.png"></span></div>
			<div class="body_contents" style="padding:10px;">
				<iframe id="faq_embed" width="1022" height="478" src="http://popontv.blogspot.com/" style="background-color:white;" frameborder="0" scrolling="no"></iframe>
			</div>
		</div>
		<!-- Support -> faq 끝 -->

		<!-- Support -> Forum 시작 -->
		<div id="body_forum">
      <div class="body_back">
        <a href="#">
          <div class="body_back_btn"></div>
        </a>
      </div>
      <div class="body_title">
        <span>
          <img src="../websrc/img/main/tl_support_03.png">
        </span>
      </div>
      <div class="body_contents" style="padding:10px;">
        <iframe id="forum_embed" src="javascript:void(0)" scrolling="no" frameborder="0" width="1022" height="480" style="background-color:#eee;"></iframe>
      </div>
      

      <script type="text/javascript">
        document.getElementById("forum_embed").src = "https://groups.google.com/forum/embed/?place=forum/popon&showsearch=false&showpopout=true&hideforumtitle=true&hl=en";
      </script>
      <!--
			<div class="body_contents">
				<a href="#" class="newTopic"><div class="body_new_topic"></div></a>
				<a href="#" class="list"><div class="body_foum_01"></div></a>
				<a href="#" class="list"><div class="body_foum_02"></div></a>
				<a href="#" class="list"><div class="body_foum_03"></div></a>
				<a href="#" class="list"><div class="body_foum_04"></div></a>
				<a href="#" class="list"><div class="body_foum_05"></div></a>
				<a href="#" class="list"><div class="body_foum_06"></div></a>
			</div>
			<div id="lay_forum">
				<div class="lay_forum_text"><input type="text"></input></div>
				<div class="lay_forum_button">
					<a href="#"><span class="xbox"></span></a>
					<a href="#"><span class="delete"></span></a>
					<a href="#"><span class="write"></span></a>
				</div>
			</div>
			<div id="lay_new_topic">
				<div class="lay_new_topic_title"><input type="text"></input></div>
				<div class="lay_new_topic_text"><textarea name="new_topic" rows="5" cols="30"></textarea></div>
				<div class="lay_new_topic_button">
					<a href="#"><span class="xbox"></span></a>
					<a href="#"><span class="apply"></span></a>
					<a href="#"><span class="cancel"></span></a>
				</div>
			</div>
      -->
		</div>
		<!-- Support -> Forum 끝 -->

		<!-- Account -> Signout 시작 -->
		<div id="body_signout">
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_settings_04.png" width="192" height="50"></span>
			</div>
			<div class="body_contents">
				<div class="user_image"><span><img src="" width="160" height="160" id="user_image" size="100%"></span></div>
				<div class="text_1">로그아웃 하시겠습니까?</div>
				<div class="text_2"></div>
				<div class="text_3"></div>
				<div class="text_4">로그아웃 후에는 메인화면으로 자동 이동합니다.</div>
				<div class="bottom_btn">
					<a href="#"><span class="apply"></span></a>
					<a href="#"><span class="cancel"></span></a>
				</div>
			</div>
		</div>
		<!-- Account -> Signout 끝 -->

		<!-- Account -> My Account 시작 -->
		<div id="body_myaccount">
			<div class="body_back"><a href="#"><div class="body_back_btn"></div></a></div>
			<div class="body_title">
				<span><img src="../websrc/img/main/tl_settings_05.png" width="330" height="50"></span>
			</div>
			<div class="body_contents">
				<div class="contents_back" style="top:30px;left:30px;">
					<div class="white big text" style="top:15px;">Lite</div>
					<div class="under_line" style="top:50px;"></div>
					<div class="grey big text" style="top:65px;">Free</div>
					<div class="under_line" style="top:100px;"></div>
					<div class="grey small text" style="top:110px;">Number of Templetes</div>
					<div class="white normal text" style="top:125px;">10</div>
					<div class="under_line" style="top:150px;"></div>
					<div class="grey small text" style="top:160px;">Customizing</div>
					<div class="white normal text" style="top:175px;">No</div>
				</div>
				<div class="contents_back" style="top:30px;left:240px;">
					<div class="white big text" style="top:15px;">Premium</div>
					<div class="under_line" style="top:50px;"></div>
					<div class="grey big text" style="top:65px;">$9.99/month</div>
					<div class="under_line" style="top:100px;"></div>
					<div class="grey small text" style="top:110px;">Number of Templetes</div>
					<div class="white normal text" style="top:125px;">10</div>
					<div class="under_line" style="top:150px;"></div>
					<div class="grey small text" style="top:160px;">Customizing</div>
					<div class="white normal text" style="top:175px;">No</div>
				</div>
				<div class="contents_back" style="top:30px;left:450px;">
					<div class="white big text" style="top:15px;">Professional</div>
					<div class="under_line" style="top:50px;"></div>
					<div class="grey big text" style="top:65px;">$29.99/month</div>
					<div class="under_line" style="top:100px;"></div>
					<div class="grey small text" style="top:110px;">Number of Templetes</div>
					<div class="white normal text" style="top:125px;">No Limits</div>
					<div class="under_line" style="top:150px;"></div>
					<div class="grey small text" style="top:160px;">Customizing</div>
					<div class="white normal text" style="top:175px;">No</div>
				</div>
				<div class="contents_back" style="top:30px;left:660px;">
					<div class="white big text" style="top:15px;">Enterprise</div>
					<div class="under_line" style="top:50px;"></div>
					<div class="grey big text" style="top:65px;">$49.99/month</div>
					<div class="under_line" style="top:100px;"></div>
					<div class="grey small text" style="top:110px;">Number of Templetes</div>
					<div class="white normal text" style="top:125px;">No Limits</div>
					<div class="under_line" style="top:150px;"></div>
					<div class="grey small text" style="top:160px;">Customizing</div>
					<div class="white normal text" style="top:175px;">Monthly</div>
				</div>
				<div class="grey big text" style="top:280px;">To sign up for premium services, please visit our website</div>
				<div class="white big text" style="top:310px;">www.popon.tv</div>
			</div>
		</div>
		<!-- Account -> My Account 끝 -->

		<!-- Editor_layer 시작 -->
		<div id="lay_editor_layer">
			<!-- Left Menu -->
			<div class="left_btn">
				<div class="left_selected"></div>
				<!--
				<a id="1" class="leftBtn_cancel" href="#" ><span class="left_cancel"></span></a>
				<a id="2" class="leftBtn_save" href="#"><span class="left_save"></span></a>
				-->
				<a id="3" class="leftBtn_publish" href="#"><span class="left_publish"></span></a>
				<a id="4" class="leftBtn_backgrounds" href="#"><span class="left_backgrounds"></span></a>
				<a id="5" class="leftBtn_widgets" href="#">
					<span class="left_widgets_dimm"></span>
					<span class="left_widgets"></span>
				</a>
			    <a id="6" class="leftBtn_images" href="#">
					<span class="left_images_dimm"></span>
					<span class="left_images"></span>
				</a>
				<a id="7" class="leftBtn_text" href="#">
					<span class="left_text_dimm"></span>
					<span class="left_text"></span>
				</a>
			</div>

			<!-- Editor_layer => Background -->
			<div class="backgrounds">
				<div class="top_btn">
					<a id="1" href="#"><div class="color_btn"></div></a>
					<a id="2" href="#"><div class="image_btn"></div></a>
					<!--<a id="3" href="#"><div class="video_btn"></div></a>-->
					<div class="video_btn"></div>
					<!--<a id="4" href="#"><div class="tv_btn"></div></a>-->
					<div class="tv_btn"></div>
				</div>
				<div class="contents">
					<div class="color">
						<div class="color_window"></div>
						<div class="color_list">
							<a id="1" href="#"><div class="color_1"></div></a>
							<a id="2" href="#"><div class="color_2"></div></a>
							<a id="3" href="#"><div class="color_3"></div></a>
							<a id="4" href="#"><div class="color_4"></div></a>
							<a id="5" href="#"><div class="color_5"></div></a>
							<a id="6" href="#"><div class="color_6"></div></a>
							<a id="7" href="#"><div class="color_7"></div></a>
							<a id="8" href="#"><div class="color_8"></div></a>
							<a id="9" href="#"><div class="color_9"></div></a>
							<a id="10" href="#"><div class="color_10"></div></a>
						</div>
						<div class="color_selected"></div>
						<div id="color_sub_list_1" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_2" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_3" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_4" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_5" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_6" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_7" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_8" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_9" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div id="color_sub_list_10" class="colorSubList">
							<a id="1" href="#"><div class="color_sub_1"></div></a>
							<a id="2" href="#"><div class="color_sub_2"></div></a>
							<a id="3" href="#"><div class="color_sub_3"></div></a>
							<a id="4" href="#"><div class="color_sub_4"></div></a>
							<a id="5" href="#"><div class="color_sub_5"></div></a>
							<a id="6" href="#"><div class="color_sub_6"></div></a>
						</div>
						<div class="bottom_btn">
							<a id="1" href="#"><div class="apply"></div></a>
							<a id="2" href="#"><div class="cancel"></div></a>
						</div>
					</div>
					<div class="image">
						<div class="image_window"></div>
						<div class="image_preview">
							<a id="1" href="#"><div class="image_preview_1"><img src=""></img></div></a>
						</div>
						<div class="bottom_btn">
							<a id="1" href="#"><div class="apply"></div></a>
							<a id="2" href="#"><div class="cancel"></div></a>
						</div>
						<div class="select_an_image">
							
							<div class="title"></div>
							<div class="preview">
								<div class = "ableCell"><img src=""></img></div>
								<div class = "disableCell_1"></div>
								<div class = "disableCell_2"></div>
								<div class = "previewImage"><img src=""></div>
							</div>
							<div class="list_item_container_outer backgroundImage scr-area">
								<div class="image_selected"></div>
								<div class="list_item_container backgroundImage scr-cont">
									<div class="title_myImages">
										<div class="noImage">No image. Please add your image.</div>
									</div>
								</div>
							</div>
							<div class="imageScroll backgroundImage scr-bar-area">
								<div class="navigator backgroundImage scr-bar"></div>
							</div>
							<div class="buttons">
								<a href="#"><div class="plus"></div></a>
								<a href="#"><div class="minus"></div></a>
								<a href="#"><div class="close"></div></a>
								<a href="#"><div class="fit_all"></div></a>
								<a href="#"><div class="fit_vertical"></div></a>
								<a href="#"><div class="fit_horizon"></div></a>
								<a href="#"><div class="left"></div></a>
								<a href="#"><div class="right"></div></a>
								<a href="#"><div class="top"></div></a>
								<a href="#"><div class="bottom"></div></a>
								<div class="slide_bar"></div>
								<a href="#"><div class="zoom_plus"></div></a>
								<a href="#"><div class="zoom_minus"></div></a>
								<a href="#"><div class="circle"></div></a>
								<a href="#"><div class="circle_value">100%</div></a>
							</div>
						</div>
					</div>
					<div class="video">
						<div class="video_window"></div>
						<div class="video_preview">
							<a id="1" href="#"><div class="video_preview_1"></div></a>
							<input type="file" class="input_file_img"></input>
						</div>
						<div class="bottom_btn">
							<a id="1" href="#"><div class="apply"></div></a>
							<a id="2" href="#"><div class="cancel"></div></a>
						</div>
					</div>
					<div class="tv">
						<div class="tv_window"></div>
						<div class="tv_preview">
							<a id="1" href="#"><div class="tv_preview_1"></div></a>
							<input type="file" class="input_file_img"></input>
						</div>
						<div class="bottom_btn">
							<a id="1" href="#"><div class="apply"></div></a>
							<a id="2" href="#"><div class="cancel"></div></a>
						</div>
					</div>
				</div>
			</div>

			<!-- Editor_layer => Widget -->
			<div class="widgets">
				<div class="top_btn">
					<a id="1" href="#"><div class="tv_btn"></div></a>
					<a id="2" href="#"><div class="video_btn"></div></a>
					<a id="3" href="#"><div class="music_btn"></div></a>
					<a id="4" href="#"><div class="clock_btn"></div></a>
					<a id="5" href="#"><div class="weather_btn"></div></a>
					<a id="6" href="#"><div class="news_btn"></div></a>
					<a id="7" href="#"><div class="currencies_btn"></div></a>
				</div>
			<div class="contents">
				<div class="tv">
					<div class="tv_window"></div>
					<div class="list">
						<a id="1" href="#"><div class="item_1"><div class="title">Empty</div></div></a>
						<a id="2" href="#"><div class="item_2"><div class="title">Empty</div></div></a>
						<a id="3" href="#"><div class="item_3"><div class="title">Empty</div></div></a>
						<div class="image_selected"></div>
					</div>
					<div class="navigation">
						<a id="1" href="#"><div class="left"></div></a>
						<a id="2" href="#"><div class="right"></div></a>
					</div>
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
				</div>
				<div class="video">
					<div class="video_window"></div>
					<div class="list">
						<a id="1" href="#"><div class="item_1"><div class="title">Empty</div></div></a>
						<a id="2" href="#"><div class="item_2"><div class="title">Empty</div></div></a>
						<a id="3" href="#"><div class="item_3"><div class="title">Empty</div></div></a>
						<div class="image_selected"></div>
					</div>
					<div class="navigation">
						<a id="1" href="#"><div class="left"></div></a>
						<a id="2" href="#"><div class="right"></div></a>
					</div>
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
				</div>
				<div class="music">
					<div class="music_window"></div>
					<div class="list">
						<a id="1" href="#"><div class="music_1"></div></a>
						<a id="2" href="#"><div class="music_2"></div></a>
						<a id="3" href="#"><div class="music_3"></div></a>
						<a id="4" href="#"><div class="music_4"></div></a>
						<a id="5" href="#"><div class="music_5"></div></a>
					</div>
					<div class="navigation">
						<a id="1" href="#"><div class="left"></div></a>
						<a id="2" href="#"><div class="right"></div></a>
					</div>
					<div class="music_playlists">
						<a id="1" href="#"><div class="popup_btn"></div></a>
					</div>
					<!--<div class="music_selected"></div>-->
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
				</div>
				<div class="clock">
					<div class="clock_window"></div>
					<div class="list">
						<a id="1" href="#"><div class="clock_1"></div></a>
						<a id="2" href="#"><div class="clock_2"></div></a>
						<a id="3" href="#"><div class="clock_3"></div></a>
						<a id="4" href="#"><div class="clock_4"></div></a>
						<a id="5" href="#"><div class="clock_5"></div></a>
					</div>
					<div class="navigation">
						<a id="1" href="#"><div class="left"></div></a>
						<a id="2" href="#"><div class="right"></div></a>
					</div>
					<div class="clock_playlists">
						<a id="1" href="#"><div class="popup_btn"></div></a>
					</div>
					<!--<div class="clock_selected"></div>-->
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
				</div>
				<div class="weather">
					<div class="weather_window"></div>
					<div class="list">
						<a id="1" href="#"><div class="item_1"><div class="title"></div></div></a>
						<a id="2" href="#"><div class="item_2"><div class="title"></div></div></a>
						<a id="3" href="#"><div class="item_3"><div class="title"></div></div></a>
						<div class="image_selected"></div>
					</div>
					<div class="navigation">
						<a id="1" href="#"><div class="left"></div></a>
						<a id="2" href="#"><div class="right"></div></a>
					</div>
					<a id="1" href="#"><div class="text_font">Arial</div></a>
					<a href="#"><div class="text_color"><div class="status">A</div></div></a>
					<a href="#"><div class="text_back_color"><div class="status"></div></div></a>
					<div class="text_font_list">
						<a id="1" href="#"><div class="list_1">Arial</div></a>
						<a id="2" href="#"><div class="list_2">Georgia</div></a>
						<a id="3" href="#"><div class="list_3">serif</div></a>
						<a id="4" href="#"><div class="list_4">monospace</div></a>
						<a id="5" href="#"><div class="list_5">fantasy</div></a>
					</div>
					<div class="weather_playlists">
						<div class="popup_btn">Not Selected</div>
					</div>
					<!--<div class="weather_selected"></div>-->
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
					<div class="text_color_list">
						<div class="palette">
							<?php for ($i = 0 ; $i <= 67; $i++) echo "<a id=".$i." href='#'><div class='list_".$i."'></div></a>"; ?>
						</div>
					</div>
					<div class="location_select">
						<div class="location_title"></div>
						<div class="location_close" onclick="close_loc_popup();"></div>
						<div class="location_search">
							<div><input id="loc_search_value" type="text" class="input_search" maxlength="15"></div>
							<div class="btn_search"onclick="search_location(document.getElementById('loc_search_value').value);"></div>
						</div>
						<div class="contents_outer">
							<div class="weather_container_outer weatherSrc scr-area">
								<div class="list_item_container weatherSrc scr-cont">
								</div>
								<div class="imageScroll weatherSrc scr-bar-area">
									<div class="navigator weatherSrc scr-bar"></div>
								</div>
							</div>
						</div>
						<div class="tips">Put the name of the city, or with the country for more precise results.</div>
						<div class="recent"></div>
						
					</div>
				</div>
				<div class="news">
					<div class="news_window"></div>
					<div class="list">
		                <a id="1" href="#"><div class="news_1"></div></a>
						<a id="2" href="#"><div class="news_2"></div></a>
						<a id="3" href="#"><div class="news_3"></div></a>
						<a id="4" href="#"><div class="news_4"></div></a>
						<a id="5" href="#"><div class="news_5"></div></a>
					</div>
					<div class="navigation">
						<a id="1" href="#"><div class="left"></div></a>
						<a id="2" href="#"><div class="right"></div></a>
					</div>
					<div class="news_playlists">
						<a id="1" href="#"><div class="popup_btn"></div></a>
					</div>
					<!--<div class="news_selected"></div>-->
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
				</div>
				<div class="currencies">
					<div class="currencies_window"></div>
					<div class="list">
						<a id="1" href="#"><div class="currencies_1"></div></a>
						<a id="2" href="#"><div class="currencies_2"></div></a>
						<a id="3" href="#"><div class="currencies_3"></div></a>
						<a id="4" href="#"><div class="currencies_4"></div></a>
						<a id="5" href="#"><div class="currencies_5"></div></a>
					</div>
					<div class="navigation">
						<a id="1" href="#"><div class="left"></div></a>
						<a id="2" href="#"><div class="right"></div></a>
					</div>
					<div class="currencies_playlists">
						<a id="1" href="#"><div class="popup_btn"></div></a>
					</div>
					<!--<div class="currencies_selected"></div>-->
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
				</div>
			</div>
        </div>
        
		<!-- Editor_layer => Images -->
		<div class="images">
			<div class="contents">
				<div class="image_window"></div>
				<div class="image_preview">
					<a href="#">
						<div id="1" class="image_preview_1 cellTarget">
							<div class = "ableCell"><img src=""></img></div>
							<div class = "disableCell_1"></div>
							<div class = "disableCell_2"></div>
							<div class = "previewImage"></div>
							<div class = "cell_size"><div class="pix">100 x 100</div></div>
						</div>
					</a>
					<a href="#">
						<div id="2" class="image_preview_2 cellTarget">
							<div class = "ableCell"><img src=""></img></div>
							<div class = "disableCell_1"></div>
							<div class = "disableCell_2"></div>
							<div class = "previewImage"></div>
							<div class = "cell_size"><div class="pix">1000 x 100</div></div>
						</div>
					</a>
					<a href="#">
						<div id="3" class="image_preview_3 cellTarget">
							<div class = "ableCell"><img src=""></img></div>
							<div class = "disableCell_1"></div>
							<div class = "disableCell_2"></div>
							<div class = "previewImage"></div>
							<div class = "cell_size"><div class="pix">100 x 1000</div></div>
						</div>
					</a>
					<a href="#">
						<div id="4" class="image_preview_4 cellTarget">
							<div class = "ableCell"><img src=""></img></div>
							<div class = "disableCell_1"></div>
							<div class = "disableCell_2"></div>
							<div class = "previewImage"></div>
							<div class = "cell_size"><div class="pix">100 x 100</div></div>
						</div>
					</a>
					<a href="#">
						<div id="5" class="image_preview_5 cellTarget">
							<div class = "ableCell"><img src=""></img></div>
							<div class = "disableCell_1"></div>
							<div class = "disableCell_2"></div>
							<div class = "previewImage"></div>
							<div class = "cell_size"><div class="pix">100 x 100</div></div>
						</div>
					</a>
					
				</div>
				<div class="bottom_btn">
					<a id="1" href="#"><div class="apply"></div></a>
					<a id="2" href="#"><div class="cancel"></div></a>
				</div>

				<!-- Select An Image -->
				<div class="select_an_image">
					
					<div class="title"></div>
					<div class="preview">
						<div class = "ableCell"><img src=""></img></div>
						<div class = "disableCell_1"></div>
						<div class = "disableCell_2"></div>
						<div class = "previewImage"><img src=""></div>
					</div>
					<div class="list_item_container_outer cellImage scr-area">
						<div class="image_selected"></div>
						<div class="list_item_container cellImage scr-cont">
							<div class="title_myImages">
								<div class="noImage">No image. Please add your image.</div>
							</div>
						</div>
					</div>
					<div class="imageScroll cellImage scr-bar-area">
						<div class="navigator cellImage scr-bar"></div>
					</div>
					<div class="buttons">
						<a href="#"><div class="plus"></div></a>
						<a href="#"><div class="minus"></div></a>
						<a href="#"><div class="close"></div></a>
						<a href="#"><div class="fit_all"></div></a>
						<a href="#"><div class="fit_vertical"></div></a>
						<a href="#"><div class="fit_horizon"></div></a>
						<a href="#"><div class="left"></div></a>
						<a href="#"><div class="right"></div></a>
						<a href="#"><div class="top"></div></a>
						<a href="#"><div class="bottom"></div></a>
						<div class="slide_bar"></div>
						<a href="#"><div class="zoom_plus"></div></a>
						<a href="#"><div class="zoom_minus"></div></a>
						<a href="#"><div class="circle"></div></a>
						<a href="#"><div class="circle_value">100%</div></a>
					</div>
				</div>
			</div>
		</div>
    
		<!-- Editor_layer => Text -->
	    <div class="text">
			<div class="contents">
				<div class="text_window"></div>
				<div class="text_preview">
					<div class="text_preview_img"><span class="vertical-align"></span></div>
				</div>
				<div class="text_input">
					<textarea id="input_text_input" type="text" placeHolder="입력하세요" rel="text_name"></textarea>
				</div>
				<a id="1" href="#"><div class="text_font">굴림체</div></a>
				<a id="2" href="#"><div class="text_size">48</div></a>
				<a id="3" href="#"><div class="text_color"><div class="status">A</div></div></a>
				<a id="4" href="#"><div class="text_weight"><div class="status">A</div></div></a>
				<a id="5" href="#"><div class="text_back_color"><div class="status"></div></div></a>
				<a id="6" href="#"><div class="text_align_left"></div></a>
				<a id="7" href="#"><div class="text_align_center"></div></a>
				<a id="8" href="#"><div class="text_align_right"></div></a>
				<a id="9" href="#"><div class="text_align_top"></div></a>
				<a id="10" href="#"><div class="text_align_middle"></div></a>
				<a id="11" href="#"><div class="text_align_bottom"></div></a>
	            <div class="bottom_btn">
					<a id="1" href="#"><div class="apply"></div></a>
					<a id="2" href="#"><div class="cancel"></div></a>
				</div>
				<div class="text_font_list">
					<a id="1" href="#"><div class="list_1">굴림체</div></a>
					<a id="2" href="#"><div class="list_2">궁서체</div></a>
					<a id="3" href="#"><div class="list_3">돋움체</div></a>
					<a id="4" href="#"><div class="list_4">바탕체</div></a>
					<a id="5" href="#"><div class="list_5">휴먼엽서체</div></a>
				</div>
				<div class="text_size_list">
					<a id="1" href="#"><div class="list_1">48</div></a>
					<a id="2" href="#"><div class="list_2">64</div></a>
					<a id="3" href="#"><div class="list_3">72</div></a>
					<a id="4" href="#"><div class="list_4">100</div></a>
					<a id="5" href="#"><div class="list_5">120</div></a>
				</div>
				<div class="text_color_list">
					<div class="palette">
						<?php for ($i = 0 ; $i <= 67; $i++) echo "<a id=".$i." href='#'><div class='list_".$i."'></div></a>"; ?>
					</div>
				</div>
			</div>
        </div>
        
		<!-- Editor_layer => Cancel -->
		<div class="cancel_layer">
			<div class="contents">
				<div class="cancel_layer_window"></div>
				<div class="cancel_layer_the_project"></div>
				<div class="bottom_btn">
					<a id="1" href="#"><div class="apply"></div></a>
					<a id="2" href="#"><div class="cancel"></div></a>
				</div>
			</div>
        </div>

		<!-- Editor_layer => Save -->
		<div class="save">
			<div class="contents">
				<div class="save_window"></div>
				<div class="save_to_my_project"></div>
				<div class="project_name"></div>
				<div class="input_project_name"><input id="input_project_name_date" type="text" rel="project_name"></input></div>
				<div class="save_dimmed"></div>
				<div class="bottom_btn">
					<a id="1" href="#"><div class="apply"></div></a>
					<a id="2" href="#"><div class="cancel"></div></a>
				</div>
			</div>
        </div>
        
		<!-- Editor_layer => Publish -->
		<div class="publish">
			<div class="contents">
				<div class="publish_window"></div>
				<div class="publish_the_project"></div>
				<div class="publish_me"></div>
				<div class="input_project_name"><input id="input_project_name_date" type="text" rel="project_name" maxlength="20"></input></div>
					<input id="publish_01" type="radio" value="me" class="publish_radio_img" name="publish_list" checked=""></input>
					<label for="publish_01"></label>
					<div class="bottom_btn">
						<a id="1" href="#"><div class="apply"></div></a>
						<a id="2" href="#"><div class="cancel"></div></a>
					</div>
				</div>
			</div>
		</div>
    </div>

	<div id="publish_layer">
		<div class="title"></div>
		<div class="input_project_name"><input id="input_project_name_date" type="text" rel="project_name" maxlength="20"></input></div>
			<div class="bottom_btn">
				<a id="1" href="#"><div class="apply"></div></a>
				<a id="2" href="#"><div class="cancel"></div></a>
			</div>
		</div>
	</div>

	<div id="saveas_layer">
		<div class="title"></div>
		<div class="input_project_name"><input id="input_project_name_date" type="text" rel="project_name" maxlength="20"></input></div>
			<div class="bottom_btn">
				<a id="1" href="#"><div class="apply"></div></a>
				<a id="2" href="#"><div class="cancel"></div></a>
			</div>
		</div>
	</div>


	<div id="upload_background_image">
		<iframe id='frame' scrolling='no' frameborder='0' width='542' height='289'></iframe>
	</div>

	<div id="msgBox">
		<div class="text">contents</div>
		<a id="2" href="#"><div class="cancel"></div></a>
	</div>


	<div id="dimm_for_player" onclick='cancel_full_screen();'>
	</div>


</body>

<script>
	// BackSpace 키 Disable  ->> 이전 Phase로 이동은 main_common.js에서 구현
	$(document).keydown(function(e){
		if (e.target.nodeName != "INPUT" && e.target.nodeName != "TEXTAREA") {
			if (e.keyCode == 8) {
				return false;
			}
		}
    });
</script>
</html>

<?php
	echo("<script language='javascript'>php_update_user_email(\"$user_email\");</script>");
	echo("<script language='javascript'>php_set_platform(\"$platform\");</script>");
?>