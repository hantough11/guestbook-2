
// 메뉴 갯수 설정 ( Featured, Playlists는 동적 생성)
var maxEditor = 2;                          // Theme Editor 메뉴 갯수
var maxSupport = 3;                         // Support 메뉴 갯수
var maxSettings = 2;                        // Account 메뉴 갯수

// 초기 설정
var currentPage = "featured";               // 현재 페이지
var readyForBackPage = new String           // 이전 페이지 대기 (현재 페이지로 봐도 무방)
var slide_max = new Number;                 // 최대 슬라이드 갯수
var slide_current = 1;                      // 현재 보여지는 슬라이드 번호
var slide_value = 546;                      // 슬라이드할때 움직이는 x 픽셀값
var slide_break_dx = 150;                   // overflow 될때의 움직이는 x 픽셀값
var time_break_dx = 200;                    // overflow 될때 움직이는 시간
var platform = "";                          // 접속 플랫폼
var isBackBtnMode = false;                  // 해당 페이지에서 Back 버튼의 존재 유무
var isBackBtnRollOver = false;              // 현재 Back 버튼이 포커스 되어 있는지 판별
var php_upload_parameter = new Array();     // php 페이지로 넘길 전달인자


//************************ 선택 키 관련 **************************//
function KeyLocation() {
    this.horizon = 1;
    this.vertical = 1;
}

mainKeyLocation = new KeyLocation();                // 메인 화면 키 위치
previewKeyLocation = new KeyLocation();             // 프리뷰 or 싸인아웃 팝업시 메뉴 선택 키 위치

// 에디터창 메뉴 키 위치
editLayerLeftKeyLocation = new KeyLocation();
editLayerBackgrounds_colorSubListKeyLocation = new KeyLocation();
editLayerBackgrounds_colorSubListKeyLocation.vertical = 4;
editLayerImages_selectAnImagesKeyLocation = new KeyLocation();
editLayerText_textFontKeyLocation = new KeyLocation();
editLayerText_textSizeKeyLocation = new KeyLocation();
editLayerText_textColorKeyLocation = new KeyLocation();
editLayerText_textBackColorKeyLocation = new KeyLocation();


//************** 에디터 관련 **********************//
var selectedCellNo = 0;                                                                                     // 선택된 셀 번호
var focusedEditMapCellNo = 1;                                                                               // 셀선택시 포커스 된 셀 번호
var edit_detail_left_item = ['cancel', 'save', 'publish', 'backgrounds', 'widgets', 'images', 'text'];      // 좌측 메뉴 종류
var currentFocusTab = "left";                                                                               // 현재 포커스 된 탭( left, top, bottom, imageList 등 )
var currentFocusLeftMenu = 0;                                                                               // 현재 포커스 된 좌측 메뉴( 0 = cancel )
var currentSelectedMenu = 0;                                                                                // 현재 선택된 좌측 메뉴      
var currentSelectedSubMenu = 0;                                                                             // 헌재 선택된 서브 메뉴
var topSelectMenuName = "";                                                                                 // 현제 선택된 Top 메뉴 ( color, image, video, tv...)

var cellKind = new Array();                             // 해당 셀 종류
var cellWidgetKind = new Array();                             // 
var cellSizeX = new Array();                            // 해당 셀 가로 사이즈
var cellSizeY = new Array();                            // 해당 셀 세로 사이즈

var backgrounds_image_click_mode = "select";
var images_image_click_mode = "select";




var text_color_list = [
    "#f00", "#ff6c00", "#ffaa00", "#ffef00", "#a6cf00", "#009e25", "#00b0a2", "#0075c8", "#3a32c3", "#7820b9", "#ef007c", "#000", "#252525", "#464646", "#636363", "#7d7d7d", "#9a9a9a",
    "#ffe8e8", "#f7e2d2", "#f5eddc", "#f5f4e0", "#edf2c2", "#def7e5", "#d9eecc", "#c9e0f0", "#d6d4eb", "#e7dbed", "#f1e2ea", "#acacac", "#c2c2c2", "#cccccc", "#e1e1e1", "#ebebeb", "#ffffff",
    "#e97d81", "#e19b73", "#d1b274", "#cfcca2", "#ceca92", "#61b977", "#53aea8", "#518fbb", "#6a65bb", "#9a54ce", "#e573ae", "#5a504b", "#767b86", "#000", "#000", "#000", "#000",
    "#951015", "#6e391a", "#785c25", "#5f5b25", "#4c511f", "#1c4827", "#0d514c", "#1b496a", "#2b285f", "#45245b", "#721947", "#352e2c", "#3c3f45", "#000", "#000", "#000", "#000"
];

var text_font_back_color_trigger = [
    0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0,
       0, 0, 0, 0, 0,
       0, 0, 0, 0, 0,
       0, 0, 0, 0, 0
];     // 0:off  1:on

var text_font_color_trigger = [
    0, 0, 0, 0, 0, 0,
       0, 0, 0, 0, 0,
       0, 0, 0, 0, 0,
       0, 0, 0, 0, 0,
       0, 0, 0, 0, 0
];          // 0:off  1:on


var text_preview_gain;
var text_preview_gain_x;
var text_preview_gain_y;

var maxmyImages = 0;
var maxdigitalAndArt = 0;
var maxplantsAndFlowers = 0;
var maxplacesAndLandscape = 0;
var maxnatureAndAnimals = 0;
var mode;

var focus_image_number = 1;                 // 현재 포커스된 이미지 아이템
var focus_theme_idx = 1;                    // 현재 포커스된 이미지의 테마 ( 1:myImages, 2:digitalAndArt, 3:plantsAndFlowers...)
var theme_name = ["", "myImages", "digitalAndArt", "plantsAndFlowers", "placesAndLandscape", "natureAndAnimals"];       // 이미지 테마 종류

var type_of_editor_image;                   // "images", "background"
























