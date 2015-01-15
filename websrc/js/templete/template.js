// Template Class 정의
function Template() {
	this.background = new Object();
	this.background.kind = new String;
	this.background.color = new String;
	this.background.image = new Object();
	this.background.image.url = new String;
	this.background.top = new Number();
	this.background.left = new Number();
	this.background.width = new Number();
	this.background.height = new Number();
	this.background.percentage = new Number();

	
	this.cell = new Array();
	for(var i=1; i<=25; i++){
		this.cell[i] = new Object();
		this.cell[i].kind = new String;
		this.cell[i].title = new String;
		this.cell[i].x = new Number;
		this.cell[i].y = new Number;
		
		this.cell[i].image = new Object();
		this.cell[i].image.theFirstOrderFiveImages = 1;
		this.cell[i].image.selectedFiveImageNo = 0;
		
		this.cell[i].image.url = new Array();
		this.cell[i].image.url[1] = new String;
		this.cell[i].image.url[2] = new String;
		this.cell[i].image.url[3] = new String;
		this.cell[i].image.url[4] = new String;
		this.cell[i].image.url[5] = new String;
		
		this.cell[i].image.imageInCellPercentage = new Array();
		this.cell[i].image.imageInCellPercentage[1] = 100;
		this.cell[i].image.imageInCellTop = new Array();
		this.cell[i].image.imageInCellLeft = new Array();
		this.cell[i].image.imageInCellWidth = new Array();
		this.cell[i].image.imageInCellHeight = new Array();
		this.cell[i].image.imageInEditPercentage = new Array();
		this.cell[i].image.imageInEditPercentage[1] = 100;
		this.cell[i].image.imageInEditPositionX = new Array();
		this.cell[i].image.imageInEditPositionY = new Array();		
		
		this.cell[i].widget = new Object();
		this.cell[i].widget.vod_id = new String;
		this.cell[i].widget.image_url = new String;
		this.cell[i].widget.widget_kind = new String;
		this.cell[i].widget.weather_id = new String;
		this.cell[i].widget.weather_kind = new Number;

		this.cell[i].text = new Object();
		this.cell[i].text.contents = new String;
		this.cell[i].text.font_size = new Number;
		this.cell[i].text.font_color = new String;
		this.cell[i].text.font_family = new String;
		this.cell[i].text.font_align = new String;
		this.cell[i].text.font_back_color = new String;
		this.cell[i].text.font_weight = new String;
		this.cell[i].text.font_vertical = new String;
	}	
}


function set_template() {
	// Template Class 초기화
	Template.prototype.divided = 0;


	// template 인스턴스 생성
	template = new Array();

    // template 1 정의
	template[1] = new Template();
	template[1].divided = 1;

    template[1].cell[1].kind = "widgets";
	template[1].cell[1].title = "Youtube Live";
	template[1].cell[1].x = 5;
	template[1].cell[1].y = 5;
	template[1].cell[1].widget.widget_kind = "video";

	template[2] = new Template();
	template[2].divided = 2;
             
	template[2].cell[1].kind = "image";
	template[2].cell[1].title = "Image";
	template[2].cell[1].x = 1;
	template[2].cell[1].y = 4;
             
	template[2].cell[2].kind = "widgets";
	template[2].cell[2].title = "Youtube Live";
	template[2].cell[2].x = 4;
	template[2].cell[2].y = 4;
	template[2].cell[2].widget.widget_kind = "video";
             
	template[2].cell[21].kind = "text";
	template[2].cell[21].title = "Image / Text";
	template[2].cell[21].x = 4;
	template[2].cell[21].y = 1;
	template[2].cell[21].text.font_size = 48;
	template[2].cell[21].text.font_color = "#0f0";
	template[2].cell[21].text.font_family = "돋움체";
	template[2].cell[21].text.font_align = "center";
	template[2].cell[21].text.font_back_color = "none";
	template[2].cell[21].text.font_weight = "normal";
	template[2].cell[21].text.font_vertical = "middle";

    
	template[2].cell[25].kind = "widgets";
	template[2].cell[25].title = "Weather";
	template[2].cell[25].x = 1;
	template[2].cell[25].y = 1;
	template[2].cell[25].widget.widget_kind = "weather";
	template[2].cell[25].text.font_color = "#fff";
	template[2].cell[25].text.font_back_color = "none";
	template[2].cell[25].text.font_family = "Arial";
	

    // template 2 정의 (p51)
	template[3] = new Template();
	template[3].divided = 2;

	template[3].cell[1].kind = "widgets";
	template[3].cell[1].title = "Youtube Live";
	template[3].cell[1].x = 4;
	template[3].cell[1].y = 4;
	template[3].cell[1].widget.widget_kind = "video";

	template[3].cell[5].kind = "image";
	template[3].cell[5].title = "Image";
	template[3].cell[5].x = 1;
	template[3].cell[5].y = 4;

	template[3].cell[21].kind = "image";
	template[3].cell[21].title = "Image";
	template[3].cell[21].x = 5;
	template[3].cell[21].y = 1;


    // template 3 정의 (p60)
	template[4] = new Template();
	template[4].divided = 3;
             
	template[4].cell[1].kind = "image";
	template[4].cell[1].title = "Image";
	template[4].cell[1].x = 5;
	template[4].cell[1].y = 1;
             
	template[4].cell[6].kind = "image";
	template[4].cell[6].title = "Image";
	template[4].cell[6].x = 1;
	template[4].cell[6].y = 3;
             
	template[4].cell[7].kind = "widgets";
	template[4].cell[7].title = "Youtube Live";
	template[4].cell[7].x = 3;
	template[4].cell[7].y = 3;
	template[4].cell[7].widget.widget_kind = "video";
             
             
	template[4].cell[10].kind = "image";
	template[4].cell[10].title = "Image";
	template[4].cell[10].x = 1;
	template[4].cell[10].y = 3;
             
	template[4].cell[21].kind = "text";
	template[4].cell[21].title = "Image / Text";
	template[4].cell[21].x = 5;
	template[4].cell[21].y = 1;
	template[4].cell[21].text.font_size = 48;
	template[4].cell[21].text.font_color = "#0f0";
	template[4].cell[21].text.font_family = "돋움체";
	template[4].cell[21].text.font_align = "center";
	template[4].cell[21].text.font_back_color = "none";
	template[4].cell[21].text.font_weight = "normal";
	template[4].cell[21].text.font_vertical = "middle";

    // template 4 정의 (p66)
	template[5] = new Template();
	template[5].divided = 4;
             
	template[5].cell[1].kind = "text";
	template[5].cell[1].title = "Image / Text";
	template[5].cell[1].x = 5;
	template[5].cell[1].y = 1;
             
	template[5].cell[6].kind = "image";
	template[5].cell[6].title = "Image";
	template[5].cell[6].x = 2;
	template[5].cell[6].y = 4;
             
	template[5].cell[8].kind = "widgets";
	template[5].cell[8].title = "Youtube Live";
	template[5].cell[8].x = 3;
	template[5].cell[8].y = 3;
	template[5].cell[8].widget.widget_kind = "video";
             
	template[5].cell[23].kind = "image";
	template[5].cell[23].title = "Image";
	template[5].cell[23].x = 3;
	template[5].cell[23].y = 1;


    // template 5 정의 
	template[6] = new Template();
	template[6].divided = 3;
             
	template[6].cell[1].kind = "image";
	template[6].cell[1].title = "Image";
	template[6].cell[1].x = 2;
	template[6].cell[1].y = 5;
             
	template[6].cell[3].kind = "widgets";
	template[6].cell[3].title = "Youtube Live";
	template[6].cell[3].x = 3;
	template[6].cell[3].y = 3;
	template[6].cell[3].widget.widget_kind = "video";
             
	template[6].cell[18].kind = "image";
	template[6].cell[18].title = "Image";
	template[6].cell[18].x = 3;
	template[6].cell[18].y = 2;
             

    // template 6 정의 
	template[7] = new Template();
	template[7].divided = 3;
             
	template[7].cell[1].kind = "image";
	template[7].cell[1].title = "Image";
	template[7].cell[1].x = 5;
	template[7].cell[1].y = 2;
             
	template[7].cell[11].kind = "image";
	template[7].cell[11].title = "Image";
	template[7].cell[11].x = 2;
	template[7].cell[11].y = 3;
             
	template[7].cell[13].kind = "widgets";
	template[7].cell[13].title = "Youtube Live";
	template[7].cell[13].x = 3;
	template[7].cell[13].y = 3;
	template[7].cell[13].widget.widget_kind = "video";

    // template 7 정의 
	template[8] = new Template();
	template[8].divided = 5;
             
	template[8].cell[1].kind = "image";
	template[8].cell[1].title = "Image";
	template[8].cell[1].x = 2;
	template[8].cell[1].y = 3;
             
	template[8].cell[3].kind = "image";
	template[8].cell[3].title = "Image";
	template[8].cell[3].x = 3;
	template[8].cell[3].y = 3;
             
	template[8].cell[16].kind = "image";
	template[8].cell[16].title = "Image";
	template[8].cell[16].x = 2;
	template[8].cell[16].y = 2;
             
	template[8].cell[18].kind = "image";
	template[8].cell[18].title = "Image";
	template[8].cell[18].x = 3;
	template[8].cell[18].y = 2;



    // template 8 정의 (p72)
	template[9] = new Template();
	template[9].divided = 4;
             
	template[9].cell[1].kind = "text";
	template[9].cell[1].title = "Image / Text";
	template[9].cell[1].x = 5;
	template[9].cell[1].y = 1;
	template[9].cell[1].text.font_size = 48;
	template[9].cell[1].text.font_color = "#0f0";
	template[9].cell[1].text.font_family = "돋움체";
	template[9].cell[1].text.font_align = "center";
	template[9].cell[1].text.font_back_color = "none";
	template[9].cell[1].text.font_weight = "normal";
	template[9].cell[1].text.font_vertical = "middle";
             
	template[9].cell[6].kind = "image";
	template[9].cell[6].title = "Image";
	template[9].cell[6].x = 4;
	template[9].cell[6].y = 4;
             
	template[9].cell[10].kind = "image";
	template[9].cell[10].title = "Image";
	template[9].cell[10].x = 1;
	template[9].cell[10].y = 2;
             
	template[9].cell[20].kind = "image";
	template[9].cell[20].title = "Image";
	template[9].cell[20].x = 1;
	template[9].cell[20].y = 2;


    // template 9 정의 (p51)
	template[10] = new Template();
	template[10].divided = 4;
             
	template[10].cell[1].kind = "text";
	template[10].cell[1].title = "Image / Text";
	template[10].cell[1].x = 5;
	template[10].cell[1].y = 1;
	template[10].cell[1].text.font_size = 48;
	template[10].cell[1].text.font_color = "#0f0";
	template[10].cell[1].text.font_family = "돋움체";
	template[10].cell[1].text.font_align = "center";
	template[10].cell[1].text.font_back_color = "none";
	template[10].cell[1].text.font_weight = "normal";
	template[10].cell[1].text.font_vertical = "middle";
             
	template[10].cell[6].kind = "image";
	template[10].cell[6].title = "Image";
	template[10].cell[6].x = 3;
	template[10].cell[6].y = 4;
             
	template[10].cell[9].kind = "image";
	template[10].cell[9].title = "Image";
	template[10].cell[9].x = 2;
	template[10].cell[9].y = 2;
             
	template[10].cell[19].kind = "image";
	template[10].cell[19].title = "Image";
	template[10].cell[19].x = 2;
	template[10].cell[19].y = 2;


    // template 10 정의 (p51)
	template[11] = new Template();
	template[11].divided = 3;
             
	template[11].cell[1].kind = "image";
	template[11].cell[1].title = "Image";
	template[11].cell[1].x = 2;
	template[11].cell[1].y = 2;
             
	template[11].cell[3].kind = "image";
	template[11].cell[3].title = "Image";
	template[11].cell[3].x = 3;
	template[11].cell[3].y = 2;
             
	template[11].cell[11].kind = "image";
	template[11].cell[11].title = "Image";
	template[11].cell[11].x = 2;
	template[11].cell[11].y = 2;
             
	template[11].cell[13].kind = "image";
	template[11].cell[13].title = "Image";
	template[11].cell[13].x = 3;
	template[11].cell[13].y = 2;
             
	template[11].cell[21].kind = "text";
	template[11].cell[21].title = "Image / Text";
	template[11].cell[21].x = 5;
	template[11].cell[21].y = 1;
	template[11].cell[21].text.font_size = 48;
	template[11].cell[21].text.font_color = "#0f0";
	template[11].cell[21].text.font_family = "돋움체";
	template[11].cell[21].text.font_align = "center";
	template[11].cell[21].text.font_back_color = "none";
	template[11].cell[21].text.font_weight = "normal";
	template[11].cell[21].text.font_vertical = "middle";



    // template 10 정의 (p51)
	template[12] = new Template();
	template[12].divided = 11;
             
	template[12].cell[1].kind = "text";
	template[12].cell[1].title = "Image | Text";
	template[12].cell[1].x = 5;
	template[12].cell[1].y = 1;
	template[12].cell[1].text.font_size = 48;
	template[12].cell[1].text.font_color = "#0f0";
	template[12].cell[1].text.font_family = "돋움체";
	template[12].cell[1].text.font_align = "center";
	template[12].cell[1].text.font_back_color = "none";
	template[12].cell[1].text.font_weight = "normal";
	template[12].cell[1].text.font_vertical = "middle";
             
	template[12].cell[6].kind = "image";
	template[12].cell[6].title = "Image";
	template[12].cell[6].x = 1;
	template[12].cell[6].y = 2;
             
	template[12].cell[7].kind = "image";
	template[12].cell[7].title = "Image";
	template[12].cell[7].x = 1;
	template[12].cell[7].y = 2;
             
	template[12].cell[8].kind = "image";
	template[12].cell[8].title = "Image";
	template[12].cell[8].x = 1;
	template[12].cell[8].y = 2;
             
	template[12].cell[9].kind = "image";
	template[12].cell[9].title = "Image";
	template[12].cell[9].x = 1;
	template[12].cell[9].y = 2;
             
	template[12].cell[10].kind = "image";
	template[12].cell[10].title = "Image";
	template[12].cell[10].x = 1;
	template[12].cell[10].y = 2;
             
	template[12].cell[16].kind = "image";
	template[12].cell[16].title = "Image";
	template[12].cell[16].x = 1;
	template[12].cell[16].y = 2;
             
	template[12].cell[17].kind = "image";
	template[12].cell[17].title = "Image";
	template[12].cell[17].x = 1;
	template[12].cell[17].y = 2;
             
	template[12].cell[18].kind = "image";
	template[12].cell[18].title = "Image";
	template[12].cell[18].x = 1;
	template[12].cell[18].y = 2;
             
	template[12].cell[19].kind = "image";
	template[12].cell[19].title = "Image";
	template[12].cell[19].x = 1;
	template[12].cell[19].y = 2;
             
	template[12].cell[20].kind = "image";
	template[12].cell[20].title = "Image";
	template[12].cell[20].x = 1;
	template[12].cell[20].y = 2;


	for (var i = 1; i < 13; i++) {
	    template[i].background.kind = "";
	    template[i].background.color = "";
	    template[i].background.image.url = "";
	}
}