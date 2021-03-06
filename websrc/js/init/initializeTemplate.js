var maxTemplate = new Number;
var makeTemplateList = new MakeTemplate();
var makeTemplatePopup = new MakeTemplate();
var makeTemplateEditor = new MakeTemplate();

$(document).ready(function(){
	set_template();
	init_initializeTemplate();
});

function init_initializeTemplate() {
	// Template 불러오기
	loadTemplateInfo();
	
	// Template List 생성
	makeTemplateList.kind = "list";
	makeTemplateList.wrapper = "#body_theme .body_contents";
	makeTemplateList.cellWidth = 104;
	makeTemplateList.cellHeight = 59;
	makeTemplateList.build(0);
	
	// Template Popup 생성
	makeTemplatePopup.kind = "popup";
	makeTemplatePopup.wrapper = "#body_theme .previewPopup_scene";
	makeTemplatePopup.cellWidth = 160;
	makeTemplatePopup.cellHeight = 90;
	makeTemplatePopup.build(0);
	
	// Template Editor 생성
	makeTemplateEditor.kind = "editor";
	makeTemplateEditor.wrapper = "#body_theme .editMap_scene";
	makeTemplateEditor.cellWidth = 224;
	makeTemplateEditor.cellHeight = 126;
	makeTemplateEditor.build(0);
}

function reset_initializeTemplate(index) {
    loadTemplateInfo();
    makeTemplateList.build(index);
    makeTemplatePopup.build(index);
    makeTemplateEditor.build(index);
}

function loadTemplateInfo() {
	var i=1;
	while(template[i] != undefined) {
		i++;
	}
    maxTemplate = i - 1;
}


function MakeTemplate() {
	var cellNo = new Number;
	var elementWidth = new Number;
	var elementHeight = new Number;
	var elementTop = new Number;
	var elementLeft = new Number;
	var tempId = 1;
	var cellHTMLString = new String;	
	
	this.build = function( index ){		
		var backgroundWidth = this.cellWidth * 5;
		var backgroundHeight = this.cellHeight * 5;
		var startNo, untilNo = new Number;

	    // html 작성
		if (index == 0)
		{
		    for (var i = maxTemplate; i > 0; i--) {
		        tempId = i;
		        updateVariation(this.kind);
		        $(this.wrapper).prepend(cellHTMLString);
		    }
		    startNo = 1;
		    untilNo = maxTemplate+1;
		}
		else
		{
		    startNo = index;
		    untilNo = parseInt(index) + 1;
		}

	    // css 생성
		for (var tempNo = startNo; tempNo < untilNo; tempNo++) {
		    switch (this.kind) {
				case "list":					
					// size 정의
					$(this.wrapper + "_" + tempNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"6px",
						left:"6px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
				case "popup":
					// size 정의
					$(this.wrapper + "_" + tempNo + "_img").css({
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
					$(this.wrapper + "_" + tempNo + "_img").css({
						"position":"absolute",
						"width":backgroundWidth + "px",
						"height":backgroundHeight +"px",
						top:"60px",
						left:"80px"						
					});
					// Background 정의
					fillBackground(this.wrapper);
					break;
			}
						
			
			for(cellNo=1; cellNo<=25; cellNo++){
				if(template[tempNo].cell[cellNo].kind){
					switch(template[tempNo].cell[cellNo].kind) {						
					    case "widgets":
					        fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
					        if (this.kind == "editor") {
					            fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
					            setCover(this.wrapper);
					            if (index == 0) $(this.wrapper + "_" + tempNo + "_img .cell_" + cellNo).prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementHeight / 2) - 7) + "px; width:" + elementWidth + "px; text-align:center; z-index:10;'>" + template[tempNo].cell[cellNo].title + "</span>");
                            }
					        else
					        {
					            if (index == 0) $(this.wrapper + "_" + tempNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + elementLeft + "px; width:" + elementWidth + "px; text-align:center; z-index:10;'>" + template[tempNo].cell[cellNo].title + "</span>");
					        }
					        break;
					    case "image":
					        fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
					        if (this.kind == "editor") {
					            fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
					            setCover(this.wrapper);
					            if (index == 0) $(this.wrapper + "_" + tempNo + "_img .cell_" + cellNo).prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementHeight / 2) - 7) + "px; width:" + elementWidth + "px; text-align:center; z-index:10;'>" + template[tempNo].cell[cellNo].title + "</span>");
                            }
					        else
					        {
					            if (index == 0) $(this.wrapper + "_" + tempNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + elementLeft + "px; width:" + elementWidth + "px; text-align:center; z-index:10;'>" + template[tempNo].cell[cellNo].title + "</span>");
					        }
					        break;
					    case "text":
					        fillTextCellElement(this.cellWidth, this.cellHeight, this.wrapper);
					        fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
					        if (this.kind == "editor") {
					            fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
					            setCover(this.wrapper);
					            if (index == 0) $(this.wrapper + "_" + tempNo + "_img .cell_" + cellNo).prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementHeight / 2) - 7) + "px; width:" + elementWidth + "px; text-align:center; z-index:10;'>" + template[tempNo].cell[cellNo].title + "</span>");
                            }
					        else
					        {
					            if (index == 0) $(this.wrapper + "_" + tempNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + elementLeft + "px; width:" + elementWidth + "px; text-align:center; z-index:10;'>" + template[tempNo].cell[cellNo].title + "</span>");
					        }
					        break;
					    case "empty":
					        fillImageCellElement(this.cellWidth, this.cellHeight, this.wrapper);
					        if (this.kind == "editor") fillCellElementHover(this.cellWidth, this.cellHeight, this.wrapper);
					        $(this.wrapper + "_" + tempNo + "_img").prepend("<span style='font-family:arial;color:#ddd; font-size:14px; position:absolute; top:" + ((elementTop + elementTop + elementHeight) / 2 - 7) + "px; left:" + elementLeft + "px; width:" + elementWidth + "px; text-align:center; z-index:10;'>" + template[tempNo].cell[cellNo].title + "</span>");
					        break;
					    default:
							break;					
					}
				}
			}
		}

		function setCover(wrapper) {
		    $(wrapper + "_" + tempNo + "_img .cell_" + cellNo + " .cover").css({
		        "position": "absolute",
		        "width": elementWidth + "px",
		        "height": elementHeight + "px",
		        "background-color": "blue",
		        "opacity": "0",
		        "z-index": "10"
		    });

		    $(wrapper + "_" + tempNo + "_img .cell_" + cellNo + " .cover").hover(
                function () {
                    $(this).css("opacity", "0.5");
                },
                function () {
                    $(this).css("opacity", "0");
                }
            );
		}
		
		function fillBackground(wrapper) {			
			if(template[tempNo].background.kind == "color"){
				$(wrapper + "_" + tempNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-color":template[tempNo].background.color
				});
			}
			else if(template[tempNo].background.kind == "image"){
				$(wrapper + "_" + tempNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-image":"url(" + template[tempNo].background.image.url + ")",
					"background-size":"100% 100%"
				});

				console.log("111");
            }
			else {
				$(wrapper + "_" + tempNo + "_img .body_contents_background").css({
					"display":"block",
					"position":"absolute",
					"width":backgroundWidth + "px",
					"height":backgroundHeight +"px",
					"background-color": "#555",
				    "background-image" : "none"
				});
			}
		}
		
        /*
		function fillCellElement(width, height, wrapper) {
			elementWidth = template[tempNo].cell[cellNo].x * width ;
			elementHeight = template[tempNo].cell[cellNo].y * height ;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			$(wrapper + "_" + tempNo + "_img .cell_" + cellNo).css({
				"background-size":"100% 100%",
				"border":"1px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});				
		}
        */
			
		
		function fillImageCellElement(width, height, wrapper) {
		    // 변수 설정
		    var backgroundSizeValue = new Number;
		    var backgroundPositionXValue = new Number;
		    var backgroundPositionYValue = new Number;

		    elementWidth = template[tempNo].cell[cellNo].x * width;
		    elementHeight = template[tempNo].cell[cellNo].y * height;
		    elementTop = parseInt((cellNo - 1) / 5) * height;
		    elementLeft = ((cellNo - 1) % 5) * width;

		    switch (wrapper) {
		        case "#body_theme .body_contents":
		            backgroundSizeValue = (template[tempNo].cell[cellNo].image.imageInEditPercentage[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]);
		            backgroundPositionXValue = (template[tempNo].cell[cellNo].image.imageInEditPositionX[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);
		            backgroundPositionYValue = (template[tempNo].cell[cellNo].image.imageInEditPositionY[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]) * (104 / 230);
		            break;
		        case "#body_theme .previewPopup_scene":
		            backgroundSizeValue = (template[tempNo].cell[cellNo].image.imageInEditPercentage[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]);
		            backgroundPositionXValue = (template[tempNo].cell[cellNo].image.imageInEditPositionX[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);
		            backgroundPositionYValue = (template[tempNo].cell[cellNo].image.imageInEditPositionY[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]) * (160 / 230);
		            break;
		        case "#body_theme .editMap_scene":
		            backgroundSizeValue = template[tempNo].cell[cellNo].image.imageInEditPercentage[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages];
		            backgroundPositionXValue = (template[tempNo].cell[cellNo].image.imageInEditPositionX[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]);
		            backgroundPositionYValue = (template[tempNo].cell[cellNo].image.imageInEditPositionY[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages]);
		            break;
		    }
		    // set backboard
		    $(wrapper + "_" + tempNo + "_img .cell_" + cellNo).css({
		        "border": "1px solid #ddd",
		        "position": "absolute",
		        "width": elementWidth + "px",
		        "height": elementHeight + "px",
		        top: elementTop + "px",
		        left: elementLeft + "px"
		    });

		    // set css of 5 images
		    for (var i = 1; i <= 5; i++) {
		        $(wrapper + "_" + tempNo + "_img .cell_" + cellNo + " .img_" + i).css({
		            "background-repeat": "no-repeat",
		            "position": "absolute",
		            "width": elementWidth + "px",
		            "height": elementHeight + "px",
		            top: 0,
		            left: 0
		        });
		    }

		    // set only one image
		    $(wrapper + "_" + tempNo + "_img .cell_" + cellNo + " .img_1").css({
		        "background-image": "url(" + template[tempNo].cell[cellNo].image.url[template[tempNo].cell[cellNo].image.theFirstOrderFiveImages] + ")",
		        "background-size": backgroundSizeValue + "%",
		        "background-position-x": backgroundPositionXValue + "px",
		        "background-position-y": backgroundPositionYValue + "px",
		        "background-repeat": "no-repeat",
		        "position": "absolute",
		        "width": elementWidth + "px",
		        "height": elementHeight + "px",
		        top: 0,
		        left: 0
		    });
		}		
		
		
		function fillWidgetCellElement(width, height, wrapper) {	
			// set css
			elementWidth = template[tempNo].cell[cellNo].x * width ;
			elementHeight = template[tempNo].cell[cellNo].y * height ;
			elementTop = parseInt((cellNo - 1) / 5) * height;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			// set backboard
			$(wrapper + "_" + tempNo + "_img .cell_" + cellNo).css({
				"background-size":"100% 100%",
				"border":"1px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"						
			});			
				
			// set css an image
			$(wrapper + "_" + tempNo + "_img .cell_" + cellNo + " .img_1").css({
				"background-image":"url(" + template[tempNo].cell[cellNo].widget.url + ")",
				"background-size":"100% 100%",
				"background-repeat":"no-repeat",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:0,
				left:0			
			});
		}		
		
		
		function fillTextCellElement(width, height, wrapper) {
			elementWidth = template[tempNo].cell[cellNo].x * width ;
			elementHeight = template[tempNo].cell[cellNo].y * height ;
			elementTop = parseInt((cellNo - 1) / 5) * height ;
			elementLeft = ((cellNo - 1) % 5) * width;
			
			$(wrapper + "_" + tempNo + "_img .cell_" + cellNo + " .vertical-align-" + template[tempNo].cell[cellNo].text.font_vertical).text(template[tempNo].cell[cellNo].text.contents);			
			$(wrapper + "_" + tempNo + "_img .cell_" + cellNo).css({
				"background-color":template[tempNo].cell[cellNo].text.font_back_color,
				"border":"1px solid #ddd",
				"position":"absolute",
				"width":elementWidth + "px",
				"height":elementHeight + "px",
				top:elementTop + "px",
				left:elementLeft + "px"
			});	
			$(wrapper + "_" + tempNo + "_img .cell_" + cellNo + " .vertical-align").css({
				"width":elementWidth + "px",
				"height":Number((width/256) * template[tempNo].cell[cellNo].text.font_size) + "px",
				"font-size":Number((width/256) * template[tempNo].cell[cellNo].text.font_size) + "px",
				"color":template[tempNo].cell[cellNo].text.font_color,
				"font-family":template[tempNo].cell[cellNo].text.font_family,
				"text-align":template[tempNo].cell[cellNo].text.font_align,				
				"font-weight":template[tempNo].cell[cellNo].text.font_weight
			});		
		}
		
		function fillCellElementHover(width, height, wrapper) {

		    if (platform == "device") return;
		    
		    elementWidth = template[tempNo].cell[cellNo].x * width;
			elementHeight = template[tempNo].cell[cellNo].y * height;
			elementTop = parseInt((cellNo - 1) / 5) * height ;
			elementLeft = ((cellNo - 1) % 5) * width;
		    
            /*
			$(wrapper + "_" + tempNo + "_img .cell_" + cellNo).hover(
				function(){
					$(this).css({						
						"border":"3px solid #00d7ff",
						//top:"-=2px",
						//left:"-=2px",
						"z-index":5
					});
				},
				function(){
					$(this).css({						
						"border":"1px solid #ddd",
						//top:"+=2px",
						//left:"+=2px",
						"z-index":0						
					});
				}
			);
            */
		}

		function updateVariation(kind) {
			switch(kind) {
			    case "list":
			        cellHTMLString = "<a id='" + tempId + "' class='slideList' href='#'>" +
											"<div class='body_contents_sub list_" + tempId + "'>" +
												"<div class='body_contents_" + tempId + "_img'>" +
													"<div class='body_contents_background'>" +
													"</div>" +
													"<div class='cell_1'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_2'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_3'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_4'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_5'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_6'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_7'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_8'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_9'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_10'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_11'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_12'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_13'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_14'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_15'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_16'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_17'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_18'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_19'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_20'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_21'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_22'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_23'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_24'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
													"<div class='cell_25'>" +
														"<div class='img_1'></div>" +
														"<div class='vertical-align'></div>" +
													"</div>" +
												"</div>" +
												"<span class='divided'>Template Sample " + tempId + "</span>" +
												//"<span class='body_contents_1_text'><img src='../websrc/img/main/lb_main_featured_06.png'></span>" +
												//"<span class='body_contents_1_widget_1'><img src='../websrc/img/main/lb_main_featured_08.png'></span>" +
												//"<span class='body_contents_1_widget_2'><img src='../websrc/img/main/lb_main_featured_11.png'></span>" +
												//"<span class='body_contents_1_widget_3'><img src='../websrc/img/main/lb_main_featured_10.png'></span>" +
												//"<span class='body_contents_1_widget_4'><img src='../websrc/img/main/lb_main_featured_09.png'></span>" +
											"</div>" +
										"</a>";
			        break;
				case 'popup' :
					cellHTMLString = "<div class='previewPopup_scene_" + tempId + "_img'>" +
							"<div class='body_contents_background'>" +
							"</div>" +
							"<div class='cell_1'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_2'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_3'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_4'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_5'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_6'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_7'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_8'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_9'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_10'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_11'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_12'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_13'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_14'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_15'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_16'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_17'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_18'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_19'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_20'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_21'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_22'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_23'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_24'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +
							"<div class='cell_25'>" +
								"<div class='img_1'></div>" +
								"<div class='vertical-align'></div>" + 
							"</div>" +	
						"</div>";
					break;
				case 'editor' :
					cellHTMLString = "<div class='editMap_scene_" + tempId + "_img'>" +
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
				default:
					break;
			}
		}
	};
}
