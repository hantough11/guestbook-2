//****** 로그인 정보 ******

// 로그인 - 유저 이메일 업데이트 완료
function php_update_user_email(user_email) {
    $("#gnb .user_email").text(user_email);
}                       

// 로그인 - 유저 이름 업데이트 완료
function php_update_user_name(user_name) {
    $("#body_signout .body_contents .text_2").text(user_name);
    $("#body_signout .body_contents .text_3").text(user_name + "(으)로 로그인 되어 있습니다.");
}

// 로그인 - 유저 프로필 사진 업데이트 완료
function php_update_user_image(url) {
    if (url == "") return;
    var url = url.replace("s64", "s160")
    document.getElementById("user_image").src = url;
}

// 로그인 - 접속 플랫폼 종류 저장
function php_set_platform(kind) {
    platform = kind;
}



//****** 백그라운드 ******

// 백그라운드 - 이미지 업로드 완료
function php_complete_background_images_upload() {
    // my Image UI 추가
    makeSelectCellImage.deleteAll();
    php_complete_background_images_load();
    $("#upload_background_image").hide();
    $("#upload_background_image #frame").attr("src", "");
    setMaxImage("background");
    body_dimmed_close();
}

function php_close_background_image_upload() {
    // my Image UI 추가
    $("#upload_background_image").hide();
    $("#upload_background_image #frame").attr("src", "");
    body_dimmed_close();
}

// 백그라운드 - 이미지 개수 로드
function php_load_number_of_background_images(maxNumber) {
    maxSelectBackgroundImageMyImages = maxNumber;
    makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
}

// 백그라운드 - 이미지 주소 로드
function php_load_background_images_url(orderNumber, image_file_name, image_url, upload_date) {
    selectBackgroundImage.myImages.fileName[orderNumber] = image_file_name;
    selectBackgroundImage.myImages.url[orderNumber] = image_url + "=s0";
    selectBackgroundImage.myImages.upload_date[orderNumber] = upload_date;
}

// 백그라운드 - 모든 이미지 로드 완료
function php_complete_background_images_load() {
    // my Image 불러온 것 적용	
    makeSelectBackgroundImage.deleteAll();
    loadSelectBackgroundImageInfo();
    makeSelectBackgroundImage.category = "background";
    makeSelectBackgroundImage.wrapper = "#lay_editor_layer .backgrounds .image .select_an_image .list_item_container_outer .list_item_container";
    makeSelectBackgroundImage.top = 47;
    makeSelectBackgroundImage.left = 25;

    makeSelectBackgroundImage.maxMyImages = maxSelectBackgroundImageMyImages;
    makeSelectBackgroundImage.max_digitalAndArt = maxSelectBackgroundImage_digitalAndArt;
    makeSelectBackgroundImage.max_plantsAndFlowers = maxSelectBackgroundImage_plantsAndFlowers;
    makeSelectBackgroundImage.max_placesAndLandscape = maxSelectBackgroundImage_placesAndLandscape;
    makeSelectBackgroundImage.max_natureAndAnimals = maxSelectBackgroundImage_natureAndAnimals;

    makeSelectBackgroundImage.build("myImages");
    //makeSelectBackgroundImage.build("digitalAndArt");
    //makeSelectBackgroundImage.build("plantsAndFlowers");
    //makeSelectBackgroundImage.build("placesAndLandscape");
    //makeSelectBackgroundImage.build("natureAndAnimals");

    // 우측 scroll 생성
    if (!myBackgroundImageScroll)
        myBackgroundImageScroll = new scr("backgroundImage");
    else
        myBackgroundImageScroll.setup();

    $(".backgroundImage.scr-cont").css({ "top": "0px" });

    if (platform == "device")
        initFocusSelectAnImage("background");
}

// 백그라운드 - 이미지 지우기 완료
function php_complete_background_images_delete() {

    selectBackgroundImage.myImages.fileName[selectedMyImagesNo] = undefined;
    selectBackgroundImage.myImages.url[selectedMyImagesNo] = undefined;
    selectBackgroundImage.myImages.upload_date[selectedMyImagesNo] = undefined;

    php_complete_background_images_load();

    $(".cellImage.scr-cont").css({ "top": "0px" });

    // - 표시 나타나기
    $("#lay_editor_layer .backgrounds .image .select_an_image .myImagesImg .delete").show();

    selectedImageKind = null;
    selectedMyImagesNo = null;
}



// ****** 셀 ******

// 셀 - 이미지 업로드 완료
function php_complete_cell_images_upload() {

    
    //php_complete_cell_images_load();

    // my Image 불러온 것 적용	
    makeSelectCellImage.deleteAll();
    php_complete_cell_images_load();
    $("#upload_background_image").hide();
    $("#upload_background_image #frame").attr("src", "");
    setMaxImage("background");
    body_dimmed_close();

    //makeSelectCellImage.build("myImages");

    // my Image UI 추가에 따른 줄 변환 시, nature 이하 행 변환
    //    if (maxSelectCellImageMyImages > 1) {
    //        if (parseInt($(".myImages_" + (maxSelectCellImageMyImages - 1)).css('top')) != parseInt($(".myImages_" + maxSelectCellImageMyImages).css('top'))) {
    //            myCellImageScroll.setup();
    //        }
    //    }
    setMaxImage("images");

}

// 셀 - 이미지 개수 로드
function php_load_number_of_cell_images(maxNumber) {
    maxSelectCellImageMyImages = maxNumber;
    makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
}

// 셀 - 이미지 주소 로드
function php_load_cell_images_url(orderNumber, image_file_name, image_url, upload_date) {
    selectCellImage.myImages.fileName[orderNumber] = image_file_name;
    selectCellImage.myImages.url[orderNumber] = image_url + "=s0";
    selectCellImage.myImages.upload_date[orderNumber] = upload_date;
}

// 셀 - 모든 이미지 로드 완료
function php_complete_cell_images_load() {
    makeSelectCellImage.deleteAll();
    // my Image 불러온 것 적용
    loadSelectCellImageInfo();
    makeSelectCellImage.category = "cell";
    makeSelectCellImage.wrapper = "#lay_editor_layer .images .select_an_image .list_item_container_outer .list_item_container";
    makeSelectCellImage.top = 47;
    makeSelectCellImage.left = 25;
    makeSelectCellImage.maxMyImages = maxSelectCellImageMyImages;
    makeSelectCellImage.build("myImages");

    // 우측 scroll 생성
    if (!myCellImageScroll)
        myCellImageScroll = new scr("cellImage");

    myCellImageScroll.setBarArea($(".cellImage.scr-cont").css("height").replace("px", ""));
    myCellImageScroll.setup();

    $(".cellImage.scr-cont").css({ "top": "0px" });

    if (platform == "device")
        initFocusSelectAnImage("images");
}

// 셀 - 이미지 지우기 완료
function php_complete_cell_images_delete() {

    localStorage.setItem("maxSelectCellImageMyImages", maxSelectCellImageMyImages);

    selectCellImage.myImages.fileName[selectedMyImagesNo] = undefined;
    selectCellImage.myImages.url[selectedMyImagesNo] = undefined;
    selectCellImage.myImages.upload_date[selectedMyImagesNo] = undefined;

    php_complete_cell_images_load();
    $(".cellImage.scr-cont").css({ "top": "0px" });

    // - 표시 나타나기
    $("#lay_editor_layer .images .contents .select_an_image .myImagesImg .delete").show();

    selectedImageKind = null;
    selectedMyImagesNo = null;
}



// ****** 퍼블리시 ******

// 퍼블리시 - 삭제 완료
function php_complete_publish_delete(publish_type) {
    document.location.href = "/main";

    switch (publish_type) {
        case "publishMe":
            // slide list 기존것 지우기
            $("#body_playlists .body_contents .slideList").remove();
            $("#body_playlists .previewPopup_scene .popupList").remove();
            $("#body_playlists .editMap_scene .editList").remove();
            $("#body_playlists #previewPopupBackBorder").hide();

            // slide list 새로 불러오기
            setTimeout(function () {
                body_dimmed_open();
                document.process.location.href = "./load_number_of_publishMe";
                slide_current = 1;
            }, 100);
            break;
        case "myProject":
            // slide list 기존것 지우기
            $("#body_myprojects .body_contents .slideList").remove();
            $("#body_myprojects .previewPopup_scene .popupList").remove();
            $("#body_myprojects .editMap_scene .editList").remove();
            $("#body_myprojects #previewPopupBackBorder").hide();

            // slide list 새로 불러오기
            setTimeout(function () {
                body_dimmed_open();
                document.process.location.href = "./load_number_of_myproject";
                slide_current = 1;
            }, 100);
            break;
    }
    popclose("lay_editor_layer");
}

// 퍼블리시 - 갯수 확인 완료
function php_load_number_of_publish(publish_type, number_of_publish) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_number_of_publish = number_of_publish;
            break;
        case "myProject":
            serverMyProject_number_of_publish = number_of_publish;
            break;
    }

    mainKeyLocation.horizon = 1;
    focusMainHorizon();
}

// 퍼블리시 - Cell의 첫번째 이미지 정보 로드
function php_load_publish_cell_img_1(publish_type, order, cellNo, cell_image_url_1, cell_image_imageInCellPercentage_1, cell_image_imageInCellTop_1, cell_image_imageInCellLeft_1, cell_image_imageInCellWidth_1, cell_image_imageInCellHeight_1, cell_image_imageInEditPercentage_1, cell_image_imageInEditPositionX_1, cell_image_imageInEditPositionY_1) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_image_url_1[cellNo][(parseInt(order) + 1)] = cell_image_url_1;
            serverPublishMe_cell_image_imageInCellPercentage_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_1;
            serverPublishMe_cell_image_imageInCellTop_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_1;
            serverPublishMe_cell_image_imageInCellLeft_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_1;
            serverPublishMe_cell_image_imageInCellWidth_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_1;
            serverPublishMe_cell_image_imageInCellHeight_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_1;
            serverPublishMe_cell_image_imageInEditPercentage_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_1;
            serverPublishMe_cell_image_imageInEditPositionX_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_1;
            serverPublishMe_cell_image_imageInEditPositionY_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_1;
            break;
        case "myProject":
            serverMyProject_cell_image_url_1[cellNo][(parseInt(order) + 1)] = cell_image_url_1;
            serverMyProject_cell_image_imageInCellPercentage_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_1;
            serverMyProject_cell_image_imageInCellTop_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_1;
            serverMyProject_cell_image_imageInCellLeft_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_1;
            serverMyProject_cell_image_imageInCellWidth_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_1;
            serverMyProject_cell_image_imageInCellHeight_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_1;
            serverMyProject_cell_image_imageInEditPercentage_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_1;
            serverMyProject_cell_image_imageInEditPositionX_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_1;
            serverMyProject_cell_image_imageInEditPositionY_1[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_1;
            break;
    }
}

// 퍼블리시 - Cell의 두번째 이미지 정보 로드
function php_load_publish_cell_img_2(publish_type, order, cellNo, cell_image_url_2, cell_image_imageInCellPercentage_2, cell_image_imageInCellTop_2, cell_image_imageInCellLeft_2, cell_image_imageInCellWidth_2, cell_image_imageInCellHeight_2, cell_image_imageInEditPercentage_2, cell_image_imageInEditPositionX_2, cell_image_imageInEditPositionY_2) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_image_url_2[cellNo][(parseInt(order) + 1)] = cell_image_url_2;
            serverPublishMe_cell_image_imageInCellPercentage_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_2;
            serverPublishMe_cell_image_imageInCellTop_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_2;
            serverPublishMe_cell_image_imageInCellLeft_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_2;
            serverPublishMe_cell_image_imageInCellWidth_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_2;
            serverPublishMe_cell_image_imageInCellHeight_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_2;
            serverPublishMe_cell_image_imageInEditPercentage_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_2;
            serverPublishMe_cell_image_imageInEditPositionX_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_2;
            serverPublishMe_cell_image_imageInEditPositionY_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_2;
            break;
        case "myProject":
            serverMyProject_cell_image_url_2[cellNo][(parseInt(order) + 1)] = cell_image_url_2;
            serverMyProject_cell_image_imageInCellPercentage_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_2;
            serverMyProject_cell_image_imageInCellTop_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_2;
            serverMyProject_cell_image_imageInCellLeft_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_2;
            serverMyProject_cell_image_imageInCellWidth_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_2;
            serverMyProject_cell_image_imageInCellHeight_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_2;
            serverMyProject_cell_image_imageInEditPercentage_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_2;
            serverMyProject_cell_image_imageInEditPositionX_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_2;
            serverMyProject_cell_image_imageInEditPositionY_2[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_2;
            break;
    }
}

// 퍼블리시 - Cell의 세번째 이미지 정보 로드
function php_load_publish_cell_img_3(publish_type, order, cellNo, cell_image_url_3, cell_image_imageInCellPercentage_3, cell_image_imageInCellTop_3, cell_image_imageInCellLeft_3, cell_image_imageInCellWidth_3, cell_image_imageInCellHeight_3, cell_image_imageInEditPercentage_3, cell_image_imageInEditPositionX_3, cell_image_imageInEditPositionY_3) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_image_url_3[cellNo][(parseInt(order) + 1)] = cell_image_url_3;
            serverPublishMe_cell_image_imageInCellPercentage_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_3;
            serverPublishMe_cell_image_imageInCellTop_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_3;
            serverPublishMe_cell_image_imageInCellLeft_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_3;
            serverPublishMe_cell_image_imageInCellWidth_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_3;
            serverPublishMe_cell_image_imageInCellHeight_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_3;
            serverPublishMe_cell_image_imageInEditPercentage_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_3;
            serverPublishMe_cell_image_imageInEditPositionX_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_3;
            serverPublishMe_cell_image_imageInEditPositionY_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_3;
            break;
        case "myProject":
            serverMyProject_cell_image_url_3[cellNo][(parseInt(order) + 1)] = cell_image_url_3;
            serverMyProject_cell_image_imageInCellPercentage_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_3;
            serverMyProject_cell_image_imageInCellTop_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_3;
            serverMyProject_cell_image_imageInCellLeft_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_3;
            serverMyProject_cell_image_imageInCellWidth_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_3;
            serverMyProject_cell_image_imageInCellHeight_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_3;
            serverMyProject_cell_image_imageInEditPercentage_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_3;
            serverMyProject_cell_image_imageInEditPositionX_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_3;
            serverMyProject_cell_image_imageInEditPositionY_3[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_3;
            break;
    }
}

// 퍼블리시 - Cell의 네번째 이미지 정보 로드
function php_load_publish_cell_img_4(publish_type, order, cellNo, cell_image_url_4, cell_image_imageInCellPercentage_4, cell_image_imageInCellTop_4, cell_image_imageInCellLeft_4, cell_image_imageInCellWidth_4, cell_image_imageInCellHeight_4, cell_image_imageInEditPercentage_4, cell_image_imageInEditPositionX_4, cell_image_imageInEditPositionY_4) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_image_url_4[cellNo][(parseInt(order) + 1)] = cell_image_url_4;
            serverPublishMe_cell_image_imageInCellPercentage_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_4;
            serverPublishMe_cell_image_imageInCellTop_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_4;
            serverPublishMe_cell_image_imageInCellLeft_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_4;
            serverPublishMe_cell_image_imageInCellWidth_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_4;
            serverPublishMe_cell_image_imageInCellHeight_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_4;
            serverPublishMe_cell_image_imageInEditPercentage_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_4;
            serverPublishMe_cell_image_imageInEditPositionX_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_4;
            serverPublishMe_cell_image_imageInEditPositionY_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_4;
            break;
        case "myProject":
            serverMyProject_cell_image_url_4[cellNo][(parseInt(order) + 1)] = cell_image_url_4;
            serverMyProject_cell_image_imageInCellPercentage_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_4;
            serverMyProject_cell_image_imageInCellTop_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_4;
            serverMyProject_cell_image_imageInCellLeft_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_4;
            serverMyProject_cell_image_imageInCellWidth_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_4;
            serverMyProject_cell_image_imageInCellHeight_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_4;
            serverMyProject_cell_image_imageInEditPercentage_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_4;
            serverMyProject_cell_image_imageInEditPositionX_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_4;
            serverMyProject_cell_image_imageInEditPositionY_4[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_4;
            break;
    }
}

// 퍼블리시 - Cell의 다섯번째 이미지 정보 로드
function php_load_publish_cell_img_5(publish_type, order, cellNo, cell_image_url_5, cell_image_imageInCellPercentage_5, cell_image_imageInCellTop_5, cell_image_imageInCellLeft_5, cell_image_imageInCellWidth_5, cell_image_imageInCellHeight_5, cell_image_imageInEditPercentage_5, cell_image_imageInEditPositionX_5, cell_image_imageInEditPositionY_5) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_image_url_5[cellNo][(parseInt(order) + 1)] = cell_image_url_5;
            serverPublishMe_cell_image_imageInCellPercentage_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_5;
            serverPublishMe_cell_image_imageInCellTop_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_5;
            serverPublishMe_cell_image_imageInCellLeft_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_5;
            serverPublishMe_cell_image_imageInCellWidth_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_5;
            serverPublishMe_cell_image_imageInCellHeight_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_5;
            serverPublishMe_cell_image_imageInEditPercentage_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_5;
            serverPublishMe_cell_image_imageInEditPositionX_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_5;
            serverPublishMe_cell_image_imageInEditPositionY_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_5;
            break;
        case "myProject":
            serverMyProject_cell_image_url_5[cellNo][(parseInt(order) + 1)] = cell_image_url_5;
            serverMyProject_cell_image_imageInCellPercentage_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellPercentage_5;
            serverMyProject_cell_image_imageInCellTop_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellTop_5;
            serverMyProject_cell_image_imageInCellLeft_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellLeft_5;
            serverMyProject_cell_image_imageInCellWidth_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellWidth_5;
            serverMyProject_cell_image_imageInCellHeight_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInCellHeight_5;
            serverMyProject_cell_image_imageInEditPercentage_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPercentage_5;
            serverMyProject_cell_image_imageInEditPositionX_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionX_5;
            serverMyProject_cell_image_imageInEditPositionY_5[cellNo][(parseInt(order) + 1)] = cell_image_imageInEditPositionY_5;
            break;
    }
}

// 퍼블리시 - Devided 정보 로드
function php_load_publish_divided(publish_type, order, divided) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_divided[(parseInt(order) + 1)] = divided;
            break;
        case "myProject":
            serverMyProject_divided[(parseInt(order) + 1)] = divided;
            break;
    }
}

// 퍼블리시 - 백그라운드 이미지 정보 로드
function php_load_publish_background(publish_type, order, background_kind, background_color, background_image_url, project_name, top, left, width, height, per) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_background_kind[(parseInt(order) + 1)] = background_kind;
            serverPublishMe_background_color[(parseInt(order) + 1)] = background_color;
            serverPublishMe_background_image_url[(parseInt(order) + 1)] = background_image_url;
            serverPublishMe_background_image_top[(parseInt(order) + 1)] = top;
            serverPublishMe_background_image_left[(parseInt(order) + 1)] = left;
            serverPublishMe_background_image_width[(parseInt(order) + 1)] = width;
            serverPublishMe_background_image_height[(parseInt(order) + 1)] = height;
            serverPublishMe_background_image_percentage[(parseInt(order) + 1)] = per;
            serverPublishMe_project_name[(parseInt(order) + 1)] = project_name;
            break;
        case "myProject":
            serverMyProject_background_kind[(parseInt(order) + 1)] = background_kind;
            serverMyProject_background_color[(parseInt(order) + 1)] = background_color;
            serverMyProject_background_image_url[(parseInt(order) + 1)] = background_image_url;
            serverMyProject_background_image_top[(parseInt(order) + 1)] = top;
            serverMyProject_background_image_left[(parseInt(order) + 1)] = left;
            serverMyProject_background_image_width[(parseInt(order) + 1)] = width;
            serverMyProject_background_image_height[(parseInt(order) + 1)] = height;
            serverMyProject_background_image_percentage[(parseInt(order) + 1)] = per;
            serverMyProject_project_name[(parseInt(order) + 1)] = project_name;
            break;
    }
}

// 퍼블리시 - Cell 정보 로드
function php_load_publish_cell_info(publish_type, order, cellNo, cell_kind, cell_x, cell_y, cell_image_theFirstOrderFiveImages, cell_image_selectedFiveImageNo) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_kind[cellNo][(parseInt(order) + 1)] = cell_kind;
            serverPublishMe_cell_x[cellNo][(parseInt(order) + 1)] = cell_x;
            serverPublishMe_cell_y[cellNo][(parseInt(order) + 1)] = cell_y;
            serverPublishMe_cell_image_theFirstOrderFiveImages[cellNo][(parseInt(order) + 1)] = cell_image_theFirstOrderFiveImages;
            serverPublishMe_cell_image_selectedFiveImageNo[cellNo][(parseInt(order) + 1)] = cell_image_selectedFiveImageNo;
            break;
        case "myProject":
            serverMyProject_cell_kind[cellNo][(parseInt(order) + 1)] = cell_kind;
            serverMyProject_cell_x[cellNo][(parseInt(order) + 1)] = cell_x;
            serverMyProject_cell_y[cellNo][(parseInt(order) + 1)] = cell_y;
            serverMyProject_cell_image_theFirstOrderFiveImages[cellNo][(parseInt(order) + 1)] = cell_image_theFirstOrderFiveImages;
            serverMyProject_cell_image_selectedFiveImageNo[cellNo][(parseInt(order) + 1)] = cell_image_selectedFiveImageNo;
            break;
    }
}

// 퍼블리시 - Widget 정보 저장
function php_load_publish_widget(publish_type, order, cellNo, cell_widget_image_url, cell_widget_vod_id, cell_widget_widget_kind, cell_widget_weather_id, cell_widget_weather_kind) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_widget_image_url[cellNo][(parseInt(order) + 1)] = cell_widget_image_url;
            serverPublishMe_cell_widget_vod_id[cellNo][(parseInt(order) + 1)] = cell_widget_vod_id;
            serverPublishMe_cell_widget_widget_kind[cellNo][(parseInt(order) + 1)] = cell_widget_widget_kind;
            serverPublishMe_cell_widget_weather_id[cellNo][(parseInt(order) + 1)] = cell_widget_weather_id;
            serverPublishMe_cell_widget_weather_kind[cellNo][(parseInt(order) + 1)] = cell_widget_weather_kind;
            break;
        case "myProject":
            serverMyProject_cell_widget_image_url[cellNo][(parseInt(order) + 1)] = cell_widget_image_url;
            serverMyProject_cell_widget_vod_id[cellNo][(parseInt(order) + 1)] = cell_widget_vod_id;
            serverMyProject_cell_widget_widget_kind[cellNo][(parseInt(order) + 1)] = cell_widget_widget_kind;
            serverMyProject_cell_widget_weather_id[cellNo][(parseInt(order) + 1)] = cell_widget_weather_id;
            serverMyProject_cell_widget_weather_kind[cellNo][(parseInt(order) + 1)] = cell_widget_weather_kind;
            break;
    }
}

// 퍼블리시 - Text 정보 저장
function php_load_publish_text(publish_type,order, cellNo,cell_text_contents,cell_text_font_size,cell_text_font_color,cell_text_font_family,cell_text_font_align,cell_text_font_back_color,cell_text_font_weight,cell_text_font_vertical) {
    switch (publish_type) {
        case "publishMe":
            serverPublishMe_cell_text_contents[cellNo][(parseInt(order) + 1)] = cell_text_contents;
            serverPublishMe_cell_text_font_size[cellNo][(parseInt(order) + 1)] = cell_text_font_size;
            serverPublishMe_cell_text_font_color[cellNo][(parseInt(order) + 1)] = cell_text_font_color;
            serverPublishMe_cell_text_font_family[cellNo][(parseInt(order) + 1)] = cell_text_font_family;
            serverPublishMe_cell_text_font_align[cellNo][(parseInt(order) + 1)] = cell_text_font_align;
            serverPublishMe_cell_text_font_back_color[cellNo][(parseInt(order) + 1)] = cell_text_font_back_color;
            serverPublishMe_cell_text_font_weight[cellNo][(parseInt(order) + 1)] = cell_text_font_weight;
            serverPublishMe_cell_text_font_vertical[cellNo][(parseInt(order) + 1)] = cell_text_font_vertical;
            break;
        case "myProject":
            serverMyProject_cell_text_contents[cellNo][(parseInt(order) + 1)] = cell_text_contents;
            serverMyProject_cell_text_font_size[cellNo][(parseInt(order) + 1)] = cell_text_font_size;
            serverMyProject_cell_text_font_color[cellNo][(parseInt(order) + 1)] = cell_text_font_color;
            serverMyProject_cell_text_font_family[cellNo][(parseInt(order) + 1)] = cell_text_font_family;
            serverMyProject_cell_text_font_align[cellNo][(parseInt(order) + 1)] = cell_text_font_align;
            serverMyProject_cell_text_font_back_color[cellNo][(parseInt(order) + 1)] = cell_text_font_back_color;
            serverMyProject_cell_text_font_weight[cellNo][(parseInt(order) + 1)] = cell_text_font_weight;
            serverMyProject_cell_text_font_vertical[cellNo][(parseInt(order) + 1)] = cell_text_font_vertical;
            break;
    }
}

// 퍼블리시 - 로드 완료 
function php_complete_publish_load(publish_type) {
    switch (publish_type) {
        case "publishMe":
            init_initializePlaylists();
            document.process.location.href = "./load_number_of_myproject";
            break;
        case "myProject":
            init_initializeMyprojects();
            break;
    }
    body_dimmed_close();
}

// 퍼블리시 - 백그라운드 완료
function php_complete_phpUpload_background(publish_type) {
    switch (publish_type) {
        case "publishMe":
            document.process.location.href = "./upload_publish/" + php_upload_parameter[1];
            break;
        case "myProject":
            document.process.location.href = "./upload_publish/" + php_upload_parameter[1];
            break;
    }
}

// 퍼블리시 - 셀 업로드 완료
function php_complete_phpUpload_cell(publish_type, cellNo) {
    switch (publish_type) {
        case "publishMe":
            if (php_upload_parameter[(Number(cellNo) + 1)] == undefined) {
                php_complete_phpUpload_cell(publish_type, Number(cellNo) + 1);
            }
            else
                document.process.location.href = "./upload_publish/" + php_upload_parameter[(Number(cellNo) + 1)];
            break;
        case "myProject":
            if (php_upload_parameter[(Number(cellNo) + 1)] == undefined) {
                php_complete_phpUpload_cell(publish_type, Number(cellNo) + 1);
            }
            else
                document.process.location.href = "./upload_publish/" + php_upload_parameter[(Number(cellNo) + 1)];
            break;
    }
}

// 퍼블리시 - 완료
function php_complete_phpUpload_all(publish_type) {
    document.location.href = "/main";
    switch (publish_type) {
        case "publishMe":
            // slide list 기존것 지우기
            $("#body_playlists .body_contents .slideList").remove();
            $("#body_playlists .previewPopup_scene .popupList").remove();
            $("#body_playlists .editMap_scene .editList").remove();

            // slide list 새로 불러오기
            setTimeout(function () {
                body_dimmed_open();
                document.process.location.href = "./load_number_of_publishMe";
                slide_current = 1;
            }, 100);
            break;
        case "myProject":
            // slide list 기존것 지우기
            $("#body_myprojects .body_contents .slideList").remove();
            $("#body_myprojects .previewPopup_scene .popupList").remove();
            $("#body_myprojects .editMap_scene .editList").remove();

            // slide list 새로 불러오기
            setTimeout(function () {
                body_dimmed_open();
                document.process.location.href = "./load_number_of_myproject";
                slide_current = 1;
            }, 100);
            break;
    }
    
}
