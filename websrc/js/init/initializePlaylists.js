var maxPlaylist = new Number;

var serverPublishMe_number_of_publish = new Number;

var serverPublishMe_divided = new Array();
var serverPublishMe_background_kind = new Array();
var	serverPublishMe_background_color = new Array();
var serverPublishMe_background_image_url = new Array();
var serverPublishMe_background_image_top = new Array();
var serverPublishMe_background_image_left = new Array();
var serverPublishMe_background_image_width = new Array();
var serverPublishMe_background_image_height = new Array();
var serverPublishMe_background_image_percentage = new Array();
var serverPublishMe_project_name = new Array();

var serverPublishMe_cell_kind = Create2DArray(26);
var	serverPublishMe_cell_x = Create2DArray(26);
var	serverPublishMe_cell_y = Create2DArray(26);
var	serverPublishMe_cell_image_theFirstOrderFiveImages = Create2DArray(26);
var	serverPublishMe_cell_image_selectedFiveImageNo = Create2DArray(26);

var serverPublishMe_cell_image_url_1 =Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellPercentage_1 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellTop_1 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellLeft_1 =Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellWidth_1 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellHeight_1 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPercentage_1 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionX_1 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionY_1 = Create2DArray(26);

var serverPublishMe_cell_image_url_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellPercentage_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellTop_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellLeft_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellWidth_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellHeight_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPercentage_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionX_2 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionY_2 = Create2DArray(26);

var serverPublishMe_cell_image_url_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellPercentage_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellTop_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellLeft_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellWidth_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellHeight_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPercentage_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionX_3 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionY_3 = Create2DArray(26);

var serverPublishMe_cell_image_url_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellPercentage_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellTop_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellLeft_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellWidth_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellHeight_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPercentage_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionX_4 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionY_4 = Create2DArray(26);

var serverPublishMe_cell_image_url_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellPercentage_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellTop_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellLeft_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellWidth_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInCellHeight_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPercentage_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionX_5 = Create2DArray(26);
var	serverPublishMe_cell_image_imageInEditPositionY_5 = Create2DArray(26);

var serverPublishMe_cell_widget_image_url = Create2DArray(26);
var serverPublishMe_cell_widget_vod_id = Create2DArray(26);
var serverPublishMe_cell_widget_widget_kind = Create2DArray(26);
var serverPublishMe_cell_widget_weather_id = Create2DArray(26);
var serverPublishMe_cell_widget_weather_kind = Create2DArray(26);

var serverPublishMe_cell_text_contents = Create2DArray(26);
var	serverPublishMe_cell_text_font_size = Create2DArray(26);
var	serverPublishMe_cell_text_font_color = Create2DArray(26);
var	serverPublishMe_cell_text_font_family = Create2DArray(26);
var	serverPublishMe_cell_text_font_align = Create2DArray(26);
var	serverPublishMe_cell_text_font_back_color = Create2DArray(26);
var	serverPublishMe_cell_text_font_weight = Create2DArray(26);
var	serverPublishMe_cell_text_font_vertical = Create2DArray(26);
	

$(document).ready(init_initializePlaylists);

function Create2DArray(rows) {
  var arr = [];
  for (var i = 0; i < rows; i++) {
     arr[i] = [];
  }
  return arr;
}


function init_initializePlaylists() {
	loadPlaylistInfo();	
	
	// Playlist 개수가 없을 경우, 메시지 출력 및 방향키 제거
	if(maxPlaylist <=0 ){
		$("#body_playlists .noContents").show();
		$("#body_playlists .body_button").hide();
	}
	else {
		$("#body_playlists .noContents").hide();
		$("#body_playlists .body_button").show();
	}
	
	// Playlist List 생성
	var makePlaylistList = new MakePlaylist();
	makePlaylistList.kind = "list";
	makePlaylistList.wrapper = "#body_playlists .body_contents";
	makePlaylistList.cellWidth = 104;
	makePlaylistList.cellHeight = 58.5;
	makePlaylistList.build();	
	
	// Playlist Popup 생성
	var makePlaylistPopup = new MakePlaylist();
	makePlaylistPopup.kind = "popup";
	makePlaylistPopup.wrapper = "#body_playlists .previewPopup_scene";
	makePlaylistPopup.cellWidth = 160;
	makePlaylistPopup.cellHeight = 90;
	makePlaylistPopup.build();
	
	// Playlist Editor 생성
	var makePlaylistEditor = new MakePlaylist();
	makePlaylistEditor.kind = "editor";
	makePlaylistEditor.wrapper = "#body_playlists .editMap_scene";
	makePlaylistEditor.cellWidth = 224;
	makePlaylistEditor.cellHeight = 126;
	makePlaylistEditor.build();
	
	// Playlist Player 생성
	var makePlaylistPlayer = new MakePlaylist();
	makePlaylistPlayer.kind = "player";
	makePlaylistPlayer.wrapper = "#body_playlists .player_scene";
	makePlaylistPlayer.cellWidth = 256;
	makePlaylistPlayer.cellHeight = 144;
	makePlaylistPlayer.build();
}

function loadPlaylistInfo() {
	orderTmp = parseInt(serverPublishMe_number_of_publish);
	orderTmp++;
	for(var k=1; k<parseInt(orderTmp); k++) {
		playlist[k] = new Playlist();		
		playlist[k].divided = serverPublishMe_divided[k];	
		playlist[k].background.kind = serverPublishMe_background_kind[k];
		playlist[k].background.color = "#" + serverPublishMe_background_color[k];		
		playlist[k].background.image.url = serverPublishMe_background_image_url[k];
		playlist[k].background.image.top = serverPublishMe_background_image_top[k];
		playlist[k].background.image.left = serverPublishMe_background_image_left[k];
		playlist[k].background.image.width = serverPublishMe_background_image_width[k];
		playlist[k].background.image.height = serverPublishMe_background_image_height[k];
		playlist[k].background.image.percentage = serverPublishMe_background_image_percentage[k];
		playlist[k].project_name = serverPublishMe_project_name[k];

		for(var i=1; i<=25; i++) {
			playlist[k].cell[i].kind = serverPublishMe_cell_kind[i][k];			
			if(playlist[k].cell[i].kind){
				playlist[k].cell[i].x = serverPublishMe_cell_x[i][k];
				playlist[k].cell[i].y = serverPublishMe_cell_y[i][k];			
				switch(playlist[k].cell[i].kind) {					
					case "image":					
						playlist[k].cell[i].image.theFirstOrderFiveImages = serverPublishMe_cell_image_theFirstOrderFiveImages[i][k];
						playlist[k].cell[i].image.selectedFiveImageNo = serverPublishMe_cell_image_selectedFiveImageNo[i][k];						
						
						playlist[k].cell[i].image.url[1] = serverPublishMe_cell_image_url_1[i][k];				
						playlist[k].cell[i].image.imageInCellPercentage[1] = serverPublishMe_cell_image_imageInCellPercentage_1[i][k];
						playlist[k].cell[i].image.imageInCellTop[1] = serverPublishMe_cell_image_imageInCellTop_1[i][k];
						playlist[k].cell[i].image.imageInCellLeft[1] = serverPublishMe_cell_image_imageInCellLeft_1[i][k];
						playlist[k].cell[i].image.imageInCellWidth[1] = serverPublishMe_cell_image_imageInCellWidth_1[i][k];
						playlist[k].cell[i].image.imageInCellHeight[1] = serverPublishMe_cell_image_imageInCellHeight_1[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[1] = serverPublishMe_cell_image_imageInEditPercentage_1[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[1] = serverPublishMe_cell_image_imageInEditPositionX_1[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[1] = serverPublishMe_cell_image_imageInEditPositionY_1[i][k];
						
						playlist[k].cell[i].image.url[2] = serverPublishMe_cell_image_url_2[i][k];							
						playlist[k].cell[i].image.imageInCellPercentage[2] = serverPublishMe_cell_image_imageInCellPercentage_2[i][k];
						playlist[k].cell[i].image.imageInCellTop[2] = serverPublishMe_cell_image_imageInCellTop_2[i][k];
						playlist[k].cell[i].image.imageInCellLeft[2] = serverPublishMe_cell_image_imageInCellLeft_2[i][k];
						playlist[k].cell[i].image.imageInCellWidth[2] = serverPublishMe_cell_image_imageInCellWidth_2[i][k];
						playlist[k].cell[i].image.imageInCellHeight[2] = serverPublishMe_cell_image_imageInCellHeight_2[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[2] = serverPublishMe_cell_image_imageInEditPercentage_2[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[2] = serverPublishMe_cell_image_imageInEditPositionX_2[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[2] = serverPublishMe_cell_image_imageInEditPositionY_2[i][k];
						
						playlist[k].cell[i].image.url[3] = serverPublishMe_cell_image_url_3[i][k];							
						playlist[k].cell[i].image.imageInCellPercentage[3] = serverPublishMe_cell_image_imageInCellPercentage_3[i][k];
						playlist[k].cell[i].image.imageInCellTop[3] = serverPublishMe_cell_image_imageInCellTop_3[i][k];
						playlist[k].cell[i].image.imageInCellLeft[3] = serverPublishMe_cell_image_imageInCellLeft_3[i][k];
						playlist[k].cell[i].image.imageInCellWidth[3] = serverPublishMe_cell_image_imageInCellWidth_3[i][k];
						playlist[k].cell[i].image.imageInCellHeight[3] = serverPublishMe_cell_image_imageInCellHeight_3[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[3] = serverPublishMe_cell_image_imageInEditPercentage_3[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[3] = serverPublishMe_cell_image_imageInEditPositionX_3[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[3] = serverPublishMe_cell_image_imageInEditPositionY_3[i][k];
						
						playlist[k].cell[i].image.url[4] = serverPublishMe_cell_image_url_4[i][k];							
						playlist[k].cell[i].image.imageInCellPercentage[4] = serverPublishMe_cell_image_imageInCellPercentage_4[i][k];
						playlist[k].cell[i].image.imageInCellTop[4] = serverPublishMe_cell_image_imageInCellTop_4[i][k];
						playlist[k].cell[i].image.imageInCellLeft[4] = serverPublishMe_cell_image_imageInCellLeft_4[i][k];
						playlist[k].cell[i].image.imageInCellWidth[4] = serverPublishMe_cell_image_imageInCellWidth_4[i][k];
						playlist[k].cell[i].image.imageInCellHeight[4] = serverPublishMe_cell_image_imageInCellHeight_4[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[4] = serverPublishMe_cell_image_imageInEditPercentage_4[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[4] = serverPublishMe_cell_image_imageInEditPositionX_4[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[4] = serverPublishMe_cell_image_imageInEditPositionY_4[i][k];
						
						playlist[k].cell[i].image.url[5] = serverPublishMe_cell_image_url_5[i][k];							
						playlist[k].cell[i].image.imageInCellPercentage[5] = serverPublishMe_cell_image_imageInCellPercentage_5[i][k];
						playlist[k].cell[i].image.imageInCellTop[5] = serverPublishMe_cell_image_imageInCellTop_5[i][k];
						playlist[k].cell[i].image.imageInCellLeft[5] = serverPublishMe_cell_image_imageInCellLeft_5[i][k];
						playlist[k].cell[i].image.imageInCellWidth[5] = serverPublishMe_cell_image_imageInCellWidth_5[i][k];
						playlist[k].cell[i].image.imageInCellHeight[5] = serverPublishMe_cell_image_imageInCellHeight_5[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[5] = serverPublishMe_cell_image_imageInEditPercentage_5[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[5] = serverPublishMe_cell_image_imageInEditPositionX_5[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[5] = serverPublishMe_cell_image_imageInEditPositionY_5[i][k];
						break;
					case "widgets":
					    playlist[k].cell[i].widget.image_url = serverPublishMe_cell_widget_image_url[i][k];
					    playlist[k].cell[i].widget.vod_id = serverPublishMe_cell_widget_vod_id[i][k];
					    playlist[k].cell[i].widget.widget_kind = serverPublishMe_cell_widget_widget_kind[i][k];
					    playlist[k].cell[i].widget.weather_id = serverPublishMe_cell_widget_weather_id[i][k];
					    playlist[k].cell[i].widget.weather_kind = serverPublishMe_cell_widget_weather_kind[i][k];
					    playlist[k].cell[i].text.font_color = serverPublishMe_cell_text_font_color[i][k];
					    playlist[k].cell[i].text.font_back_color = serverPublishMe_cell_text_font_back_color[i][k];
					    playlist[k].cell[i].text.font_family = serverPublishMe_cell_text_font_family[i][k];
					    break;
					case "text":
						playlist[k].cell[i].text.contents = serverPublishMe_cell_text_contents[i][k];
						playlist[k].cell[i].text.font_size = serverPublishMe_cell_text_font_size[i][k];
						playlist[k].cell[i].text.font_color = serverPublishMe_cell_text_font_color[i][k];
						playlist[k].cell[i].text.font_family = serverPublishMe_cell_text_font_family[i][k];
						playlist[k].cell[i].text.font_align = serverPublishMe_cell_text_font_align[i][k];
						playlist[k].cell[i].text.font_back_color = serverPublishMe_cell_text_font_back_color[i][k];
						playlist[k].cell[i].text.font_weight = serverPublishMe_cell_text_font_weight[i][k];
						playlist[k].cell[i].text.font_vertical = serverPublishMe_cell_text_font_vertical[i][k];

						playlist[k].cell[i].image.theFirstOrderFiveImages = serverPublishMe_cell_image_theFirstOrderFiveImages[i][k];
						playlist[k].cell[i].image.selectedFiveImageNo = serverPublishMe_cell_image_selectedFiveImageNo[i][k];

						playlist[k].cell[i].image.url[1] = serverPublishMe_cell_image_url_1[i][k];
						playlist[k].cell[i].image.imageInCellPercentage[1] = serverPublishMe_cell_image_imageInCellPercentage_1[i][k];
						playlist[k].cell[i].image.imageInCellTop[1] = serverPublishMe_cell_image_imageInCellTop_1[i][k];
						playlist[k].cell[i].image.imageInCellLeft[1] = serverPublishMe_cell_image_imageInCellLeft_1[i][k];
						playlist[k].cell[i].image.imageInCellWidth[1] = serverPublishMe_cell_image_imageInCellWidth_1[i][k];
						playlist[k].cell[i].image.imageInCellHeight[1] = serverPublishMe_cell_image_imageInCellHeight_1[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[1] = serverPublishMe_cell_image_imageInEditPercentage_1[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[1] = serverPublishMe_cell_image_imageInEditPositionX_1[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[1] = serverPublishMe_cell_image_imageInEditPositionY_1[i][k];

						playlist[k].cell[i].image.url[2] = serverPublishMe_cell_image_url_2[i][k];
						playlist[k].cell[i].image.imageInCellPercentage[2] = serverPublishMe_cell_image_imageInCellPercentage_2[i][k];
						playlist[k].cell[i].image.imageInCellTop[2] = serverPublishMe_cell_image_imageInCellTop_2[i][k];
						playlist[k].cell[i].image.imageInCellLeft[2] = serverPublishMe_cell_image_imageInCellLeft_2[i][k];
						playlist[k].cell[i].image.imageInCellWidth[2] = serverPublishMe_cell_image_imageInCellWidth_2[i][k];
						playlist[k].cell[i].image.imageInCellHeight[2] = serverPublishMe_cell_image_imageInCellHeight_2[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[2] = serverPublishMe_cell_image_imageInEditPercentage_2[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[2] = serverPublishMe_cell_image_imageInEditPositionX_2[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[2] = serverPublishMe_cell_image_imageInEditPositionY_2[i][k];

						playlist[k].cell[i].image.url[3] = serverPublishMe_cell_image_url_3[i][k];
						playlist[k].cell[i].image.imageInCellPercentage[3] = serverPublishMe_cell_image_imageInCellPercentage_3[i][k];
						playlist[k].cell[i].image.imageInCellTop[3] = serverPublishMe_cell_image_imageInCellTop_3[i][k];
						playlist[k].cell[i].image.imageInCellLeft[3] = serverPublishMe_cell_image_imageInCellLeft_3[i][k];
						playlist[k].cell[i].image.imageInCellWidth[3] = serverPublishMe_cell_image_imageInCellWidth_3[i][k];
						playlist[k].cell[i].image.imageInCellHeight[3] = serverPublishMe_cell_image_imageInCellHeight_3[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[3] = serverPublishMe_cell_image_imageInEditPercentage_3[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[3] = serverPublishMe_cell_image_imageInEditPositionX_3[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[3] = serverPublishMe_cell_image_imageInEditPositionY_3[i][k];

						playlist[k].cell[i].image.url[4] = serverPublishMe_cell_image_url_4[i][k];
						playlist[k].cell[i].image.imageInCellPercentage[4] = serverPublishMe_cell_image_imageInCellPercentage_4[i][k];
						playlist[k].cell[i].image.imageInCellTop[4] = serverPublishMe_cell_image_imageInCellTop_4[i][k];
						playlist[k].cell[i].image.imageInCellLeft[4] = serverPublishMe_cell_image_imageInCellLeft_4[i][k];
						playlist[k].cell[i].image.imageInCellWidth[4] = serverPublishMe_cell_image_imageInCellWidth_4[i][k];
						playlist[k].cell[i].image.imageInCellHeight[4] = serverPublishMe_cell_image_imageInCellHeight_4[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[4] = serverPublishMe_cell_image_imageInEditPercentage_4[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[4] = serverPublishMe_cell_image_imageInEditPositionX_4[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[4] = serverPublishMe_cell_image_imageInEditPositionY_4[i][k];

						playlist[k].cell[i].image.url[5] = serverPublishMe_cell_image_url_5[i][k];
						playlist[k].cell[i].image.imageInCellPercentage[5] = serverPublishMe_cell_image_imageInCellPercentage_5[i][k];
						playlist[k].cell[i].image.imageInCellTop[5] = serverPublishMe_cell_image_imageInCellTop_5[i][k];
						playlist[k].cell[i].image.imageInCellLeft[5] = serverPublishMe_cell_image_imageInCellLeft_5[i][k];
						playlist[k].cell[i].image.imageInCellWidth[5] = serverPublishMe_cell_image_imageInCellWidth_5[i][k];
						playlist[k].cell[i].image.imageInCellHeight[5] = serverPublishMe_cell_image_imageInCellHeight_5[i][k];
						playlist[k].cell[i].image.imageInEditPercentage[5] = serverPublishMe_cell_image_imageInEditPercentage_5[i][k];
						playlist[k].cell[i].image.imageInEditPositionX[5] = serverPublishMe_cell_image_imageInEditPositionX_5[i][k];
						playlist[k].cell[i].image.imageInEditPositionY[5] = serverPublishMe_cell_image_imageInEditPositionY_5[i][k];
						break;	
					default :
						break;
				}
			}
		}
	}	
	maxPlaylist = orderTmp-1;	
}


function MakePlaylist() {	
	var cellNo = new Number;
	var elementWidth;
	var elementHeight;
	var elementTop;
	var elementLeft;
	var tempId = 1;
	var cellHTMLString = new String;
	
	
	this.build = function(){		
		var backgroundWidth = this.cellWidth * 5;
		var backgroundHeight = this.cellHeight * 5;
		
		
		// html 작성
		for(var i=1; i<=maxPlaylist; i++){
			tempId = i;
			updateVariation(this.kind);
			$(this.wrapper).prepend(cellHTMLString);
		}				
		
		// css 생성
		for(var playlistNo=1; playlistNo<=maxPlaylist; playlistNo++){
			switch(this.kind) {
				case "list":					
					// size 정의
					$(this.wrapper + "_" + playlistNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height": backgroundHeight + "px",
						top:"6px",
						left:"6px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
				case "popup":
					// size 정의
					$(this.wrapper + "_" + playlistNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"42px",
						left:"59px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
				case "editor":
					// size 정의
					$(this.wrapper + "_" + playlistNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"0px",
						left:"0px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
				case "player":
					// size 정의
					$(this.wrapper + "_" + playlistNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"0px",
						left:"0px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;					
			}		
			
			
			for(cellNo=1; cellNo<=25; cellNo++){
				if(playlist[playlistNo].cell[cellNo].kind){
					switch(playlist[playlistNo].cell[cellNo].kind) {						
						case "image":
							fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							break;
						case "widgets":
							fillWidgetCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							break;
						case "text":
							fillTextCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if (this.kind == "editor") fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							break;
						case "empty":
							fillEmptyCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if(this.kind == "editor")fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							break;						
						default :
							break;					
					}
				}
			}
		}
		
		function fillBackground(wrapper) {			
			if(playlist[playlistNo].background.kind == "color"){
				$(wrapper + "_" + playlistNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-color":playlist[playlistNo].background.color
				});
			}
			else if (playlist[playlistNo].background.kind == "image") {
			    $(wrapper + "_" + playlistNo + "_img .body_contents_background").css({
					"position":"relative",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-image":"url(" + playlist[playlistNo].background.image.url + ")",
					"background-size": playlist[playlistNo].background.image.percentage + "%",
					'background-position-y': playlist[playlistNo].background.image.top * 4,
					'background-position-x': playlist[playlistNo].background.image.left * 4,
                    "background-repeat": "no-repeat"
				});
			}
			else {
				$(wrapper + "_" + playlistNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",					
				});
			}
		}		
		
		function fillImageCellElement(width, height, wrapper) {
			// 변수 설정
			var backgroundSizeValue = new Number;
			var backgroundPositionXValue = new Number;
			var backgroundPositionYValue = new Number;
			
			// set css
			elementWidth = playlist[playlistNo].cell[cellNo].x * width;
			elementHeight = playlist[playlistNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;

			
			switch(wrapper) {
				case "#body_playlists .body_contents" :
					backgroundSizeValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPercentage[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionX[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);
					backgroundPositionYValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionY[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);				
					break;
				case "#body_playlists .previewPopup_scene" :
					backgroundSizeValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPercentage[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionX[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);
					backgroundPositionYValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionY[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);				
					break;
				case "#body_playlists .editMap_scene" :
					backgroundSizeValue = playlist[playlistNo].cell[cellNo].image.imageInEditPercentage[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages];
					backgroundPositionXValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionX[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionYValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionY[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]);				
					break;
				case "#body_playlists .player_scene" :
					backgroundSizeValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPercentage[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionX[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]) * (256 / 230);
					backgroundPositionYValue = (playlist[playlistNo].cell[cellNo].image.imageInEditPositionY[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]) * (256 / 230);				
					break;
			}			
				
		    // set backboard




			$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo).css({
				//"background-image":"url(" + playlist[playlistNo].cell[cellNo].image.url[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages] + ")",					
				//"background-size":playlist[playlistNo].cell[cellNo].image.imageInEditPercentage[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages] + "%",
				//"background-position-x":(playlist[playlistNo].cell[cellNo].image.imageInEditPosition[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages]) + "px",					
				
				//"border":"1px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});

			// set css of 5 images
			for(var i=1; i<=5; i++){				
				$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo + " .img_" + i).css({						
					"background-size":playlist[playlistNo].cell[cellNo].image.imageInEditPercentage[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages] + "%",
					"background-repeat":"no-repeat",
					"position":"absolute",
					"width":elementWidth + "px",
					"height":elementHeight + "px",
					top:0,
					left:0			
				});					
			}
			
			// set only one image
			$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo + " .img_1").css({						
				"background-image":"url(" + playlist[playlistNo].cell[cellNo].image.url[playlist[playlistNo].cell[cellNo].image.theFirstOrderFiveImages] + ")",					
				"background-size":backgroundSizeValue + "%",
				"background-position-x":backgroundPositionXValue + "px",
				"background-position-y":backgroundPositionYValue + "px",
				"background-repeat":"no-repeat",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:0,
				left:0			
			});
		}		
		
		
		function fillWidgetCellElement(width, height, wrapper) {
			// set css
			elementWidth = playlist[playlistNo].cell[cellNo].x * width ;
			elementHeight = playlist[playlistNo].cell[cellNo].y * height ;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			// set backboard
			$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo).css({
			    //"background-color":"rgba(0,0,0,0)",
			    //"border": "1px solid #ddd",
				"background-size":"100% 100%",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});

		    // set css an image
			if (wrapper == "#body_playlists .player_scene" && playlist[playlistNo].cell[cellNo].widget.widget_kind == "weather") {

			}
			else
			{
			    $(wrapper + "_" + playlistNo + "_img .cell_" + cellNo + " .img_1").css({
			        "background-image": "url(" + playlist[playlistNo].cell[cellNo].widget.image_url + ")",
			        "background-size": "100% 100%",
			        "background-repeat": "no-repeat",
			        "position": "absolute",
			        "width": elementWidth + "px",
			        "height": elementHeight + "px",
			        top: 0,
			        left: 0
			    });
			}
			
            
			var htmlString;
			//console.log(playlist[playlistNo].cell[cellNo].widget.widget_kind);
			if (playlist[playlistNo].cell[cellNo].widget.widget_kind == "tv" || playlist[playlistNo].cell[cellNo].widget.widget_kind == "video")
			    htmlString = "<div class='yt_" + playlistNo + "'><div id='ytplayer_" + playlistNo + "' style='width:100%;height:100%;'></div></div>";
			else if (playlist[playlistNo].cell[cellNo].widget.widget_kind == "weather")
			    htmlString = "<div class='weather_" + playlistNo + "'><div class='weather_data'></div></div>";

			$("#body_playlists .player_scene_" + playlistNo + "_img .cell_" + cellNo + " .img_1").html(htmlString);
		}
		
		
		function fillTextCellElement(width, height, wrapper) {
			elementWidth = playlist[playlistNo].cell[cellNo].x * width;
			elementHeight = playlist[playlistNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo).css({
			    "background-color": playlist[playlistNo].cell[cellNo].text.font_back_color,
			    //"border": "1px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"
			});	
			$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo + " .vertical-align").css({
				"width":elementWidth + "px",
				"height":Number((width/256) * playlist[playlistNo].cell[cellNo].text.font_size) + "px",
				"font-size":Number((width/256) * playlist[playlistNo].cell[cellNo].text.font_size) + "px",
				"color":playlist[playlistNo].cell[cellNo].text.font_color,
				"font-family":playlist[playlistNo].cell[cellNo].text.font_family,
				"text-align":playlist[playlistNo].cell[cellNo].text.font_align,				
				"font-weight":playlist[playlistNo].cell[cellNo].text.font_weight
			});
			runTextVerticalAlign(wrapper + "_" + playlistNo + "_img .cell_" + cellNo + " .vertical-align", playlist[playlistNo].cell[cellNo].text.font_vertical);
			if((playlist[playlistNo].cell[cellNo].text.contents) != "undefined")$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo + " .vertical-align-" + playlist[playlistNo].cell[cellNo].text.font_vertical).text(playlist[playlistNo].cell[cellNo].text.contents);
		}		
		
		function fillEmptyCellElement(width, height, wrapper) {
			elementWidth = playlist[playlistNo].cell[cellNo].x * width;
			elementHeight = playlist[playlistNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;			
			$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo).css({
				//"background-image":'',
				"background-size":"100% 100%",
				//"border":"1px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});				
		}		
		
		function fillCellElementHover(width, height, wrapper) {
			elementWidth = playlist[playlistNo].cell[cellNo].x * width;
			elementHeight = playlist[playlistNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
            /*
			$(wrapper + "_" + playlistNo + "_img .cell_" + cellNo).hover(
				function(){
					$(this).css({						
						"border":"4px solid #00d7ff",
						top:"-=4px",
						left:"-=4px",
						"z-index":5
					});
				},
				function(){
					$(this).css({						
						"border":"none",
						top:"+=4px",
						left:"+=4px",
						"z-index":0						
					});
				}
			);
            */
		}		
		
		function updateVariation(kind) {
			switch(kind) {
				case "list" :
					cellHTMLString =  "<a id='" + tempId + "' class='slideList' href='#'>" +
											"<div class='body_contents_sub list_" + tempId + "'>" +												
												"<div class='body_contents_" + tempId + "_img'>" +
													"<div class='body_contents_background'>" +
													"</div>" +
													"<div class='cell_1'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_2'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_3'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_4'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_5'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_6'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_7'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_8'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_9'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_10'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_11'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_12'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +										
													"<div class='cell_13'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_14'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_15'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_16'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_17'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_18'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_19'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_20'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +										
													"<div class='cell_21'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_22'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +										
													"<div class='cell_23'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_24'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +	
													"<div class='cell_25'>" +
														"<div class='img_1'></div>" +
														"<div class='img_2'></div>" +
														"<div class='img_3'></div>" +
														"<div class='img_4'></div>" +
														"<div class='img_5'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +		
												"</div>" +
												"<span class='divided'>" + playlist[tempId].project_name + "</span>" + 
												//"<span class='body_contents_1_text'><img src='../websrc/img/main/lb_main_featured_06.png'></span>" +
												//"<span class='body_contents_1_widget_1'><img src='../websrc/img/main/lb_main_featured_08.png'></span>" +
												//"<span class='body_contents_1_widget_2'><img src='../websrc/img/main/lb_main_featured_11.png'></span>" +
												//"<span class='body_contents_1_widget_3'><img src='../websrc/img/main/lb_main_featured_10.png'></span>" +
												//"<span class='body_contents_1_widget_4'><img src='../websrc/img/main/lb_main_featured_09.png'></span>" +
											"</div>" +
										"</a>";
					break;
				case 'popup' :
					cellHTMLString = "<div class='previewPopup_scene_" + tempId + "_img popupList'>" +
										"<div class='body_contents_background'>" +
										"</div>" +
										"<div class='cell_1'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_2'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_3'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_4'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_5'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_6'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_7'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_8'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_9'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_10'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_11'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_12'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_13'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_14'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_15'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_16'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_17'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_18'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_19'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_20'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_21'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_22'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_23'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_24'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_25'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
									"</div>";
					break;
				case 'editor' :
					cellHTMLString = "<div class='editMap_scene_" + tempId + "_img editList'>" +
										"<div class='body_contents_background'>" +
										"</div>" +
										"<a id='1' href='#'><div class='cell_1'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='2' href='#'><div class='cell_2'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='3' href='#'><div class='cell_3'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='4' href='#'><div class='cell_4'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='5' href='#'><div class='cell_5'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='6' href='#'><div class='cell_6'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='7' href='#'><div class='cell_7'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='8' href='#'><div class='cell_8'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='9' href='#'><div class='cell_9'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='10' href='#'><div class='cell_10'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
										
										"<a id='11' href='#'><div class='cell_11'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='12' href='#'><div class='cell_12'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='13' href='#'><div class='cell_13'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='14' href='#'><div class='cell_14'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='15' href='#'><div class='cell_15'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='16' href='#'><div class='cell_16'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='17' href='#'><div class='cell_17'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='18' href='#'><div class='cell_18'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='19' href='#'><div class='cell_19'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='20' href='#'><div class='cell_20'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
										"<a id='21' href='#'><div class='cell_21'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='22' href='#'><div class='cell_22'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='23' href='#'><div class='cell_23'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='24' href='#'><div class='cell_24'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='25' href='#'><div class='cell_25'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
									"</div>";
					break;
				case 'player' :
					cellHTMLString = "<div class='player_scene_" + tempId + "_img'>" +
										"<div class='body_contents_background'>" +
										"</div>" +
										"<div class='cell_1'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_2'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_3'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_4'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_5'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_6'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_7'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_8'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_9'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_10'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_11'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
										"<div class='cell_12'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_13'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_14'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_15'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_16'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_17'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_18'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_19'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_20'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_21'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_22'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +										
										"<div class='cell_23'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_24'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +	
										"<div class='cell_25'>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div>" +
									"</div>";
					break;
				default:
					break;
			}
		}
	};
}