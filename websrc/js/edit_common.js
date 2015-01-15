
$(document).ready(function () {
    // cell 클릭 이벤트
    $(".editMap .cell_1").live('click', function (event) { ready_editor_layer(1); });
    $(".editMap .cell_2").live('click', function (event) { ready_editor_layer(2); });
    $(".editMap .cell_3").live('click', function (event) { ready_editor_layer(3); });
    $(".editMap .cell_4").live('click', function (event) { ready_editor_layer(4); });
    $(".editMap .cell_5").live('click', function (event) { ready_editor_layer(5); });
    $(".editMap .cell_6").live('click', function (event) { ready_editor_layer(6); });
    $(".editMap .cell_7").live('click', function (event) { ready_editor_layer(7); });
    $(".editMap .cell_8").live('click', function (event) { ready_editor_layer(8); });
    $(".editMap .cell_9").live('click', function (event) { ready_editor_layer(9); });
    $(".editMap .cell_10").live('click', function (event) { ready_editor_layer(10); });
    $(".editMap .cell_11").live('click', function (event) { ready_editor_layer(11); });
    $(".editMap .cell_12").live('click', function (event) { ready_editor_layer(12); });
    $(".editMap .cell_13").live('click', function (event) { ready_editor_layer(13); });
    $(".editMap .cell_14").live('click', function (event) { ready_editor_layer(14); });
    $(".editMap .cell_15").live('click', function (event) { ready_editor_layer(15); });
    $(".editMap .cell_16").live('click', function (event) { ready_editor_layer(16); });
    $(".editMap .cell_17").live('click', function (event) { ready_editor_layer(17); });
    $(".editMap .cell_18").live('click', function (event) { ready_editor_layer(18); });
    $(".editMap .cell_19").live('click', function (event) { ready_editor_layer(19); });
    $(".editMap .cell_20").live('click', function (event) { ready_editor_layer(20); });
    $(".editMap .cell_21").live('click', function (event) { ready_editor_layer(21); });
    $(".editMap .cell_22").live('click', function (event) { ready_editor_layer(22); });
    $(".editMap .cell_23").live('click', function (event) { ready_editor_layer(23); });
    $(".editMap .cell_24").live('click', function (event) { ready_editor_layer(24); });
    $(".editMap .cell_25").live('click', function (event) { ready_editor_layer(25); });


    // Text Color 팔렛트 셋팅
    for (i = 0; i <= 67; i++) {
        $("#lay_editor_layer .text_color_list .palette .list_" + i).css("background-color", text_color_list[i]);
    }

    // 백그라운드 칼라 선택 메뉴 클릭 이벤트
    $("#lay_editor_layer .backgrounds .top_btn #1").click(function () {
        topSelectMenuName = "color";
        top_btn_reset("backgrounds");
        $("#lay_editor_layer .backgrounds .color").show();
        $("#lay_editor_layer .backgrounds .top_btn .color_btn").addClass("selected");
        editLayerBackgrounds_colorSubListKeyLocation.horizon = 1;
    });
    // 백그라운드 이미지 선택 메뉴 클릭 이벤트
    $("#lay_editor_layer .backgrounds .top_btn #2").click(function () {
        topSelectMenuName = "image";
        top_btn_reset("backgrounds");
        $("#lay_editor_layer .backgrounds .image").show();
        $("#lay_editor_layer .backgrounds .top_btn .image_btn").addClass("selected");
    });
    // 백그라운드 비디오 선택 메뉴 클릭 이벤트
    $("#lay_editor_layer .backgrounds .top_btn #3").click(function () {
        topSelectMenuName = "video";
        top_btn_reset("backgrounds");
        $("#lay_editor_layer .backgrounds .video").show();
        $("#lay_editor_layer .backgrounds .top_btn .video_btn").addClass("selected");
    });
    /*
    // 백그라운드 TV 선택 메뉴 클릭 이벤트
    $("#lay_editor_layer .backgrounds .top_btn #4").click(function(){
        topSelectMenuName = "tv";
        top_btn_reset("backgrounds");
        $("#lay_editor_layer .backgrounds .tv").show();
        $("#lay_editor_layer .backgrounds .top_btn .tv_btn").css({'background-image':'url(../websrc/img/main/lb_editor_layer_background_13.png)'});
    });
    */

    // 위젯 유튜브 라이브 선택 메뉴 클릭시 이벤트
    $("#lay_editor_layer .widgets .top_btn #1").click(function () {
        topSelectMenuName = "tv";
        selectedListNumber = 0;
        startListNumber = 0;
        adjustList();
        $("#lay_editor_layer .widgets .image_selected").hide();
        top_btn_reset("widgets");
        $("#lay_editor_layer .widgets .tv").show();
        $("#lay_editor_layer .widgets .top_btn .tv_btn").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_widgets_04.png)' });
    });
    // 위젯 유튜브 비디오 선택 메뉴 클릭시 이벤트
    $("#lay_editor_layer .widgets .top_btn #2").click(function () {
        topSelectMenuName = "video";
        startListNumber = 0;
        selectedListNumber = 0;
        adjustList();
        $("#lay_editor_layer .widgets .image_selected").hide();
        top_btn_reset("widgets");
        $("#lay_editor_layer .widgets .video").show();
        $("#lay_editor_layer .widgets .top_btn .video_btn").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_widgets_07.png)' });
    });
    // 위젯 유튜브 뮤직 선택 메뉴 클릭시 이벤트
    $("#lay_editor_layer .widgets .top_btn #3").click(function () {
        topSelectMenuName = "music";
        selectedListNumber = 0;
        $("#lay_editor_layer .widgets .image_selected").hide();
        top_btn_reset("widgets");
        $("#lay_editor_layer .widgets .music").show();
        $("#lay_editor_layer .widgets .top_btn .music_btn").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_widgets_10.png)' });
    });
    // 위젯 유튜브 시계 선택 메뉴 클릭시 이벤트
    $("#lay_editor_layer .widgets .top_btn #4").click(function () {
        topSelectMenuName = "clock";
        selectedListNumber = 0;
        $("#lay_editor_layer .widgets .image_selected").hide();
        top_btn_reset("widgets");
        $("#lay_editor_layer .widgets .clock").show();
        $("#lay_editor_layer .widgets .top_btn .clock_btn").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_widgets_13.png)' });
    });
    // 위젯 유튜브 날씨 선택 메뉴 클릭시 이벤트
    $("#lay_editor_layer .widgets .top_btn #5").click(function () {
        topSelectMenuName = "weather";
        selectedListNumber = 0;
        adjustList();
        $("#lay_editor_layer .widgets .image_selected").hide();
        top_btn_reset("widgets");
        $("#lay_editor_layer .widgets .weather").show();
        $("#lay_editor_layer .widgets .top_btn .weather_btn").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_widgets_16.png)' });
    });
    // 위젯 유튜브 뉴스 선택 메뉴 클릭시 이벤트
    $("#lay_editor_layer .widgets .top_btn #6").click(function () {
        topSelectMenuName = "news";
        selectedListNumber = 0;
        $("#lay_editor_layer .widgets .image_selected").hide();
        top_btn_reset("widgets");
        $("#lay_editor_layer .widgets .news").show();
        $("#lay_editor_layer .widgets .top_btn .news_btn").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_widgets_19.png)' });
    });
    // 위젯 유튜브 환율 선택 메뉴 클릭시 이벤트
    $("#lay_editor_layer .widgets .top_btn #7").click(function () {
        topSelectMenuName = "currencies";
        selectedListNumber = 0;
        $("#lay_editor_layer .widgets .image_selected").hide();
        top_btn_reset("widgets");
        $("#lay_editor_layer .widgets .currencies").show();
        $("#lay_editor_layer .widgets .top_btn .currencies_btn").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_widgets_22.png)' });
    });

    // CANCEL 버튼 클릭 이벤트 ( 모든 메뉴에서 공통으로 사용 )
    $("#lay_editor_layer .bottom_btn .cancel").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            popclose("lay_editor_layer");
        });
    });

    // 백그라운드 칼라 APPLY 버튼 클릭 이벤트
    $("#lay_editor_layer .backgrounds .color .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            popclose("lay_editor_layer");
            color_sub_list_reset();
            underEditKind.background.kind = "color";
            appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
            $("#body_" + selectedSlideListKind + " .editMap_scene" + "_" + selectedSlideListNo + "_img .body_contents_background").css({
                "background-color": appliedEditKind.background.color,
                "background-image": "none",
                "background-size": "100% 100%"
            });
        });
    });

    // 백그라운드 이미지 APPLY 버튼 클릭 이벤트
    $("#lay_editor_layer .backgrounds .image .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            popclose("lay_editor_layer");

            var cellWidth = 1120;
            var cellHeight = 630;
            backgroundInCellPer = (backgroundInCellWidth * 100) / cellWidth * 4;

            underEditKind.background.image.url = urlOfBackgroundImage;
            underEditKind.background.kind = "image";
            underEditKind.background.top = backgroundInCellTop;
            underEditKind.background.left = backgroundInCellLeft;
            underEditKind.background.width = backgroundInCellWidth;
            underEditKind.background.height = backgroundInCellHeight;
            underEditKind.background.percentage = backgroundInCellPer;
            appliedEditKind = JSON.parse(JSON.stringify(underEditKind));

            $("#body_" + selectedSlideListKind + " .editMap_scene" + "_" + selectedSlideListNo + "_img .body_contents_background").css({
                "position":"relative",
                "background-color": "undefined",
                "background-image": "url(" + urlOfBackgroundImage + ")",
                "background-size": backgroundInCellPer + "%",
                'background-position-y': backgroundInCellTop * 4,
                'background-position-x': backgroundInCellLeft * 4,
                "background-repeat": "no-repeat"
            });
        });
    });


    // 1-f-3. 공통 - bottom button 클릭 이벤트 - Widgets
    $("#lay_editor_layer .widgets .tv .bottom_btn .apply").click(function () {
        if (!selectedListNumber)
        {
            showMsg("Please, Select a item.");
            return;
        }
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            cellKind[selectedCellNo] = "widgets";
            popclose("lay_editor_layer");
            underEditKind.cell[selectedCellNo].widget.widget_kind = "tv";
            underEditKind.cell[selectedCellNo].widget.image_url = livestream[selectedListNumber].image_url;
            underEditKind.cell[selectedCellNo].widget.vod_id = livestream[selectedListNumber].id;
            appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
            var url = "url(" + livestream[selectedListNumber].image_url + ")";
            $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .img_1").css({
                "background-image": url,
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
        });
    });

    $("#lay_editor_layer .widgets .video .bottom_btn .apply").click(function () {
        if (!selectedListNumber) {
            showMsg("Please, Select a item.");
            return;
        }
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            cellKind[selectedCellNo] = "widgets";
            underEditKind.cell[selectedCellNo].widget.widget_kind = "video";
            underEditKind.cell[selectedCellNo].widget.image_url = vodPlaylists[selectedListNumber].image_url;
            underEditKind.cell[selectedCellNo].widget.vod_id = vodPlaylists[selectedListNumber].id;
            appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
            popclose("lay_editor_layer");
            var url = "url(" + vodPlaylists[selectedListNumber].image_url + ")";
            $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .img_1").css({
                "background-image": url,
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
        });
    });

    $("#lay_editor_layer .widgets .music .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            cellKind[selectedCellNo] = "widgets";
            popclose("lay_editor_layer");
            // 실제 cell에 적용하기
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-position': '0px 0px' });
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-size': '100% 100%' });
        });
    });

    $("#lay_editor_layer .widgets .clock .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            cellKind[selectedCellNo] = "widgets";
            popclose("lay_editor_layer");
            // 실제 cell에 적용하기				
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-position': '0px 0px' });
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-size': '100% 100%' });
        });
    });

    $("#lay_editor_layer .widgets .weather .bottom_btn .apply").click(function () {
        if (!selectedListNumber) {
            showMsg("Please, Select type of weather widget.");
            return;
        }
        if (!LOCATION) {
            showMsg("Please, Select Location");
            return;
        }

        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            cellKind[selectedCellNo] = "widgets";
            popclose("lay_editor_layer");
            // 실제 cell에 적용하기
            underEditKind.cell[selectedCellNo].widget.widget_kind = "weather";
            underEditKind.cell[selectedCellNo].widget.weather_id = LOCATION;
            underEditKind.cell[selectedCellNo].widget.weather_kind = selectedListNumber;
            underEditKind.cell[selectedCellNo].widget.image_url = "../websrc/img/main/weather_sample_0" + selectedListNumber + ".png";

            appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
            // TO DO
            var url = "url('../websrc/img/main/weather_sample_0" + selectedListNumber + ".png')";
            $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .img_1").css({
                "background-image": url,
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            });
        });
    });

    $("#lay_editor_layer .widgets .news .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            cellKind[selectedCellNo] = "widgets";
            popclose("lay_editor_layer");
            // 실제 cell에 적용하기
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-position': '0px 0px' });
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-size': '100% 100%' });
        });
    });

    $("#lay_editor_layer .widgets .currencies .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            cellKind[selectedCellNo] = "widgets";
            popclose("lay_editor_layer");
            // 실제 cell에 적용하기
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-position': '0px 0px' });
            $(".body_contents .cell_" + selectedCellNo).css({ 'background-size': '100% 100%' });
        });
    });


    // 1-f-4. 공통 - bottom button 클릭 이벤트 - Images
    $("#lay_editor_layer .images .contents .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            // 팝업창 닫기
            popclose("lay_editor_layer");
            // find the first order of five images
            theFirstOrderFiveImages = 0;
            for (var i = 1; i <= 5; i++) {
                if (String(urlOfCellImage[i]) != "" && String(urlOfCellImage[i]) != "undefined" && String(urlOfCellImage[i]) != "null") {
                    theFirstOrderFiveImages = i;
                    break;
                }
            }
            // 실제 cell에 적용하기
            for (var i = 1; i <= 5; i++) {
                if (isFiveImageSetted[i]) {
                    // image 크기를 맞춰서 적용한다.
                    var cellWidth = (originalEditKind.cell[selectedCellNo].x * 224);
                    var cellHeight = (originalEditKind.cell[selectedCellNo].y * 126);
                    imageInEditWidth[i] = (cellWidth * imageInCellWidth[i]) / activeCellWidth[i];
                    imageInEditHeight[i] = (cellHeight * imageInCellHeight[i]) / activeCellHeight[i];
                    imageInEditPercentage[i] = (imageInEditWidth[i] * 100) / cellWidth;

                    // image 위치를 맞춰서 적용한다.
                    imageInEditPositionX[i] = -(activeCellLeft[i] - imageInCellLeft[i]) * (imageInEditWidth[i] / imageInCellWidth[i]);
                    imageInEditPositionY[i] = -(activeCellTop[i] - imageInCellTop[i]) * (imageInEditHeight[i] / imageInCellHeight[i]);
                }
            }

            // 저장하기 위한 변수 설정
            for (var i = 1; i <= 5; i++) {
                // 저장하기 위한 변수 설정					
                originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages = theFirstOrderFiveImages;
                originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo = selectedFiveImageNo;
                originalEditKind.cell[selectedCellNo].image.url[i] = urlOfCellImage[i];
                originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] = imageInCellPercentage[i];
                originalEditKind.cell[selectedCellNo].image.imageInCellTop[i] = imageInCellTop[i];
                originalEditKind.cell[selectedCellNo].image.imageInCellLeft[i] = imageInCellLeft[i];
                originalEditKind.cell[selectedCellNo].image.imageInCellWidth[i] = imageInCellWidth[i];
                originalEditKind.cell[selectedCellNo].image.imageInCellHeight[i] = imageInCellHeight[i];
                originalEditKind.cell[selectedCellNo].image.imageInEditPercentage[i] = imageInEditPercentage[i];
                originalEditKind.cell[selectedCellNo].image.imageInEditPositionX[i] = imageInEditPositionX[i];
                originalEditKind.cell[selectedCellNo].image.imageInEditPositionY[i] = imageInEditPositionY[i];

                underEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages = theFirstOrderFiveImages;
                underEditKind.cell[selectedCellNo].image.selectedFiveImageNo = selectedFiveImageNo;
                underEditKind.cell[selectedCellNo].image.url[i] = urlOfCellImage[i];
                underEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] = imageInCellPercentage[i];
                underEditKind.cell[selectedCellNo].image.imageInCellTop[i] = imageInCellTop[i];
                underEditKind.cell[selectedCellNo].image.imageInCellLeft[i] = imageInCellLeft[i];
                underEditKind.cell[selectedCellNo].image.imageInCellWidth[i] = imageInCellWidth[i];
                underEditKind.cell[selectedCellNo].image.imageInCellHeight[i] = imageInCellHeight[i];
                underEditKind.cell[selectedCellNo].image.imageInEditPercentage[i] = imageInEditPercentage[i];
                underEditKind.cell[selectedCellNo].image.imageInEditPositionX[i] = imageInEditPositionX[i];
                underEditKind.cell[selectedCellNo].image.imageInEditPositionY[i] = imageInEditPositionY[i];
                appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
            }

            // apply on the cell only one image with the first order.
            if (theFirstOrderFiveImages == 0) {
                $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .img_1").css({
                    "background-image": "none"
                });
            }
            else {
                $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .img_1").css({
                    "background-image": "url(" + originalEditKind.cell[selectedCellNo].image.url[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages] + ")",
                    "background-repeat": "no-repeat",
                    "background-size": imageInEditPercentage[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages] + "%",
                    "background-position-x": (imageInEditPositionX[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages]) + "px",
                    "background-position-y": (imageInEditPositionY[originalEditKind.cell[selectedCellNo].image.theFirstOrderFiveImages]) + "px"
                });
            }
        });
    });


    $("#lay_editor_layer .images .bottom_btn .cancel").click(function () {
        //underEditKind = JSON.parse(JSON.stringify(appliedEditKind));
        for (var i = 1; i <= 5; i++) {
            // 이미지 원래 대로 복구
            /*
            $("#lay_editor_layer .images .contents .image_preview_" + i + " .ableCell img").attr("src", originalEditKind.cell[selectedCellNo].image.url[i]);

            var imageDepth = $("#lay_editor_layer .images .contents .image_preview_" + i + " .ableCell img");
            imageDepth.css({
                'position': 'relative',
                'width': originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] + '%',
                'height': originalEditKind.cell[selectedCellNo].image.imageInCellPercentage[i] + '%',
                'top': 0,
                'left': 0
            });
            */

            // 빈 이미지라면,
            if (String(originalEditKind.cell[selectedCellNo].image.url[i]) == "" || String(originalEditKind.cell[selectedCellNo].image.url[i]) == "undefined" || String(originalEditKind.cell[selectedCellNo].image.url[i]) == "null") {
                // 빈 이미지라는 변수 설정
                isFiveImageSetted[i] = false;

                // disableCell 표시 없애기
                $("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_1").hide();
                $("#lay_editor_layer .image_preview .image_preview_" + i + " .disableCell_2").hide();
                $("#lay_editor_layer .image_preview .image_preview_" + i + " .cell_size").hide();
            }
        }

        // 체크 표시 마지막으로 되돌리기			
        selectedFiveImageNo = originalEditKind.cell[selectedCellNo].image.selectedFiveImageNo;
        if (selectedFiveImageNo == 0) $("#lay_editor_layer .images .contents .image_preview .image_selected").hide();
        else {
            $("#lay_editor_layer .images .contents .image_preview .image_selected").css({
                top: "125px",
                left: (((selectedFiveImageNo - 1) * 131) + 343) + "px"
            });
        }
    });

    // 1-f-5. 공통 - bottom button 클릭 이벤트 - Text
    $("#lay_editor_layer .text .contents .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            popclose("lay_editor_layer");

            // 실제 cell에 적용하기
            modified_font_size = Number((230 / 256) * underEditKind.cell[selectedCellNo].text.font_size);
            if ((underEditKind.cell[selectedCellNo].text.contents) != "undefined")
                $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .vertical-align").text(underEditKind.cell[selectedCellNo].text.contents);

            appliedEditKind = JSON.parse(JSON.stringify(underEditKind));
            $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo).css({
                "background-image": "none",
                "background-color": appliedEditKind.cell[selectedCellNo].text.font_back_color
            });
            $("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .vertical-align").css({
                //"width":"230px",
                "height": Number((230 / 256) * appliedEditKind.cell[selectedCellNo].text.font_size) + "px",
                "font-size": modified_font_size + "px",
                "color": appliedEditKind.cell[selectedCellNo].text.font_color,
                "font-family": appliedEditKind.cell[selectedCellNo].text.font_family,
                "text-align": appliedEditKind.cell[selectedCellNo].text.font_align,
                "font-weight": appliedEditKind.cell[selectedCellNo].text.font_weight
            });
            runTextVerticalAlign("#body_" + selectedSlideListKind + " .editMap_scene_" + selectedSlideListNo + "_img .cell_" + selectedCellNo + " .vertical-align", appliedEditKind.cell[selectedCellNo].text.font_vertical);

        });
    });
    $("#lay_editor_layer .text .contents .bottom_btn .cancel").click(function () {
        underEditKind = JSON.parse(JSON.stringify(appliedEditKind));
        $('#lay_editor_layer .text .contents .text_input #input_text_input').val(appliedEditKind.cell[selectedCellNo].text.contents);
        $('#lay_editor_layer .text .contents .text_input #input_text_input').text(appliedEditKind.cell[selectedCellNo].text.contents);
    });


    // 1-f-6. 공통 - bottom button 클릭 이벤트 - Cancel_layer
    $("#lay_editor_layer .cancel_layer .contents .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            popclose("lay_editor_layer");
        });
    });


    // 1-f-7. 공통 - bottom button 클릭 이벤트 - Save
    $("#lay_editor_layer .save .contents .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            runPublish("myproject");
            popclose("lay_editor_layer");
        });
    });


    // 1-f-8. 공통 - bottom button 클릭 이벤트 - Publish
    $("#lay_editor_layer .publish .contents .bottom_btn .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            runPublish("playlist");
            popclose("lay_editor_layer");
            body_dimmed_open();
        });
    });


    // 1-g. 공통 - left button 클릭 이벤트
    // 1-g-1. 공통 - left button 클릭 이벤트 - "Cancel" 클릭 이벤트
    $("#lay_editor_layer .left_btn .leftBtn_cancel").click(function () {
        editor_left_cancel();
    });
    // 1-g-2. 공통 - left button 클릭 이벤트 - "Save" 클릭 이벤트
    $("#lay_editor_layer .left_btn .leftBtn_save").click(function () {
        editor_left_save();
    });
    // 1-g-3. 공통 - left button 클릭 이벤트 - "Publish" 클릭 이벤트
    $("#lay_editor_layer .left_btn .leftBtn_publish").click(function () {
        editor_left_publish();
    });
    // 1-g-4. 공통 - left button 클릭 이벤트 - "Backgrounds" 클릭 이벤트
    $("#lay_editor_layer .left_btn .leftBtn_backgrounds").click(function () {
        editor_left_backgrounds();
    });
    // 1-g-5. 공통 - left button 클릭 이벤트 - "Widgets" 클릭 이벤트		
    $("#lay_editor_layer .left_btn .leftBtn_widgets").click(function () {
        editor_left_widgets();
    });
    // 1-g-6. 공통 - left button 클릭 이벤트 - "Images" 클릭 이벤트
    $("#lay_editor_layer .left_btn .leftBtn_images").click(function () {
        editor_left_images();
    });
    // 1-g-7. 공통 - left button 클릭 이벤트 - "Text" 클릭 이벤트
    $("#lay_editor_layer .left_btn .leftBtn_text").click(function () {
        editor_left_text();
    });


    // 1-g-8. 공통 - left button 클릭 이벤트 - left navigation 효과



    // 2. Backgrounds
    // 2-a. Backgrounds - Color
    // 2-a-1. Backgrounds - Color - color 리스트 클릭 이벤트 
    $(".color_1").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_1").show();
        $('#color_sub_list_1').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_1').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_2").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_2").show();
        $('#color_sub_list_2').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_2').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_3").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_3").show();
        $('#color_sub_list_3').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_3').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_4").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_4").show();
        $('#color_sub_list_4').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_4').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_5").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_5").show();
        $('#color_sub_list_5').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_5').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_6").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_6").show();
        $('#color_sub_list_6').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_6').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_7").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_7").show();
        $('#color_sub_list_7').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_7').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_8").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_8").show();
        $('#color_sub_list_8').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_8').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_9").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_9").show();
        $('#color_sub_list_9').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_9').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });
    $(".color_10").click(function () {
        color_sub_list_reset();
        $("#color_sub_list_10").show();
        $('#color_sub_list_10').animate({ top: "0px", opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#color_sub_list_10').animate({ top: "0px", opacity: "1.0" }, 500, 'easeInOutQuint');
        });
    });


    // 2-a-2. Backgrounds - Color - sub color 리스트 클릭 이벤트 
    // 2-a-2-(1). color_1 리스트
    $("#color_sub_list_1 #1").click(function () {
        color_selected_effect("1", "#000");
    });
    $("#color_sub_list_1 #2").click(function () {
        color_selected_effect("1", "#0f0f0f");
    });
    $("#color_sub_list_1 #3").click(function () {
        color_selected_effect("1", "#1c1c1c");
    });
    $("#color_sub_list_1 #4").click(function () {
        color_selected_effect("1", "#202020");
    });
    $("#color_sub_list_1 #5").click(function () {
        color_selected_effect("1", "#2f2f2f");
    });
    $("#color_sub_list_1 #6").click(function () {
        color_selected_effect("1", "#333333");
    });
    // 2-a-2-(2). color_2 리스트
    $("#color_sub_list_2 #1").click(function () {
        color_selected_effect("2", "#444");
    });
    $("#color_sub_list_2 #2").click(function () {
        color_selected_effect("2", "#555");
    });
    $("#color_sub_list_2 #3").click(function () {
        color_selected_effect("2", "#666");
    });
    $("#color_sub_list_2 #4").click(function () {
        color_selected_effect("2", "#777");
    });
    $("#color_sub_list_2 #5").click(function () {
        color_selected_effect("2", "#888");
    });
    $("#color_sub_list_2 #6").click(function () {
        color_selected_effect("2", "#999");
    });
    // 2-a-2-(3). color_3 리스트
    $("#color_sub_list_3 #1").click(function () {
        color_selected_effect("3", "#aaa");
    });
    $("#color_sub_list_3 #2").click(function () {
        color_selected_effect("3", "#bbb");
    });
    $("#color_sub_list_3 #3").click(function () {
        color_selected_effect("3", "#ccc");
    });
    $("#color_sub_list_3 #4").click(function () {
        color_selected_effect("3", "#ddd");
    });
    $("#color_sub_list_3 #5").click(function () {
        color_selected_effect("3", "#eee");
    });
    $("#color_sub_list_3 #6").click(function () {
        color_selected_effect("3", "#fff");
    });
    // 2-a-2-(4). color_4 리스트
    $("#color_sub_list_4 #1").click(function () {
        color_selected_effect("4", "#b3c7df");
    });
    $("#color_sub_list_4 #2").click(function () {
        color_selected_effect("4", "#7f91cb");
    });
    $("#color_sub_list_4 #3").click(function () {
        color_selected_effect("4", "#436e93");
    });
    $("#color_sub_list_4 #4").click(function () {
        color_selected_effect("4", "#1f497d");
    });
    $("#color_sub_list_4 #5").click(function () {
        color_selected_effect("4", "#173559");
    });
    $("#color_sub_list_4 #6").click(function () {
        color_selected_effect("4", "#0d1d31");
    });
    // 2-a-2-(5). color_5 리스트
    $("#color_sub_list_5 #1").click(function () {
        color_selected_effect("5", "#c9daef");
    });
    $("#color_sub_list_5 #2").click(function () {
        color_selected_effect("5", "#98b6db");
    });
    $("#color_sub_list_5 #3").click(function () {
        color_selected_effect("5", "#749ccc");
    });
    $("#color_sub_list_5 #4").click(function () {
        color_selected_effect("5", "#4f81bd");
    });
    $("#color_sub_list_5 #5").click(function () {
        color_selected_effect("5", "#2e4c70");
    });
    $("#color_sub_list_5 #6").click(function () {
        color_selected_effect("5", "#182a3f");
    });
    // 2-a-2-(6). color_6 리스트
    $("#color_sub_list_6 #1").click(function () {
        color_selected_effect("6", "#ecc2c1");
    });
    $("#color_sub_list_6 #2").click(function () {
        color_selected_effect("6", "#d79492");
    });
    $("#color_sub_list_6 #3").click(function () {
        color_selected_effect("6", "#cf6f6c");
    });
    $("#color_sub_list_6 #4").click(function () {
        color_selected_effect("6", "#c0504d");
    });
    $("#color_sub_list_6 #5").click(function () {
        color_selected_effect("6", "#7b3230");
    });
    $("#color_sub_list_6 #6").click(function () {
        color_selected_effect("6", "#401a19");
    });
    // 2-a-2-(7). color_7 리스트
    $("#color_sub_list_7 #1").click(function () {
        color_selected_effect("7", "#bac0ad");
    });
    $("#color_sub_list_7 #2").click(function () {
        color_selected_effect("7", "#a9b88a");
    });
    $("#color_sub_list_7 #3").click(function () {
        color_selected_effect("7", "#90b96d");
    });
    $("#color_sub_list_7 #4").click(function () {
        color_selected_effect("7", "#9bbb59");
    });
    $("#color_sub_list_7 #5").click(function () {
        color_selected_effect("7", "#637738");
    });
    $("#color_sub_list_7 #6").click(function () {
        color_selected_effect("7", "#3d4b22");
    });
    // 2-a-2-(8). color_8 리스트
    $("#color_sub_list_8 #1").click(function () {
        color_selected_effect("8", "#e5e0ec");
    });
    $("#color_sub_list_8 #2").click(function () {
        color_selected_effect("8", "#ccc1d9");
    });
    $("#color_sub_list_8 #3").click(function () {
        color_selected_effect("8", "#b292c7");
    });
    $("#color_sub_list_8 #4").click(function () {
        color_selected_effect("8", "#8064a2");
    });
    $("#color_sub_list_8 #5").click(function () {
        color_selected_effect("8", "#5f497a");
    });
    $("#color_sub_list_8 #6").click(function () {
        color_selected_effect("8", "#3f3151");
    });
    // 2-a-2-(9). color_9 리스트
    $("#color_sub_list_9 #1").click(function () {
        color_selected_effect("9", "#bee1eb");
    });
    $("#color_sub_list_9 #2").click(function () {
        color_selected_effect("9", "#98cedd");
    });
    $("#color_sub_list_9 #3").click(function () {
        color_selected_effect("9", "#77c296");
    });
    $("#color_sub_list_9 #4").click(function () {
        color_selected_effect("9", "#4bacc6");
    });
    $("#color_sub_list_9 #5").click(function () {
        color_selected_effect("9", "#2b6574");
    });
    $("#color_sub_list_9 #6").click(function () {
        color_selected_effect("9", "#17363e");
    });
    // 2-a-2-(10). color_10 리스트
    $("#color_sub_list_10 #1").click(function () {
        color_selected_effect("10", "#f7d7bd");
    });
    $("#color_sub_list_10 #2").click(function () {
        color_selected_effect("10", "#f4c197");
    });
    $("#color_sub_list_10 #3").click(function () {
        color_selected_effect("10", "#f7af73");
    });
    $("#color_sub_list_10 #4").click(function () {
        color_selected_effect("10", "#f79646");
    });
    $("#color_sub_list_10 #5").click(function () {
        color_selected_effect("10", "#ba7135");
    });
    $("#color_sub_list_10 #6").click(function () {
        color_selected_effect("10", "#794922");
    });

    // 2-b. Backgrounds - Image
    // 2-b-1. Backgrounds - Image - "select an image" 문장 클릭 이벤트
    $("#lay_editor_layer .backgrounds .image .image_preview .image_preview_1").click(function () {
        type_of_editor_image = "backgrounds";
        // select_an_image 창 보이기
        $("#lay_editor_layer .backgrounds .image .select_an_image").show();
        $('#lay_editor_layer .backgrounds .image .select_an_image').animate({ opacity: "0.0" }, 0, 'easeInOutQuint', function () {
            $('#lay_editor_layer .backgrounds .image .select_an_image').animate({ opacity: "1.0" }, 500, 'easeInOutQuint');
        });

        if (platform == "device") {
            $("#lay_editor_layer .select_an_image .plus").show();
            $("#lay_editor_layer .select_an_image .minus").show();
        }
        else {
            $("#lay_editor_layer .select_an_image .plus").show();
            $("#lay_editor_layer .select_an_image .minus").show();
        }

        // google app engine 연동 : 이미지 로드 호출
        document.process.location.href = "./load_background";

        // 이미 선택된 이미지가 있는 경우 체크 이미지등 처리해주기
        //backgrounds_selected_image_process();
        $("#gnb").hide();

        $("#lay_editor_layer .backgrounds .image .preview .disableCell_1").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            "position": "absolute",
            "display" : "block",
            "top" : "0px",
            "left" : "0px",
            "width": "560px",
            "height": "127.5px"
        });
        $("#lay_editor_layer .backgrounds .image .preview .ableCell").css({
            "background-color": "rgba(255, 255, 255, 1)",
            "position": "absolute",
            "display": "block",
            "top": "127.5px",
            "left": "0px",
            "width": "560px",
            "height": "315px",
            "left": "0px"
        });
        $("#lay_editor_layer .backgrounds .image .preview .disableCell_2").css({
            "background-color": "rgba(255, 255, 255, 0.5)",
            "position": "absolute",
            "display": "block",
            "top": "442.5px",
            "left" : "0px",
            "width": "560px",
            "height": "127.5px"
        });

        body_dimmed_open2();

    });



    // 2-b-2. Backgrounds - Image - image list 클릭 이벤트
    $("#lay_editor_layer .backgrounds .image .select_an_image .myImagesImg").live('click', function (event) {
        // 선택한것 또 선택했으면 default 값으로 변환
        if (selectedImageKind == "myImages" && selectedMyImagesNo == $(this).attr("id")) {
            backgrounds_image_list_reset();
            $('#lay_editor_layer .backgrounds .preview .ableCell img').remove();
            $('#lay_editor_layer .backgrounds .preview .previewImage img').remove();
        }

            // 선택한것 업데이트
        else {
            selectedImageKind = "myImages";
            selectedMyImagesNo = $(this).attr("id");

            selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
            selectedCheckImageIconY = parseInt($(this).css('top')) + 5;

            backgrounds_image_select_effect();
        }
    });

    $("#lay_editor_layer .backgrounds .image .select_an_image .digitalAndArtImg").live('click', function (event) {
        // 선택한것 또 선택했으면 default 값으로 변환
        if (selectedImageKind == "digitalAndArt" && selectedDigitalAndArtNo == $(this).attr("id")) {
            backgrounds_image_list_reset();
        }

            // 선택한것 업데이트
        else {
            selectedImageKind = "digitalAndArt";
            selectedDigitalAndArtNo = $(this).attr("id");

            selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
            selectedCheckImageIconY = parseInt($(this).css('top')) + 5;

            backgrounds_image_select_effect();
        }
    });

    $("#lay_editor_layer .backgrounds .image .select_an_image .plantsAndFlowersImg").live('click', function (event) {
        // 선택한것 또 선택했으면 default 값으로 변환
        if (selectedImageKind == "plantsAndFlowers" && selectedPlantsAndFlowersNo == $(this).attr("id")) {
            backgrounds_image_list_reset();
        }

            // 선택한것 업데이트
        else {
            selectedImageKind = "plantsAndFlowers";
            selectedPlantsAndFlowersNo = $(this).attr("id");

            selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
            selectedCheckImageIconY = parseInt($(this).css('top')) + 5;

            backgrounds_image_select_effect();
        }
    });

    $("#lay_editor_layer .backgrounds .image .select_an_image .placesAndLandscapeImg").live('click', function (event) {
        // 선택한것 또 선택했으면 default 값으로 변환
        if (selectedImageKind == "placesAndLandscape" && selectedPlacesAndLandscapeNo == $(this).attr("id")) {
            backgrounds_image_list_reset();
        }

            // 선택한것 업데이트
        else {
            selectedImageKind = "placesAndLandscape";
            selectedPlacesAndLandscapeNo = $(this).attr("id");

            selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
            selectedCheckImageIconY = parseInt($(this).css('top')) + 5;

            backgrounds_image_select_effect();
        }
    });

    $("#lay_editor_layer .backgrounds .image .select_an_image .natureAndAnimalsImg").live('click', function (event) {
        // 선택한것 또 선택했으면 default 값으로 변환
        if (selectedImageKind == "natureAndAnimals" && selectedNatureAndAnimalsNo == $(this).attr("id")) {
            backgrounds_image_list_reset();
        }

            // 선택한것 업데이트
        else {
            selectedImageKind = "natureAndAnimals";
            selectedNatureAndAnimalsNo = $(this).attr("id");

            selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
            selectedCheckImageIconY = parseInt($(this).css('top')) + 5;

            backgrounds_image_select_effect();
        }
    });




    // Backgrounds - Image - 우측 상단 버튼 클릭 이벤트		
    // "+", "V" 버튼		
    $("#lay_editor_layer .backgrounds .image .select_an_image .plus").click(function () {
        // "+" 버튼
        if (!isImageChecked) {
            // google app engine 연동 : 이미지 업로드 호출
            body_dimmed_open();
            //window.open("./upload_background", "POPON Image upload", "left=300px, top=300px, width=542px, height=289px, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, copyhistory=yes, resizable=no");
            $("#upload_background_image #frame").attr("src", "/upload_background");
            $("#upload_background_image").show();
            //$("#lay_editor_layer .backgrounds .image .select_an_image .input_file_img").click();

            // 우측 상단 버튼 이미지 "-" 다시 나타남
            $("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();
        }
            // "V" 버튼
        else {
            // 선택 모드에서 V 클릭시 
            if (backgrounds_image_click_mode == "select") {
                $('#lay_editor_layer .backgrounds .image .select_an_image').animate({ opacity: "0.0" }, 500, 'easeInOutQuint', function () {
                    // "-" 버튼 제거
                    $("#lay_editor_layer .backgrounds .image .select_an_image .delete").hide();

                    // 미리 보기에 적용하기				   
                    if (selectedImageKind == "myImages") urlOfBackgroundImage = selectBackgroundImage.myImages.url[selectedMyImagesNo];
                    else if (selectedImageKind == "digitalAndArt") urlOfBackgroundImage = selectBackgroundImage.digitalAndArt.url[selectedDigitalAndArtNo];
                    else if (selectedImageKind == "plantsAndFlowers") urlOfBackgroundImage = selectBackgroundImage.plantsAndFlowers.url[selectedPlantsAndFlowersNo];
                    else if (selectedImageKind == "placesAndLandscape") urlOfBackgroundImage = selectBackgroundImage.placesAndLandscape.url[selectedPlacesAndLandscapeNo];
                    else if (selectedImageKind == "natureAndAnimals") urlOfBackgroundImage = selectBackgroundImage.natureAndAnimals.url[selectedNatureAndAnimalsNo];

                    $("#lay_editor_layer .backgrounds .image .image_preview_1 img").attr("src", urlOfBackgroundImage);

                    $("#lay_editor_layer .backgrounds .image .image_preview_1 img").css({
                        'position': 'relative',
                        'width': backgroundInCellWidth,
                        'height': backgroundInCellHeight,
                        'top': backgroundInCellTop,
                        'left': backgroundInCellLeft
                    });

                    // 창 닫기
                    $("#lay_editor_layer .backgrounds .image .select_an_image").hide();

                    // image 종료 이벤트
                    backgrounds_image_list_reset();
                    $("#select_an_image_block").remove();
                });
            }

                // 제거 모드에서 V 클릭시 
            else {
                // 우측 상단 버튼 이미지 "-" 표시
                $("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();

                // 우측 상단 버튼 이미지 "V" -> "+"  바꿈
                isImageChecked = false;
                $("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({ 'background-position': '0 0' });
            }
        }
        // 클릭 : 선택 모드 (deault)
        backgrounds_image_click_mode = "select";

        // 이미지 위에 "-" 버튼 제거
        $("#lay_editor_layer .backgrounds .image .select_an_image .delete").hide();
    });

    // "-" 버튼
    $("#lay_editor_layer .backgrounds .image .select_an_image .minus").click(function () {
        // 클릭 : 삭제 모드
        backgrounds_image_click_mode = "delete";

        // 이미지 위에 "-" 버튼 생성
        $("#lay_editor_layer .backgrounds .image .select_an_image .myImagesImg .delete").show();

        // 우측 상단 버튼 이미지 "-" 제거
        $("#lay_editor_layer .backgrounds .image .select_an_image .minus").hide();

        // 우측 상단 버튼 이미지 "+" -> "V"  바꿈
        isImageChecked = true;
        $("#lay_editor_layer .backgrounds .image .select_an_image .plus").css({ 'background-position': '0 -23px' });
    });


    // 2-b-5-(3) "X" 버튼
    $("#lay_editor_layer .backgrounds .image .select_an_image .close").click(function () {
        $('#lay_editor_layer .backgrounds .image .select_an_image').animate({ opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            $("#lay_editor_layer .select_an_image .close").removeClass("focus");
            // 클릭 : 선택 모드 (deault)
            backgrounds_image_click_mode = "select";

            // 이미지 위에 "-" 버튼 제거
            $("#lay_editor_layer .backgrounds .image .select_an_image .delete").hide();

            // 우측 상단 버튼 이미지 "-" 생성
            $("#lay_editor_layer .backgrounds .image .select_an_image .minus").show();

            // 창 닫기
            $("#lay_editor_layer .backgrounds .image .select_an_image").hide();

            // image 종료 이벤트
            backgrounds_image_list_reset();
            $("#select_an_image_block").remove();
        });
    });


    // 2-c. Backgrounds - Video
    // 2-c-1. Backgrounds - Video - "select an video" 문장 클릭 이벤트
    $("#lay_editor_layer .backgrounds .video .video_preview #1").click(function () {
        $("#lay_editor_layer .backgrounds .video .video_preview .input_file_img").click();
    });


    // 2-d. Backgrounds - TV
    // 2-d-1. Backgrounds - TV - "select an tv" 문장 클릭 이벤트
    $("#lay_editor_layer .backgrounds .tv .tv_preview #1").click(function () {
        $("#lay_editor_layer .backgrounds .tv .tv_preview .input_file_img").click();
    });


    // 3.a. Widgets - TV
    // 3-a-1. Widgets - TV - "select an tv" 문장 클릭 이벤트
    $("#lay_editor_layer .widgets .tv .tv_preview #1").click(function () {
        // file dialog 창 나옴
        $("#lay_editor_layer .widgets .tv .tv_preview .input_file_img").click();
    });

    $("#lay_editor_layer .contents .navigation .left").click(function () {
        changeTvListLeft();
    });
    $("#lay_editor_layer .contents .navigation .right").click(function () {
        changeTvListRight();
    });



    // 3.b. Widgets - Video
    // 3-b-1. Widgets - Video - "select an video" 문장 클릭 이벤트
    $("#lay_editor_layer .widgets .video .video_preview #1").click(function () {
        $("#lay_editor_layer .widgets .video .video_preview .input_file_img").click();
    });


    // 3.c. Widgets - Music


    // 3.d. Widgets - Clock


    // 3.e. Widgets - Weather


    // 3.f. Widgets - News


    // 3.g. Widgets - Currencies


    // 4. Images
    // 4-a. Images - 기본 창
    // 4-a-1. Images - 기본 창 - preview 클릭 이벤트
    $("#lay_editor_layer .images .contents .image_preview .cellTarget").click(function () {
        type_of_editor_image = "images";
        selectedFiveImageNo = $(this).attr('id');
        setupActiveDisableCellPop(selectedFiveImageNo);
        images_open_select_an_image();
        $("#gnb").hide();
        body_dimmed_open2();
    });

    // Images - Selected an image 창
    // Images - Select an image 창 - image list 클릭 이벤트		
    $("#lay_editor_layer .images .contents .select_an_image .myImagesImg").live('click', function (event) {
        // 선택한것 또 선택했으면 default 값으로 변환
        if (selectedImageKind == "myImages" && selectedMyImagesNo == $(this).attr("id")) {
            images_image_list_reset();
            $('#lay_editor_layer .images .preview .ableCell img').remove();
            $('#lay_editor_layer .images .preview .previewImage img').remove();
        }
        else {
            // 선택한것 업데이트
            selectedImageKind = "myImages";
            selectedMyImagesNo = $(this).attr("id");

            selectedCheckImageIconX = parseInt($(this).css('left')) + 5;
            selectedCheckImageIconY = parseInt($(this).css('top')) + 5;

            images_image_select_effect();
        }
    });



    // 선택된 이미지 편집 (공통)
    var interval = 1;
    var imageInCellMoveInterval = 100;
    var isClickCircle = false;
    var x, temp_x;


    // Circle 버튼으로 이미지 확대/축소
    $("#lay_editor_layer .select_an_image .circle").mousedown(function () {
        if (event.srcElement.className == "circle") {
            isClickCircle = true;
            temp_x = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle").css("left").replace("px", "");
            x = event.clientX;
            document.onmousemove = move;
        }
    });

    document.onmouseup = function () {isClickCircle = false;};

    function move() {
        if (event.button == 0 && isClickCircle) {
            var to = parseInt(parseFloat(temp_x) + parseFloat(event.clientX) - parseFloat(x));

            if (to > 89 && to < 236) {
                $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle").css("left", to);
                $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle_value").css("left", to);

                var zoom_value = (to - 85) * 2;
                $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .circle_value").text(zoom_value + "%");
                // 이미지 확대 프로시저

                var temp_width = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .previewImage img").css("width").replace("px", "");
                var temp_height = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .previewImage img").css("height").replace("px", "");

                $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .preview .ableCell img").css({
                    'width': parseFloat(temp_width * zoom_value / 100) + 'px',
                    'height': parseFloat(temp_height * zoom_value / 100) + 'px',
                });
            }
        }
    }

    $("#lay_editor_layer .select_an_image .buttons").bind('mouseup mouseleave', function () {
        targetImage = $("#lay_editor_layer ." + type_of_editor_image + " .select_an_image .preview .ableCell img");
        if (type_of_editor_image == "images")
        {
            imageInCellWidth[selectedFiveImageNo] = parseInt(targetImage.css('width')) / 4;
            imageInCellHeight[selectedFiveImageNo] = parseInt(targetImage.css('height')) / 4;
            imageInCellLeft[selectedFiveImageNo] = parseInt(targetImage.css('left')) / 4;
            imageInCellTop[selectedFiveImageNo] = parseInt(targetImage.css('top')) / 4;
        }
        else
        {
            backgroundInCellWidth = parseInt(targetImage.css('width')) / 2;
            backgroundInCellHeight = parseInt(targetImage.css('height')) / 2;
            backgroundInCellLeft = parseInt(targetImage.css('left')) / 2;
            backgroundInCellTop = parseInt(targetImage.css('top')) / 2;
        }
    });



    // 선택된 이미지 편집 (up)
    $("#lay_editor_layer .select_an_image .top").mousedown(function () {
        interval = setInterval(function () { imageInCellMove("up"); }, imageInCellMoveInterval);
    }).bind('mouseup mouseleave', function () {
        clearInterval(interval);
    });
    $("#lay_editor_layer .select_an_image .top").click(function () {
        imageInCellMove("up");
    });

    // 선택된 이미지 편집 (down)
    $("#lay_editor_layer .select_an_image .bottom").mousedown(function () {
            interval = setInterval(function () { imageInCellMove("down"); }, imageInCellMoveInterval);
    }).bind('mouseup mouseleave', function () {
        clearInterval(interval);
    });
    $("#lay_editor_layer .select_an_image .bottom").click(function () {
        imageInCellMove("down");
    });

    // 선택된 이미지 편집 (left)
    $("#lay_editor_layer .select_an_image .left").mousedown(function () {
        interval = setInterval(function () { imageInCellMove("left"); }, imageInCellMoveInterval);
    }).bind('mouseup mouseleave', function () {
        clearInterval(interval);
    });

    $("#lay_editor_layer .select_an_image .left").click(function () {
        imageInCellMove("left");
    });

    // 선택된 이미지 편집 (right)
    $("#lay_editor_layer .select_an_image .right").mousedown(function () {
        interval = setInterval(function () { imageInCellMove("right"); }, imageInCellMoveInterval);
    }).bind('mouseup mouseleave', function () {
        clearInterval(interval);
    });
    $("#lay_editor_layer .select_an_image .right").click(function () {
        imageInCellMove("right");
    });

    // 선택된 이미지 편집 (확대)
    var imageInCellZoomInterval = 200;
    $("#lay_editor_layer .select_an_image .zoom_plus").mousedown(function () {
        interval = setInterval(function () { imageInCellZoom("in"); }, imageInCellZoomInterval);
    }).bind('mouseup mouseleave', function () {
        clearInterval(interval);
    });
    $("#lay_editor_layer .select_an_image .zoom_plus").click(function () {
        imageInCellZoom("in");
    });

    $("#lay_editor_layer .select_an_image .zoom_minus").mousedown(function () {
        interval = setInterval(function () { imageInCellZoom("out"); }, imageInCellZoomInterval);
    }).bind('mouseup mouseleave', function () {
        clearInterval(interval);
    });
    $("#lay_editor_layer .select_an_image .zoom_minus").click(function () {
        imageInCellZoom("out");
    });

    $("#lay_editor_layer .select_an_image .fit_all").click(function () {
        var image = $('#lay_editor_layer .' + type_of_editor_image + ' .preview .ableCell img');
        var preview = $('#lay_editor_layer .' + type_of_editor_image + '  .preview .previewImage img');
        setTimeout(function () {
            image.css({
                'position': 'relative',
                'width': preview.css('width'),
                'height': preview.css('height'),
                'top': 0,
                'left': 0
            });
            if (type_of_editor_image == "images")
            {
                imageInCellWidth[selectedFiveImageNo] = parseInt(image.css('width')) / 4;
                imageInCellHeight[selectedFiveImageNo] = parseInt(image.css('height')) / 4;
            }
            var zoom_value = parseInt(image.css('width').replace("px", "") / preview.css('width').replace("px", "") * 100);
            $("#lay_editor_layer .select_an_image .circle_value").text(zoom_value + "%");
            $("#lay_editor_layer .select_an_image .circle_value").css("left", 85 + (zoom_value / 2));
            $("#lay_editor_layer .select_an_image .circle").css("left", 85 + (zoom_value / 2));
        }, 100);

    });

    $("#lay_editor_layer .select_an_image .fit_vertical").click(function () {
        var image = $('#lay_editor_layer .' + type_of_editor_image + ' .preview .ableCell img');
        var ableCell = $('#lay_editor_layer .' + type_of_editor_image + ' .preview .ableCell');
        var preview = $('#lay_editor_layer .' + type_of_editor_image + ' .preview .previewImage img');
        setTimeout(function () {
            var realWidth = image.width();
            var realHeight = image.height();
            var fitWidth = ableCell.width();
            var fitHeight = ableCell.height();
            var dx = realWidth / fitWidth;
            var dy = realHeight / fitHeight;
            var resultWidth, resultHeight;

            if (dx <= 1) {
                resultWidth = fitWidth;
                resultHeight = realHeight / realWidth * fitWidth;
            }
            else {
                resultWidth = fitWidth;
                resultHeight = realHeight / (realWidth / fitWidth);
            }

            var zoom_value = parseInt( resultWidth / preview.css('width').replace("px", "") * 100);
            if (zoom_value > 300) {
                resultWidth = resultWidth / zoom_value * 300;
                resultHeight = resultHeight / zoom_value * 300;
                zoom_value = 300;
            }

            image.css({
                'position': 'relative',
                'width': resultWidth,
                'height': resultHeight,
                'top': 0,
                'left': 0
            });

            if (type_of_editor_image == "images") {
                imageInCellWidth[selectedFiveImageNo] = parseInt(image.css('width')) / 4;
                imageInCellHeight[selectedFiveImageNo] = parseInt(image.css('height')) / 4;
            }

            $("#lay_editor_layer .select_an_image .circle_value").text(zoom_value + "%");
            $("#lay_editor_layer .select_an_image .circle_value").css("left", 85 + (zoom_value / 2));
            $("#lay_editor_layer .select_an_image .circle").css("left", 85 + (zoom_value / 2));
        }, 100);
    });

    $("#lay_editor_layer .select_an_image .fit_horizon").click(function () {
        var image = $('#lay_editor_layer .' + type_of_editor_image + ' .preview .ableCell img');
        var ableCell = $('#lay_editor_layer .' + type_of_editor_image + ' .preview .ableCell');
        var preview = $('#lay_editor_layer .' + type_of_editor_image + ' .preview .previewImage img');
        setTimeout(function () {
            var realWidth = image.width();
            var realHeight = image.height();
            var fitWidth = ableCell.width();
            var fitHeight = ableCell.height();
            var dx = realWidth / fitWidth;
            var dy = realHeight / fitHeight;
            var resultWidth, resultHeight;

            if (dy <= 1) {
                resultWidth = realWidth / realHeight * fitHeight;
                resultHeight = fitHeight;
            }
            else {
                resultWidth = realWidth / (realHeight / fitHeight);
                resultHeight = fitHeight;
            }

            var zoom_value = parseInt(resultWidth / preview.css('width').replace("px", "") * 100);

            if (zoom_value > 300) {
                resultWidth = resultWidth / zoom_value * 300;
                resultHeight = resultHeight / zoom_value * 300;
                zoom_value = 300;
            }

            image.css({
                'position': 'relative',
                'width': resultWidth,
                'height': resultHeight,
                'top': 0,
                'left': 0
            });

            if (type_of_editor_image == "images") {
                imageInCellWidth[selectedFiveImageNo] = parseInt(image.css('width')) / 4;
                imageInCellHeight[selectedFiveImageNo] = parseInt(image.css('height')) / 4;
            }

            $("#lay_editor_layer .select_an_image .circle_value").text(zoom_value + "%");
            $("#lay_editor_layer .select_an_image .circle_value").css("left", 85 + (zoom_value / 2));
            $("#lay_editor_layer .select_an_image .circle").css("left", 85 + (zoom_value / 2));
        }, 100);
    });


    // Images - Select an image 창 - 우측 상단 버튼 클릭 이벤트		
    // "+", "V" 버튼		
    $("#lay_editor_layer .images .contents .select_an_image .plus").click(function () {
        // "+" 버튼
        if (!isImageChecked) {
            // google app engine 연동 : 이미지 업로드 호출
            body_dimmed_open();
            //window.open("./upload_cell", "POPON Image upload", "left=300, top=300, width=542, height=289, titlebar=no, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, copyhistory=yes, resizable=no");

            $("#upload_background_image #frame").attr("src", "/upload_cell");
            $("#upload_background_image").show();

            $("#lay_editor_layer .images .contents .select_an_image .minus").show();    // 우측 상단 버튼 이미지 "-" 다시 나타남
        }
        // "V" 버튼
        else {
            // 선택 모드에서 V 클릭시 
            if (images_image_click_mode == "select") {
                setupActiveDisableCell(selectedFiveImageNo);

                $('#lay_editor_layer .images .contents .select_an_image').animate({ opacity: "0.0" }, 500, 'easeInOutQuint', function () {
                    // 변수 설정			
                    isFiveImageSetted[selectedFiveImageNo] = true;
                    selectedImageContorlNo = selectedFiveImageNo;

                    // 확대, 축소, 이미지 이동 편집을 위한 체크 아이콘 출현					
                    //$("#lay_editor_layer .images .contents .image_preview .image_selected").show();
                    //$("#lay_editor_layer .images .contents .image_preview .image_selected").css({
                    //    top: "125px",
                    //    left: (((selectedFiveImageNo - 1) * 131) + 343) + "px"
                    //});
                    
                    // "-" 버튼 제거
                    $("#lay_editor_layer .images .contents .select_an_image .delete").hide();

                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .ableCell").show();
                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .disableCell_1").show();
                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .disableCell_2").show();

                    // cell 정보 보이기
                    $("#lay_editor_layer .image_preview .image_preview_" + selectedFiveImageNo + " .cell_size").show();

                    // 새로운 이미지 미리 보기에 적용하기					
                    if (selectedImageKind == "myImages") urlOfCellImage[selectedFiveImageNo] = selectCellImage.myImages.url[selectedMyImagesNo];
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
                        imageDepth.css({
                            'position': 'relative',
                            'width': imageInCellWidth[selectedFiveImageNo],
                            'height': imageInCellHeight[selectedFiveImageNo],
                            'top': imageInCellTop[selectedFiveImageNo],
                            'left': imageInCellLeft[selectedFiveImageNo]
                        });
                    }, 200);

                    // 창 닫기
                    $("#lay_editor_layer .images .contents .select_an_image").hide();

                    // image 종료 이벤트
                    images_image_list_reset();
                    $("#select_an_image_block").remove();
                });
            }

                // 제거 모드에서 V 클릭시 
            else {
                // 우측 상단 버튼 이미지 "-" 표시
                $("#lay_editor_layer .images .contents .select_an_image .minus").show();

                // 우측 상단 버튼 이미지 "V" -> "+"  바꿈
                isImageChecked = false;
                $("#lay_editor_layer .images .contents .select_an_image .plus").css({ 'background-position': '0 0' });
            }
        }

        // 클릭 : 선택 모드 (deault)
        images_image_click_mode = "select";
        $("#lay_editor_layer .images .contents .select_an_image .delete").hide();       // 이미지 위에 "-" 버튼 제거
    });


    // 4-b-5-(2) Select an Image 에서 "-" 버튼 클킥
    $("#lay_editor_layer .images .contents .select_an_image .minus").click(function () {

        // 클릭 : 삭제 모드
        isImageChecked = true;
        images_image_click_mode = "delete";
        
        $("#lay_editor_layer .images .contents .select_an_image .delete").show();       // 이미지 위에 "-" 버튼 생성
        $("#lay_editor_layer .images .contents .select_an_image .minus").hide();        // 우측 상단 버튼 이미지 "-" 제거
        $("#lay_editor_layer .images .contents .select_an_image .plus").css({ 'background-position': '0 -23px' });
    });


    // 4-b-5-(3) Select an Image 에서 "X" 버튼 클릭
    $("#lay_editor_layer .images .contents .select_an_image .close").click(function () {
        $('#lay_editor_layer .images .contents .select_an_image').animate({ opacity: "0.0" }, 500, 'easeInOutQuint', function () {

            images_image_click_mode = "select";
            // 변수 설정 - 처음부터 빈 영역이라면, 변수 설정 할 필요 없다.
            if (isFiveImageSetted[selectedFiveImageNo] == false) {
            }
            else{
                isFiveImageSetted[selectedFiveImageNo] = false;
                urlOfCellImage[selectedFiveImageNo] = undefined;
                imageInCellPercentage[selectedFiveImageNo] = 100;
                imageInEditPercentage[selectedFiveImageNo] = 100;
                imageInEditPositionX[selectedFiveImageNo] = 0;
                imageInEditPositionY[selectedFiveImageNo] = 0;
            }
            
            $("#lay_editor_layer .select_an_image .close").removeClass("focus");        // X버튼 포커싱 제거
            $("#lay_editor_layer .images .contents .select_an_image .delete").hide();   // 이미지 위에 "-" 버튼 제거
            $("#lay_editor_layer .images .contents .select_an_image .minus").show();    // 우측 상단 버튼 이미지 "-" 생성
            $("#lay_editor_layer .images .contents .select_an_image").hide();           // 창 닫기
            images_image_list_reset();                                                  // image 종료 이벤트
            $("#select_an_image_block").remove();
        });
    });


    // 5. Text

    // font family 버튼
    $("#lay_editor_layer .text .contents .text_font").click(function () {
        text_popup_all_close();
        $("#lay_editor_layer .text .contents .text_font_list").show();
    });
    $("#lay_editor_layer .text .contents .text_font_list .list_1").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "굴림체";
        $("#lay_editor_layer .text .contents .text_font_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_font_list .list_2").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "궁서체";
        $("#lay_editor_layer .text .contents .text_font_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_font_list .list_3").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "돋움체";
        $("#lay_editor_layer .text .contents .text_font_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_font_list .list_4").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "바탕체";
        $("#lay_editor_layer .text .contents .text_font_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_font_list .list_5").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "휴먼엽서체";
        $("#lay_editor_layer .text .contents .text_font_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });

    // font size 버튼
    $("#lay_editor_layer .text .contents .text_size").click(function () {
        text_popup_all_close();
        $("#lay_editor_layer .text .contents .text_size_list").show();
    });
    $("#lay_editor_layer .text .contents .text_size_list .list_1").click(function () {
        underEditKind.cell[selectedCellNo].text.font_size = 48;
        $("#lay_editor_layer .text .contents .text_size_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_size_list .list_2").click(function () {
        underEditKind.cell[selectedCellNo].text.font_size = 64;
        $("#lay_editor_layer .text .contents .text_size_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_size_list .list_3").click(function () {
        underEditKind.cell[selectedCellNo].text.font_size = 72;
        $("#lay_editor_layer .text .contents .text_size_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_size_list .list_4").click(function () {
        underEditKind.cell[selectedCellNo].text.font_size = 100;
        $("#lay_editor_layer .text .contents .text_size_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_size_list .list_5").click(function () {
        underEditKind.cell[selectedCellNo].text.font_size = 120;
        $("#lay_editor_layer .text .contents .text_size_list").hide();
        preview_text_style_change();
        textEditIconUpdate();
    });


    // font color 버튼
    $("#lay_editor_layer .text .text_color").click(function () {
        text_popup_all_close();
        if (text_font_color_trigger[selectedCellNo] == 0) {
            $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_07.png)' });
            $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_color_list").show();
            $("#lay_editor_layer .text_color_list").css({ 'left': '681px' });
            text_font_color_trigger[selectedCellNo] = 1;
        }
        else {
            $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_color_list").hide();
            text_font_color_trigger[selectedCellNo] = 0;
        }
    });

    $("#lay_editor_layer .text_color_list .palette").find('div').click(function () {
        var myClass = $(this).attr("class");
        var substr = myClass.split('_');
        var color_code = text_color_list[Number(substr[1])];
        if (text_font_color_trigger[selectedCellNo] == 1) {
            underEditKind.cell[selectedCellNo].text.font_color = color_code;
            preview_text_style_change();
            textEditIconUpdate();
            text_font_color_trigger[selectedCellNo] = 0;
            $("#lay_editor_layer .text_color_list").hide();
            $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
        }
        else if (text_font_back_color_trigger[selectedCellNo] == 1) {
            underEditKind.cell[selectedCellNo].text.font_back_color = color_code;
            textEditIconUpdate();
            text_font_back_color_trigger[selectedCellNo] = 0;
            $("#lay_editor_layer .text_color_list").hide();
            $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
        }
    });

    // 날씨에서 text_color 클릭
    $("#lay_editor_layer .widgets .text_color").click(function () {
        $("#lay_editor_layer .text_font_list").hide();
        $("#lay_editor_layer .text_color_list").hide();
        if (text_font_color_trigger[selectedCellNo] == 0) {
            $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_07.png)' });
            $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_color_list").show();
            $("#lay_editor_layer .text_color_list").css({ 'left': '580px' });
            text_font_color_trigger[selectedCellNo] = 1;
            text_font_back_color_trigger[selectedCellNo] = 0;
        }
        else {
            $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_color_list").hide();
            text_font_color_trigger[selectedCellNo] = 0;
        }
    });



    // font weight 버튼
    $("#lay_editor_layer .text .contents .text_weight").click(function () {
        $("#lay_editor_layer .text_font_list").hide();
        $("#lay_editor_layer .text_color_list").hide();
        if (underEditKind.cell[selectedCellNo].text.font_weight == "normal") underEditKind.cell[selectedCellNo].text.font_weight = "bold";
        else underEditKind.cell[selectedCellNo].text.font_weight = "normal";

        preview_text_style_change();
        textEditIconUpdate();
    });

    // font back color 버튼
    $("#lay_editor_layer .text .contents .text_back_color").click(function () {
        $("#lay_editor_layer .text_font_list").hide();
        $("#lay_editor_layer .text_color_list").hide();
        if (text_font_back_color_trigger[selectedCellNo] == 0) {
            $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_07.png)' });
            $("#lay_editor_layer .text_color_list").show();
            $("#lay_editor_layer .text_color_list").css({ 'left': '753px' });
            text_font_back_color_trigger[selectedCellNo] = 1;
            text_font_color_trigger[selectedCellNo] = 0;
        }
        else {
            $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_color_list").hide();
            text_font_back_color_trigger[selectedCellNo] = 0;
        }
    });

    // 날씨에서 font back color 버튼
    $("#lay_editor_layer .widgets .text_back_color").click(function () {
        $("#lay_editor_layer .text_font_list").hide();
        $("#lay_editor_layer .text_color_list").hide();
        if (text_font_back_color_trigger[selectedCellNo] == 0) {
            $("#lay_editor_layer .text_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_07.png)' });
            $("#lay_editor_layer .text_color_list").show();
            $("#lay_editor_layer .text_color_list").css({ 'left': '630px' });
            text_font_back_color_trigger[selectedCellNo] = 1;
            text_font_color_trigger[selectedCellNo] = 0;
            console.log("1");
        }
        else {
            $("#lay_editor_layer .text_back_color").css({ 'background-image': 'url(../websrc/img/main/lb_editor_layer_text_06.png)' });
            $("#lay_editor_layer .text_color_list").hide();
            text_font_back_color_trigger[selectedCellNo] = 0;
            console.log("2");
        }
    });

    // 정렬 버튼
    $("#lay_editor_layer .text .contents .text_align_left").click(function () {
        text_popup_all_close();
        underEditKind.cell[selectedCellNo].text.font_align = "left";
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_align_center").click(function () {
        text_popup_all_close();
        underEditKind.cell[selectedCellNo].text.font_align = "center";
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_align_right").click(function () {
        text_popup_all_close();
        underEditKind.cell[selectedCellNo].text.font_align = "right";
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_align_top").click(function () {
        text_popup_all_close();
        underEditKind.cell[selectedCellNo].text.font_vertical = "top";
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_align_middle").click(function () {
        text_popup_all_close();
        underEditKind.cell[selectedCellNo].text.font_vertical = "middle";
        preview_text_style_change();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .text .contents .text_align_bottom").click(function () {
        text_popup_all_close();
        underEditKind.cell[selectedCellNo].text.font_vertical = "bottom";
        preview_text_style_change();
        textEditIconUpdate();
    });


    $("#lay_editor_layer .text .contents .text_window").click(function () {
        text_popup_all_close();
    });

    $('#lay_editor_layer .text .contents .text_input #input_text_input').keyup(function () {
        underEditKind.cell[selectedCellNo].text.contents = $(this).val();
        $('.text_preview_img .vertical-align').text($(this).val());
    });

    $('#lay_editor_layer .widgets .contents .list #1').click(function () {
        selectTvList(1);
    });
    $('#lay_editor_layer .widgets .contents .list #2').click(function () {
        selectTvList(2);
    });
    $('#lay_editor_layer .widgets .contents .list #3').click(function () {
        selectTvList(3);
    });

    $("#lay_editor_layer .widgets .weather .popup_btn").click(function () {
        $("#lay_editor_layer .widgets .weather .location_select").show();
        document.getElementById('loc_search_value').value = "";

        if (!weatherScroll) weatherScroll = new scr("weatherSrc");
        else weatherScroll.setup();

        $("#lay_editor_layer .widgets .weather").append("<div id='select_an_image_block' class='disabled_left'></div>");
        $("#select_an_image_block").css("z-index", $("#lay_editor_layer .widgets .weather .location_select").css("z-index") - 1);
        $("#select_an_image_block").height($(document).height());

        update_recnet_locaiton();
    });

    $("#lay_editor_layer .widgets .weather .text_font").click(function () {
        text_popup_all_close();
        $("#lay_editor_layer .widgets .weather .text_font_list").show();
    });
    $("#lay_editor_layer .widgets .weather .text_font_list .list_1").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "Arial";
        $("#lay_editor_layer .widgets .weather .text_font_list").hide();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .widgets .weather .text_font_list .list_2").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "Georgia";
        $("#lay_editor_layer .widgets .weather .text_font_list").hide();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .widgets .weather .text_font_list .list_3").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "serif";
        $("#lay_editor_layer .widgets .weather .text_font_list").hide();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .widgets .weather .text_font_list .list_4").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "monospace";
        $("#lay_editor_layer .widgets .weather .text_font_list").hide();
        textEditIconUpdate();
    });
    $("#lay_editor_layer .widgets .weather .text_font_list .list_5").click(function () {
        underEditKind.cell[selectedCellNo].text.font_family = "fantasy";
        $("#lay_editor_layer .widgets .weather .text_font_list").hide();
        textEditIconUpdate();
    });

    // Editor -> Publish
    $("#publish_layer .cancel").click(function () {
        $("#publish_layer").hide();
        back_dimmed_close();
    });

    $("#publish_layer .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            runPublish("playlist");
            $("#publish_layer").hide();
            back_dimmed_close();
            body_dimmed_open();
        });
    });


    // Editor -> Save as
    $("#saveas_layer .cancel").click(function () {
        $("#saveas_layer").hide();
        back_dimmed_close();
    });

    $("#saveas_layer .apply").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            runPublish("myproject");
            $("#saveas_layer").hide();
            back_dimmed_close();
            body_dimmed_open();
        });
    });
});








