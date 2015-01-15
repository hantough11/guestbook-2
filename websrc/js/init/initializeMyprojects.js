var maxMyproject = new Number;

var serverMyProject_number_of_publish = new Number;

var serverMyProject_divided = new Array();
var serverMyProject_background_kind = new Array();
var	serverMyProject_background_color = new Array();
var serverMyProject_background_image_url = new Array();
var serverMyProject_background_image_top = new Array();
var serverMyProject_background_image_left = new Array();
var serverMyProject_background_image_width = new Array();
var serverMyProject_background_image_height = new Array();
var serverMyProject_background_image_percentage = new Array();
var serverMyProject_project_name = new Array();

var serverMyProject_cell_kind = Create2DArray(26);
var	serverMyProject_cell_x = Create2DArray(26);
var	serverMyProject_cell_y = Create2DArray(26);
var	serverMyProject_cell_image_theFirstOrderFiveImages = Create2DArray(26);
var	serverMyProject_cell_image_selectedFiveImageNo = Create2DArray(26);

var serverMyProject_cell_image_url_1 =Create2DArray(26);
var	serverMyProject_cell_image_imageInCellPercentage_1 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellTop_1 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellLeft_1 =Create2DArray(26);
var	serverMyProject_cell_image_imageInCellWidth_1 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellHeight_1 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPercentage_1 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionX_1 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionY_1 = Create2DArray(26);

var serverMyProject_cell_image_url_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellPercentage_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellTop_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellLeft_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellWidth_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellHeight_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPercentage_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionX_2 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionY_2 = Create2DArray(26);

var serverMyProject_cell_image_url_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellPercentage_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellTop_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellLeft_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellWidth_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellHeight_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPercentage_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionX_3 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionY_3 = Create2DArray(26);

var serverMyProject_cell_image_url_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellPercentage_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellTop_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellLeft_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellWidth_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellHeight_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPercentage_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionX_4 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionY_4 = Create2DArray(26);

var serverMyProject_cell_image_url_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellPercentage_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellTop_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellLeft_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellWidth_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInCellHeight_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPercentage_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionX_5 = Create2DArray(26);
var	serverMyProject_cell_image_imageInEditPositionY_5 = Create2DArray(26);

var serverMyProject_cell_widget_image_url = Create2DArray(26);
var serverMyProject_cell_widget_vod_id = Create2DArray(26);
var serverMyProject_cell_widget_widget_kind = Create2DArray(26);
var serverMyProject_cell_widget_weather_id = Create2DArray(26);
var serverMyProject_cell_widget_weather_kind = Create2DArray(26);

var serverMyProject_cell_text_contents = Create2DArray(26);
var	serverMyProject_cell_text_font_size = Create2DArray(26);
var	serverMyProject_cell_text_font_color = Create2DArray(26);
var	serverMyProject_cell_text_font_family = Create2DArray(26);
var	serverMyProject_cell_text_font_align = Create2DArray(26);
var	serverMyProject_cell_text_font_back_color = Create2DArray(26);
var	serverMyProject_cell_text_font_weight = Create2DArray(26);
var	serverMyProject_cell_text_font_vertical = Create2DArray(26);

$(document).ready(init_initializeMyprojects);

function init_initializeMyprojects() {	
	// Myproject 불러?�기
	loadMyprojectInfo();
	
	
	// Myproject 개수가 ?�을 경우, 메시지 출력 �?방향???�거
	if(maxMyproject <=0 ){
		$("#body_myprojects .noContents").show();
		$("#body_myprojects .body_button").hide();
	}
	else {
		$("#body_myprojects .noContents").hide();
		$("#body_myprojects .body_button").show();
	}
	
	
	// Myproject List ?�성
	var makeMyprojectList = new MakeMyproject();
	makeMyprojectList.kind = "list";
	makeMyprojectList.wrapper = "#body_myprojects .body_contents";
	makeMyprojectList.cellWidth = 104;
	makeMyprojectList.cellHeight = 58.5;
	makeMyprojectList.build();	
	
	// Myproject Popup ?�성
	var makeMyprojectPopup = new MakeMyproject();
	makeMyprojectPopup.kind = "popup";
	makeMyprojectPopup.wrapper = "#body_myprojects .previewPopup_scene";
	makeMyprojectPopup.cellWidth = 160;
	makeMyprojectPopup.cellHeight = 90;
	makeMyprojectPopup.build();
	
	// Myproject Editor ?�성
	var makeMyprojectEditor = new MakeMyproject();
	makeMyprojectEditor.kind = "editor";
	makeMyprojectEditor.wrapper = "#body_myprojects .editMap_scene";
	makeMyprojectEditor.cellWidth = 224;
	makeMyprojectEditor.cellHeight = 126;
	makeMyprojectEditor.build();	
}


function loadMyprojectInfo() {
	orderTmp = parseInt(serverMyProject_number_of_publish);
	orderTmp++;
	for(var k=1; k<parseInt(orderTmp); k++) {
		myproject[k] = new Myproject();		
		myproject[k].divided = serverMyProject_divided[k];	
		myproject[k].background.kind = serverMyProject_background_kind[k];
		myproject[k].background.color = "#" + serverMyProject_background_color[k];		
		myproject[k].background.image.url = serverMyProject_background_image_url[k];
		myproject[k].background.image.top = serverMyProject_background_image_top[k];
		myproject[k].background.image.left = serverMyProject_background_image_left[k];
		myproject[k].background.image.width = serverMyProject_background_image_width[k];
		myproject[k].background.image.height = serverMyProject_background_image_height[k];
		myproject[k].background.image.percentage = serverMyProject_background_image_percentage[k];
		myproject[k].project_name = serverMyProject_project_name[k];

		for(var i=1; i<=25; i++) {
			myproject[k].cell[i].kind = serverMyProject_cell_kind[i][k];			
			if(myproject[k].cell[i].kind){
				myproject[k].cell[i].x = serverMyProject_cell_x[i][k];
				myproject[k].cell[i].y = serverMyProject_cell_y[i][k];			
				switch(myproject[k].cell[i].kind) {					
					case "image":					
						myproject[k].cell[i].image.theFirstOrderFiveImages = serverMyProject_cell_image_theFirstOrderFiveImages[i][k];
						myproject[k].cell[i].image.selectedFiveImageNo = serverMyProject_cell_image_selectedFiveImageNo[i][k];						
						
						myproject[k].cell[i].image.url[1] = serverMyProject_cell_image_url_1[i][k];			
						myproject[k].cell[i].image.imageInCellPercentage[1] = serverMyProject_cell_image_imageInCellPercentage_1[i][k];
						myproject[k].cell[i].image.imageInCellTop[1] = serverMyProject_cell_image_imageInCellTop_1[i][k];
						myproject[k].cell[i].image.imageInCellLeft[1] = serverMyProject_cell_image_imageInCellLeft_1[i][k];
						myproject[k].cell[i].image.imageInCellWidth[1] = serverMyProject_cell_image_imageInCellWidth_1[i][k];
						myproject[k].cell[i].image.imageInCellHeight[1] = serverMyProject_cell_image_imageInCellHeight_1[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[1] = serverMyProject_cell_image_imageInEditPercentage_1[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[1] = serverMyProject_cell_image_imageInEditPositionX_1[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[1] = serverMyProject_cell_image_imageInEditPositionY_1[i][k];
						
						myproject[k].cell[i].image.url[2] = serverMyProject_cell_image_url_2[i][k];							
						myproject[k].cell[i].image.imageInCellPercentage[2] = serverMyProject_cell_image_imageInCellPercentage_2[i][k];
						myproject[k].cell[i].image.imageInCellTop[2] = serverMyProject_cell_image_imageInCellTop_2[i][k];
						myproject[k].cell[i].image.imageInCellLeft[2] = serverMyProject_cell_image_imageInCellLeft_2[i][k];
						myproject[k].cell[i].image.imageInCellWidth[2] = serverMyProject_cell_image_imageInCellWidth_2[i][k];
						myproject[k].cell[i].image.imageInCellHeight[2] = serverMyProject_cell_image_imageInCellHeight_2[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[2] = serverMyProject_cell_image_imageInEditPercentage_2[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[2] = serverMyProject_cell_image_imageInEditPositionX_2[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[2] = serverMyProject_cell_image_imageInEditPositionY_2[i][k];
						
						myproject[k].cell[i].image.url[3] = serverMyProject_cell_image_url_3[i][k];							
						myproject[k].cell[i].image.imageInCellPercentage[3] = serverMyProject_cell_image_imageInCellPercentage_3[i][k];
						myproject[k].cell[i].image.imageInCellTop[3] = serverMyProject_cell_image_imageInCellTop_3[i][k];
						myproject[k].cell[i].image.imageInCellLeft[3] = serverMyProject_cell_image_imageInCellLeft_3[i][k];
						myproject[k].cell[i].image.imageInCellWidth[3] = serverMyProject_cell_image_imageInCellWidth_3[i][k];
						myproject[k].cell[i].image.imageInCellHeight[3] = serverMyProject_cell_image_imageInCellHeight_3[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[3] = serverMyProject_cell_image_imageInEditPercentage_3[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[3] = serverMyProject_cell_image_imageInEditPositionX_3[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[3] = serverMyProject_cell_image_imageInEditPositionY_3[i][k];
						
						myproject[k].cell[i].image.url[4] = serverMyProject_cell_image_url_4[i][k];							
						myproject[k].cell[i].image.imageInCellPercentage[4] = serverMyProject_cell_image_imageInCellPercentage_4[i][k];
						myproject[k].cell[i].image.imageInCellTop[4] = serverMyProject_cell_image_imageInCellTop_4[i][k];
						myproject[k].cell[i].image.imageInCellLeft[4] = serverMyProject_cell_image_imageInCellLeft_4[i][k];
						myproject[k].cell[i].image.imageInCellWidth[4] = serverMyProject_cell_image_imageInCellWidth_4[i][k];
						myproject[k].cell[i].image.imageInCellHeight[4] = serverMyProject_cell_image_imageInCellHeight_4[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[4] = serverMyProject_cell_image_imageInEditPercentage_4[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[4] = serverMyProject_cell_image_imageInEditPositionX_4[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[4] = serverMyProject_cell_image_imageInEditPositionY_4[i][k];
						
						myproject[k].cell[i].image.url[5] = serverMyProject_cell_image_url_5[i][k];							
						myproject[k].cell[i].image.imageInCellPercentage[5] = serverMyProject_cell_image_imageInCellPercentage_5[i][k];
						myproject[k].cell[i].image.imageInCellTop[5] = serverMyProject_cell_image_imageInCellTop_5[i][k];
						myproject[k].cell[i].image.imageInCellLeft[5] = serverMyProject_cell_image_imageInCellLeft_5[i][k];
						myproject[k].cell[i].image.imageInCellWidth[5] = serverMyProject_cell_image_imageInCellWidth_5[i][k];
						myproject[k].cell[i].image.imageInCellHeight[5] = serverMyProject_cell_image_imageInCellHeight_5[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[5] = serverMyProject_cell_image_imageInEditPercentage_5[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[5] = serverMyProject_cell_image_imageInEditPositionX_5[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[5] = serverMyProject_cell_image_imageInEditPositionY_5[i][k];
						break;
				    case "widgets":
				        myproject[k].cell[i].widget.image_url = serverMyProject_cell_widget_image_url[i][k];
				        myproject[k].cell[i].widget.vod_id = serverMyProject_cell_widget_vod_id[i][k];
				        myproject[k].cell[i].widget.widget_kind = serverMyProject_cell_widget_widget_kind[i][k];
				        myproject[k].cell[i].widget.weather_id = serverMyProject_cell_widget_weather_id[i][k];
				        myproject[k].cell[i].widget.weather_kind = serverMyProject_cell_widget_weather_kind[i][k];
				        myproject[k].cell[i].text.font_color = serverMyProject_cell_text_font_color[i][k];
				        myproject[k].cell[i].text.font_back_color = serverMyProject_cell_text_font_back_color[i][k];
				        myproject[k].cell[i].text.font_family = serverMyProject_cell_text_font_family[i][k];
						break;
					case "text":
						myproject[k].cell[i].text.contents = serverMyProject_cell_text_contents[i][k];
						myproject[k].cell[i].text.font_size = serverMyProject_cell_text_font_size[i][k];
						myproject[k].cell[i].text.font_color = serverMyProject_cell_text_font_color[i][k];
						myproject[k].cell[i].text.font_family = serverMyProject_cell_text_font_family[i][k];
						myproject[k].cell[i].text.font_align = serverMyProject_cell_text_font_align[i][k];
						myproject[k].cell[i].text.font_back_color = serverMyProject_cell_text_font_back_color[i][k];
						myproject[k].cell[i].text.font_weight = serverMyProject_cell_text_font_weight[i][k];
						myproject[k].cell[i].text.font_vertical = serverMyProject_cell_text_font_vertical[i][k];

						myproject[k].cell[i].image.theFirstOrderFiveImages = serverMyProject_cell_image_theFirstOrderFiveImages[i][k];
						myproject[k].cell[i].image.selectedFiveImageNo = serverMyProject_cell_image_selectedFiveImageNo[i][k];

						myproject[k].cell[i].image.url[1] = serverMyProject_cell_image_url_1[i][k];
						myproject[k].cell[i].image.imageInCellPercentage[1] = serverMyProject_cell_image_imageInCellPercentage_1[i][k];
						myproject[k].cell[i].image.imageInCellTop[1] = serverMyProject_cell_image_imageInCellTop_1[i][k];
						myproject[k].cell[i].image.imageInCellLeft[1] = serverMyProject_cell_image_imageInCellLeft_1[i][k];
						myproject[k].cell[i].image.imageInCellWidth[1] = serverMyProject_cell_image_imageInCellWidth_1[i][k];
						myproject[k].cell[i].image.imageInCellHeight[1] = serverMyProject_cell_image_imageInCellHeight_1[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[1] = serverMyProject_cell_image_imageInEditPercentage_1[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[1] = serverMyProject_cell_image_imageInEditPositionX_1[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[1] = serverMyProject_cell_image_imageInEditPositionY_1[i][k];

						myproject[k].cell[i].image.url[2] = serverMyProject_cell_image_url_2[i][k];
						myproject[k].cell[i].image.imageInCellPercentage[2] = serverMyProject_cell_image_imageInCellPercentage_2[i][k];
						myproject[k].cell[i].image.imageInCellTop[2] = serverMyProject_cell_image_imageInCellTop_2[i][k];
						myproject[k].cell[i].image.imageInCellLeft[2] = serverMyProject_cell_image_imageInCellLeft_2[i][k];
						myproject[k].cell[i].image.imageInCellWidth[2] = serverMyProject_cell_image_imageInCellWidth_2[i][k];
						myproject[k].cell[i].image.imageInCellHeight[2] = serverMyProject_cell_image_imageInCellHeight_2[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[2] = serverMyProject_cell_image_imageInEditPercentage_2[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[2] = serverMyProject_cell_image_imageInEditPositionX_2[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[2] = serverMyProject_cell_image_imageInEditPositionY_2[i][k];

						myproject[k].cell[i].image.url[3] = serverMyProject_cell_image_url_3[i][k];
						myproject[k].cell[i].image.imageInCellPercentage[3] = serverMyProject_cell_image_imageInCellPercentage_3[i][k];
						myproject[k].cell[i].image.imageInCellTop[3] = serverMyProject_cell_image_imageInCellTop_3[i][k];
						myproject[k].cell[i].image.imageInCellLeft[3] = serverMyProject_cell_image_imageInCellLeft_3[i][k];
						myproject[k].cell[i].image.imageInCellWidth[3] = serverMyProject_cell_image_imageInCellWidth_3[i][k];
						myproject[k].cell[i].image.imageInCellHeight[3] = serverMyProject_cell_image_imageInCellHeight_3[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[3] = serverMyProject_cell_image_imageInEditPercentage_3[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[3] = serverMyProject_cell_image_imageInEditPositionX_3[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[3] = serverMyProject_cell_image_imageInEditPositionY_3[i][k];

						myproject[k].cell[i].image.url[4] = serverMyProject_cell_image_url_4[i][k];
						myproject[k].cell[i].image.imageInCellPercentage[4] = serverMyProject_cell_image_imageInCellPercentage_4[i][k];
						myproject[k].cell[i].image.imageInCellTop[4] = serverMyProject_cell_image_imageInCellTop_4[i][k];
						myproject[k].cell[i].image.imageInCellLeft[4] = serverMyProject_cell_image_imageInCellLeft_4[i][k];
						myproject[k].cell[i].image.imageInCellWidth[4] = serverMyProject_cell_image_imageInCellWidth_4[i][k];
						myproject[k].cell[i].image.imageInCellHeight[4] = serverMyProject_cell_image_imageInCellHeight_4[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[4] = serverMyProject_cell_image_imageInEditPercentage_4[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[4] = serverMyProject_cell_image_imageInEditPositionX_4[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[4] = serverMyProject_cell_image_imageInEditPositionY_4[i][k];

						myproject[k].cell[i].image.url[5] = serverMyProject_cell_image_url_5[i][k];
						myproject[k].cell[i].image.imageInCellPercentage[5] = serverMyProject_cell_image_imageInCellPercentage_5[i][k];
						myproject[k].cell[i].image.imageInCellTop[5] = serverMyProject_cell_image_imageInCellTop_5[i][k];
						myproject[k].cell[i].image.imageInCellLeft[5] = serverMyProject_cell_image_imageInCellLeft_5[i][k];
						myproject[k].cell[i].image.imageInCellWidth[5] = serverMyProject_cell_image_imageInCellWidth_5[i][k];
						myproject[k].cell[i].image.imageInCellHeight[5] = serverMyProject_cell_image_imageInCellHeight_5[i][k];
						myproject[k].cell[i].image.imageInEditPercentage[5] = serverMyProject_cell_image_imageInEditPercentage_5[i][k];
						myproject[k].cell[i].image.imageInEditPositionX[5] = serverMyProject_cell_image_imageInEditPositionX_5[i][k];
						myproject[k].cell[i].image.imageInEditPositionY[5] = serverMyProject_cell_image_imageInEditPositionY_5[i][k];
						break;	
					default :
						break;
				}
			}
		}
	}	
	maxMyproject = orderTmp-1;	
}


function MakeMyproject() {
	var cellNo = new Number;
	var elementWidth = new Number;
	var elementHeight = new Number;
	var elementTop = new Number;
	var elementLeft = new Number;
	var tempId = 1;
	var cellHTMLString = new String;	
	
	
	this.build = function(){		
		var backgroundWidth = this.cellWidth * 5;
		var backgroundHeight = this.cellHeight * 5;
		
		// html ?�성
		for(var i=1; i<=maxMyproject; i++){
			tempId = i;
			updateVariation(this.kind);
			$(this.wrapper).prepend(cellHTMLString);
		}				
		
		// css ?�성
		for(var myprojectNo=1; myprojectNo<=maxMyproject; myprojectNo++){
			switch(this.kind) {
				case "list":					
					// size ?�의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"6px",
						left:"6px"						
					});
					// Background ?�의
					fillBackground(this.wrapper);
					break;
				case "popup":
					// size ?�의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"42px",
						left:"59px"						
					});
					// Background ?�의
					fillBackground(this.wrapper);
					break;
				case "editor":
					// size ?�의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top: "60px",
						left: "80px"
					});
					// Background ?�의
					fillBackground(this.wrapper);
					break;
				case "player":
					// size ?�의
					$(this.wrapper + "_" + myprojectNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"0px",
						left:"0px"						
					});
					// Background ?�의
					fillBackground(this.wrapper);
					break;					
			}		
			
			
			for(cellNo=1; cellNo<=25; cellNo++){
				if(myproject[myprojectNo].cell[cellNo].kind){
					switch(myproject[myprojectNo].cell[cellNo].kind) {						
						case "image":
							fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if (this.kind == "editor") {
							    fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							    setCover(this.wrapper);
							}
							break;
						case "widgets":
							fillWidgetCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if (this.kind == "editor") {
							    fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							    setCover(this.wrapper);
							}
							break;
						case "text":
							fillTextCellElement(this.cellWidth, this.cellHeight, this.wrapper);
							if (this.kind == "editor") {
							    fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
							    setCover(this.wrapper);
							}
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

		function setCover(wrapper) {
		    $(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .cover").css({
		        "position": "absolute",
		        "width": elementWidth + "px",
		        "height": elementHeight + "px",
		        "background-color": "blue",
		        "opacity": "0",
		        "z-index": "10"
		    });

		    $(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .cover").hover(
                function () {
                    $(this).css("opacity", "0.5");
                },
                function () {
                    $(this).css("opacity", "0");
                }
            );
		}
		
		function fillBackground(wrapper) {			
			if(myproject[myprojectNo].background.kind == "color"){
				$(wrapper + "_" + myprojectNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-color":myproject[myprojectNo].background.color
				});
			}
			else if(myproject[myprojectNo].background.kind == "image"){
				$(wrapper + "_" + myprojectNo + "_img .body_contents_background").css({
				    "position": "relative",
				    "width": backgroundWidth + "px",
				    "height": backgroundHeight + "px",
				    "background-image": "url(" + myproject[myprojectNo].background.image.url + ")",
				    "background-size": myproject[myprojectNo].background.image.percentage + "%",
				    'background-position-y': myproject[myprojectNo].background.image.top * 4,
				    'background-position-x': myproject[myprojectNo].background.image.left * 4,
				    "background-repeat": "no-repeat"
				});
			}
			else {
				$(wrapper + "_" + myprojectNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",					
				});
			}
		}		
		
		function fillImageCellElement(width, height, wrapper) {
			// 변???�정
			var backgroundSizeValue = new Number;
			var backgroundPositionXValue = new Number;
			var backgroundPositionYValue = new Number;
			
			// set css
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			switch(wrapper) {
				case "#body_myprojects .body_contents" :
					backgroundSizeValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionX[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);
					backgroundPositionYValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionY[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);				
					break;
				case "#body_myprojects .previewPopup_scene" :
					backgroundSizeValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionX[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);
					backgroundPositionYValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionY[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);				
					break;
				case "#body_myprojects .editMap_scene" :
					backgroundSizeValue = myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages];
					backgroundPositionXValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionX[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionYValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionY[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);				
					break;
				case "#body_myprojects .player_scene" :
					backgroundSizeValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]);
					backgroundPositionXValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionX[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (256 / 230);
					backgroundPositionYValue = (myproject[myprojectNo].cell[cellNo].image.imageInEditPositionY[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages]) * (256 / 230);				
					break;
			}			
				
			// set backboard
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).css({
			    "border": "1px solid #ddd",
			    "position": "absolute",
			    "width": elementWidth + "px",
			    "height": elementHeight + "px",
			    top: elementTop + "px",
			    left: elementLeft + "px"
			});
			
			// set css of 5 images
			for(var i=1; i<=5; i++){				
			    $(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .img_" + i).css({
			        "background-size":myproject[myprojectNo].cell[cellNo].image.imageInEditPercentage[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages] + "%",
			        "background-repeat":"no-repeat",
			        "position":"absolute",
			        "width":elementWidth + "px",
			        "height":elementHeight + "px",
			        top:0,
			        left:0	
				});					
			}
			
			// set only one image
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .img_1").css({						
				"background-image":"url(" + myproject[myprojectNo].cell[cellNo].image.url[myproject[myprojectNo].cell[cellNo].image.theFirstOrderFiveImages] + ")",					
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
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width ;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height ;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			// set backboard
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).css({
			    //"background-color":"rgba(0,0,0,0)",
			    "border": "1px solid #ddd",
				"background-size":"100% 100%",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});			
				
		    // set css an image
			if (wrapper == "#body_myproject .player_scene" && myproject[myprojectNo].cell[cellNo].widget.widget_kind == "weather") {

			}
			else {
			    $(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .img_1").css({
			        "background-image": "url(" + myproject[myprojectNo].cell[cellNo].widget.image_url + ")",
			        "background-size": "100% 100%",
			        "background-repeat": "no-repeat",
			        "position": "absolute",
			        "width": elementWidth + "px",
			        "height": elementHeight + "px",
			        top: 0,
			        left: 0
			    });
			}
		}
		
		
		function fillTextCellElement(width, height, wrapper) {
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).css({
			    "background-color": myproject[myprojectNo].cell[cellNo].text.font_back_color,
			    "border":"1px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"
			});	
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .vertical-align").css({
				"width":elementWidth + "px",
				"height":Number((width/256) * myproject[myprojectNo].cell[cellNo].text.font_size) + "px",
				"font-size":Number((width/256) * myproject[myprojectNo].cell[cellNo].text.font_size) + "px",
				"color":myproject[myprojectNo].cell[cellNo].text.font_color,
				"font-family":myproject[myprojectNo].cell[cellNo].text.font_family,
				"text-align":myproject[myprojectNo].cell[cellNo].text.font_align,				
				"font-weight":myproject[myprojectNo].cell[cellNo].text.font_weight
			});
			runTextVerticalAlign(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .vertical-align", myproject[myprojectNo].cell[cellNo].text.font_vertical);
			if((myproject[myprojectNo].cell[cellNo].text.contents) != "undefined")$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo + " .vertical-align-" + myproject[myprojectNo].cell[cellNo].text.font_vertical).text(myproject[myprojectNo].cell[cellNo].text.contents);
		}		
		
		function fillEmptyCellElement(width, height, wrapper) {
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;			
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).css({
				//"background-image":'',
				"background-size":"100% 100%",
				//"border":"2px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});				
		}		
		
		function fillCellElementHover(width, height, wrapper) {
			elementWidth = myproject[myprojectNo].cell[cellNo].x * width;
			elementHeight = myproject[myprojectNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
            
            /*
			$(wrapper + "_" + myprojectNo + "_img .cell_" + cellNo).hover(
				function(){
					$(this).css({						
						"border":"3px solid #00d7ff",
						//top:"-=4px",
						//left:"-=4px",
						"z-index":5
					});
				},
				function(){
					$(this).css({						
					    "border": "1px solid #ddd",
						//top:"+=4px",
						//left:"+=4px",
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
												"<span class='divided'>" + myproject[tempId].project_name + "</span>" +
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
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='2' href='#'><div class='cell_2'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='3' href='#'><div class='cell_3'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='4' href='#'><div class='cell_4'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='5' href='#'><div class='cell_5'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='6' href='#'><div class='cell_6'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='7' href='#'><div class='cell_7'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='8' href='#'><div class='cell_8'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='9' href='#'><div class='cell_9'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='10' href='#'><div class='cell_10'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
										
										"<a id='11' href='#'><div class='cell_11'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='12' href='#'><div class='cell_12'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='13' href='#'><div class='cell_13'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='14' href='#'><div class='cell_14'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='15' href='#'><div class='cell_15'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='16' href='#'><div class='cell_16'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='17' href='#'><div class='cell_17'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='18' href='#'><div class='cell_18'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='19' href='#'><div class='cell_19'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='20' href='#'><div class='cell_20'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +
										"<a id='21' href='#'><div class='cell_21'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='22' href='#'><div class='cell_22'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='23' href='#'><div class='cell_23'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +						
										"<a id='24' href='#'><div class='cell_24'>" +
                                            "<div class='cover'></div>" +
											"<div class='img_1'></div>" +
											"<div class='img_2'></div>" +
											"<div class='img_3'></div>" +
											"<div class='img_4'></div>" +
											"<div class='img_5'></div>" +
											"<div class='vertical-align'></div>" +
										"</div></a>" +					
										"<a id='25' href='#'><div class='cell_25'>" +
                                            "<div class='cover'></div>" +
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