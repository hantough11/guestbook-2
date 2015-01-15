var lnbWidgetsProhibit = true;
var lnbImagesProhibit = false;
var lnbTextProhibit = false;

var selectedSlideListKind;  // playlists, theme
var selectedSlideListNo;    // 1, 2

// cell image - 5개 이미지 관련 정보
var targetImage;
var urlOfCellImage = new Array();
var imageInCellPercentage = [100, 100, 100, 100, 100, 100];
var imageInCellTop = [0, 0, 0, 0, 0, 0];
var imageInCellLeft = [0, 0, 0, 0, 0, 0];
var imageInCellWidth = [0, 0, 0, 0, 0, 0];
var imageInCellHeight = [0, 0, 0, 0, 0, 0];
var imageInEditPercentage = [100, 100, 100, 100, 100, 100];
var imageInEditWidth = new Array();
var imageInEditHeight = new Array();
var imageInEditPositionX = [0, 0, 0, 0, 0, 0];
var imageInEditPositionY = [0, 0, 0, 0, 0, 0];

var backgroundInCellTop = 0;
var backgroundInCellLeft = 0;
var backgroundInCellWidth = 0;
var backgroundInCellHeight = 0;
var backgroundInCellPer = 100;

var isFiveImageSetted = [false, false, false, false, false, false];
var selectedFiveImageNo = new Number;       // 1 ~ 5;
var selectedImageContorlNo = new Number;    // 1 ~ 5;
var theFirstOrderFiveImages = new Number;   // 1 ~ 5;

// cell image - activeCell 영역 정의
var activeCellTop = new Array();
var activeCellLeft = new Array();
var activeCellWidth = new Array();
var activeCellHeight = new Array();

// background image
var urlOfBackgroundImage = new String;

// 공통 - myImages, nature 이미지 관련 정보
var selectedImageKind = new String;    // "myImages",  "digitalAndArt", "plantsAndFlowers"
var selectedMyImagesNo;     		   // 1, 2
var selectedDigitalAndArtNo;           // 1, 2
var selectedPlantsAndFlowersNo;        // 1, 2
var selectedPlacesAndLandscapeNo;      // 1, 2
var selectedNatureAndAnimalsNo;        // 1, 2

// myImages, nature 이미지 체크 관련 정보
var isImageChecked = false;
var selectedCheckImageIconX;
var selectedCheckImageIconY;

var originalEditKind;
var appliedEditKind;
var underEditKind;

var modified_font_size;

var orderTmp;
var saveFileName;

var myBackgroundImageScroll;
var myCellImageScroll;


function runTextVerticalAlign(targetClass, verticalKind){						
	$(targetClass).removeClass("vertical-align-top");
	$(targetClass).removeClass("vertical-align-middle");
	$(targetClass).removeClass("vertical-align-bottom");
	$(targetClass).addClass("vertical-align-" + verticalKind);							

	textVerticalAlign();
}


function textVerticalAlign() {
	// 세로 상단 정렬
	$('.vertical-align-top').each(function() {
		this.style.position = 'absolute';
		this.style.top = '0px';
		this.style.marginTop = '0px';
	});
	
	// 세로 가운데 정렬
	$('.vertical-align-middle').each(function() {
		this.style.position = 'absolute';
		this.style.top = $(this).parent().height()/2 + 'px';
		this.style.marginTop = -$(this).height()/2 + 'px';
	});
	
	// 세로 하단 정렬
	$('.vertical-align-bottom').each(function() {
		this.style.position = 'absolute';
		this.style.top = ($(this).parent().height() - 5) + 'px';
		this.style.marginTop = -$(this).height() + 'px';
	});
}
