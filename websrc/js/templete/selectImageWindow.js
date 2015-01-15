// SelectImageWindow Class 정의
function SelectImageWindow() {
    this.myImages = new Object();
    this.myImages.url = new Array();
    this.myImages.fileName = new Array();
    this.myImages.upload_date = new Array();

    this.digitalAndArt = new Object();
    this.digitalAndArt.url = new Array();
    this.plantsAndFlowers = new Object();
    this.plantsAndFlowers.url = new Array();
    this.placesAndLandscape = new Object();
    this.placesAndLandscape.url = new Array();
    this.natureAndAnimals = new Object();
    this.natureAndAnimals.url = new Array();
}

function setMaxImage(kind) {
    if (kind == "background") {
        maxmyImages = selectBackgroundImage.myImages.url.length - 1;
        if (maxmyImages < 0) maxmyImages = 0;
        maxdigitalAndArt = selectBackgroundImage.digitalAndArt.url.length - 1;
        maxplantsAndFlowers = selectBackgroundImage.plantsAndFlowers.url.length - 1;
        maxplacesAndLandscape = selectBackgroundImage.placesAndLandscape.url.length - 1;
        maxnatureAndAnimals = selectBackgroundImage.natureAndAnimals.url.length - 1;
    }
    else if (kind == "images") {
        maxmyImages = selectCellImage.myImages.url.length - 1;
        if (maxmyImages < 0) maxmyImages = 0;
        maxdigitalAndArt = 0;
        maxplantsAndFlowers = 0;
        maxplacesAndLandscape = 0;
        maxnatureAndAnimals = 0;
    }
}

function initFocusSelectAnImage(kind) {
    mode = kind;
    setMaxImage(kind);

    // -- 이하는 Device 모드일 경우
    removeFocus(focus_image_number);
    focus_image_number = 1;
    if ($(".select_an_image .myImages_1").is(":visible")) {
        focus_theme_idx = 1;
    }
    else {
        if (kind == "background")
            focus_theme_idx = 2;
        else
            focus_theme_idx = 1;
    }
    changeFocus(focus_image_number);
}

function getMaxImageNumber(idx) {
    if (idx == 1) return maxmyImages;
    if (idx == 2) return maxdigitalAndArt;
    if (idx == 3) return maxplantsAndFlowers;
    if (idx == 4) return maxplacesAndLandscape;
    if (idx == 5) return maxnatureAndAnimals;
}

function changeFocus(x) {
    var target = $(".select_an_image ." + theme_name[focus_theme_idx] + "_" + x);;
    target.css({
        "border": "2px solid #00d7ff",
    });
}

function removeFocus(x) {
    var target = $(".select_an_image ." + theme_name[focus_theme_idx] + "_" + x);;
    target.css({
        "border": "0px solid #00d7ff",
    });
}

function moveFocusSelectAnImage(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            if (focus_image_number % 3 == 1) break;
            removeFocus(focus_image_number--);
            changeFocus(focus_image_number);
            break;

        case VK_RIGHT:
            if (focus_image_number % 3 == 0) break;
            if (focus_image_number + 1 > getMaxImageNumber(focus_theme_idx)) break;
            removeFocus(focus_image_number++);
            changeFocus(focus_image_number);
            break;

        case VK_UP:
            if (focus_image_number - 3 < 1) {                                            // 테마가 바뀔때
                if (focus_theme_idx == 1) {
                    $("#lay_editor_layer .select_an_image .close").addClass("focus");
                    removeFocus(focus_image_number);
                    focus_theme_idx = 0;
                    console.log("removeFocus")
                    break;
                }
                removeFocus(focus_image_number);
                focus_theme_idx--;
                if (getMaxImageNumber(focus_theme_idx) == 0) {
                    $("#lay_editor_layer .select_an_image .close").addClass("focus");
                    focus_theme_idx = 0;
                    return;
                }
                var tempRaw = parseInt((getMaxImageNumber(focus_theme_idx) - 1) / 3);
                focus_image_number += (tempRaw * 3);
                if (((focus_image_number - 1) % 3) + 1 >= (getMaxImageNumber(focus_theme_idx) - 1) % 3 + 1) {
                    focus_image_number = getMaxImageNumber(focus_theme_idx);
                }
            }
            else {
                removeFocus(focus_image_number);
                focus_image_number -= 3;
            }
            changeFocus(focus_image_number);
            break;

        case VK_DOWN:
            if (focus_theme_idx == 0) {
                $("#lay_editor_layer .select_an_image .close").removeClass("focus");
                if (getMaxImageNumber(1) == 0) {
                    focus_theme_idx = 2;
                    focus_image_number = 1;
                }
                else {
                    focus_theme_idx = 1;
                    focus_image_number = 1;
                }
                changeFocus(focus_image_number);
                console.log("remove focus");
                break;
            }
            if (focus_image_number + 3 > getMaxImageNumber(focus_theme_idx) && parseInt((focus_image_number - 1) / 3) == parseInt((getMaxImageNumber(focus_theme_idx) - 1) / 3))            // 테마가 바뀔때
            {
                if (focus_theme_idx == 5) break;
                if (getMaxImageNumber(focus_theme_idx + 1) < 1) break;
                removeFocus(focus_image_number);
                focus_theme_idx++;
                if (focus_image_number % 3 >= getMaxImageNumber(focus_theme_idx)) {
                    focus_image_number = getMaxImageNumber(focus_theme_idx);
                }
                else {
                    focus_image_number = ((focus_image_number - 1) % 3) + 1;
                }
            }
            else {
                removeFocus(focus_image_number);
                focus_image_number += 3;
                if (focus_image_number > getMaxImageNumber(focus_theme_idx)) {
                    focus_image_number = parseInt(getMaxImageNumber(focus_theme_idx) / 3) * 3 + (getMaxImageNumber(focus_theme_idx) % 3);
                }
            }
            changeFocus(focus_image_number);
            break;
        case VK_ENTER:
            if (mode == "background") {
                if (focus_theme_idx == 0) {
                    $("#lay_editor_layer .backgrounds .select_an_image .close").click();
                    return;
                }
                $('#lay_editor_layer .backgrounds .image .select_an_image').animate({ opacity: "0.0" }, 500, 'easeInOutQuint', function () {
                    // "-" 버튼 제거
                    //$("#lay_editor_layer .backgrounds .image .select_an_image .delete").hide();

                    if (theme_name[focus_theme_idx] == "myImages") urlOfBackgroundImage = selectBackgroundImage.myImages.url[focus_image_number];
                    else if (theme_name[focus_theme_idx] == "digitalAndArt") urlOfBackgroundImage = selectBackgroundImage.digitalAndArt.url[focus_image_number];
                    else if (theme_name[focus_theme_idx] == "plantsAndFlowers") urlOfBackgroundImage = selectBackgroundImage.plantsAndFlowers.url[focus_image_number];
                    else if (theme_name[focus_theme_idx] == "placesAndLandscape") urlOfBackgroundImage = selectBackgroundImage.placesAndLandscape.url[focus_image_number];
                    else if (theme_name[focus_theme_idx] == "natureAndAnimals") urlOfBackgroundImage = selectBackgroundImage.natureAndAnimals.url[focus_image_number];
                    $('#lay_editor_layer .backgrounds .image .image_preview_1').css({ 'background-image': 'url(' + urlOfBackgroundImage + ')' });

                    // 창 닫기
                    $("#lay_editor_layer .backgrounds .image .select_an_image").hide();

                    // image 종료 이벤트
                    backgrounds_image_list_reset();
                });
            }
            else if (mode == "images") {
                if (focus_theme_idx == 0) {
                    $("#lay_editor_layer .images .contents .select_an_image .close").click();
                    $("#lay_editor_layer .images .contents .select_an_image .close").removeClass("focus");
                    return;
                }
                $('#lay_editor_layer .images .contents .select_an_image').animate({opacity: "0.0" }, 500, 'easeInOutQuint', function () {
                    // 변수 설정					
                    isFiveImageSetted[selectedFiveImageNo] = true;
                    selectedImageContorlNo = selectedFiveImageNo;

                    // 확대, 축소, 이미지 이동 편집을 위한 체크 아이콘 출현					
                    $("#lay_editor_layer .images .contents .image_preview .image_selected").show();
                    $("#lay_editor_layer .images .contents .image_preview .image_selected").css({
                        top: "125px",
                        left: (((selectedFiveImageNo - 1) * 131) + 343) + "px"
                    });

                    // "-" 버튼 제거
                    $("#lay_editor_layer .images .contents .select_an_image .delete").hide();

                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .ableCell").show();
                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .disableCell_1").show();
                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .disableCell_2").show();

                    // cell 정보 보이기
                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .cell_size").show();

                    // 기존 이미지 지우기

                    //$("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .imageInCell img").remove();

                    // 새로운 이미지 미리 보기에 적용하기					
                    if (theme_name[focus_theme_idx] == "myImages") urlOfCellImage[selectedFiveImageNo] = selectCellImage.myImages.url[focus_image_number];
                    $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .ableCell img").remove();
                    $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .ableCell").prepend("<img src='" + urlOfCellImage[selectedFiveImageNo] + "'></img>");

                    var image = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .ableCell img");
                    var ableCell = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .ableCell");

                    setTimeout(function () {
                        // Get the width here
                        var realWidth = image.width();
                        var realHeight = image.height();
                        var fitWidth = ableCell.width();
                        var fitHeight = ableCell.height();

                        imageInCellPercentage[selectedFiveImageNo] = 100;

                        var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + selectedFiveImageNo + " .ableCell img");
                        var cellWidth = originalEditKind.cell[selectedCellNo].x * 256;
                        var cellHeight = originalEditKind.cell[selectedCellNo].y * 144;

                        var dx = realWidth / cellWidth;
                        var dy = realHeight / cellHeight;

                        if (dx == dy) {
                            imageDepth.css({
                                'position': 'relative',
                                'width': fitWidth,
                                'height': fitHeight,
                                'top': 0,
                                'left': 0
                            });
                        }
                        else if (dx < dy) {
                            if (dx <= 1) {
                                console.log("1");
                                imageDepth.css({
                                    'position': 'relative',
                                    'width': fitWidth,
                                    'height': realHeight / (realWidth / fitWidth),
                                    'top': 0,
                                    'left': 0
                                });
                            }
                            else {
                                console.log("2");
                                imageDepth.css({
                                    'position': 'relative',
                                    'width': fitWidth,
                                    'height': realHeight * (realWidth / fitWidth),
                                    'top': 0,
                                    'left': 0
                                });
                            }
                        }
                        else if (dx > dy) {
                            if (dy <= 1) {
                                console.log("3");
                                imageDepth.css({
                                    'position': 'relative',
                                    'width': realWidth / (realHeight / fitHeight),
                                    'height': fitHeight,
                                    'top': 0,
                                    'left': 0
                                });
                            }
                            else {
                                console.log("4");
                                imageDepth.css({
                                    'position': 'relative',
                                    'width': realWidth * (realHeight / fitHeight),
                                    'height': fitHeight,
                                    'top': 0,
                                    'left': 0
                                });
                            }
                        }

                        imageInCellWidth[selectedFiveImageNo] = parseInt(imageDepth.css('width'));
                        imageInCellHeight[selectedFiveImageNo] = parseInt(imageDepth.css('height'));
                        //targetImageLeft[selectedFiveImageNo] = parseInt(imageDepth.css('left'));
                    }, 200);

                    // 창 닫기
                    $("#lay_editor_layer .images .contents .select_an_image").hide();

                    // image 종료 이벤트
                    images_image_list_reset();
                });
            }
            break;
    }
}


// selectCellImage 인스턴스 생성
selectCellImage = new SelectImageWindow();

// selectBackgroundImage 인스턴스 생성
selectBackgroundImage = new SelectImageWindow();

selectBackgroundImage.digitalAndArt.url[1] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_00.jpg";
selectBackgroundImage.digitalAndArt.url[2] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_01.jpg";
selectBackgroundImage.digitalAndArt.url[3] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_02.jpg";
selectBackgroundImage.digitalAndArt.url[4] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_03.jpg";
selectBackgroundImage.digitalAndArt.url[5] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_04.jpg";
selectBackgroundImage.digitalAndArt.url[6] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_05.jpg";
selectBackgroundImage.digitalAndArt.url[7] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_06.jpg";
selectBackgroundImage.digitalAndArt.url[8] = "../websrc/img/background_images/1.Digital_and_Art/bg_art_07.jpg";

selectBackgroundImage.plantsAndFlowers.url[1] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_00.jpg";
selectBackgroundImage.plantsAndFlowers.url[2] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_01.jpg";
selectBackgroundImage.plantsAndFlowers.url[3] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_02.jpg";
selectBackgroundImage.plantsAndFlowers.url[4] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_03.jpg";
selectBackgroundImage.plantsAndFlowers.url[5] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_04.jpg";
selectBackgroundImage.plantsAndFlowers.url[6] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_05.jpg";
selectBackgroundImage.plantsAndFlowers.url[7] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_06.jpg";
selectBackgroundImage.plantsAndFlowers.url[8] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_07.jpg";
selectBackgroundImage.plantsAndFlowers.url[9] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_08.jpg";
selectBackgroundImage.plantsAndFlowers.url[10] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_09.jpg";
selectBackgroundImage.plantsAndFlowers.url[11] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_10.jpg";
selectBackgroundImage.plantsAndFlowers.url[12] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_11.jpg";
selectBackgroundImage.plantsAndFlowers.url[13] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_12.jpg";
selectBackgroundImage.plantsAndFlowers.url[14] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_13.jpg";
selectBackgroundImage.plantsAndFlowers.url[15] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_14.jpg";
selectBackgroundImage.plantsAndFlowers.url[16] = "../websrc/img/background_images/2.Plants_and_Flowers/bg_flower_15.jpg";

selectBackgroundImage.placesAndLandscape.url[1] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_00.jpg";
selectBackgroundImage.placesAndLandscape.url[2] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_01.jpg";
selectBackgroundImage.placesAndLandscape.url[3] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_02.jpg";
selectBackgroundImage.placesAndLandscape.url[4] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_03.jpg";
selectBackgroundImage.placesAndLandscape.url[5] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_04.jpg";
selectBackgroundImage.placesAndLandscape.url[6] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_05.jpg";
selectBackgroundImage.placesAndLandscape.url[7] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_06.jpg";
selectBackgroundImage.placesAndLandscape.url[8] = "../websrc/img/background_images/3.Places_and_Landscape/bg_landscape_07.jpg";

selectBackgroundImage.natureAndAnimals.url[1] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_00.jpg";
selectBackgroundImage.natureAndAnimals.url[2] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_01.jpg";
selectBackgroundImage.natureAndAnimals.url[3] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_02.jpg";
selectBackgroundImage.natureAndAnimals.url[4] = "../websrc/img/background_images/4.Nature_and_Animals/bg_animals_03.jpg";