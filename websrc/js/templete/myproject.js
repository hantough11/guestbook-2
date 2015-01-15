// Myproject Class 정의
function Myproject() {
    this.project_name = new String;
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

// Myproject Class 초기화
Myproject.prototype.divided = 0;

// myproject 인스턴스 생성
myproject = new Array();
