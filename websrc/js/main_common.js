$(document).ready(function () {
    body_dimmed_open();
    //$.preloadCssImages();                                                                                   // 프리 로드 이미지                                   // preloadCssImages.js
    resize();                                                                                               // 해상도 자동 조절                                   // function.js
    document.process.location.href = "./load_number_of_publishMe";                                          // google app engine 연동 : publish  호출  
    //body_dimmed_close();
    $(".body_back").click(function () { click_back(); });                                                   // 메인 Back 버튼 클릭 이벤트                         // function.js
    $(".editMap_back .editMap_back_btn").click(function () { click_back(); });                              // Edit Theme 페이지에서 Back 버튼 클릭 이벤트        "
    $(".editMap_back .editMap_publish").click(function () {
        $("#publish_layer").show();
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
        $("#publish_layer #input_project_name_date").val(saveFileName);
        back_dimmed_open(selectedSlideListKind);
    });

    $(".editMap_back .editMap_save_as").click(function () {
        $("#saveas_layer").show();
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
        $("#saveas_layer #input_project_name_date").val(saveFileName);
        back_dimmed_open(selectedSlideListKind);
    });

    $(".editMap_back .editMap_save").click(function () {
        $('#lay_editor_layer').animate({ top: "129px", opacity: "0.0" }, 500, 'easeInOutQuint', function () {
            savePublish();
            $("#save_layer").hide();
            back_dimmed_close();
            body_dimmed_open();
        });
    });

    $('.body_button_right').click(function () { click_right(); focusMainHorizon(); });                      // 화면 슬라이드 효과 - (Next) 오른쪽 방향            "
    $('.body_button_left').click(function () { click_left(); focusMainHorizon(); });                        // 화면 슬라이드 효과 - (Previous) 왼쪽 방향          "

    $("#lnb .btn_featured").click(function () { click_featured(); });                                       // Featured 버튼 클릭 이벤트                          "
    $("#lnb .btn_playlists").click(function () { click_playlists(); });                                     // Playlists 버튼 클릭 이벤트                         "
    $("#lnb .btn_editor").click(function () { click_editor(); });                                           // Editor 버튼 클릭 이벤트                            "
    $("#lnb .btn_support").click(function () { click_support(); });                                         // Support 버튼 클릭 이벤트                           "  
    $("#lnb .btn_settings").click(function () { click_settings(); });                                       // Settings 버튼 클릭 이벤트                          "

    $(".player").click(function () { cancel_full_screen(); });                                              // Play 화면에서 돌아가기                             "
    $("#body_editor .slide_theme").click(function () { click_editor_slide_theme(); });                      // Editor Theme 클릭	                              "  
    $("#body_editor .slide_myProjects").click(function () { click_editor_slide_myProjects(); });            // My Procject 클릭                                   "
    $("#body_support .slide_about").click(function () { click_support_slide_about(); });                    // About 클릭                                         "
    $("#body_support .slide_faq").click(function () { click_support_slide_fag(); });                        // Faq 클릭                                           "
    $("#body_support .slide_forum").click(function () { click_support_slide_forum(); });                    // Forum 클릭                                         "
    $("#body_settings .body_contents .accounts_signout").click(function () { click_settings_signout(); });  // SignOut 클릭                                       "
    $("#body_settings .body_contents .accounts_myaccount").click(function () { click_settings_myAccount(); });// MyAccount 클릭                                   "

    $("#body_signout .body_contents .apply").click(function () { click_logout(); });                        // SignOut에서 Ok 선택                                "  
    $("#body_signout .body_contents .cancel").click(function () { click_back(); });                         // SignOut에서 Cancel 선택                            "  

    $(".slideList").live('click', function (event) { click_slide($(this).attr('id')); });                   // Slide List 클릭 이벤트                             "   


    // ********************************** Preview Popup 되었을 때 *************************************//
    // Preview Popup Edit 버튼 클릭 이벤트
    $(".previewPopup_button .edit").click(function () {
        $("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate({ top: "15px", opacity: "0.0" }, 500, 'swing', function () {
            set_template();
            if (selectedSlideListKind == "theme") {
                reset_initializeTemplate(selectedSlideListNo);
            }

            disappear_left();
            popclose("body_" + selectedSlideListKind + " #previewPopupBackBorder");
            page_shift_for_big_contents_editMap();

            // cell 정보 원본값과 편집값 정의하기		
            if (selectedSlideListKind == "featured") originalEditKind = featured[selectedSlideListNo];
            else if (selectedSlideListKind == "playlists") originalEditKind = playlist[selectedSlideListNo];
            else if (selectedSlideListKind == "theme") originalEditKind = template[selectedSlideListNo];
            else if (selectedSlideListKind == "myprojects") originalEditKind = myproject[selectedSlideListNo];
            underEditKind = JSON.parse(JSON.stringify(originalEditKind));
            appliedEditKind = JSON.parse(JSON.stringify(originalEditKind));


            // back page를 위한 변수 저정
            switch (selectedSlideListKind) {
                case "featured": readyForBackPage = "featured_to_editor_map"; break;
                case "theme": readyForBackPage = "editMap_theme"; break;
                case "playlists": readyForBackPage = "play_to_editMap_theme"; break;
                case "myprojects": readyForBackPage = "editMap_myProjects"; break;
            }
        });
        $("#gnb").hide();
        back_dimmed_close();
    });

    // Preview Popup Cancel 버튼 클릭 이벤트
    $(".previewPopup_button .cancel").click(function () {
        $("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate({ top: "15px", opacity: "0.0" }, 500, 'swing', function () {
            popclose("body_" + selectedSlideListKind + " #previewPopupBackBorder");
        });

        if (selectedSlideListKind == "theme") {
            body_dimmed_close();
        }
        else {
            back_dimmed_close();
        }
    });

    // Preview Popup delete 버튼 클릭 이벤트
    $("#body_playlists .previewPopup_button .delete").click(function () {
        body_dimmed_open();
        index = maxPlaylist + 1 - selectedSlideListNo;
        document.process.location.href = "./delete_publish/?publishName=playlist&selectedSlideListNo=" + index;
    });

    // Preview Popup delete 버튼 클릭 이벤트
    $("#body_myprojects .previewPopup_button .delete").click(function () {
        body_dimmed_open();
        index = maxPlaylist + 1 - selectedSlideListNo;
        document.process.location.href = "./delete_publish/?publishName=myproject&selectedSlideListNo=" + index;
    });

    // Preview Popup Play 버튼 클릭 이벤트
    $(".previewPopup_button .play").click(function () {
        $("#body_" + selectedSlideListKind + " #previewPopupBackBorder").animate({ top: "15px", opacity: "0.0" }, 500, 'swing', function () {
            popclose("body_" + selectedSlideListKind + " #previewPopupBackBorder");
            disappear_left();
            page_shift_for_big_contents_play();
        });
        

        if (ytplayer[selectedSlideListNo] == null && selectedSlideListKind == "playlists")
        {
            onYouTubeIframeAPIReady_(selectedSlideListNo);
        }
        else if(ftplayer[selectedSlideListNo] == null && selectedSlideListKind == "featured")
        {
            onYouTubeIframeAPIReady_(selectedSlideListNo);
        }
        else
        {
            replay(selectedSlideListNo);
        }
        back_dimmed_close();

    });

    // ************************ Forum 버튼 클릭 이벤트 (미구현) ******************************//
    /*
    $("#body_forum .list").click(function () {
        popup("lay_forum");
        $('#body_forum #lay_forum').animate({ top: "50px", opacity: "0.0" }, 0, 'swing', function () {
            $('#body_forum #lay_forum').animate({ top: "50px", opacity: "1.0" }, 500, 'swing');
        });
    });
    $("#body_forum #lay_forum .lay_forum_button .xbox, #body_forum #lay_forum .lay_forum_button .write").click(function () {
        $('#body_forum #lay_forum').animate({ top: "50px", opacity: "0.0" }, 500, 'swing', function () {
            popclose("lay_forum");
        });
    });
    $("#body_forum .newTopic").click(function () {
        popup("lay_new_topic");
        $('#body_forum #lay_new_topic').animate({ top: "138px", opacity: "0.0" }, 0, 'swing', function () {
            $('#body_forum #lay_new_topic').animate({ top: "138px", opacity: "1.0" }, 500, 'swing');
        });
    });
    $("#body_forum #lay_new_topic .lay_new_topic_button .xbox, #body_forum #lay_new_topic .lay_new_topic_button .apply, .lay_new_topic_button .cancel").click(function () {
        $('#lay_new_topic').animate({ top: "138px", opacity: "0.0" }, 500, 'swing', function () {
            popclose("lay_new_topic");
        });
    });
    */

    $("#msgBox .cancel").click(function () {
        closeMsg();
    });

});
