// 화면 리사이즈
function resize() {
    var w = document.body.clientWidth / 1280;
    var h = document.body.clientHeight / 720;
    if (w > h)
        window.document.body.style.zoom = (document.body.clientHeight / 720);
    else
        window.document.body.style.zoom = (document.body.clientWidth / 1280);
}

// 플레이 중 되돌아가기
function cancel_full_screen() {
    $("#dimm_for_player").hide();
    //location.reload();
    if (animateImages) {
        animateImages.abort();
    }
    if (weatherplayer) weatherplayer.abort();
    //currentPage = "playlists";
    $("#gnb").show();
    $(".player").hide();
    $("#body_" + selectedSlideListKind + " .body_back_btn").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_title").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_contents").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_widget").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_button").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');

    for (var i = 1; i <= slide_max; i++) $("#body_" + selectedSlideListKind + " .player_scene_" + i + "_img").hide();
    appear_left();
    if (ytplayer[selectedSlideListNo]) {
        ytplayer[selectedSlideListNo].stopVideo();
    }
    if (ftplayer[selectedSlideListNo]) {
        ftplayer[selectedSlideListNo].stopVideo();
    }
}

// 에디터 -> 테마리스트 메뉴 선택
function click_editor_slide_theme() {
    readyForBackPage = "theme";
    slide_max = maxTemplate;
    dimmed_left("editor");
    page_shift_for_contents("theme");
    mainKeyLocation.horizon = 1;
    focusMainHorizon();
}

// 에디터 -> 마이프로젝트 메뉴 선택
function click_editor_slide_myProjects() {
    readyForBackPage = "myProjects";
    slide_max = maxMyproject;
    dimmed_left("editor");
    page_shift_for_contents("myprojects");
    mainKeyLocation.horizon = 1;
}

// 서포트 -> ABOUT 메뉴 선택
function click_support_slide_about() {
    readyForBackPage = "about";
    dimmed_left("support");
    page_shift_for_contents("about");
    focusBackBtn();
}

// 서포트 -> FAQ 메뉴 선택
function click_support_slide_fag() {
    readyForBackPage = "faq";
    dimmed_left("support");
    page_shift_for_contents("faq");
    focusBackBtn();
}

// 서포트 -> 포럼 메뉴 선택
function click_support_slide_forum() {
    readyForBackPage = "forum";
    dimmed_left("support");
    page_shift_for_contents("forum");
    focusBackBtn();
}

// Account -> SignOut 선택
function click_settings_signout() {
    document.process.location.href = "./profile";
    previewKeyLocation.horizon = 1;
    focusSignoutPopup();
    readyForBackPage = "signout";
    dimmed_left("accounts");
    page_shift_for_contents("signout");
}

// Account -> MyAccount 선택
function click_settings_myAccount() {
    showMsg("Under Construction");
    return;

    readyForBackPage = "myaccount";
    dimmed_left("accounts");
    page_shift_for_contents("myaccount");
    focusBackBtn();
}

// 로그아웃 이벤트
function click_logout() {
    document.location.href = "./signout";
}

// 슬라이드 선택 이벤트
function click_slide(id) {
    back_dimmed_open("playlists");
    click_slideList_live(id);
    focusThemePreviewPopup();
    focusPlaylistsPreviewPopup();
    previewKeyLocation.horizon = 1;
}

// BACK 버튼 이벤트
function back_animaion() {
    $("#body_" + selectedSlideListKind + " .editMap").hide();
    for (var i = 1; i <= slide_max; i++) $("#body_" + selectedSlideListKind + " .editMap_scene_" + i + "_img").show();
    $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img").hide();
    $("#body_" + selectedSlideListKind + " .body_back_btn").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_title").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_contents").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_widget").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_button").animate({ marginLeft: "-=1000", opacity: "1.0" }, 500, 'easeInOutQuint');
}

// BACK 버튼 이벤트
function click_back() {
    if (readyForBackPage == "") return;
    switch (readyForBackPage) {
        case "featured_to_editor_map":
            $("#gnb").show();
            currentPage = "featured";
            readyForBackPage = "";
            back_animaion();
            appear_left();
            break;
        case "editMap_theme":
            $("#gnb").show();
            currentPage = "theme";
            readyForBackPage = "theme";
            back_animaion();
            appear_left();
            dimmed_left("editor");
            removeFocusBackBtn();
            return;
        case "play_to_editMap_theme":
            currentPage = "playlists";
            readyForBackPage = "";
            back_animaion();
            appear_left();
            break;
        case "theme":
            mainKeyLocation.horizon = 1;
            mainKeyLocation.vertical = 3;
            break;
        case "myProjects":
            mainKeyLocation.horizon = 1;
            mainKeyLocation.vertical = 3;
            console.log("11");
            break;
        case "editMap_myProjects":
            $("#gnb").show();
            currentPage = "myprojects";
            readyForBackPage = "myProjects";
            back_animaion();
            appear_left();
            dimmed_left("editor");
            removeFocusBackBtn();
            return;
        case "about":
        case "faq":
        case "forum":
            mainKeyLocation.horizon = 1;
            mainKeyLocation.vertical = 4;
            break;
        case "signIn":
        case "myAccount":
            mainKeyLocation.horizon = 1;
            mainKeyLocation.vertical = 5;
            break;
    }

    popclose("body_" + selectedSlideListKind + " #previewPopupBackBorder");
    active_left();
    previewKeyLocation.horizon = 1;
    focusMainVertical();
    focusMainHorizon();
    removeFocusBackBtn();
}



function click_right() {
    /*
    if (currentPage == "featured") {
        if (maxFeatured == mainKeyLocation.horizon + 3 && maxFeatured < 4) {
            makeFeaturedList.build(maxFeatured + 1);
            makeFeaturedPopup.build(maxFeatured);
            makeFeaturedEditor.build(maxFeatured);
            makeFeaturedPlayer.build(maxFeatured);
            $(".body_contents .list_" + maxFeatured).css({
                "margin-left": "2184px",
            });
            slide_max = maxFeatured;
        }
    }
    */

    if (slide_current < slide_max) {
        $('.body_contents_sub').animate({ marginLeft: "-=" + slide_value }, 500, 'swing');
        slide_current++;
        mainKeyLocation.horizon++;
    }
}

function click_left() {
    if (slide_current > 1) {
        $('.body_contents_sub').animate({ marginLeft: "-=" + -slide_value }, 500, 'swing');
        slide_current--;
        mainKeyLocation.horizon--;
    }
}

function click_featured() {
    if (currentPage != "featured") {
        mainKeyLocation.vertical = 1;
        page_shift_for_left("featured");
        page_shift_for_contents("featured");
        slide_max = maxFeatured;
        currentPage = "featured";
        mainKeyLocation.horizon = 1;
        focusMainHorizon();
    }
}

function click_playlists() {
    if (currentPage != "playlists") {
        mainKeyLocation.vertical = 2;
        page_shift_for_left("playlists");
        page_shift_for_contents("playlists");
        slide_max = maxPlaylist;
        currentPage = "playlists";
        mainKeyLocation.horizon = 1;
        focusMainHorizon();
    }
}


function click_editor() {
    if (currentPage != "editor") {
        mainKeyLocation.vertical = 3;
        page_shift_for_left("editor");
        page_shift_for_contents("editor");
        slide_max = maxEditor;
        currentPage = "editor";
        mainKeyLocation.horizon = 1;
        focusMainHorizon();
    }
}

function click_support() {
    showMsg("Under Construction");
    return;
    if (currentPage != "support") {
        mainKeyLocation.vertical = 4;
        page_shift_for_left("support");
        page_shift_for_contents("support");
        slide_max = maxSupport;
        currentPage = "support";
        mainKeyLocation.horizon = 1;
        focusMainHorizon();
    }
}

function click_settings() {
    if (currentPage != "settings") {
        mainKeyLocation.vertical = 5;
        page_shift_for_left("settings");
        page_shift_for_contents("settings");
        slide_max = maxSettings;
        currentPage = "settings";
        mainKeyLocation.horizon = 1;
        focusMainHorizon();
    }
}


// 메인 페이지 이동 효과 - lnb 변화
function page_shift_for_left(newPage) {
    var pos;
    if (currentPage == "featured") pos = "0 0px";
    if (currentPage == "playlists") pos = "-151px 0px";
    if (currentPage == "editor") pos = "-302px 0px";
    if (currentPage == "support") pos = "-453px 0px";
    if (currentPage == "settings") pos = "-604px 0px";

    $('.lnb_' + currentPage).css({
        'background-position': pos, 
        'width': '133px'
    });

    if (newPage == "featured") pos = "0 -174px";
    if (newPage == "playlists") pos = "-151px -174px";
    if (newPage == "editor") pos = "-302px -174px";
    if (newPage == "support") pos = "-453px -174px";
    if (newPage == "settings") pos = "-604px -174px";

    $('.lnb_' + newPage).css({
        'background-position': pos,
        'width': '150px'
    });
}

// 4-b. 서브 페이지 이동 효과 - lnb dimmed 효과
function dimmed_left(page_name) {
    $(".lnb_featured").css({ opacity: "0.3" });
    $(".lnb_playlists").css({ opacity: "0.3" });
    $(".lnb_editor").css({ opacity: "0.3" });
    $(".lnb_support").css({ opacity: "0.3" });
    $(".lnb_settings").css({ opacity: "0.3" });
    $(".lnbBlock").show();
}
function active_left() {
    $(".lnb_featured").css({ opacity: "1.0" });
    $(".lnb_playlists").css({ opacity: "1.0" });
    $(".lnb_editor").css({ opacity: "1.0" });
    $(".lnb_support").css({ opacity: "1.0" });
    $(".lnb_settings").css({ opacity: "1.0" });
    $(".lnbBlock").hide();
}

// 4-c. 서브 페이지 이동 효과 - lnb 사리지는 효과	
function disappear_left() {
    $('#lnb').animate({ marginLeft: "+=2000", opacity: "0.0" }, 500, 'easeInOutQuint');
}

function appear_left() {
    $('#lnb').animate({ marginLeft: "-=2000", opacity: "1.0" }, 500, 'easeInOutQuint');
}


// 3-c. 메인 페이지 이동 효과 - 컨텐츠 shift 효과
// 3-c-1. 메인 페이지 이동 효과 - 컨텐츠 shift 효과 - lnb 없이 shift
function page_shift_for_contents(newPage) {
    $("#body_" + currentPage).stop().animate({ left: "1000px", opacity: "0.0" }, 400, 'easeInOutQuint', function () {
        $("#body_" + newPage).show();
        $("#body_" + newPage).css({ left: "-500px", opacity: "0.0" });
        $("#body_" + newPage).animate({ left: "0", opacity: "1.0" }, 400, 'easeInOutQuint', function () {
        });

        // 이전 페이지는 원래대로 reset
        $(this).hide();
        $(this).css({ left: "0", opacity: "1.0" });
        currentPage = newPage;

        if (isBackBtnMode) {
            $('.body_contents_sub').css({ marginLeft: "+=" + (slide_current - 1) * slide_value + "px" });
            pageSlideJump("right", mainKeyLocation.horizon - 1);
            slide_current = mainKeyLocation.horizon;
            isBackBtnMode = false;
        }
        else {
            $('.body_contents_sub').css({ marginLeft: "+=" + (slide_current - 1) * slide_value + "px" });
            slide_current = 1
            mainKeyLocation.horizon = 1;
        }

        if (newPage == "forum") {
            Init_forum();
        }
    });
}

// 3-c-2. 메인 페이지 이동 효과 - 컨텐츠 shift 효과 - lnb 함께 shift
function page_shift_for_big_contents_editMap() {
    $("#body_" + selectedSlideListKind + " .body_back_btn").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_title").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_contents").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_widget").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_button").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
        // 새로운 컨텐츠 왼쪽에서 나타나는 효과
        $("#body_" + selectedSlideListKind + " .editMap").show();
        for (var i = 1; i <= slide_max; i++) $("#body_" + selectedSlideListKind + " .editMap_scene_" + i + "_img").hide();
        $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img").show();
    });

    // 초기 cell_1 포커싱
    if (platform == "device")
        focusEditMapCell(1);
}

function page_shift_for_big_contents_play() {
    var target;
    if (selectedSlideListKind == "playlists") target = playlist;
    if (selectedSlideListKind == "featured") target = featured;

    $("#dimm_for_player").show();

    $("#body_" + selectedSlideListKind + " .body_back_btn").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_title").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_contents").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_widget").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint');
    $("#body_" + selectedSlideListKind + " .body_button").animate({ marginLeft: "+=1000", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
        // 새로운 컨텐츠 왼쪽에서 나타나는 효과
        $("#body_" + selectedSlideListKind + " .player").show();
        for (var i = 1; i <= slide_max; i++) $("#body_" + selectedSlideListKind + " .player_scene_" + i + "_img").hide();
        $("#body_" + selectedSlideListKind + " .player_scene_" + selectedSlideListNo + "_img").show();

        // transition of 5 images
        for (var i = 1; i <= 25; i++) {
            if (target[selectedSlideListNo].cell[i].kind == "image" || target[selectedSlideListNo].cell[i].kind == "text") {
                animateImages = new ImageTransition();
                animateImages.transitionTime = 1000;
                animateImages.viewTime = 5000;
                animateImages.object = "#body_" + selectedSlideListKind + " .player_scene_" + selectedSlideListNo + "_img .cell_" + i + " .img";
                animateImages.url = target[selectedSlideListNo].cell[i].image.url;
                animateImages.percentage = target[selectedSlideListNo].cell[i].image.imageInEditPercentage;
                animateImages.positionX = (target[selectedSlideListNo].cell[i].image.imageInEditPositionX);
                animateImages.positionY = (target[selectedSlideListNo].cell[i].image.imageInEditPositionY);
                animateImages.run();
            }
            if (target[selectedSlideListNo].cell[i].widget.widget_kind == "weather") {
                if (target[selectedSlideListNo].cell[i].widget.weather_id)
                {
                    weatherplayer = new WeatherPlayer(selectedSlideListNo, target[selectedSlideListNo].cell[i].widget.weather_id, target[selectedSlideListNo].cell[i].widget.weather_kind, target[selectedSlideListNo].cell[i].text.font_color, target[selectedSlideListNo].cell[i].text.font_back_color, target[selectedSlideListNo].cell[i].text.font_family);
                    weatherplayer.run();
                }
            }
        }
        // gnb 숨기기
        $("#gnb").hide();
    });
}

// 화면 슬라이드 점프 효과 - (back 버튼 클릭하였을 때)
function pageSlideJump(direction, times) {
    switch (direction) {
        case "left":
            if (slide_current > 1) {
                var dx = -slide_value * times;
                $('.body_contents_sub').css({ marginLeft: "-=" + dx });
                slide_current -= times;
            }
            break;
        case "right":
            if (slide_current < slide_max) {
                var dx = slide_value * times;
                $('.body_contents_sub').css({ marginLeft: "-=" + dx }, 0, 'swing');
                slide_current += times;
            }
    }
}

function click_slideList_live(id) {
    // Featured
    if ($('#body_featured').is(':visible')) {
        selectedSlideListNo = id;
        selectedSlideListKind = "featured";
    }
        // Playlist
    else if ($('#body_playlists').is(':visible')) {
        selectedSlideListNo = id;
        selectedSlideListKind = "playlists";
        previewKeyLocation.horizon = 1;
    }
        // Theme
    else if ($('#body_theme').is(':visible')) {
        selectedSlideListNo = id;
        selectedSlideListKind = "theme";
        previewKeyLocation.horizon = 1;
    }
        // My Projects
    else if ($('#body_myprojects').is(':visible')) {
        selectedSlideListNo = id;
        selectedSlideListKind = "myprojects";
    }

    // 적용
    popup("body_" + selectedSlideListKind + " #previewPopupBackBorder");
    for (var i = 1; i <= slide_max; i++) $("#body_" + selectedSlideListKind + " .previewPopup_scene_" + i + "_img").hide();
    $("#body_" + selectedSlideListKind + " .previewPopup_scene_" + selectedSlideListNo + "_img").show();

    $("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate({ top: "15px", opacity: "0.0" }, 0, 'swing', function () {
        $(this).animate({ top: "15px", opacity: "1.0" }, 500, 'swing');
    });
}




function editLayerChangeMenuLeft() {
    if (currentFocusTab == "bottom")          // apply / cancel에서의 대응
    {
        if (currentSelectedSubMenu == 1) {
            currentFocusTab = "left";
            currentSelectedSubMenu = 0;
            $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentFocusLeftMenu]).addClass("focus");
            $("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
        }
        else {
            currentSelectedSubMenu = 1;
            $("#lay_editor_layer  .bottom_btn .cancel").removeClass("focus");
            $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
        }
    }
    else if (currentFocusTab == "textbox")   // Save - Textbox에서의 대응
    {
        currentFocusTab = "left";
        $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentFocusLeftMenu]).addClass("focus");
        $("#lay_editor_layer  #input_project_name_date").blur();
    }
    else if (currentFocusTab == "top") {
        if (currentSelectedSubMenu == 1) {
            currentFocusTab = "left";
            currentSelectedSubMenu = 0;
            $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentFocusLeftMenu]).addClass("focus");
            $("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("focus");
        }
        if (currentSelectedSubMenu == 2) {
            $("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("focus");
            $("#lay_editor_layer .backgrounds .top_btn .color_btn").addClass("focus");
        }
        if (currentSelectedSubMenu == 3) {
            $("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("focus");
            $("#lay_editor_layer .backgrounds .top_btn .image_btn").addClass("focus");
        }
        if (currentSelectedSubMenu == 4) {
            $("#lay_editor_layer .backgrounds .top_btn .tv_btn").removeClass("focus");
            $("#lay_editor_layer .backgrounds .top_btn .video_btn").addClass("focus");
        }
        currentSelectedSubMenu -= 1;
    }
    else if (currentFocusTab == "backgroundPreview") {
        if (topSelectMenuName == "color" && editLayerBackgrounds_colorSubListKeyLocation.horizon > 1) {
            $("#lay_editor_layer .backgrounds .color_list .color_" + editLayerBackgrounds_colorSubListKeyLocation.horizon).removeClass("focus");
            editLayerBackgrounds_colorSubListKeyLocation.horizon -= 1;
            $("#lay_editor_layer .backgrounds .color_list .color_" + editLayerBackgrounds_colorSubListKeyLocation.horizon).addClass("focus");
        }
    }
    else if (currentFocusTab == "imageList") {
        if (currentSelectedSubMenu > 1) {
            $("#lay_editor_layer .images .contents .image_preview_" + currentSelectedSubMenu).removeClass("focus");
            currentSelectedSubMenu -= 1;
            $("#lay_editor_layer .images .contents .image_preview_" + currentSelectedSubMenu).addClass("focus");
        }
        else {
            currentFocusTab = "left";
            $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentFocusLeftMenu]).addClass("focus");
            $("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
            $("#lay_editor_layer .images .contents .image_preview_" + currentSelectedSubMenu).removeClass("focus");
        }
    }
    else if (currentFocusTab == "imageControl") {
        if (currentSelectedSubMenu > 1) {
            currentSelectedSubMenu -= 1;
            if (currentSelectedSubMenu == 1) {
                $("#lay_editor_layer .images .contents .buttons .image_left").addClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 2) {
                $("#lay_editor_layer .images .contents .buttons .image_right").addClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $("#lay_editor_layer .images .contents .buttons .image_up").addClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 4) {
                $("#lay_editor_layer .images .contents .buttons .image_down").addClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 5) {
                $("#lay_editor_layer .images .contents .buttons .image_plus").addClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_minus").removeClass("focus");
            }
        }
    }
    else if (currentFocusTab == "textarea_items") {
        if (currentSelectedSubMenu > 0) {
            currentSelectedSubMenu -= 1;
            if (currentSelectedSubMenu == 0) {
                currentFocusTab = "left";
                $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentFocusLeftMenu]).addClass("focus");
                $('#lay_editor_layer .text .contents .text_font').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 1) {
                $('#lay_editor_layer .text .contents .text_font').addClass("focus");
                $('#lay_editor_layer .text .contents .text_size').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 2) {
                $('#lay_editor_layer .text .contents .text_size').addClass("focus");
                $('#lay_editor_layer .text .contents .text_color').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $('#lay_editor_layer .text .contents .text_color').addClass("focus");
                $('#lay_editor_layer .text .contents .text_weight').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 4) {
                $('#lay_editor_layer .text .contents .text_weight').addClass("focus");
                $('#lay_editor_layer .text .contents .text_back_color').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 5) {
                $('#lay_editor_layer .text .contents .text_back_color').addClass("focus");
                $('#lay_editor_layer .text .contents .text_align_left').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 6) {
                $('#lay_editor_layer .text .contents .text_align_left').addClass("focus");
                $('#lay_editor_layer .text .contents .text_align_center').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 7) {
                $('#lay_editor_layer .text .contents .text_align_center').addClass("focus");
                $('#lay_editor_layer .text .contents .text_align_right').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 8) {
                $('#lay_editor_layer .text .contents .text_align_right').addClass("focus");
                $('#lay_editor_layer .text .contents .text_align_top').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 9) {
                $('#lay_editor_layer .text .contents .text_align_top').addClass("focus");
                $('#lay_editor_layer .text .contents .text_align_middle').removeClass("focus");
            }
            else if (currentSelectedSubMenu == 10) {
                $('#lay_editor_layer .text .contents .text_align_middle').addClass("focus");
                $('#lay_editor_layer .text .contents .text_align_bottom').removeClass("focus");
            }
        }
    }
    else if (currentFocusTab == "text_color" || currentFocusTab == "text_back_color") {
        if (editLayerText_textColorKeyLocation.horizon > 1) {
            var colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).removeClass("focus");
            editLayerText_textColorKeyLocation.horizon -= 1;
            colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).addClass("focus");
        }
    }
    else if (currentFocusTab == "topWidget") {
        if (currentSelectedSubMenu > 0) {
            currentSelectedSubMenu -= 1;
            if (currentSelectedSubMenu == 0) {
                currentFocusTab = "left";
                $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentFocusLeftMenu]).addClass("focus");
                $("#lay_editor_layer .widgets .top_btn #1 .tv_btn").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 1) {
                $("#lay_editor_layer .widgets .top_btn #1 .tv_btn").addClass("focus");
                $("#lay_editor_layer .widgets .top_btn #2 .video_btn").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 2) {
                $("#lay_editor_layer .widgets .top_btn #2 .video_btn").addClass("focus");
                $("#lay_editor_layer .widgets .top_btn #3 .music_btn").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $("#lay_editor_layer .widgets .top_btn #3 .music_btn").addClass("focus");
                $("#lay_editor_layer .widgets .top_btn #4 .clock_btn").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 4) {
                $("#lay_editor_layer .widgets .top_btn #4 .clock_btn").addClass("focus");
                $("#lay_editor_layer .widgets .top_btn #5 .weather_btn").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 5) {
                $("#lay_editor_layer .widgets .top_btn #5 .weather_btn").addClass("focus");
                $("#lay_editor_layer .widgets .top_btn #6 .news_btn").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 6) {
                $("#lay_editor_layer .widgets .top_btn #6 .news_btn").addClass("focus");
                $("#lay_editor_layer .widgets .top_btn #7 .currencies_btn").removeClass("focus");
            }
        }
    }
    else if (currentFocusTab == "widgetList") {
        if (currentSelectedSubMenu > 0) {
            currentSelectedSubMenu -= 1;
            if (currentSelectedSubMenu == 0) {
                $("#lay_editor_layer .contents .navigation .left").addClass("focus");
                $("#lay_editor_layer .contents .item_1").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 1) {
                $("#lay_editor_layer .contents .item_1").addClass("focus");
                $("#lay_editor_layer .contents .item_2").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 2) {
                $("#lay_editor_layer .contents .item_2").addClass("focus");
                $("#lay_editor_layer .contents .item_3").removeClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $("#lay_editor_layer .contents .item_3").addClass("focus");
                $("#lay_editor_layer .contents .navigation .right").removeClass("focus");
            }
        }
    }
}


function editLayerChangeMenuRight() {
    if (currentFocusTab == "left")          // 좌측메뉴에서 우측으로 포커스 이동시
    {
        for (i = 0; i < 7; i++) {
            $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[i]).removeClass("focus");
        }

        // cancel -> go to apply
        if (currentSelectedMenu == 0) {
            currentSelectedSubMenu = 1;
            currentFocusTab = "bottom";
            $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
        }

        // Save -> go to ProjectName TextBox
        if (currentSelectedMenu == 1) {
            currentFocusTab = "textbox";
            $("#lay_editor_layer  #input_project_name_date").focus();
        }

        // Publish -> TextBox
        if (currentSelectedMenu == 2) {
            currentFocusTab = "textbox";
            $("#lay_editor_layer  #input_project_name_date").focus();
        }

        // Backgrounds -> go to color(top)
        if (currentSelectedMenu == 3) {
            currentFocusTab = "top";
            currentSelectedSubMenu = 1;
            $("#lay_editor_layer .backgrounds .top_btn #1 .color_btn").addClass("focus");
        }

        // widget -> go to TV
        if (currentSelectedMenu == 4) {
            currentFocusTab = "topWidget";
            currentSelectedSubMenu = 1;
            $("#lay_editor_layer .widgets .top_btn #1 .tv_btn").addClass("focus");
        }

        // Images -> go to ImagePreview_1
        if (currentSelectedMenu == 5) {
            currentFocusTab = "imageList";
            currentSelectedSubMenu = 1;
            $("#lay_editor_layer .images .contents .image_preview_1").addClass("focus");
        }
        // Text->textArea
        if (currentSelectedMenu == 6) {
            currentFocusTab = "textarea";
            currentSelectedSubMenu = 1;
            $('#lay_editor_layer .text .contents .text_input #input_text_input').focus();
        }
    }
    else if (currentFocusTab == "bottom")          // apply / cancel에서 대응
    {
        if (currentSelectedSubMenu == 1) {
            currentSelectedSubMenu = 2;
            $("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
            $("#lay_editor_layer  .bottom_btn .cancel").addClass("focus");
        }
    }
    else if (currentFocusTab == "top") {
        if (currentSelectedSubMenu == 1) {
            $("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("focus");
            $("#lay_editor_layer .backgrounds .top_btn .image_btn").addClass("focus");
        }
        if (currentSelectedSubMenu == 2) {
            $("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("focus");
            $("#lay_editor_layer .backgrounds .top_btn .video_btn").addClass("focus");
        }
        if (currentSelectedSubMenu == 3) {
            $("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("focus");
            $("#lay_editor_layer .backgrounds .top_btn .tv_btn").addClass("focus");
        }

        if (currentSelectedSubMenu < 3) currentSelectedSubMenu += 1;
    }
    else if (currentFocusTab == "backgroundPreview") {
        if (topSelectMenuName == "color" && editLayerBackgrounds_colorSubListKeyLocation.horizon < 10) {
            $("#lay_editor_layer .backgrounds .color_list .color_" + editLayerBackgrounds_colorSubListKeyLocation.horizon).removeClass("focus");
            editLayerBackgrounds_colorSubListKeyLocation.horizon += 1;
            $("#lay_editor_layer .backgrounds .color_list .color_" + editLayerBackgrounds_colorSubListKeyLocation.horizon).addClass("focus");
        }
    }
    else if (currentFocusTab == "imageList") {
        if (currentSelectedSubMenu < 5) {
            $("#lay_editor_layer .images .contents .image_preview_" + currentSelectedSubMenu).removeClass("focus");
            currentSelectedSubMenu += 1;
            $("#lay_editor_layer .images .contents .image_preview_" + currentSelectedSubMenu).addClass("focus");
        }
    }
    else if (currentFocusTab == "imageControl") {
        if (currentSelectedSubMenu < 6) {
            currentSelectedSubMenu += 1;
            if (currentSelectedSubMenu == 2) {
                $("#lay_editor_layer .images .contents .buttons .image_left").removeClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_right").addClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_up").addClass("focus");
            }
            else if (currentSelectedSubMenu == 4) {
                $("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_down").addClass("focus");
            }
            else if (currentSelectedSubMenu == 5) {
                $("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_plus").addClass("focus");
            }
            else if (currentSelectedSubMenu == 6) {
                $("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
                $("#lay_editor_layer .images .contents .buttons .image_minus").addClass("focus");
            }
        }
    }
    else if (currentFocusTab == "textarea_items") {
        if (currentSelectedSubMenu < 11) {
            currentSelectedSubMenu += 1;
            if (currentSelectedSubMenu == 2) {
                $('#lay_editor_layer .text .contents .text_font').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_size').addClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $('#lay_editor_layer .text .contents .text_size').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_color').addClass("focus");
            }
            else if (currentSelectedSubMenu == 4) {
                $('#lay_editor_layer .text .contents .text_color').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_weight').addClass("focus");
            }
            else if (currentSelectedSubMenu == 5) {
                $('#lay_editor_layer .text .contents .text_weight').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_back_color').addClass("focus");
            }
            else if (currentSelectedSubMenu == 6) {
                $('#lay_editor_layer .text .contents .text_back_color').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_align_left').addClass("focus");
            }
            else if (currentSelectedSubMenu == 7) {
                $('#lay_editor_layer .text .contents .text_align_left').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_align_center').addClass("focus");
            }
            else if (currentSelectedSubMenu == 8) {
                $('#lay_editor_layer .text .contents .text_align_center').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_align_right').addClass("focus");
            }
            else if (currentSelectedSubMenu == 9) {
                $('#lay_editor_layer .text .contents .text_align_right').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_align_top').addClass("focus");
            }
            else if (currentSelectedSubMenu == 10) {
                $('#lay_editor_layer .text .contents .text_align_top').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_align_middle').addClass("focus");
            }
            else if (currentSelectedSubMenu == 11) {
                $('#lay_editor_layer .text .contents .text_align_middle').removeClass("focus");
                $('#lay_editor_layer .text .contents .text_align_bottom').addClass("focus");
            }
        }
    }
    else if (currentFocusTab == "text_color" || currentFocusTab == "text_back_color") {
        if (editLayerText_textColorKeyLocation.horizon < 17) {
            var colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).removeClass("focus");
            editLayerText_textColorKeyLocation.horizon += 1;
            colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).addClass("focus");
        }
    }
    else if (currentFocusTab == "topWidget") {
        if (currentSelectedSubMenu < 7) {
            currentSelectedSubMenu += 1;
            if (currentSelectedSubMenu == 2) {
                $("#lay_editor_layer .widgets .top_btn #1 .tv_btn").removeClass("focus");
                $("#lay_editor_layer .widgets .top_btn #2 .video_btn").addClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $("#lay_editor_layer .widgets .top_btn #2 .video_btn").removeClass("focus");
                $("#lay_editor_layer .widgets .top_btn #3 .music_btn").addClass("focus");
            }
            else if (currentSelectedSubMenu == 4) {
                $("#lay_editor_layer .widgets .top_btn #3 .music_btn").removeClass("focus");
                $("#lay_editor_layer .widgets .top_btn #4 .clock_btn").addClass("focus");
            }
            else if (currentSelectedSubMenu == 5) {
                $("#lay_editor_layer .widgets .top_btn #4 .clock_btn").removeClass("focus");
                $("#lay_editor_layer .widgets .top_btn #5 .weather_btn").addClass("focus");
            }
            else if (currentSelectedSubMenu == 6) {
                $("#lay_editor_layer .widgets .top_btn #5 .weather_btn").removeClass("focus");
                $("#lay_editor_layer .widgets .top_btn #6 .news_btn").addClass("focus");
            }
            else if (currentSelectedSubMenu == 7) {
                $("#lay_editor_layer .widgets .top_btn #6 .news_btn").removeClass("focus");
                $("#lay_editor_layer .widgets .top_btn #7 .currencies_btn").addClass("focus");
            }
        }
    }
    else if (currentFocusTab == "widgetList") {
        if (currentSelectedSubMenu < 4) {
            currentSelectedSubMenu += 1;
            if (currentSelectedSubMenu == 1) {
                $("#lay_editor_layer .contents .navigation .left").removeClass("focus");
                $("#lay_editor_layer .contents .item_1").addClass("focus");
            }
            else if (currentSelectedSubMenu == 2) {
                $("#lay_editor_layer .contents .item_1").removeClass("focus");
                $("#lay_editor_layer .contents .item_2").addClass("focus");
            }
            else if (currentSelectedSubMenu == 3) {
                $("#lay_editor_layer .contents .item_2").removeClass("focus");
                $("#lay_editor_layer .contents .item_3").addClass("focus");
            }
            else if (currentSelectedSubMenu == 4) {
                $("#lay_editor_layer .contents .item_3").removeClass("focus");
                $("#lay_editor_layer .contents .navigation .right").addClass("focus");
            }
        }
    }
}

function editLayerChangeMenuUp() {
    if (currentFocusTab == "left") {
        var currentMenu = currentFocusLeftMenu;
        var nextMenu = currentFocusLeftMenu - 1;

        if (nextMenu < 2) nextMenu = 6;
        if (lnbTextProhibit == true && nextMenu == 6) nextMenu -= 1;
        if (lnbImagesProhibit == true && nextMenu == 5) nextMenu -= 1;
        if (lnbWidgetsProhibit == true && nextMenu == 4) nextMenu -= 1;

        currentFocusLeftMenu = nextMenu;

        $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentMenu]).removeClass("focus");
        $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[nextMenu]).addClass("focus");
    }
    else if (currentFocusTab == "bottom") {
        if (currentFocusLeftMenu == 1)       // save
        {
            currentFocusTab = "textbox";
            $("#lay_editor_layer  #input_project_name_date").focus();
        }
        if (currentFocusLeftMenu == 2)       // publish
        {
            currentFocusTab = "textbox";
            $("#lay_editor_layer  #input_project_name_date").focus();
        }
        if (currentFocusLeftMenu == 3)       // Background
        {
            editLayerBackgrounds_colorSubListKeyLocation.horizon = 1;
            currentFocusTab = "backgroundPreview";
            $("#lay_editor_layer .backgrounds .color_list .color_1").addClass("focus");
            $("#lay_editor_layer .backgrounds .image_preview_1").addClass("focus");
            $("#lay_editor_layer .backgrounds .video_preview_1").addClass("focus");
        }
        if (currentFocusLeftMenu == 4) {     // widgets
            if ($("#lay_editor_layer .widgets .popup_btn").is(':visible')) {
                currentFocusTab = "widgetSelect";
                $("#lay_editor_layer .widgets .popup_btn").addClass("focus");
            }
            else
            {
                currentSelectedSubMenu = 1;
                currentFocusTab = "widgetList";
                $("#lay_editor_layer .contents .item_1").addClass("focus");
            }
        }
        if (currentFocusLeftMenu == 5)       // image
        {
            currentFocusTab = "imageControl";
            currentSelectedSubMenu = 1;
            $("#lay_editor_layer .images .contents .buttons .image_left").addClass("focus");
        }
        if (currentFocusLeftMenu == 6)       // text
        {
            currentFocusTab = "textarea_items";
            currentSelectedSubMenu = 1;
            $('#lay_editor_layer .text .contents .text_font').addClass("focus");

        }
        $("#lay_editor_layer  .bottom_btn .apply").removeClass("focus");
        $("#lay_editor_layer  .bottom_btn .cancel").removeClass("focus");
    }
    else if (currentFocusTab == "backgroundPreview") {
        for (i = 0; i < 10; i++)
            $("#lay_editor_layer .backgrounds .color_list .color_" + i).removeClass("focus");
        $("#lay_editor_layer .backgrounds .image_preview_1").removeClass("focus");
        $("#lay_editor_layer .backgrounds .video_preview_1").removeClass("focus");
        currentFocusTab = "top";
        currentSelectedSubMenu = 1;
        editLayerBackgrounds_colorSubListKeyLocation.horizon = 1;
        $("#lay_editor_layer .backgrounds .top_btn #1 .color_btn").addClass("focus");
    }
    else if (currentFocusTab == "selectColor") {
        if (editLayerBackgrounds_colorSubListKeyLocation.vertical > 1) {
            $(".colorSubList .color_sub_" + editLayerBackgrounds_colorSubListKeyLocation.vertical).removeClass("focus");
            editLayerBackgrounds_colorSubListKeyLocation.vertical -= 1;
            $(".colorSubList .color_sub_" + editLayerBackgrounds_colorSubListKeyLocation.vertical).addClass("focus");
        }
    }
    else if (currentFocusTab == "imageControl") {
        currentFocusTab = "imageList";
        currentSelectedSubMenu = 1;
        console.log(currentFocusTab);
        $("#lay_editor_layer .images .contents .image_preview_1").addClass("focus");

        $("#lay_editor_layer .images .contents .buttons .image_left").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_minus").removeClass("focus");
    }
    else if (currentFocusTab == "textarea_items") {
        currentFocusTab = "textarea";
        currentSelectedSubMenu = 1;
        $('#lay_editor_layer .text .contents .text_input #input_text_input').focus();
        $('#lay_editor_layer .text .contents .text_font').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_size').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_color').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_weight').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_back_color').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_left').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_center').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_right').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_top').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_middle').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_bottom').removeClass("focus");
    }
    else if (currentFocusTab == "text_font") {
        if (editLayerText_textFontKeyLocation.vertical > 1) {
            $("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).removeClass("focus");
            editLayerText_textFontKeyLocation.vertical -= 1;
            $("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).addClass("focus");
        }
    }
    else if (currentFocusTab == "text_size") {
        if (editLayerText_textSizeKeyLocation.vertical > 1) {
            $("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).removeClass("focus");
            editLayerText_textSizeKeyLocation.vertical -= 1;
            $("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).addClass("focus");
        }
    }
    else if (currentFocusTab == "text_color" || currentFocusTab == "text_back_color") {
        if (editLayerText_textColorKeyLocation.vertical > 0) {
            var colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).removeClass("focus");
            editLayerText_textColorKeyLocation.vertical -= 1;
            colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).addClass("focus");
        }
    }
    else if (currentFocusTab == "widgetList") {
        currentSelectedSubMenu = 1;
        currentFocusTab = "topWidget";
        $("#lay_editor_layer .widgets .top_btn #1 .tv_btn").addClass("focus");
        $("#lay_editor_layer .contents .item_1").removeClass("focus");
        $("#lay_editor_layer .contents .item_2").removeClass("focus");
        $("#lay_editor_layer .contents .item_3").removeClass("focus");
        $("#lay_editor_layer .contents .item_4").removeClass("focus");
        $("#lay_editor_layer .contents .item_5").removeClass("focus");
        $("#lay_editor_layer .contents .navigation .left").removeClass("focus");
        $("#lay_editor_layer .contents .navigation .right").removeClass("focus");
    }
    else if (currentFocusTab == "widgetSelect") {
        currentSelectedSubMenu = 1;
        currentFocusTab = "widgetList";
        $("#lay_editor_layer .contents .item_1").addClass("focus");
        $("#lay_editor_layer .widgets .popup_btn").removeClass("focus");
    }
}

function editLayerChangeMenuDown() {
    if (currentFocusTab == "left") {
        var currentMenu = currentFocusLeftMenu;
        var nextMenu = currentFocusLeftMenu + 1;

        if (lnbWidgetsProhibit == true && nextMenu == 4) nextMenu += 1;
        if (lnbImagesProhibit == true && nextMenu == 5) nextMenu += 1;
        if (lnbTextProhibit == true && nextMenu == 6) nextMenu += 1;
        if (nextMenu > 6) nextMenu = 2;

        currentFocusLeftMenu = nextMenu;

        $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentMenu]).removeClass("focus");
        $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[nextMenu]).addClass("focus");
    }
    else if (currentFocusTab == "textbox" || currentFocusTab == "backgroundPreview") {
        currentSelectedSubMenu = 1;
        currentFocusTab = "bottom";
        $("#lay_editor_layer  #input_project_name_date").blur();
        $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
        for (i = 0; i < 10; i++)
            $("#lay_editor_layer .backgrounds .color_list .color_" + i).removeClass("focus");
        $("#lay_editor_layer .backgrounds .image_preview_1").removeClass("focus");
        $("#lay_editor_layer .backgrounds .video_preview_1").removeClass("focus");
    }
    else if (currentFocusTab == "top") {
        currentFocusTab = "backgroundPreview";
        $("#lay_editor_layer .backgrounds .color_list .color_1").addClass("focus");
        $("#lay_editor_layer .backgrounds .image_preview_1").addClass("focus");
        $("#lay_editor_layer .backgrounds .video_preview_1").addClass("focus");
        $("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("focus");
        $("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("focus");
        $("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("focus");
    }
    else if (currentFocusTab == "backgroundPreview") {
        currentFocusTab = "bottom";
        $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
        $("#lay_editor_layer  .bottom_btn .cancel").removeClass("focus");
    }
    else if (currentFocusTab == "selectColor") {
        if (editLayerBackgrounds_colorSubListKeyLocation.vertical < 6) {
            $(".colorSubList .color_sub_" + editLayerBackgrounds_colorSubListKeyLocation.vertical).removeClass("focus");
            editLayerBackgrounds_colorSubListKeyLocation.vertical += 1;
            $(".colorSubList .color_sub_" + editLayerBackgrounds_colorSubListKeyLocation.vertical).addClass("focus");
        }
    }
    else if (currentFocusTab == "imageList") {
        currentFocusTab = "imageControl";
        currentSelectedSubMenu = 1;
        $("#lay_editor_layer .images .contents .buttons .image_left").addClass("focus");

        $("#lay_editor_layer .images .contents .image_preview_1").removeClass("focus");
        $("#lay_editor_layer .images .contents .image_preview_2").removeClass("focus");
        $("#lay_editor_layer .images .contents .image_preview_3").removeClass("focus");
        $("#lay_editor_layer .images .contents .image_preview_4").removeClass("focus");
        $("#lay_editor_layer .images .contents .image_preview_5").removeClass("focus");
    }
    else if (currentFocusTab == "imageControl") {
        currentFocusTab = "bottom";
        currentSelectedSubMenu = 1;
        $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_left").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
        $("#lay_editor_layer .images .contents .buttons .image_minus").removeClass("focus");
    }
    else if (currentFocusTab == "textarea") {
        currentFocusTab = "textarea_items";
        currentSelectedSubMenu = 1;
        //$('#lay_editor_layer .text .contents .text_input #input_text_input').blur();
        $('#lay_editor_layer .text .contents .text_font').addClass("focus");
    }
    else if (currentFocusTab == "textarea_items") {
        currentFocusTab = "bottom";
        currentSelectedSubMenu = 1;
        $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
        $('#lay_editor_layer .text .contents .text_font').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_size').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_color').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_weight').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_back_color').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_left').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_center').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_right').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_top').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_middle').removeClass("focus");
        $('#lay_editor_layer .text .contents .text_align_bottom').removeClass("focus");
    }
    else if (currentFocusTab == "text_font") {
        if (editLayerText_textFontKeyLocation.vertical < 5) {
            $("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).removeClass("focus");
            editLayerText_textFontKeyLocation.vertical += 1;
            $("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).addClass("focus");
        }
    }
    else if (currentFocusTab == "text_size") {
        if (editLayerText_textSizeKeyLocation.vertical < 5) {
            $("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).removeClass("focus");
            editLayerText_textSizeKeyLocation.vertical += 1;
            $("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).addClass("focus");
        }
    }
    else if (currentFocusTab == "text_color" || currentFocusTab == "text_back_color") {
        if (editLayerText_textColorKeyLocation.vertical < 3) {
            var colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).removeClass("focus");
            editLayerText_textColorKeyLocation.vertical += 1;
            colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
            $("#lay_editor_layer .text .contents .text_color_list .palette .list_" + colorAddress).addClass("focus");
        }
    }
    else if (currentFocusTab == "topWidget") {
        currentSelectedSubMenu = 1;
        currentFocusTab = "widgetList";
        $("#lay_editor_layer .widgets .top_btn #1 .tv_btn").removeClass("focus");
        $("#lay_editor_layer .widgets .top_btn #2 .video_btn").removeClass("focus");
        $("#lay_editor_layer .widgets .top_btn #3 .music_btn").removeClass("focus");
        $("#lay_editor_layer .widgets .top_btn #4 .clock_btn").removeClass("focus");
        $("#lay_editor_layer .widgets .top_btn #5 .weather_btn").removeClass("focus");
        $("#lay_editor_layer .widgets .top_btn #6 .news_btn").removeClass("focus");
        $("#lay_editor_layer .widgets .top_btn #7 .currencies_btn").removeClass("focus");
        $("#lay_editor_layer .contents .item_1").addClass("focus");
    }
    else if (currentFocusTab == "widgetList") {

        $("#lay_editor_layer .contents .item_1").removeClass("focus");
        $("#lay_editor_layer .contents .item_2").removeClass("focus");
        $("#lay_editor_layer .contents .item_3").removeClass("focus");
        $("#lay_editor_layer .contents .navigation .left").removeClass("focus");
        $("#lay_editor_layer .contents .navigation .right").removeClass("focus");

        if ($("#lay_editor_layer .widgets .popup_btn").is(':visible')) {
            currentFocusTab = "widgetSelect";
            $("#lay_editor_layer .widgets .popup_btn").addClass("focus");
        }
        else
        {
            currentSelectedSubMenu = 1;
            currentFocusTab = "bottom";
            $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
        }
    }
    else if ( currentFocusTab == "widgetSelect")
    {
        currentSelectedSubMenu = 1;
        currentFocusTab = "bottom";
        $("#lay_editor_layer .widgets .popup_btn").removeClass("focus");
        $("#lay_editor_layer  .bottom_btn .apply").addClass("focus");
    }
}

function editLayerEnterKeyDown() {
    if (currentFocusTab == "left") {
        if (currentFocusLeftMenu == 0) editor_left_cancel();
        if (currentFocusLeftMenu == 1) editor_left_save();
        if (currentFocusLeftMenu == 2) editor_left_publish();
        if (currentFocusLeftMenu == 3) editor_left_backgrounds();
        if (currentFocusLeftMenu == 4) editor_left_widgets();
        if (currentFocusLeftMenu == 5) editor_left_images();
        if (currentFocusLeftMenu == 6) editor_left_text();
    }
    else {
        if (currentSelectedMenu == 0) runCancelEditMode();
        if (currentSelectedMenu == 1) runSaveEditMode();
        if (currentSelectedMenu == 2) runPublishEditMode();
        if (currentSelectedMenu == 3) runBackgroundsEditMode();
        if (currentSelectedMenu == 4) runWidgetEditMode();
        if (currentSelectedMenu == 5) runImagesEditMode();
        if (currentSelectedMenu == 6) runTextEditMode();
    }
}

function initSubItemFocus() {
    currentSelectedSubMenu = 0;
    editLayerBackgrounds_colorSubListKeyLocation.horizon = 0;
    editLayerBackgrounds_colorSubListKeyLocation.vertical = 4;

    for (i = 0; i < 10; i++)
        $("#lay_editor_layer .backgrounds .color_list .color_" + i).removeClass("focus");
    $("#lay_editor_layer .backgrounds .image_preview_1").removeClass("focus");
    $("#lay_editor_layer .backgrounds .video_preview_1").removeClass("focus");

    $("#lay_editor_layer .bottom_btn .apply").removeClass("focus");
    $("#lay_editor_layer .bottom_btn .cancel").removeClass("focus");
    $("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("focus");
    $("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("focus");
    $("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("focus");

    $("#lay_editor_layer .images .contents .buttons .image_left").removeClass("focus");
    $("#lay_editor_layer .images .contents .buttons .image_right").removeClass("focus");
    $("#lay_editor_layer .images .contents .buttons .image_up").removeClass("focus");
    $("#lay_editor_layer .images .contents .buttons .image_down").removeClass("focus");
    $("#lay_editor_layer .images .contents .buttons .image_plus").removeClass("focus");
    $("#lay_editor_layer .images .contents .buttons .image_minus").removeClass("focus");

    $("#lay_editor_layer .images .contents .image_preview_1").removeClass("focus");
    $("#lay_editor_layer .images .contents .image_preview_2").removeClass("focus");
    $("#lay_editor_layer .images .contents .image_preview_3").removeClass("focus");
    $("#lay_editor_layer .images .contents .image_preview_4").removeClass("focus");
    $("#lay_editor_layer .images .contents .image_preview_5").removeClass("focus");
}


function ready_editor_layer(cell_no) {
    selectedCellNo = cell_no;
    popup("lay_editor_layer");
    $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "1.0" }, 500, 'easeInOutQuint');
        loadCellProperty(selectedSlideListKind);
        loadEditorLayerLnb();
        loadEditorLayer();
    });

    currentFocusTab = "left";

    currentSelectedMenu = currentFocusLeftMenu;
    for (i = 0; i < 7; i++) {
        $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[i]).removeClass("focus");
    }
    $("#lay_editor_layer .left_btn .left_" + edit_detail_left_item[currentFocusLeftMenu]).addClass("focus");
    $("#lay_editor_layer .widgets .weather .weather_playlists .popup_btn").text("Not Selected");
    back_dimmed_open(selectedSlideListKind);
}

function loadCellProperty(kind) {
    for (var i = 1; i <= 25; i++) {
        cellKind[i] = originalEditKind.cell[i].kind;
        cellWidgetKind[i] = originalEditKind.cell[i].widget.widget_kind;
        cellSizeX[i] = originalEditKind.cell[i].x * 230;
        cellSizeY[i] = originalEditKind.cell[i].y * 130;
    }
}

function loadEditorLayerLnb() {
    var targetLeftBtn = new Object;

    switch (originalEditKind.cell[selectedCellNo].kind) {
        case "widgets":
            lnbWidgetsProhibit = false;
            lnbImagesProhibit = true;
            lnbTextProhibit = true;
            currentFocusLeftMenu = 4;
            break;
        case "image":
            lnbWidgetsProhibit = true;
            lnbImagesProhibit = false;
            lnbTextProhibit = true;
            currentFocusLeftMenu = 5;
            break;
        case "text":
            lnbWidgetsProhibit = true;
            lnbImagesProhibit = false;
            lnbTextProhibit = false;
            currentFocusLeftMenu = 6;
            break;
        case "empty":
            lnbWidgetsProhibit = true;
            lnbImagesProhibit = true;
            lnbTextProhibit = true;
            break;
    }

    // UI 적용
    if (lnbWidgetsProhibit) {
        $("#lay_editor_layer .left_btn .left_widgets_dimm").show();
        $("#lay_editor_layer .left_btn .left_widgets").hide();
        //$("#lay_editor_layer .left_btn .left_widgets").css({ "background-image": "url(../websrc/img/main/lb_editor_layer_left_10_dim.png)" });
        $("#lay_editor_layer .left_btn .left_widgets").parent().removeAttr("href");
    }
    else {
        $("#lay_editor_layer .left_btn .left_widgets_dimm").hide();
        $("#lay_editor_layer .left_btn .left_widgets").show();
        //$("#lay_editor_layer .left_btn .left_widgets").css({ "background-image": "url(../websrc/img/main/lb_editor_layer_left_10.png)" });
        $("#lay_editor_layer .left_btn .left_widgets").parent().attr("href", "#");
    }
    if (lnbImagesProhibit) {
        $("#lay_editor_layer .left_btn .left_images_dimm").show();
        $("#lay_editor_layer .left_btn .left_images").hide();
        //$("#lay_editor_layer .left_btn .left_images").css({ "background-image": "url(../websrc/img/main/lb_editor_layer_left_12_dim.png)" });
        $("#lay_editor_layer .left_btn .left_images").parent().removeAttr("href");
    }
    else {
        $("#lay_editor_layer .left_btn .left_images_dimm").hide();
        $("#lay_editor_layer .left_btn .left_images").show();
        //$("#lay_editor_layer .left_btn .left_images").css({ "background-image": "url(../websrc/img/main/lb_editor_layer_left_12.png)" });
        $("#lay_editor_layer .left_btn .left_images").parent().attr("href", "#");
    }
    if (lnbTextProhibit) {
        $("#lay_editor_layer .left_btn .left_text_dimm").show();
        $("#lay_editor_layer .left_btn .left_text").hide();
        //$("#lay_editor_layer .left_btn .left_text").css({ "background-image": "url(../websrc/img/main/lb_editor_layer_left_14_dim.png)" });
        $("#lay_editor_layer .left_btn .left_text").parent().removeAttr("href");
    }
    else {
        $("#lay_editor_layer .left_btn .left_text_dimm").hide();
        $("#lay_editor_layer .left_btn .left_text").show();
        //$("#lay_editor_layer .left_btn .left_text").css({ "background-image": "url(../websrc/img/main/lb_editor_layer_left_14.png)" });
        $("#lay_editor_layer .left_btn .left_text").parent().attr("href", "#");
    }
}


function loadEditorLayer() {
    if (cellKind[selectedCellNo] == "empty") {
        if (underEditKind.background.kind == "color") display_edit_layer("backgrounds", "color", "1");
        else if (underEditKind.background.kind == "image") display_edit_layer("backgrounds", "image", "2");
        else display_edit_layer("backgrounds", "color", "1");
    }
    else if (cellKind[selectedCellNo] == "widgets") {
        switch (cellWidgetKind[selectedCellNo]) {
            case "tv":
            case "video":
                display_edit_layer("widgets", "tv", "1");
                SetLiveThumnail();
                myPlayLists();
                break;
            case "weather":
                display_edit_layer("widgets", "weather", "5");
                preview_text_trigger();
                preview_text_style_change();
                text_popup_all_close();
                break;
        }
    }
    else if (cellKind[selectedCellNo] == "image") {
        // 이미지가 빈 영역이라면, empty와 똑같은 효과를 적용한다.
        var isItEmptyCellCount = 0;

        for (var i = 1; i <= 5; i++) {
            if (String(underEditKind.cell[selectedCellNo].image.url[i]) == "" || String(underEditKind.cell[selectedCellNo].image.url[i]) == "undefined" || String(underEditKind.cell[selectedCellNo].image.url[i]) == "null") {
                isItEmptyCellCount++;
            }
        }
        //if (isItEmptyCellCount == 5) {
        //    if (underEditKind.background.kind == "color") display_edit_layer("backgrounds", "color", "1");
        //    else if (underEditKind.background.kind == "image") display_edit_layer("backgrounds", "image", "2");
        //    else display_edit_layer("backgrounds", "color", "1");
        //}
        //else 
        display_edit_layer("images", "", "");
    }
    else if (cellKind[selectedCellNo] == "text") {
        display_edit_layer("text", "", "");
        preview_text_trigger();
        preview_text_style_change();
        text_popup_all_close();
    }
}


// 1-b-3. 공통 - cell 클릭 이벤트 - editor layer 보이기
function display_edit_layer(left_category, top_category, top_no) {
    // top
    if (top_no != "") $("#lay_editor_layer ." + left_category + " .top_btn #" + top_no).click();

    // left
    left_navigation(left_category);

    // contents
    window_reset();
    $("#lay_editor_layer ." + left_category).show();
    if (top_category != "") $("#lay_editor_layer ." + left_category + " ." + top_category).show();

    // backgrounds 경우, 배경이미지 불러오기
    if (left_category == "backgrounds") {
        switch (top_category) {
            case "color":
                break;
            case "image":
                if (String(underEditKind.background.image.url) == "" || String(underEditKind.background.image.url) == "undefined" || String(underEditKind.background.image.url) == "null") {
                    $('#lay_editor_layer .backgrounds .image .image_preview_1').css({ "background-image": "url(../websrc/img/main/lb_editor_layer_background_20.png)" });
                }
                else {
                    $("#lay_editor_layer .backgrounds .image .image_preview_1 img").attr("src", underEditKind.background.image.url);
                    $("#lay_editor_layer .backgrounds .image .image_preview_1 img").css({
                        'position': 'relative',
                        'width': underEditKind.background.image.width,
                        'height': underEditKind.background.image.height,
                        'top': underEditKind.background.image.top,
                        'left': underEditKind.background.image.left
                    });
                    //$('#lay_editor_layer .backgrounds .image .image_preview_1').css({ "background-image": "url(" + underEditKind.background.image.url + ")" });
                }
                break;
        }
    }

    // images인 경우, 5개의 이미지 불러오기
    else if (left_category == "images") {
        deleteFiveImages();
        loadFiveImages();
    }
    else if( left_category == "widgets")
    {
    }
}


function deleteFiveImages() {
    for (var i = 1; i <= 5; i++) {
        // 5개 이미지 제거				
        $("#lay_editor_layer .images .contents .image_preview_" + i + " .ableCell img").attr("src", "");

        var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + i + " .ableCell img");
        imageDepth.css({
            'position': 'relative',
            'width': '100%',
            'height': '100%',
            'top': 0,
            'left': 0
        });

        // 이미지 체크 마크 제거			
        $("#lay_editor_layer .images .contents .image_preview .image_selected").hide();

        // disableCell 제거
        $("#lay_editor_layer .image_preview .image_preview_" + i + " .ableCell").hide();
        $("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_1").hide();
        $("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_2").hide();
        $("#lay_editor_layer .image_preview .image_preview_" + i + " .cell_size").hide();

        // isFiveImageSetted 변수 false로 설정
        isFiveImageSetted[i] = false;
    }
}


function loadFiveImages() {
    for (var i = 1; i <= 5; i++) {
        // 5개 이미지 있는것은 보여준다.
        if (String(originalEditKind.cell[selectedCellNo].image.url[i]) != "" && String(originalEditKind.cell[selectedCellNo].image.url[i]) != "undefined" && String(originalEditKind.cell[selectedCellNo].image.url[i]) != "null") {
            $("#lay_editor_layer .images .contents .image_preview_" + i + " .ableCell img").attr("src", originalEditKind.cell[selectedCellNo].image.url[i]);

            setupActiveDisableCell(i);

            var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + i + " .ableCell img");

            if (String(originalEditKind.cell[selectedCellNo].image.imageInCellTop[i]) != "undefined") {
                imageDepth.css({
                    'position': 'relative',
                    'width': originalEditKind.cell[selectedCellNo].image.imageInCellWidth[i] + 'px',
                    'height': originalEditKind.cell[selectedCellNo].image.imageInCellHeight[i] + 'px',
                    'top': originalEditKind.cell[selectedCellNo].image.imageInCellTop[i] + 'px',
                    'left': originalEditKind.cell[selectedCellNo].image.imageInCellLeft[i] + 'px'
                });
            }

            else {
                imageDepth.css({
                    'position': 'relative',
                    'width': activeCellWidth[i] + 'px',
                    'height': activeCellHeight[i] + 'px',
                    'top': activeCellTop[i] + 'px',
                    'left': activeCellLeft[i] + 'px'
                });
            }


            // disableCell 보이기
            //setupActiveDisableCell(i);
            $("#lay_editor_layer .image_preview .image_preview_" + i + " .ableCell").show();
            $("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_1").show();
            $("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_2").show();
            $("#lay_editor_layer .image_preview .image_preview_" + i + " .cell_size").show();


            // isFiveImageSetted 변수 true로 설정
            isFiveImageSetted[i] = true;
        }

        // 이미지 체크 마크 보여준다.
        /*
        if (originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo != 0) {
            selectedFiveImageNo = originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo;
            selectedImageContorlNo = selectedFiveImageNo;
            $("#lay_editor_layer .images .contents .image_preview .image_selected").show();
            $("#lay_editor_layer .images .contents .image_preview .image_selected").css({
                top: "125px",
                left: (((selectedFiveImageNo - 1) * 131) + 343) + "px"
            });
        }
        */

        urlOfCellImage[i] = originalEditKind.cell[selectedCellNo].image.url[i];
        imageInCellPercentage[i] = originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i];
        imageInCellTop[i] = originalEditKind.cell[selectedCellNo].image.imageInCellTop[i];
        imageInCellLeft[i] = originalEditKind.cell[selectedCellNo].image.imageInCellLeft[i];
        imageInCellWidth[i] = originalEditKind.cell[selectedCellNo].image.imageInCellWidth[i];
        imageInCellHeight[i] = originalEditKind.cell[selectedCellNo].image.imageInCellHeight[i];
        imageInEditPercentage[i] = originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[i];
        imageInEditPositionX[i] = originalEditKind.cell[selectedCellNo].image.imageInEditPositionX[i];
        imageInEditPositionY[i] = originalEditKind.cell[selectedCellNo].image.imageInEditPositionY[i];
    }
}

function left_navigation(cursor) {
    // "Cancel"
    if (cursor == "cancel_layer") {
        // cursor
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: "180px" }, 500, 'easeInOutQuint');
        // top
        $("#lay_editor_layer .left_btn .left_widgets").animate({ top: "55px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets").css({ 'background-size': '75% 75%' });
        $("#lay_editor_layer .left_btn .left_images").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_text").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '85% 85%' });
        // middle
        $("#lay_editor_layer .left_btn .left_cancel").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_cancel").css({ 'background-size': '100% 100%' });
        // bottom
        $("#lay_editor_layer .left_btn .left_save").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_save").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_publish").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "335px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '75% 75%' });
    }
        // "Save"
    else if (cursor == "save") {
        // cursor
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: "180px" }, 500, 'easeInOutQuint');
        // top
        $("#lay_editor_layer .left_btn .left_images").animate({ top: "55px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images").css({ 'background-size': '75% 75%' });
        $("#lay_editor_layer .left_btn .left_text").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_cancel").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_cancel").css({ 'background-size': '85% 85%' });
        // middle
        $("#lay_editor_layer .left_btn .left_save").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_save").css({ 'background-size': '100% 100%' });
        // bottom
        $("#lay_editor_layer .left_btn .left_publish").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_widgets").animate({ top: "335px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets").css({ 'background-size': '75% 75%' });

    }
        // "Publish"
    else if (cursor == "publish") {
        // cursor
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: "180px" }, 500, 'easeInOutQuint');
        // top
        $("#lay_editor_layer .left_btn .left_images").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_images_dimm").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images_dimm").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_text").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_text_dimm").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text_dimm").css({ 'background-size': '85% 85%' });
        //$("#lay_editor_layer .left_btn .left_cancel").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_cancel").css({ 'background-size': '80% 80%' });
        //$("#lay_editor_layer .left_btn .left_save").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_save").css({ 'background-size': '85% 85%' });
        // middle
        $("#lay_editor_layer .left_btn .left_publish").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '100% 100%' });
        // bottom
        $("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_widgets").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_widgets_dimm").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets_dimm").css({ 'background-size': '80% 80%' });
    }
        // "Backgrounds"
    else if (cursor == "backgrounds") {
        // cursor
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: "180px" }, 500, 'easeInOutQuint');
        // top
        //$("#lay_editor_layer .left_btn .left_cancel").animate({ top: "55px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_cancel").css({ 'background-size': '75% 75%' });
        //$("#lay_editor_layer .left_btn .left_save").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_save").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_text").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_text_dimm").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text_dimm").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_publish").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '85% 85%' });
        // middle
        $("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '100% 100%' });
        // bottom
        $("#lay_editor_layer .left_btn .left_widgets").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_widgets_dimm").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets_dimm").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_images").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_images_dimm").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images_dimm").css({ 'background-size': '80% 80%' });
        //$("#lay_editor_layer .left_btn .left_text").animate({ top: "335px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '75% 75%' });

    }
        // "Widgets"
    else if (cursor == "widgets") {
        // left - cursor
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: "180px" }, 500, 'easeInOutQuint');
        // left- top
        //$("#lay_editor_layer .left_btn .left_save").animate({ top: "55px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_save").css({ 'background-size': '75% 75%' });
        $("#lay_editor_layer .left_btn .left_publish").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '85% 85%' });
        // left - middle
        $("#lay_editor_layer .left_btn .left_widgets").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets").css({ 'background-size': '100% 100%' });
        $("#lay_editor_layer .left_btn .left_widgets_dimm").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets_dimm").css({ 'background-size': '100% 100%' });
        // left- bottom
        $("#lay_editor_layer .left_btn .left_images").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_images_dimm").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images_dimm").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_text").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_text_dimm").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text_dimm").css({ 'background-size': '80% 80%' });
        //$("#lay_editor_layer .left_btn .left_cancel").animate({ top: "335px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_cancel").css({ 'background-size': '75% 75%' });

    }
        // "Images"
    else if (cursor == "images") {
        // cursor
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: "180px" }, 500, 'easeInOutQuint');
        // top
        //$("#lay_editor_layer .left_btn .left_publish").animate({ top: "55px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '75% 75%' });
        $("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_widgets").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_widgets_dimm").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets_dimm").css({ 'background-size': '85% 85%' });
        // middle
        $("#lay_editor_layer .left_btn .left_images").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images").css({ 'background-size': '100% 100%' });
        $("#lay_editor_layer .left_btn .left_images_dimm").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images_dimm").css({ 'background-size': '100% 100%' });
        // bottom
        $("#lay_editor_layer .left_btn .left_text").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_text_dimm").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text_dimm").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_publish").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '80% 80%' });
        //$("#lay_editor_layer .left_btn .left_save").animate({ top: "335px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_save").css({ 'background-size': '75% 75%' });

    }
        // "Text"
    else if (cursor == "text") {
        // cursor
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: "180px" }, 500, 'easeInOutQuint');
        // top
        //$("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "55px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '75% 75%' });
        $("#lay_editor_layer .left_btn .left_widgets").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_widgets_dimm").animate({ top: "100px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_widgets_dimm").css({ 'background-size': '80% 80%' });
        $("#lay_editor_layer .left_btn .left_images").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_images_dimm").animate({ top: "148px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_images_dimm").css({ 'background-size': '85% 85%' });
        // middle
        $("#lay_editor_layer .left_btn .left_text").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text").css({ 'background-size': '100% 100%' });
        $("#lay_editor_layer .left_btn .left_text_dimm").animate({ top: "193px", left: "33px", opacity: "1.0" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_text_dimm").css({ 'background-size': '100% 100%' });
        // bottom
        $("#lay_editor_layer .left_btn .left_publish").animate({ top: "241px", left: "33px", opacity: "0.8" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '85% 85%' });
        $("#lay_editor_layer .left_btn .left_backgrounds").animate({ top: "289px", left: "33px", opacity: "0.6" }, 500, 'easeInOutQuint');
        $("#lay_editor_layer .left_btn .left_backgrounds").css({ 'background-size': '80% 80%' });
        //$("#lay_editor_layer .left_btn .left_publish").animate({ top: "335px", left: "33px", opacity: "0.4" }, 500, 'easeInOutQuint');
        //$("#lay_editor_layer .left_btn .left_publish").css({ 'background-size': '75% 75%' });

    }
}



function popup(id_lay) {
    $("#" + id_lay).show();
    $("body").append("<div id='popup_block' class='disabled_left'></div>");
    $("#" + id_lay + "_block").css("z-index", $("#" + id_lay).css("z-index") - 1);
    $("#" + id_lay + "_block").height($(document).height());
}
function popclose(id_lay) {
    $("#" + id_lay).hide();
    $("#popup_block").remove();
    back_dimmed_close();
}

function top_btn_reset(category) {
    if (category == "backgrounds") {
        color_sub_list_reset();
        $("#lay_editor_layer .backgrounds .color").hide();
        $("#lay_editor_layer .backgrounds .image").hide();
        $("#lay_editor_layer .backgrounds .video").hide();
        $("#lay_editor_layer .backgrounds .tv").hide();

        $("#lay_editor_layer .backgrounds .top_btn .color_btn").removeClass("selected");
        $("#lay_editor_layer .backgrounds .top_btn .image_btn").removeClass("selected");
        $("#lay_editor_layer .backgrounds .top_btn .video_btn").removeClass("selected");
        /*$("#lay_editor_layer .backgrounds .top_btn .color_btn").css({'background-image':''});
        $("#lay_editor_layer .backgrounds .top_btn .image_btn").css({'background-image':''});
        $("#lay_editor_layer .backgrounds .top_btn .video_btn").css({'background-image':''});
        $("#lay_editor_layer .backgrounds .top_btn .tv_btn").css({'background-image':''});	*/
    }
    else if (category == "widgets") {
        $("#lay_editor_layer .widgets .tv").hide();
        $("#lay_editor_layer .widgets .video").hide();
        $("#lay_editor_layer .widgets .music").hide();
        $("#lay_editor_layer .widgets .clock").hide();
        $("#lay_editor_layer .widgets .weather").hide();
        $("#lay_editor_layer .widgets .news").hide();
        $("#lay_editor_layer .widgets .currencies").hide();
        $("#lay_editor_layer .widgets .top_btn .tv_btn").css({ 'background-image': '' });
        $("#lay_editor_layer .widgets .top_btn .video_btn").css({ 'background-image': '' });
        $("#lay_editor_layer .widgets .top_btn .music_btn").css({ 'background-image': '' });
        $("#lay_editor_layer .widgets .top_btn .clock_btn").css({ 'background-image': '' });
        $("#lay_editor_layer .widgets .top_btn .weather_btn").css({ 'background-image': '' });
        $("#lay_editor_layer .widgets .top_btn .news_btn").css({ 'background-image': '' });
        $("#lay_editor_layer .widgets .top_btn .currencies_btn").css({ 'background-image': '' });
    }
}


// 1-e-2. 공통 - Top button reset, Window reset - Window reset
function window_reset() {
    $("#lay_editor_layer .cancel_layer").hide();
    $("#lay_editor_layer .save").hide();
    $("#lay_editor_layer .publish").hide();
    $("#lay_editor_layer .backgrounds").hide();
    $("#lay_editor_layer .widgets").hide();
    $("#lay_editor_layer .images").hide();
    $("#lay_editor_layer .text").hide();
}

// 2-a-3. Backgrounds - Color - color list 선택한 경우 효과 (color 적용 + 체크 이미지 출현)
function color_selected_effect(color_column, color_selected_no) {
    var check_x;
    underEditKind.background.color = color_selected_no;
    if (color_column == "1") check_x = 348;
    else if (color_column == "2") check_x = 414;
    else if (color_column == "3") check_x = 481;
    else if (color_column == "4") check_x = 548;
    else if (color_column == "5") check_x = 614;
    else if (color_column == "6") check_x = 681;
    else if (color_column == "7") check_x = 748;
    else if (color_column == "8") check_x = 815;
    else if (color_column == "9") check_x = 881;
    else if (color_column == "10") check_x = 955;
    $("#lay_editor_layer .backgrounds .color_list .color_" + color_column).css("background-color", underEditKind.background.color);
    $("#color_sub_list_" + color_column).hide();
    $("#lay_editor_layer .backgrounds .color_selected").css("top", "202px");
    $("#lay_editor_layer .backgrounds .color_selected").css("left", check_x + "px");

}


// 2-a-4. Backgrounds - Color - color 종료 이벤트
function color_sub_list_reset() {
    $("#color_sub_list_1").hide();
    $("#color_sub_list_2").hide();
    $("#color_sub_list_3").hide();
    $("#color_sub_list_4").hide();
    $("#color_sub_list_5").hide();
    $("#color_sub_list_6").hide();
    $("#color_sub_list_7").hide();
    $("#color_sub_list_8").hide();
    $("#color_sub_list_9").hide();
    $("#color_sub_list_10").hide();
}

// Backgrounds - Image - image list 선택한 경우 효과 (select or delete 판단 후, 이미지 선택 체크 or 해제)
function backgrounds_image_select_effect() {
    // select 모드
    if (backgrounds_image_click_mode == "select") {
        isImageChecked = true;
        backgrounds_selected_image_process();
        $('#lay_editor_layer .backgrounds .preview .ableCell img').remove();
        $('#lay_editor_layer .backgrounds .preview .previewImage img').remove();
        if (selectedImageKind == "myImages")
        {
            $('#lay_editor_layer .backgrounds .preview .ableCell').append("<img src='" + selectBackgroundImage.myImages.url[selectedMyImagesNo] + "'></img>");
            $('#lay_editor_layer .backgrounds .preview .previewImage').append("<img src='" + selectBackgroundImage.myImages.url[selectedMyImagesNo] + "'></img>");
        }
        if (selectedImageKind == "digitalAndArt") {
            $('#lay_editor_layer .backgrounds .preview .ableCell').append("<img src='" + selectBackgroundImage.digitalAndArt.url[selectedDigitalAndArtNo] + "'></img>");
            $('#lay_editor_layer .backgrounds .preview .previewImage').append("<img src='" + selectBackgroundImage.digitalAndArt.url[selectedDigitalAndArtNo] + "'></img>");
        }
        if (selectedImageKind == "plantsAndFlowers") {
            $('#lay_editor_layer .backgrounds .preview .ableCell').append("<img src='" + selectBackgroundImage.plantsAndFlowers.url[selectedPlantsAndFlowersNo] + "'></img>");
            $('#lay_editor_layer .backgrounds .preview .previewImage').append("<img src='" + selectBackgroundImage.plantsAndFlowers.url[selectedPlantsAndFlowersNo] + "'></img>");
        }
        if (selectedImageKind == "placesAndLandscape") {
            $('#lay_editor_layer .backgrounds .preview .ableCell').append("<img src='" + selectBackgroundImage.placesAndLandscape.url[selectedPlacesAndLandscapeNo] + "'></img>");
            $('#lay_editor_layer .backgrounds .preview .previewImage').append("<img src='" + selectBackgroundImage.placesAndLandscape.url[selectedPlacesAndLandscapeNo] + "'></img>");
        }
        if (selectedImageKind == "natureAndAnimals") {
            $('#lay_editor_layer .backgrounds .preview .ableCell').append("<img src='" + selectBackgroundImage.natureAndAnimals.url[selectedNatureAndAnimalsNo] + "'></img>");
            $('#lay_editor_layer .backgrounds .preview .previewImage').append("<img src='" + selectBackgroundImage.natureAndAnimals.url[selectedNatureAndAnimalsNo] + "'></img>");
        }

        var image = $('#lay_editor_layer .backgrounds .preview .ableCell img');
        var ableCell = $('#lay_editor_layer .backgrounds .preview .ableCell');
        var preview = $('#lay_editor_layer .backgrounds .preview .previewImage img');
        image.hide();

        setTimeout(function () {
            image.css({
                'position': 'relative',
                'width': preview.css('width'),
                'height': preview.css('height'),
                'top': 0,
                'left': 0
            });
        }, 100);

        setTimeout(function () {
            // Get the width here
            var realWidth = image.width();
            var realHeight = image.height();
            var fitWidth = ableCell.width();
            var fitHeight = ableCell.height();
            var imageDepth = $('#lay_editor_layer .backgrounds .preview .ableCell img');

            var dx = realWidth / fitWidth;
            var dy = realHeight / fitHeight;
            var resultWidth, resultHeight;

            if (dx == dy) {
                resultWidth = fitWidth;
                resultHeight = fitHeight;
            }
            else if (dx < dy) {
                if (dx <= 1) {
                    resultWidth = fitWidth;
                    resultHeight = realHeight / realWidth * fitWidth;
                }
                else {
                    resultWidth = fitWidth;
                    resultHeight = realHeight / (realWidth / fitWidth);
                }
            }
            else if (dx > dy) {
                if (dy <= 1) {
                    resultWidth = realWidth / realHeight * fitHeight;
                    resultHeight = fitHeight;
                }
                else {
                    resultWidth = realWidth / (realHeight / fitHeight);
                    resultHeight = fitHeight;
                }
            }

            var zoom_value = parseInt(resultWidth / preview.css('width').replace("px", "") * 100);

            if (zoom_value > 300) {
                resultWidth = resultWidth / zoom_value * 300;
                resultHeight = resultHeight / zoom_value * 300;
                zoom_value = 300;
            }

            imageDepth.css({
                'position': 'relative',
                'width': resultWidth,
                'height': resultHeight,
                'top': 0,
                'left': 0
            });

            backgroundInCellWidth = parseInt(imageDepth.css('width')) / 2;
            backgroundInCellHeight = parseInt(imageDepth.css('height')) / 2;
            image.show();

            $("#lay_editor_layer .select_an_image .circle_value").text(zoom_value + "%");
            $("#lay_editor_layer .select_an_image .circle_value").css("left", 85 + (zoom_value / 2));
            $("#lay_editor_layer .select_an_image .circle").css("left", 85 + (zoom_value / 2));
        }, 300);
    }
    else if (backgrounds_image_click_mode == "delete") {
        // google app engine 연동 : 이미지 삭제 호출
        body_dimmed_open();
        document.process.location.href = "./delete_background/?selectedMyImagesNo=" + selectedMyImagesNo;
    }
}

// Backgrounds - Image - select된 이미지 처리 함수
function backgrounds_selected_image_process() {
    // 이미지 위에 V 체크			
    $("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").show();
    $("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").css("top", selectedCheckImageIconY + "px");
    $("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").css("left", selectedCheckImageIconX + "px");

    // 우측 상단 버튼 이미지 "+" -> "V"  바꿈
    $("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({ 'background-position': '0 -23px' });

    // 우측 상단 버튼 이미지 "-" 제거
    $("#lay_editor_layer .backgrounds .image .select_an_image .minus").hide();

}

// Backgrounds - Image - image 종료 이벤트
function backgrounds_image_list_reset() {
    // 체크 이미지 제거
    $("#lay_editor_layer .backgrounds .image .select_an_image .image_selected").hide();
    
    // 우측 상단 버튼 리셋
    isImageChecked = false;
    $("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({ 'background-position': '0 0px' });

    // 우측 상단 버튼 이미지 "-" 표시
    $("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();

    selectedImageKind = null;
    selectedMyImagesNo = null;
    selectedDigitalAndArtNo = null;
    selectedPlantsAndFlowersNo = null;
    selectedPlacesAndLandscapeNo = null;
    selectedNatureAndAnimalsNo = null;
}

function setupActiveDisableCell(order) {
    // cell unit 계산
    var previewCellLength;
    if (originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1) {
        previewCellLength = 140 / (originalEditKind.cell[selectedCellNo].x * 1.778);
    }
    else {
        previewCellLength = 140 / (originalEditKind.cell[selectedCellNo].y * 1);
    }

    // activeCell 영역 정의
    if (originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1) {
        activeCellWidth[order] = 140;
        activeCellHeight[order] = previewCellLength * originalEditKind.cell[selectedCellNo].y * 1;
        activeCellTop[order] = 0;
        activeCellLeft[order] = 0;
    }
    else {
        activeCellWidth[order] = parseInt(previewCellLength * originalEditKind.cell[selectedCellNo].x * 1.778);
        activeCellHeight[order] = 140;
        activeCellTop[order] = 0;
        activeCellLeft[order] = 0;
    }

    // disableCell 영역 정의
    if (originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1) {
        $("#lay_editor_layer .image_preview .image_preview_" + order + " .ableCell").css({
            "background-color": "rgba(255, 255, 255, 1)",
            top: 0,
            left: 0,
            "width": "140px",
            "height": parseInt((activeCellHeight[order])) + "px",
            "top": parseInt((140 - activeCellHeight[order]) / 2) + "px"
        });
        $("#lay_editor_layer .image_preview .image_preview_" + order + " .disableCell_1").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: 0,
            left: 0,
            "width": "140px",
            "height": parseInt((140 - activeCellHeight[order]) / 2) + "px"
        });
        $("#lay_editor_layer .image_preview .image_preview_" + order + " .disableCell_2").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: parseInt((140 + activeCellHeight[order]) / 2) + "px",
            left: 0,
            "width": "140px",
            "height": parseInt((140 - activeCellHeight[order]) / 2) + "px"
        });
    }
    else {
        $("#lay_editor_layer .image_preview .image_preview_" + order + " .ableCell").css({
            "background-color": "rgba(255, 255, 255, 1)",
            top: 0,
            left: 0,
            "width": parseInt((activeCellWidth[order])) + "px",
            "height": "140px",
            "left": parseInt((140 - activeCellWidth[order]) / 2) + "px"
        });
        $("#lay_editor_layer .image_preview .image_preview_" + order + " .disableCell_1").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: 0,
            left: 0,
            "width": parseInt((140 - activeCellWidth[order]) / 2) + "px",
            "height": "140px"
        });
        $("#lay_editor_layer .image_preview .image_preview_" + order + " .disableCell_2").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: 0,
            left: parseInt((140 + activeCellWidth[order]) / 2) + "px",
            "width": parseInt((140 - activeCellWidth[order]) / 2) + "px",
            "height": "140px"
        });
    }

    // sell size 정의
    $("#lay_editor_layer .image_preview .image_preview_" + order + " .cell_size .pix").text((originalEditKind.cell[selectedCellNo].x * 256) + " x " + (originalEditKind.cell[selectedCellNo].y * 144));

}

function setupActiveDisableCellPop(order) {
    // cell unit 계산
    var previewCellLength;
    if (originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1) {
        previewCellLength = 560 / (originalEditKind.cell[selectedCellNo].x * 1.778);
    }
    else {
        previewCellLength = 560 / (originalEditKind.cell[selectedCellNo].y * 1);
    }

    // activeCell 영역 정의
    if (originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1) {
        activeCellWidth[order] = 560;
        activeCellHeight[order] = previewCellLength * originalEditKind.cell[selectedCellNo].y * 1;
        activeCellTop[order] = 0;
        activeCellLeft[order] = 0;
    }
    else {
        activeCellWidth[order] = parseInt(previewCellLength * originalEditKind.cell[selectedCellNo].x * 1.778);
        activeCellHeight[order] = 560;
        activeCellTop[order] = 0;
        activeCellLeft[order] = 0;
    }

    // disableCell 영역 정의
    if (originalEditKind.cell[selectedCellNo].x * 1.778 > originalEditKind.cell[selectedCellNo].y * 1) {
        $("#lay_editor_layer .images .select_an_image .preview .ableCell").css({
            "background-color": "rgba(255, 255, 255, 1)",
            top: 0,
            left: 0,
            "width": "560px",
            "height": parseInt((activeCellHeight[order])) + "px",
            "top": parseInt((560 - activeCellHeight[order]) / 2) + "px"
        });
        $("#lay_editor_layer .images .select_an_image .preview .disableCell_1").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: 0,
            left: 0,
            "width": "560px",
            "height": parseInt((560 - activeCellHeight[order]) / 2) + "px"
        });
        $("#lay_editor_layer .images .select_an_image .preview .disableCell_2").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: parseInt((560 + activeCellHeight[order]) / 2) + "px",
            left: 0,
            "width": "560px",
            "height": parseInt((560 - activeCellHeight[order]) / 2) + "px"
        });
    }
    else {
        $("#lay_editor_layer .images .select_an_image .preview .ableCell").css({
            "background-color": "rgba(255, 255, 255, 1)",
            top: 0,
            left: 0,
            "width": parseInt((activeCellWidth[order])) + "px",
            "height": "560px",
            "left": parseInt((560 - activeCellWidth[order]) / 2) + "px"
        });
        $("#lay_editor_layer .images .select_an_image .preview .disableCell_1").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: 0,
            left: 0,
            "width": parseInt((560 - activeCellWidth[order]) / 2) + "px",
            "height": "560px"
        });
        $("#lay_editor_layer .images .select_an_image .preview .disableCell_2").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            top: 0,
            left: parseInt((560 + activeCellWidth[order]) / 2) + "px",
            "width": parseInt((560 - activeCellWidth[order]) / 2) + "px",
            "height": "560px"
        });
    }

    $("#lay_editor_layer .images .select_an_image .preview .disableCell_1").show();
    $("#lay_editor_layer .images .select_an_image .preview .ableCell").show();
    $("#lay_editor_layer .images .select_an_image .preview .disableCell_2").show();
    $("#lay_editor_layer .images .select_an_image .preview .cell_size .pix").show();
    
    // sell size 정의
    $("#lay_editor_layer .images .select_an_image .preview .cell_size .pix").text((originalEditKind.cell[selectedCellNo].x * 256) + " x " + (originalEditKind.cell[selectedCellNo].y * 144));
}

// 4-a-2. Images - 기본 창 - Select an image 창 열기 함수
function images_open_select_an_image() {
    // 뒷 배경 dimmed 처리
    $("#lay_editor_layer").append("<div id='select_an_image_block' class='disabled_left'></div>");
    $("#select_an_image_block").css("z-index", $("#lay_editor_layer .images .contents .select_an_image").css("z-index") - 1);
    $("#select_an_image_block").height($(document).height());

    // select_an_image 창 보이기
    $("#lay_editor_layer .images .contents .select_an_image").show();
    $('#lay_editor_layer .images .contents .select_an_image').animate({ opacity: "0.0" }, 0, 'easeInOutQuint', function () {
        $('#lay_editor_layer .images .contents .select_an_image').animate({ opacity: "1.0" }, 500, 'easeInOutQuint');
    });

    if (platform == "device") {
        $("#lay_editor_layer .select_an_image .plus").hide();
        $("#lay_editor_layer .select_an_image .minus").hide();
    }
    else {
        $("#lay_editor_layer .select_an_image .plus").show();
        $("#lay_editor_layer .select_an_image .minus").show();
    }
    $("#lay_editor_layer .select_an_image .plus").show();
    $("#lay_editor_layer .select_an_image .minus").show();

    $("#lay_editor_layer .images .select_an_image .preview .ableCell img").remove();
    $("#lay_editor_layer .images .select_an_image .preview .previewImage img").remove();

    // google app engine 연동 : 이미지 로드 호출
    //back_dimmed_open();
    document.process.location.href = "./load_cell";

}

// Images - Select an image 창 - image list 선택한 경우 효과 (select or delete 판단 후, 이미지 선택 체크 or 해제)
function images_image_select_effect() {
    // select 모드
    if (images_image_click_mode == "select") {
        isImageChecked = true;
        images_selected_image_process();
        $('#lay_editor_layer .images .preview .ableCell img').remove();
        $('#lay_editor_layer .images .preview .previewImage img').remove();
        $('#lay_editor_layer .images .preview .ableCell').append("<img src='" + selectCellImage.myImages.url[selectedMyImagesNo] + "'></img>");
        $('#lay_editor_layer .images .preview .previewImage').append("<img src='" + selectCellImage.myImages.url[selectedMyImagesNo] + "'></img>");

        var image = $('#lay_editor_layer .images .preview .ableCell img');
        var ableCell = $('#lay_editor_layer .images .preview .ableCell');
        var preview = $('#lay_editor_layer .images .preview .previewImage img');
        image.hide();

        setTimeout(function () {
            image.css({
                'position': 'relative',
                'width': preview.css('width'),
                'height': preview.css('height'),
                'top': 0,
                'left': 0
            });
        }, 100);

        setTimeout(function () {
            // Get the width here
            var realWidth = image.width();
            var realHeight = image.height();
            var fitWidth = ableCell.width();
            var fitHeight = ableCell.height();
            var imageDepth = $('#lay_editor_layer .images .preview .ableCell img');

            var dx = realWidth / fitWidth;
            var dy = realHeight / fitHeight;
            var resultWidth, resultHeight;

            if (dx == dy) {
                resultWidth = fitWidth;
                resultHeight = fitHeight;
            }
            else if (dx < dy) {
                if (dx <= 1) {
                    resultWidth = fitWidth;
                    resultHeight = realHeight / realWidth * fitWidth;
                }
                else {
                    resultWidth = fitWidth;
                    resultHeight = realHeight / (realWidth / fitWidth);
                }
            }
            else if (dx > dy) {
                if (dy <= 1) {
                    resultWidth = realWidth / realHeight * fitHeight;
                    resultHeight = fitHeight;
                }
                else {
                    resultWidth = realWidth / (realHeight / fitHeight);
                    resultHeight = fitHeight;
                }
            }

            var zoom_value = parseInt(resultWidth / preview.css('width').replace("px", "") * 100);
            
            if (zoom_value > 300)
            {
                resultWidth = resultWidth / zoom_value * 300;
                resultHeight = resultHeight / zoom_value * 300;
                zoom_value = 300;
            }

            imageDepth.css({
                'position': 'relative',
                'width': resultWidth,
                'height': resultHeight,
                'top': 0,
                'left': 0
            });

            imageInCellWidth[selectedFiveImageNo] = parseInt(imageDepth.css('width')) / 4;
            imageInCellHeight[selectedFiveImageNo] = parseInt(imageDepth.css('height')) / 4;
            image.show();

            $("#lay_editor_layer .select_an_image .circle_value").text(zoom_value + "%");
            $("#lay_editor_layer .select_an_image .circle_value").css("left", 85 + (zoom_value / 2));
            $("#lay_editor_layer .select_an_image .circle").css("left", 85 + (zoom_value / 2));
        }, 300);
    }
    else if (images_image_click_mode == "delete") {
        // google app engine 연동 : 이미지 삭제 호출
        body_dimmed_open();
        document.process.location.href = "./delete_cell/?selectedMyImagesNo=" + selectedMyImagesNo;
    }
}

// 4-b-4. Images - Select an image 창 - select된 이미지 처리 함수
function images_selected_image_process() {

    // 4-b-4-(1). 이미지 위에 V 체크			
    $("#lay_editor_layer .images .contents .select_an_image .image_selected").show();
    $("#lay_editor_layer .images .contents .select_an_image .image_selected").css("top", selectedCheckImageIconY + "px");
    $("#lay_editor_layer .images .contents .select_an_image .image_selected").css("left", selectedCheckImageIconX + "px");

    // 4-b-4-(2). 우측 상단 버튼 이미지 "+" -> "V"  바꿈
    $("#lay_editor_layer .images .contents .select_an_image .plus").css({ 'background-position': '0 -23px' });

    // 4-b-4-(3).우측 상단 버튼 이미지 "-" 제거
    $("#lay_editor_layer .images .contents .select_an_image .minus").hide();
}

function imageInCellMove(kind) {
    targetImage = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .preview img");
    switch (kind) {
        case "up":
            //if (parseFloat(targetImage.css('height')) - activeCellTop[selectedFiveImageNo] - activeCellHeight[selectedFiveImageNo] >= - parseFloat(targetImage.css('top')))
            {
                var temp = $(targetImage).css("top").replace("px", "");
                temp = parseFloat(temp) - parseFloat($("body").css("zoom"));
                targetImage.css({ 'top': temp + 'px' });
                imageInCellTop[selectedFiveImageNo] = $(targetImage).css("top");
            }
            break;
        case "down":
            //if (activeCellTop[selectedFiveImageNo] >= parseFloat(targetImage.css('top')))
            {
                var temp = $(targetImage).css("top").replace("px", "");
                console.log(temp);
                temp = parseFloat(temp) + parseFloat($("body").css("zoom"));
                console.log(temp);
                targetImage.css({ 'top': temp + 'px' });
                imageInCellTop[selectedFiveImageNo] = $(targetImage).css("top").replace("px", "");
            }
            break;
        case "left":
            //if (parseFloat(targetImage.css('width')) - activeCellLeft[selectedFiveImageNo] - activeCellWidth[selectedFiveImageNo] > -parseFloat(targetImage.css('left')))
            {
                var temp = $(targetImage).css("left").replace("px", "");
                temp = parseFloat(temp) - parseFloat($("body").css("zoom"));
                targetImage.css({ 'left': temp + 'px' });
                imageInCellLeft[selectedFiveImageNo] = parseFloat($(targetImage).css("left"));
            }
            break;
        case "right":
            //if (activeCellLeft[selectedFiveImageNo] > parseFloat(targetImage.css('left')))
            {
                var temp = $(targetImage).css("left").replace("px", "");
                temp = parseFloat(temp) + parseFloat($("body").css("zoom"));
                targetImage.css({ 'left': temp + 'px' });
                imageInCellLeft[selectedFiveImageNo] = parseFloat($(targetImage).css("left"));
            }
            break;
        default:
            break;
    }
}

function imageInCellZoom(kind) {
    var zoom_value = parseInt($("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle_value").text().replace("%", ""));
    var temp_x = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle").css("left").replace("px", "");

    switch (kind) {
        case "in":          // plus
            zoom_value = zoom_value - (zoom_value % 5) + 5;
            if (zoom_value > 300) zoom_value = 300;
            break;
        case "out":         // minus
            if (zoom_value % 5 == 0)
            {
                zoom_value = parseInt(zoom_value) - 5;
            }
            else
            {
                zoom_value = parseInt(zoom_value) - parseInt(zoom_value % 5);
            }
            if (zoom_value < 0) zoom_value = 0;
            break;
    }

    

    $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle_value").text(zoom_value + "%");
    $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle_value").css("left", 85 + (zoom_value / 2));
    $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle").css("left", 85 + (zoom_value / 2));

    targetImage = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .preview .ableCell img");
    previewImage = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .previewImage img");

    var x = previewImage.css("width").replace("px", "");
    var y = previewImage.css("height").replace("px", "");

    targetImage.css({
        'width': parseFloat(x * zoom_value / 100) + 'px',
        'height': parseFloat(y * zoom_value / 100) + 'px',
    });
}

// 4-b-6. Images - Select an image 창 - image 종료 이벤트
function images_image_list_reset() {
    // 체크 이미지 제거
    $("#lay_editor_layer .images .contents .select_an_image .image_selected").hide();

    // 우측 상단 버튼 리셋
    isImageChecked = false;
    $("#lay_editor_layer .images .contents .select_an_image .plus").css({ 'background-position': '0 0px' });

    // 우측 상단 버튼 이미지 "-" 표시
    $("#lay_editor_layer .images .contents .select_an_image .minus").show();

    selectedImageKind = null;
    selectedMyImagesNo = null;
    selectedDigitalAndArtNo = null;
    selectedPlantsAndFlowersNo = null;
    selectedPlacesAndLandscapeNo = null;
    selectedNatureAndAnimalsNo = null;
}

function deleteCellSizeInfo() {
    // preview 배경 원래대로 되돌리기
    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo).css({
        "background-image": "url(../websrc/img/main/lb_editor_layer_images_15.png)"
    });

    // disableCell 삭제
    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .ableCell").hide();
    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .disableCell_1").hide();
    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .disableCell_2").hide();

    // "cell size" 텍스트 이미지 삭제
    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .cell_size").hide();

    // cell size 실제 값 삭제			
    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .cell_size .pix").text(null);
}

function preview_text_trigger() {
    var max_x = 466;
    var max_y = 147;
    var margin_top = 20;
    var margin_right = 20;
    var margin_down = 20;
    var margin_left = 20;
    var pannel_x = max_x - margin_left - margin_right;
    var pannel_y = max_y - margin_top - margin_down;
    var modified_x = new Number;
    var modified_y = new Number;


    // cell 배경색 preview 적용
    $("#lay_editor_layer .text .contents .text_preview .text_preview_img").css({ 'background-color': originalEditKind.cell[selectedCellNo].text.font_back_color });

    // cell 안의 text size 적용
    if (cellSizeX[selectedCellNo] - pannel_x <= 0 && cellSizeY[selectedCellNo] - pannel_y <= 0) {
        text_preview_gain = 1;
    }
    else {
        text_preview_gain_x = pannel_x / cellSizeX[selectedCellNo];
        text_preview_gain_y = pannel_y / cellSizeY[selectedCellNo];
        if (text_preview_gain_x < text_preview_gain_y) text_preview_gain = text_preview_gain_x;
        else text_preview_gain = text_preview_gain_y;
    }

    // cell 배경크기 preview 적용
    modified_x = cellSizeX[selectedCellNo] * text_preview_gain;
    modified_y = cellSizeY[selectedCellNo] * text_preview_gain;
    modified_font_size = Number((230 / 256) * underEditKind.cell[selectedCellNo].text.font_size) * text_preview_gain;

    $("#lay_editor_layer .text .contents .text_preview .text_preview_img").css({
        top: (max_y - modified_y) / 2 + 'px',
        left: (max_x - modified_x) / 2 + 'px',
        'width': cellSizeX[selectedCellNo] * text_preview_gain + 'px',
        'height': cellSizeY[selectedCellNo] * text_preview_gain + 'px'
    });

    // cell 안의 text style 적용
    preview_text_style_change();

    // cell 안의 text preview 적용
    if ((underEditKind.cell[selectedCellNo].text.contents != "undefined")) $('.text_preview_img .vertical-align').text(underEditKind.cell[selectedCellNo].text.contents);

    // text Edit 아이콘 업데이트
    textEditIconUpdate();
}

function preview_text_style_change() {
    $("#lay_editor_layer .text .contents .text_preview .text_preview_img .vertical-align").css({
        "width": cellSizeX[selectedCellNo] * text_preview_gain + 'px',
        "height": Number(modified_font_size) + "px",
        //"background-color":"#00f",
        'font-size': modified_font_size + 'px',
        'color': underEditKind.cell[selectedCellNo].text.font_color,
        'font-family': underEditKind.cell[selectedCellNo].text.font_family,
        'text-align': underEditKind.cell[selectedCellNo].text.font_align,
        'font-weight': underEditKind.cell[selectedCellNo].text.font_weight
    });
    runTextVerticalAlign("#lay_editor_layer .text .contents .text_preview .text_preview_img .vertical-align", underEditKind.cell[selectedCellNo].text.font_vertical);

}

function textEditIconUpdate() {
    // contents
    if ((underEditKind.cell[selectedCellNo].text.contents) != "undefined") $('#lay_editor_layer .text .contents .text_input #input_text_input').text(underEditKind.cell[selectedCellNo].text.contents);

    // font_size
    $("#lay_editor_layer .text_size").text(underEditKind.cell[selectedCellNo].text.font_size);
    modified_font_size = Number((230 / 256) * underEditKind.cell[selectedCellNo].text.font_size) * text_preview_gain;
    $("#lay_editor_layer .text_preview .text_preview_img .vertical-align").css({ 'font-size': modified_font_size + 'px' });

    // font_color
    $("#lay_editor_layer .text_color .status").css({ 'color': underEditKind.cell[selectedCellNo].text.font_color });
    $('#lay_editor_layer .text_input #input_text_input').css({ 'color': underEditKind.cell[selectedCellNo].text.font_color });

    // font_family			
    $("#lay_editor_layer .text_font").text(underEditKind.cell[selectedCellNo].text.font_family);
    $("#lay_editor_layer .text_font").css({ 'font-family': underEditKind.cell[selectedCellNo].text.font_family });
    $('#lay_editor_layer .text_input #input_text_input').css({ 'font-family': underEditKind.cell[selectedCellNo].text.font_family });

    // font_align
    $("#lay_editor_layer .text_align_left").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_25.png)' });
    $("#lay_editor_layer .text_align_center").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_27.png)' });
    $("#lay_editor_layer .text_align_right").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_29.png)' });
    switch (underEditKind.cell[selectedCellNo].text.font_align) {
        case "left":
            $("#lay_editor_layer .text_align_left").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_26.png)' });
            break;
        case "center":
            $("#lay_editor_layer .text_align_center").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_28.png)' });
            break;
        case "right":
            $("#lay_editor_layer .text_align_right").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_30.png)' });
            break;
    }

    // font_back_color
    $("#lay_editor_layer .text_back_color .status").css({ 'background-color': underEditKind.cell[selectedCellNo].text.font_back_color });
    $("#lay_editor_layer .text_preview .text_preview_img").css({ 'background-color': underEditKind.cell[selectedCellNo].text.font_back_color });

    // font_weight
    $("#lay_editor_layer .text_weight .status").css({ 'font-weight': underEditKind.cell[selectedCellNo].text.font_weight });
    $('#lay_editor_layer .text_input #input_text_input').css({ 'font-weight': underEditKind.cell[selectedCellNo].text.font_weight });
    switch (underEditKind.cell[selectedCellNo].text.font_weight) {
        case "normal":
            $("#lay_editor_layer .text_weight").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            break;
        case "bold":
            $("#lay_editor_layer .text_weight").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_07.png)' });
            break;
    }

    // font_vertical
    $("#lay_editor_layer .text_align_top").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_31.png)' });
    $("#lay_editor_layer .text_align_middle").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_33.png)' });
    $("#lay_editor_layer .text_align_bottom").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_35.png)' });
    switch (underEditKind.cell[selectedCellNo].text.font_vertical) {
        case "top":
            $("#lay_editor_layer .text_align_top").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_32.png)' });
            break;
        case "middle":
            $("#lay_editor_layer .text_align_middle").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_34.png)' });
            break;
        case "bottom":
            $("#lay_editor_layer .text_align_bottom").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_36.png)' });
            break;
    }
}

function text_popup_all_close() {
    $("#lay_editor_layer .text_font_list").hide();
    $("#lay_editor_layer .text_size_list").hide();
    $("#lay_editor_layer .text_color_list").hide();
    text_font_color_trigger[selectedCellNo] = 0;
    text_font_back_color_trigger[selectedCellNo] = 0;
    $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
    $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
}




function runPublish(publish_type) {
    // url paramerter 전송시 #은 전송이 안 되므로, #부분을 제외한 color값 추출 (예:#ffffff -> ffffff)
    var str = appliedEditKind.background.color;
    var backgroundColorForPhp = str.split("#");
    var project_name;

    if (publish_type == "playlist")
    {
        project_name = $("#publish_layer #input_project_name_date").val();
    }
    else
    {
        project_name = $("#saveas_layer #input_project_name_date").val();
    }

    php_upload_parameter[0] = "?publishName=" + publish_type +
                            "&category=background" +
                            "&divided=" + appliedEditKind.divided +
                            "&background_kind=" + appliedEditKind.background.kind +
                            "&background_color=" + backgroundColorForPhp[1] +
                            "&background_image_url=" + appliedEditKind.background.image.url +
                            "&background_image_top=" + appliedEditKind.background.top +
                            "&background_image_left=" + appliedEditKind.background.left +
                            "&background_image_width=" + appliedEditKind.background.width +
                            "&background_image_height=" + appliedEditKind.background.height +
                            "&background_image_per=" + appliedEditKind.background.percentage +
                            "&project_name=" + project_name;
    
    for (var i = 1; i <= 25; i++) {
        php_upload_parameter[i] = undefined;
        if (appliedEditKind.cell[i].kind) {
            php_upload_parameter[i] = "?publishName=" + publish_type +
                                    "&category=cell" +
                                    "&cell_no=" + i +
                                    "&kind_" + i + "=" + appliedEditKind.cell[i].kind +
                                    "&x_" + i + "=" + appliedEditKind.cell[i].x +
                                    "&y_" + i + "=" + appliedEditKind.cell[i].y;

            switch (appliedEditKind.cell[i].kind) {
                case "image":
                    php_upload_parameter[i] += "&theFirstOrderFiveImages_" + i + "=" + appliedEditKind.cell[i].image.theFirstOrderFiveImages +
                                            "&selectedFiveImageNo_" + i + "=" + appliedEditKind.cell[i].image.selectedFiveImageNo;

                    for (var j = 1; j <= 5; j++) {
                        if (appliedEditKind.cell[i].image.url[j]) {
                            php_upload_parameter[i] += "&image_url_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.url[j] +

                                                    "&percentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellPercentage[j] +
                                                    "&top_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellTop[j] +
                                                    "&left_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellLeft[j] +
                                                    "&width_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellWidth[j] +
                                                    "&height_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellHeight[j] +
                                                    "&editPercentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPercentage[j] +
                                                    "&positionX_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionX[j] +
                                                    "&positionY_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionY[j];
                        }
                    }
                    break;
                case "widgets":
                    php_upload_parameter[i] += "&vod_id_" + i + "=" + appliedEditKind.cell[i].widget.vod_id +
                                               "&image_url_" + i + "=" + appliedEditKind.cell[i].widget.image_url +
                                               "&widget_kind_" + i + "=" + appliedEditKind.cell[i].widget.widget_kind +
                                               "&weather_id_" + i + "=" + appliedEditKind.cell[i].widget.weather_id +
                                               "&weather_kind_" + i + "=" + appliedEditKind.cell[i].widget.weather_kind +
                                               "&font_family_" + i + "=" + appliedEditKind.cell[i].text.font_family +
                                               "&font_back_color_" + i + "=" + appliedEditKind.cell[i].text.font_back_color.replace("#", "") +
                                               "&font_color_" + i + "=" + appliedEditKind.cell[i].text.font_color.replace("#", "");
                    break;
                case "text":
                    php_upload_parameter[i] += "&contents_" + i + "=" + appliedEditKind.cell[i].text.contents +
                                            "&font_size_" + i + "=" + appliedEditKind.cell[i].text.font_size +
                                            "&font_color_" + i + "=" + appliedEditKind.cell[i].text.font_color.replace("#", "") +
                                            "&font_family_" + i + "=" + appliedEditKind.cell[i].text.font_family +
                                            "&font_align_" + i + "=" + appliedEditKind.cell[i].text.font_align +
                                            "&font_back_color_" + i + "=" + appliedEditKind.cell[i].text.font_back_color.replace("#", "") +
                                            "&font_weight_" + i + "=" + appliedEditKind.cell[i].text.font_weight +
                                            "&font_vertical_" + i + "=" + appliedEditKind.cell[i].text.font_vertical;
                    php_upload_parameter[i] += "&theFirstOrderFiveImages_" + i + "=" + appliedEditKind.cell[i].image.theFirstOrderFiveImages +
                                            "&selectedFiveImageNo_" + i + "=" + appliedEditKind.cell[i].image.selectedFiveImageNo;

                    for (var j = 1; j <= 5; j++) {
                        if (appliedEditKind.cell[i].image.url[j]) {
                            php_upload_parameter[i] += "&image_url_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.url[j] +

                                                    "&percentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellPercentage[j] +
                                                    "&top_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellTop[j] +
                                                    "&left_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellLeft[j] +
                                                    "&width_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellWidth[j] +
                                                    "&height_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellHeight[j] +
                                                    "&editPercentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPercentage[j] +
                                                    "&positionX_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionX[j] +
                                                    "&positionY_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionY[j];
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }

    php_upload_parameter[26] = "?publishName=" + publish_type +
                                "&category=end";

    // google app engine 연동 : publish 업로드 호출
    body_dimmed_open();
    document.process.location.href = "./upload_publish/" + php_upload_parameter[0];
}

function savePublish() {
    // url paramerter 전송시 #은 전송이 안 되므로, #부분을 제외한 color값 추출 (예:#ffffff -> ffffff)
    var str = appliedEditKind.background.color;
    var backgroundColorForPhp = str.split("#");

    var saveNo = maxMyproject - selectedSlideListNo;
    project_name = $("#save_layer #input_project_name_date").val();

    php_upload_parameter[0] = "?saveNo=" + saveNo +
                            "&category=background" +
                            "&divided=" + appliedEditKind.divided +
                            "&background_kind=" + appliedEditKind.background.kind +
                            "&background_color=" + backgroundColorForPhp[1] +
                            "&background_image_url=" + appliedEditKind.background.image.url +
                            "&background_image_top=" + appliedEditKind.background.top +
                            "&background_image_left=" + appliedEditKind.background.left +
                            "&background_image_width=" + appliedEditKind.background.width +
                            "&background_image_height=" + appliedEditKind.background.height +
                            "&background_image_per=" + appliedEditKind.background.percentage +
                            "&project_name=" + project_name;

    for (var i = 1; i <= 25; i++) {
        php_upload_parameter[i] = undefined;
        if (appliedEditKind.cell[i].kind) {
            php_upload_parameter[i] = "?saveNo=" + saveNo +
                                    "&category=cell" +
                                    "&cell_no=" + i +
                                    "&kind_" + i + "=" + appliedEditKind.cell[i].kind +
                                    "&x_" + i + "=" + appliedEditKind.cell[i].x +
                                    "&y_" + i + "=" + appliedEditKind.cell[i].y;

            switch (appliedEditKind.cell[i].kind) {
                case "image":
                    php_upload_parameter[i] += "&theFirstOrderFiveImages_" + i + "=" + appliedEditKind.cell[i].image.theFirstOrderFiveImages +
                                            "&selectedFiveImageNo_" + i + "=" + appliedEditKind.cell[i].image.selectedFiveImageNo;

                    for (var j = 1; j <= 5; j++) {
                        if (appliedEditKind.cell[i].image.url[j]) {
                            php_upload_parameter[i] += "&image_url_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.url[j] +

                                                    "&percentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellPercentage[j] +
                                                    "&top_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellTop[j] +
                                                    "&left_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellLeft[j] +
                                                    "&width_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellWidth[j] +
                                                    "&height_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellHeight[j] +
                                                    "&editPercentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPercentage[j] +
                                                    "&positionX_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionX[j] +
                                                    "&positionY_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionY[j];
                        }
                    }
                    break;
                case "widgets":
                    php_upload_parameter[i] += "&vod_id_" + i + "=" + appliedEditKind.cell[i].widget.vod_id +
                                               "&image_url_" + i + "=" + appliedEditKind.cell[i].widget.image_url +
                                               "&widget_kind_" + i + "=" + appliedEditKind.cell[i].widget.widget_kind +
                                               "&weather_id_" + i + "=" + appliedEditKind.cell[i].widget.weather_id +
                                               "&weather_kind_" + i + "=" + appliedEditKind.cell[i].widget.weather_kind +
                                               "&font_family_" + i + "=" + appliedEditKind.cell[i].text.font_family +
                                               "&font_back_color_" + i + "=" + appliedEditKind.cell[i].text.font_back_color.replace("#", "") +
                                               "&font_color_" + i + "=" + appliedEditKind.cell[i].text.font_color.replace("#", "");
                    break;
                case "text":
                    php_upload_parameter[i] += "&contents_" + i + "=" + appliedEditKind.cell[i].text.contents +
                                            "&font_size_" + i + "=" + appliedEditKind.cell[i].text.font_size +
                                            "&font_color_" + i + "=" + appliedEditKind.cell[i].text.font_color.replace("#", "") +
                                            "&font_family_" + i + "=" + appliedEditKind.cell[i].text.font_family +
                                            "&font_align_" + i + "=" + appliedEditKind.cell[i].text.font_align +
                                            "&font_back_color_" + i + "=" + appliedEditKind.cell[i].text.font_back_color.replace("#", "") +
                                            "&font_weight_" + i + "=" + appliedEditKind.cell[i].text.font_weight +
                                            "&font_vertical_" + i + "=" + appliedEditKind.cell[i].text.font_vertical;
                    php_upload_parameter[i] += "&theFirstOrderFiveImages_" + i + "=" + appliedEditKind.cell[i].image.theFirstOrderFiveImages +
                                            "&selectedFiveImageNo_" + i + "=" + appliedEditKind.cell[i].image.selectedFiveImageNo;

                    for (var j = 1; j <= 5; j++) {
                        if (appliedEditKind.cell[i].image.url[j]) {
                            php_upload_parameter[i] += "&image_url_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.url[j] +

                                                    "&percentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellPercentage[j] +
                                                    "&top_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellTop[j] +
                                                    "&left_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellLeft[j] +
                                                    "&width_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellWidth[j] +
                                                    "&height_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInCellHeight[j] +
                                                    "&editPercentage_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPercentage[j] +
                                                    "&positionX_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionX[j] +
                                                    "&positionY_" + j + "_" + i + "=" + appliedEditKind.cell[i].image.imageInEditPositionY[j];
                        }
                    }
                    break;
                default:
                    break;
            }
        }
    }

    php_upload_parameter[26] = "?saveNo=" + saveNo +
                                "&category=end";

    // google app engine 연동 : publish 업로드 호출
    body_dimmed_open();
    document.process.location.href = "./save_publish/" + php_upload_parameter[0];
}


function editor_left_cancel() {
    // cursor
    $("#lay_editor_layer .left_btn .left_selected").animate({ top: parseInt($("#lay_editor_layer .left_btn .left_cancel").css("top")) - 13 + "px" }, 500, 'easeInOutQuint', function () {
        //display_edit_layer("cancel_layer", "", "");
    });
    currentSelectedMenu = 0;
    initSubItemFocus();
}

// 테마 에디터 왼쪽 메뉴 save 클릭
function editor_left_save() {
    $("#lay_editor_layer .left_btn .left_selected").animate({ top: parseInt($("#lay_editor_layer .left_btn .left_save").css("top")) - 13 + "px" }, 500, 'easeInOutQuint', function () {
        display_edit_layer("save", "", "");

        Date.prototype.yyyymmdd = function () {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
            var dd = this.getDate().toString();
            var timeHour = this.getHours().toString();
            var timeMin = this.getMinutes().toString();
            var timeSec = this.getSeconds().toString();
            return yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]) + "_" + (timeHour[1] ? timeHour : "0" + timeHour[0]) + (timeMin[1] ? timeMin : "0" + timeMin[0]) + (timeSec[1] ? timeSec : "0" + timeSec[0]);
        };

        var tmp = new Date();
        saveFileName = tmp.yyyymmdd();
        $("#lay_editor_layer .save .input_project_name #input_project_name_date").val(saveFileName);
    });
    currentSelectedMenu = 1;
    initSubItemFocus();
}


function editor_left_publish() {
    $("#lay_editor_layer .left_btn .left_selected").animate({ top: parseInt($("#lay_editor_layer .left_btn .left_publish").css("top")) - 13 + "px" }, 500, 'easeInOutQuint', function () {
        display_edit_layer("publish", "", "");

        Date.prototype.yyyymmdd = function () {
            var yyyy = this.getFullYear().toString();
            var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
            var dd = this.getDate().toString();
            var timeHour = this.getHours().toString();
            var timeMin = this.getMinutes().toString();
            var timeSec = this.getSeconds().toString();
            return yyyy + (mm[1] ? mm : "0" + mm[0]) + (dd[1] ? dd : "0" + dd[0]) + "_" + (timeHour[1] ? timeHour : "0" + timeHour[0]) + (timeMin[1] ? timeMin : "0" + timeMin[0]) + (timeSec[1] ? timeSec : "0" + timeSec[0]);
        };

        var tmp = new Date();
        saveFileName = tmp.yyyymmdd();
        $("#lay_editor_layer .publish .input_project_name #input_project_name_date").val(saveFileName);
    });
    releaseEditLayerLeftVertical();
    $("#lay_editor_layer .left_btn .left_publish").addClass("focus");
    currentSelectedMenu = 2;
    initSubItemFocus();
}

function editor_left_backgrounds() {
    $("#lay_editor_layer .left_btn .left_selected").animate({ top: parseInt($("#lay_editor_layer .left_btn .left_backgrounds").css("top")) - 13 + "px" }, 500, 'easeInOutQuint', function () {
        if (underEditKind.background.kind == "color") display_edit_layer("backgrounds", "color", "1");
        else if (underEditKind.background.kind == "image") display_edit_layer("backgrounds", "image", "2");
        else display_edit_layer("backgrounds", "color", "1");
    });
    releaseEditLayerLeftVertical();
    $("#lay_editor_layer .left_btn .left_backgrounds").addClass("focus");
    currentSelectedMenu = 3;
    initSubItemFocus();
}

function editor_left_widgets() {
    if (!lnbWidgetsProhibit) {
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: parseInt($("#lay_editor_layer .left_btn .left_widgets").css("top")) - 13 + "px" }, 500, 'easeInOutQuint', function () {
            display_edit_layer("widgets", "tv", "1");
        });
    }
    releaseEditLayerLeftVertical();
    $("#lay_editor_layer .left_btn .left_widgets").addClass("focus");
    currentSelectedMenu = 4;
    initSubItemFocus();
}

function editor_left_images() {
    if (!lnbImagesProhibit) {
        // cursor		
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: parseInt($("#lay_editor_layer .left_btn .left_images").css("top")) - 13 + "px" }, 500, 'easeInOutQuint', function () {
            display_edit_layer("images", "", "");
        });
    }
    releaseEditLayerLeftVertical();
    $("#lay_editor_layer .left_btn .left_images").addClass("focus");
    currentSelectedMenu = 5;
    initSubItemFocus();
}

function editor_left_text() {
    if (!lnbTextProhibit) {
        $("#lay_editor_layer .left_btn .left_selected").animate({ top: parseInt($("#lay_editor_layer .left_btn .left_text").css("top")) - 13 + "px" }, 500, 'easeInOutQuint', function () {
            display_edit_layer("text", "", "");
            preview_text_trigger();
        });
    }
    releaseEditLayerLeftVertical();
    $("#lay_editor_layer .left_btn .left_text").addClass("focus");
    currentSelectedMenu = 6;
    initSubItemFocus();
}


function body_dimmed_open() {
    $("body").append("<div id='body_dimmed' class='disabled_left'><div class='loadMsg'><img src='/websrc/img/main/icon_loading.gif' width='80' height='80'></div></div>");
    $("#body_dimmed").css("z-index", 1000);
    $("#body_dimmed").height($(document).height());
}

function body_dimmed_open2() {
    $("body").append("<div id='body_dimmed2' class='disabled_left'><div class='loadMsg'><img src='/websrc/img/main/icon_loading.gif' width='80' height='80'></div></div>");
    $("#body_dimmed2").css("z-index", 1000);
    $("#body_dimmed2").height($(document).height());
}

function back_dimmed_open(id) {
    $("body").append("<div id='body_dimmed' class='disabled_left'></div>");
    $("#body_dimmed").css("z-index", 10);
    $("#body_dimmed").height($(document).height());
    if (id != "") dimmed_left(id);
}

function back_dimmed_close(id) {
    $("#body_dimmed").remove();
    if (id != "") active_left(id);
}

function body_dimmed_close() {
    $("#body_dimmed").remove();
}

function body_dimmed_close2() {
    $("#body_dimmed2").remove();
}

function Init_forum() {
    $("#body_forum .body_contents").css({
        //"border": "1px solid #00d7ff"
    });
}




function focusMainHorizon() {
    if (platform != "device") return;

    if (isBackBtnRollOver == true) {
        for (var i = 1; i <= slide_max; i++) $(".body_contents_sub.list_" + i).removeClass("focus");
    }
    else {
        for (var i = 1; i <= slide_max; i++) $(".body_contents_sub.list_" + i).removeClass("focus");
        $(".body_contents_sub.list_" + mainKeyLocation.horizon).addClass("focus");
    }
}

function focusBackBtn() {
    if (platform != "device") return;
    isBackBtnRollOver = true;
    $(".body_back_btn").addClass("focus");
    $(".body_back_btn").css({
        'background-image': 'url(../websrc/img/main/tl_main_07.png)'
    });
    $(".editMap_back_btn").addClass("focus");
    $(".editMap_back_btn").css({
        'background-image': 'url(../websrc/img/main/tl_main_07.png)'
    });
}

function removeFocusBackBtn() {
    if (platform != "device") return;
    isBackBtnRollOver = false;
    $(".body_back_btn").removeClass("focus");
    $(".body_back_btn").css({
        'background-image': 'url(../websrc/img/main/tl_main_06.png)'
    });
    $(".editMap_back_btn").removeClass("focus");
    $(".editMap_back_btn").css({
        'background-image': 'url(../websrc/img/main/tl_main_06.png)'
    });
}

function focusMainVertical() {
    if (mainKeyLocation.vertical == 1) {
        $("#lnb .btn_featured").click();
    }
    else if (mainKeyLocation.vertical == 2) {
        $("#lnb .btn_playlists").click();
    }
    else if (mainKeyLocation.vertical == 3) {
        $("#lnb .btn_editor").click();
    }
    else if (mainKeyLocation.vertical == 4) {
        $("#lnb .btn_support").click();
    }
    else if (mainKeyLocation.vertical == 5) {
        $("#lnb .btn_settings").click();
    }
}

// run edit mode : cancel, save, publish, backgrounds, widgets(dimmed), images, text
function runCancelEditMode() {
    if (currentFocusTab == "bottom") {
        if (currentSelectedSubMenu == 1) $("#lay_editor_layer .cancel_layer .contents .bottom_btn .apply").click();
        else if (currentSelectedSubMenu == 2) $("#lay_editor_layer .cancel_layer .contents .bottom_btn .cancel").click();
    }
}

function runSaveEditMode() {
    if (currentFocusTab == "bottom") {
        if (currentSelectedSubMenu == 1) $("#lay_editor_layer .save .contents .bottom_btn .apply").click();
        else if (currentSelectedSubMenu == 2) $("#lay_editor_layer .save .contents .bottom_btn .cancel").click();
    }
}

function runPublishEditMode() {
    if (currentFocusTab == "bottom") {
        if (currentSelectedSubMenu == 1) $("#lay_editor_layer .publish .contents .bottom_btn .apply").click();
        else if (currentSelectedSubMenu == 2) $("#lay_editor_layer .publish .contents .bottom_btn .cancel").click();
    }
}

function runWidgetEditMode() {
    if (currentFocusTab == "bottom") {
        // TV랑 VIDEO랑 구분
        if (currentSelectedSubMenu == 1) {
            $("#lay_editor_layer .widgets .contents ." + topSelectMenuName + " .bottom_btn .apply").click();
        }
        else if (currentSelectedSubMenu == 2) {
            $("#lay_editor_layer .widgets .contents ." + topSelectMenuName + " .bottom_btn .cancel").click();
        } 
    }
    else if (currentFocusTab == "topWidget") {
        $("#lay_editor_layer .widgets .top_btn #" + currentSelectedSubMenu).click();
    }
    else if (currentFocusTab == "widgetList") {
        if (currentSelectedSubMenu == 0) changeTvListLeft();
        else if (currentSelectedSubMenu == 4) changeTvListRight();
        else selectTvList(currentSelectedSubMenu);
    }
}

function runBackgroundsEditMode() {
    // top bar : color, image, video
    if (currentFocusTab == "bottom") {
        if (currentSelectedSubMenu == 1) $("#lay_editor_layer .backgrounds .contents ." + topSelectMenuName + " .bottom_btn .apply").click();
        else if (currentSelectedSubMenu == 2) $("#lay_editor_layer .backgrounds .contents ." + topSelectMenuName + " .bottom_btn .cancel").click();
    }
    else if (currentFocusTab == "top") {
        $("#lay_editor_layer .backgrounds .top_btn #" + currentSelectedSubMenu).click();
    }
    else if (currentFocusTab == "backgroundPreview") {
        if (topSelectMenuName == "color") {
            $("#lay_editor_layer .backgrounds  .color_list .color_" + editLayerBackgrounds_colorSubListKeyLocation.horizon).click();
            editLayerBackgrounds_colorSubListKeyLocation.vertical = 4;
            $(".colorSubList .color_sub_4").addClass("focus");
            currentFocusTab = "selectColor";
        }
        else if (topSelectMenuName == "image") {
            $("#lay_editor_layer .backgrounds .contents .image .image_preview_1").click();
        }
        else if (topSelectMenuName == "video") {
            //$("#lay_editor_layer .backgrounds .video .video_preview_1").click();
        }
    }
    else if (currentFocusTab == "selectColor") {
        $("#color_sub_list_" + editLayerBackgrounds_colorSubListKeyLocation.horizon + " #" + editLayerBackgrounds_colorSubListKeyLocation.vertical).click();
        currentFocusTab = "backgroundPreview";
        $(".colorSubList .color_sub_" + editLayerBackgrounds_colorSubListKeyLocation.vertical).removeClass("focus");
    }
}

function runImagesEditMode() {
    if (currentFocusTab == "bottom") {
        if (currentSelectedSubMenu == 1) $("#lay_editor_layer .images .contents .bottom_btn .apply").click();
        else if (currentSelectedSubMenu == 2) $("#lay_editor_layer .images .contents .bottom_btn .cancel").click();
    }
    else if (currentFocusTab == "imageList") {
        selectedFiveImageNo = currentSelectedSubMenu;
        $("#lay_editor_layer .images .contents .image_preview_" + currentSelectedSubMenu).click();

        editLayerImages_selectAnImagesKeyLocation.horizon = 1;
    }

    else if (currentFocusTab == "imageControl") {
        switch (currentSelectedSubMenu) {
            // image left
            case 1:
                $("#lay_editor_layer .images .contents .buttons .image_left").click();
                break;
                // image right
            case 2:
                $("#lay_editor_layer .images .contents .buttons .image_right").click();
                break;
                // image up
            case 3:
                $("#lay_editor_layer .images .contents .buttons .image_up").click();
                break;
                // image down
            case 4:
                $("#lay_editor_layer .images .contents .buttons .image_down").click();
                break;
                // image plus
            case 5:
                $("#lay_editor_layer .images .contents .buttons .image_plus").click();
                break;
                // image minus
            case 6:
                $("#lay_editor_layer .images .contents .buttons .image_minus").click();
                break;
        }
    }
}

function runImages_selectAnImagesEditMode() {
    // plus
    if (editLayerImages_selectAnImagesKeyLocation.horizon == 1) {
    }
        // minus
    else if (editLayerImages_selectAnImagesKeyLocation.horizon == 2) {
    }
        // close
    else if (editLayerImages_selectAnImagesKeyLocation.horizon == 3) {
        $("#lay_editor_layer .images .contents .select_an_image .close").click();
    }
}

function runTextEditMode() {
    // text edit
    if (currentFocusTab == "bottom") {
        if (currentSelectedSubMenu == 1) $("#lay_editor_layer .text .contents .bottom_btn .apply").click();
        else if (currentSelectedSubMenu == 2) $("#lay_editor_layer .text .contents .bottom_btn .cancel").click();
    }
    else if (currentFocusTab == "textarea_items") {
        switch (currentSelectedSubMenu) {
            case 1:
                // text_font
                $("#lay_editor_layer .text .contents .text_font").click();
                editLayerText_textFontKeyLocation.vertical = 4;
                $("#lay_editor_layer .text .contents .text_font_list .list_4").addClass("focus");
                currentFocusTab = "text_font";
                break;
            case 2:
                // text_size
                $("#lay_editor_layer .text .contents .text_size").click();
                editLayerText_textSizeKeyLocation.vertical = 4;
                $("#lay_editor_layer .text .contents .text_size_list .list_4").addClass("focus");
                currentFocusTab = "text_size";
                break;
            case 3:
                // text_color
                $("#lay_editor_layer .text .contents .text_color").click();
                editLayerText_textColorKeyLocation.vertical = 0;
                editLayerText_textColorKeyLocation.horizon = 1;
                $("#lay_editor_layer .text .contents .text_color_list .palette .list_0").addClass("focus");
                currentFocusTab = "text_color";
                break;
            case 4:
                // text_weight
                $("#lay_editor_layer .text .contents .text_weight").click();
                break;
            case 5:
                // text_back_color
                $("#lay_editor_layer .text .contents .text_back_color").click();
                editLayerText_textColorKeyLocation.vertical = 0;
                editLayerText_textColorKeyLocation.horizon = 1;
                $("#lay_editor_layer .text .contents .text_color_list .palette .list_0").addClass("focus");
                currentFocusTab = "text_back_color";
                break;
            case 6:
                // text_align_left
                $("#lay_editor_layer .text .contents .text_align_left").click();
                break;
            case 7:
                // text_align_center
                $("#lay_editor_layer .text .contents .text_align_center").click();
                break;
            case 8:
                // text_align_right
                $("#lay_editor_layer .text .contents .text_align_right").click();
                break;
            case 9:
                // text_align_top
                $("#lay_editor_layer .text .contents .text_align_top").click();
                break
            case 10:
                // text_align_middle
                $("#lay_editor_layer .text .contents .text_align_middle").click();
                break;
            case 11:
                // text_align_bottom
                $("#lay_editor_layer .text .contents .text_align_bottom").click();
                break;
        }
    }
    else if (currentFocusTab == "text_font") {
        currentFocusTab = "textarea_items";
        runText_textFontEditMode();
    }
    else if (currentFocusTab == "text_size") {
        currentFocusTab = "textarea_items";
        runText_textSizeEditMode();
    }
    else if (currentFocusTab == "text_color") {
        currentFocusTab = "textarea_items";
        runText_textColorEditMode();
    }
    else if (currentFocusTab == "text_back_color") {
        currentFocusTab = "textarea_items";
        runText_textColorEditMode();
    }
}


function runText_textFontEditMode() {
    $("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).removeClass("focus");
    $("#lay_editor_layer .text .contents .text_font_list .list_" + editLayerText_textFontKeyLocation.vertical).click();
}


function runText_textSizeEditMode() {
    $("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).removeClass("focus");
    $("#lay_editor_layer .text .contents .text_size_list .list_" + editLayerText_textSizeKeyLocation.vertical).click();
}


function runText_textColorEditMode() {
    var colorAddress = (editLayerText_textColorKeyLocation.vertical * 17) + (editLayerText_textColorKeyLocation.horizon - 1);
    $("#lay_editor_layer .text .contents .text_color_list .list_" + colorAddress).removeClass("focus");
    $("#lay_editor_layer .text .contents .text_color_list .list_" + colorAddress).click();
    console.log(editLayerText_textColorKeyLocation.vertical);
    console.log(editLayerText_textColorKeyLocation.horizon);
}


// Preview Popup
function focusFeaturedPreviewPopup() {
    $("#body_featured .previewPopup_button .edit").removeClass("focus");
    $("#body_featured .previewPopup_button .play").removeClass("focus");
    $("#body_featured .previewPopup_button .cancel").removeClass("focus");

    if (previewKeyLocation.horizon == 1) $("#body_featured .previewPopup_button .edit").addClass("focus");
    else if (previewKeyLocation.horizon == 2) $("#body_featured .previewPopup_button .play").addClass("focus");
    else if (previewKeyLocation.horizon == 3) $("#body_featured .previewPopup_button .cancel").addClass("focus");
}


function focusPlaylistsPreviewPopup() {
    if (platform != "device") return;
    $("#body_playlists .previewPopup_button .edit").removeClass("focus");
    $("#body_playlists .previewPopup_button .delete").removeClass("focus");
    $("#body_playlists .previewPopup_button .play").removeClass("focus");
    $("#body_playlists .previewPopup_button .cancel").removeClass("focus");

    if (previewKeyLocation.horizon == 1) $("#body_playlists .previewPopup_button .edit").addClass("focus");
    else if (previewKeyLocation.horizon == 2) $("#body_playlists .previewPopup_button .delete").addClass("focus");
    else if (previewKeyLocation.horizon == 3) $("#body_playlists .previewPopup_button .play").addClass("focus");
    else if (previewKeyLocation.horizon == 4) $("#body_playlists .previewPopup_button .cancel").addClass("focus");
}


function focusThemePreviewPopup() {
    if (platform != "device") return;
    $("#body_theme .previewPopup_button .edit").removeClass("focus");
    $("#body_theme .previewPopup_button .cancel").removeClass("focus");

    if (previewKeyLocation.horizon == 1) $("#body_theme .previewPopup_button .edit").addClass("focus");
    else if (previewKeyLocation.horizon == 2) $("#body_theme .previewPopup_button .cancel").addClass("focus");
}


function focusMyprojectsPreviewPopup() {
    $("#body_myprojects .previewPopup_button .edit").removeClass("focus");
    $("#body_myprojects .previewPopup_button .cancel").removeClass("focus");

    if (myprojectsPreviewKeyLocation.horizon == 1) $("#body_myprojects .previewPopup_button .edit").addClass("focus");
    else if (myprojectsPreviewKeyLocation.horizon == 2) $("#body_myprojects .previewPopup_button .cancel").addClass("focus");
}

function focusSignoutPopup() {

    if (platform != "device") return;
    $("#body_signout .body_contents .bottom_btn .apply").removeClass("focus");
    $("#body_signout .body_contents .bottom_btn .cancel").removeClass("focus");

    if (previewKeyLocation.horizon == 1) $("#body_signout .body_contents .bottom_btn .apply").addClass("focus");
    else if (previewKeyLocation.horizon == 2) $("#body_signout .body_contents .bottom_btn .cancel").addClass("focus");
}


// edit map CELL
function focusEditMapCell(cellNumber) {
    $(".editMap .cell_" + cellNumber).css({
        "border": "3px solid #00d7ff",
        //top: "-=2px",
        //left: "-=2px",
        "z-index": 5
    });
}


function releaseEditMapCell(cellNumber) {
    $(".editMap .cell_" + cellNumber).css({
        "border": "1px solid #ddd",
        //top: "+=2px",
        //left: "+=2px",
        "z-index": 0
    });
}

function moveLeftCell(themeListNumber) {
    var nextCell = focusedEditMapCellNo;
    while (true) {
        if (nextCell % 5 == 1) {
            break;
        }
        else {
            nextCell -= 1;

            if (originalEditKind.cell[nextCell].kind != "") {
                console.log("move " + focusedEditMapCellNo + "->" + nextCell);
                releaseEditMapCell(focusedEditMapCellNo);
                focusEditMapCell(nextCell);
                focusedEditMapCellNo = nextCell;
                return;
            }

            for (i = 0; i < 5; i++) {
                if (nextCell - (i * 5) < 1) break;
                if (originalEditKind.cell[nextCell - (i * 5)].kind != "") {
                    console.log("move " + focusedEditMapCellNo + "->" + nextCell);
                    releaseEditMapCell(focusedEditMapCellNo);
                    focusEditMapCell(nextCell - (i * 5));
                    focusedEditMapCellNo = nextCell - (i * 5);
                    return;
                }
            }
        }
    }
}

function moveRightCell() {
    var nextCell = focusedEditMapCellNo + originalEditKind.cell[focusedEditMapCellNo].x;
    if (nextCell % 5 == 1) {
        return;
    }
    if (originalEditKind.cell[nextCell].kind != "") {
        console.log("move " + focusedEditMapCellNo + "->" + nextCell);
        releaseEditMapCell(focusedEditMapCellNo);
        focusEditMapCell(nextCell);
        focusedEditMapCellNo = nextCell;
        return;
    }
    for (i = 0; i < 5; i++) {
        if (nextCell - (i * 5) < 1) break;
        if (originalEditKind.cell[nextCell - (i * 5)].kind != "") {
            console.log("move " + focusedEditMapCellNo + "->" + nextCell);
            releaseEditMapCell(focusedEditMapCellNo);
            focusEditMapCell(nextCell - (i * 5));
            focusedEditMapCellNo = nextCell - (i * 5);
            return;
        }
    }
}

function moveUpCell() {
    var nextCell = focusedEditMapCellNo;

    if (nextCell < 6) {
        focusBackBtn();
        releaseEditMapCell(focusedEditMapCellNo);
        return;
    }
    while (true) {
        if (nextCell > 25) {
            break;
        }
        else {
            nextCell -= 5;

            if (originalEditKind.cell[nextCell].kind != "") {
                console.log("move " + focusedEditMapCellNo + "->" + nextCell);
                releaseEditMapCell(focusedEditMapCellNo);
                focusEditMapCell(nextCell);
                focusedEditMapCellNo = nextCell;
                return;
            }

            for (i = 1; i < 5; i++) {
                if ((nextCell - i) % 5 == 0) break;
                if (originalEditKind.cell[nextCell - i].kind != "") {
                    console.log("move " + focusedEditMapCellNo + "->" + nextCell);
                    releaseEditMapCell(focusedEditMapCellNo);
                    focusEditMapCell(nextCell - i);
                    focusedEditMapCellNo = nextCell - i;
                    return;
                }
            }
        }
    }
}

function moveDownCell() {
    if (isBackBtnRollOver == true) {
        removeFocusBackBtn();
        focusEditMapCell(1);
        focusedEditMapCellNo = 1;
        return;
    }
    var nextCell = focusedEditMapCellNo + originalEditKind.cell[focusedEditMapCellNo].y * 5;
    if (originalEditKind.cell[nextCell].kind != "") {
        console.log("move " + focusedEditMapCellNo + "->" + nextCell);
        releaseEditMapCell(focusedEditMapCellNo);
        focusEditMapCell(nextCell);
        focusedEditMapCellNo = nextCell;
        return;
    }

    for (i = 0; i < 5; i++) {
        if (originalEditKind.cell[nextCell - i].kind != "") {
            console.log("move " + focusedEditMapCellNo + "->" + nextCell);
            releaseEditMapCell(focusedEditMapCellNo);
            focusEditMapCell(nextCell - i);
            focusedEditMapCellNo = nextCell - i;
            return;
        }
    }
}

function focusEditLayerLeftVertical() {
    var targetLeftBtn = new Object;

    if (editLayerLeftKeyLocation.vertical == 1) targetLeftBtn = $("#lay_editor_layer .left_btn .left_cancel");
    else if (editLayerLeftKeyLocation.vertical == 2) targetLeftBtn = $("#lay_editor_layer .left_btn .left_save");
    else if (editLayerLeftKeyLocation.vertical == 3) targetLeftBtn = $("#lay_editor_layer .left_btn .left_publish");
    else if (editLayerLeftKeyLocation.vertical == 4) targetLeftBtn = $("#lay_editor_layer .left_btn .left_backgrounds");
    else if (editLayerLeftKeyLocation.vertical == 5) targetLeftBtn = $("#lay_editor_layer .left_btn .left_widgets");
    else if (editLayerLeftKeyLocation.vertical == 6) targetLeftBtn = $("#lay_editor_layer .left_btn .left_images");
    else if (editLayerLeftKeyLocation.vertical == 7) targetLeftBtn = $("#lay_editor_layer .left_btn .left_text");

    targetLeftBtn.addClass("focus");
    targetLeftBtn.css({ top: "-=2" });
    targetLeftBtn.css({ left: "-=2" });
}

function releaseEditLayerLeftVertical() {
    var targetLeftBtn = new Object;

    if ($("#lay_editor_layer .left_btn .left_cancel").hasClass("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_cancel");
    else if ($("#lay_editor_layer .left_btn .left_save").hasClass("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_save");
    else if ($("#lay_editor_layer .left_btn .left_publish").hasClass("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_publish");
    else if ($("#lay_editor_layer .left_btn .left_backgrounds").hasClass("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_backgrounds");
    else if ($("#lay_editor_layer .left_btn .left_widgets").hasClass("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_widgets");
    else if ($("#lay_editor_layer .left_btn .left_images").hasClass("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_images");
    else if ($("#lay_editor_layer .left_btn .left_text").hasClass("focus")) targetLeftBtn = $("#lay_editor_layer .left_btn .left_text");

    targetLeftBtn.removeClass("focus");
    targetLeftBtn.css({ top: "+=2" });
    targetLeftBtn.css({ left: "+=2" });
}

function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1) 
        endstr = document.cookie.length; 
    return unescape(document.cookie.substring(offset, endstr)); 
} 

function GetCookie (name) {
    var arg = name + "="; var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0; 
    while (i < clen) {
        //while open 
        var j = i + alen; 
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal (j); 
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) 
            break; 
    } 
    //while close 
    return null;
}

function SetCookie(name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
}


function showMsg(t)
{
    $("body").append("<div id='body_dimmed_for_message' class='disabled_left'></div>");
    $("#body_dimmed_for_message").css("z-index", 1000);
    $("#body_dimmed_for_message").height($(document).height());

    $("#msgBox").show();
    $("#msgBox .text").text(t);
}


function closeMsg()
{
    $("#body_dimmed_for_message").remove();
    $("#msgBox").hide();
    $("#msgBox .text").text('');
}