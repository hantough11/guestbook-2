// 0 : 왼쪽메뉴 featured에서 키 이벤트
function keyDown_featured(keyCode) {
    if ($('#body_featured .previewPopup_scene').is(':visible')) keyDown_featured_list(keyCode);		// edit or cancel
    else if ($('#lay_editor_layer').is(':visible')) keyDown_theme_edit_detail(keyCode);				// edit map detail
    else if ($('#body_featured .editMap').is(':visible')) keyDown_theme_edit(keyCode);				    // edit map
    else {
        switch (keyCode) {
            case VK_LEFT:
                if (!$(".player").is(':visible'))  click_left();
                break;
            case VK_RIGHT:
                if (!$(".player").is(':visible'))  click_right();
                break;
            case VK_DOWN:
                if (!$(".player").is(':visible'))  click_playlists();
                break;
            case VK_ENTER:
                if ($(".player").is(':visible')) {
                    cancel_full_screen();
                    break;
                }
                click_slide(mainKeyLocation.horizon);
                previewKeyLocation.horizon = 1;
                focusFeaturedPreviewPopup();
                break;
        }
    }
}

// 0-1 : Featured->PreviewPopup
function keyDown_featured_list(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            previewKeyLocation.horizon--;
            if (previewKeyLocation.horizon < 1)
                previewKeyLocation.horizon = 3;
            focusFeaturedPreviewPopup();
            break;
        case VK_RIGHT:
            previewKeyLocation.horizon++;
            if (previewKeyLocation.horizon > 3)
                previewKeyLocation.horizon = 1;
            focusFeaturedPreviewPopup();
            break;
        case VK_ENTER:
            if (previewKeyLocation.horizon == 1) {
                $("#body_featured .previewPopup_button .edit").click();
            }
            else if (previewKeyLocation.horizon == 2) {
                $("#body_featured .previewPopup_button .play").click();
            }
            else if (previewKeyLocation.horizon == 3) {
                $("#body_featured .previewPopup_button .cancel").click();
            }
        break;
    }
}


// 1 : 왼쪽메뉴 playLists에서 키 이벤트
function keyDown_playLists(keyCode) {
    if ($('#body_playlists .previewPopup_scene').is(':visible')) keyDown_playlists_list(keyCode);		//  edit , Delete, Play, Cancel 팝업창 오픈 되었을 때
    else if ($('#lay_editor_layer').is(':visible')) keyDown_theme_edit_detail(keyCode);		    		// edit map detail
    else if ($('#body_playlists .editMap').is(':visible')) keyDown_theme_edit(keyCode);				    // edit map
    else {
        switch (keyCode) {
            case VK_LEFT:
                if (!$(".player").is(':visible')) click_left();
                break;
            case VK_RIGHT:
                if (!$(".player").is(':visible')) click_right();
                break;
            case VK_UP:
                if (!$(".player").is(':visible')) click_featured();
                break;
            case VK_DOWN:
                if (!$(".player").is(':visible')) click_editor();
                break;
            case VK_ENTER:
                if ($(".player").is(':visible')) {
                    cancel_full_screen();
                    break;
                }
                if (serverPublishMe_number_of_publish == 0) break;
                click_slide(mainKeyLocation.horizon);
                break;
        }
    }
}

// 1-1 : Playlist 선택메뉴
function keyDown_playlists_list(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            previewKeyLocation.horizon--;
            if (previewKeyLocation.horizon < 1)
                previewKeyLocation.horizon = 4;
            focusPlaylistsPreviewPopup();
            break;
        case VK_RIGHT:
            previewKeyLocation.horizon++;
            if (previewKeyLocation.horizon > 4)
                previewKeyLocation.horizon = 1;
            focusPlaylistsPreviewPopup();
            break;
        case VK_ENTER:
            if (previewKeyLocation.horizon == 1) $("#body_playlists .previewPopup_button .edit").click();
            if (previewKeyLocation.horizon == 2) $("#body_playlists .previewPopup_button .delete").click();
            if (previewKeyLocation.horizon == 3) $("#body_playlists .previewPopup_button .play").click();
            if (previewKeyLocation.horizon == 4) $("#body_playlists .previewPopup_button .cancel").click();
            break;
    }
}

// 2 : 왼쪽 editor에서 키 이벤트
function keyDown_editor(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            click_left();
            break;
        case VK_RIGHT:
            click_right();
            break;
        case VK_UP:
            click_playlists();
            break;
        case VK_DOWN:
            click_support();
            break;
        case VK_ENTER:
            switch (mainKeyLocation.horizon) {
                case 1:
                    click_editor_slide_theme();
                    break;
                case 2:
                    break;
                case 3:
                    //click_editor_slide_myProjects();
                    break;
            }
            break;
    }
}

// 2-1 : Theme에서 키 이벤트
function keyDown_theme(keyCode) {
    if ($('#body_theme .previewPopup_scene').is(':visible')) keyDown_theme_list(keyCode);		// edit or cancel
    else if ($('#lay_editor_layer').is(':visible')) keyDown_theme_edit_detail(keyCode);				// edit map detail
    else if ($('#body_theme .editMap').is(':visible')) keyDown_theme_edit(keyCode);				    // edit map

        // select theme list
    else {
        switch (keyCode) {
            case VK_LEFT:
                if (isBackBtnRollOver == false) click_left();
                break;
            case VK_RIGHT:
                if (isBackBtnRollOver == false) click_right();
                break;
            case VK_UP:
                focusBackBtn();
                break;
            case VK_DOWN:
                removeFocusBackBtn();
                break;
            case VK_ENTER:
                if (isBackBtnRollOver == true) {
                    click_back();
                }
                else {
                    click_slideList_live(mainKeyLocation.horizon);
                    focusThemePreviewPopup();
                }
                break;
        }
    }
}

// 2-2 : edit or cancel popup window
function keyDown_theme_list(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            previewKeyLocation.horizon--;
            if (previewKeyLocation.horizon < 1)
                previewKeyLocation.horizon = 2;
            focusThemePreviewPopup();
            break;
        case VK_RIGHT:
            previewKeyLocation.horizon++;
            if (previewKeyLocation.horizon > 2)
                previewKeyLocation.horizon = 1;
            focusThemePreviewPopup();
            break;
        case VK_ENTER:
            if (previewKeyLocation.horizon == 1) {
                $("#body_theme .previewPopup_button .edit").click();
            }
            else if (previewKeyLocation.horizon == 2) {
                $("#body_theme .previewPopup_button .cancel").click();
            }
            break;
    }
}


// 2-3 : theme edit에서 키 이벤트
function keyDown_theme_edit(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            if (isBackBtnRollOver == false) moveLeftCell(selectedSlideListNo);
            break;
        case VK_RIGHT:
            if (isBackBtnRollOver == false) moveRightCell(selectedSlideListNo);
            break;
        case VK_UP:
            moveUpCell(selectedSlideListNo);
            break;
        case VK_DOWN:
            moveDownCell(selectedSlideListNo);
            break;
        case VK_ENTER:
            if (isBackBtnRollOver == true) {
                click_back();
                break;
            }
            ready_editor_layer(focusedEditMapCellNo);
            initSubItemFocus();
            break;
    }
}

function keyDown_theme_edit_detail(keyCode) {
    if ($("#lay_editor_layer .backgrounds .image .select_an_image").is(':visible')) {
        keyDown_theme_background_select(keyCode);
        return;
    }
    if ($("#lay_editor_layer .images .select_an_image").is(':visible')) {
        keyDown_theme_image_select(keyCode);
        return;
    }
    if (lgKb.vKeyboard.style.display == "block")
    {
        console.log("vk state");
        return;
    }
    switch (keyCode) {
        case VK_LEFT:
            editLayerChangeMenuLeft();
            break;
        case VK_RIGHT:
            editLayerChangeMenuRight();
            break;
        case VK_UP:
            editLayerChangeMenuUp();
            break;
        case VK_DOWN:
            editLayerChangeMenuDown();
            break;
        case VK_ENTER:
            editLayerEnterKeyDown();
            break;
    }
}

function keyDown_theme_background_select(keyCode) {
    moveFocusSelectAnImage(keyCode);
}

function keyDown_theme_image_select(keyCode) {
    moveFocusSelectAnImage(keyCode);
}

// 3 : 왼쪽 support에서 키 이벤트
function keyDown_support(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            click_left();
            break;
        case VK_RIGHT:
            click_right();
            break;
        case VK_UP:
            click_editor();
            break;
        case VK_DOWN:
            click_settings();
            break;
        case VK_ENTER:
            switch (mainKeyLocation.horizon) {
                case 1:
                    click_support_slide_about();
                    break;
                case 2:
                    click_support_slide_fag();
                    break;
                case 3:
                    click_support_slide_forum();
                    break;
            }
            break;
    }
}

// 3-1 : about에서 키 이벤트
function keyDown_about(keyCode) {
    switch (keyCode) {
        case VK_ENTER:
            if (isBackBtnRollOver == true) click_back();
            break;
    }
}

// 3-2 : faq에서 키 이벤트
function keyDown_faq(keyCode) {
    switch (keyCode) {
        case VK_ENTER:
            if (isBackBtnRollOver == true) click_back();
            break;
    }
}

// 3-3 : forum에서 키 이벤트
function keyDown_forum(keyCode) {
    switch (keyCode) {
        case VK_ENTER:
            if (isBackBtnRollOver == true) click_back();
            break;
    }
}


// 4 : 왼쪽 account에서 키 이벤트
function keyDown_account(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            click_left();
            break;
        case VK_RIGHT:
            click_right();
            break;
        case VK_UP:
            click_support();
            break;
        case VK_ENTER:
            if  (mainKeyLocation.horizon == 1)      click_settings_signout();
            else if (mainKeyLocation.horizon == 2) click_settings_myAccount();
            break;
    }
}

function keyDown_signout(keyCode) {
    switch (keyCode) {
        case VK_LEFT:
            previewKeyLocation.horizon--;
            if (previewKeyLocation.horizon < 1)
                previewKeyLocation.horizon = 1;
            focusSignoutPopup();
            break;
        case VK_RIGHT:
            previewKeyLocation.horizon++;
            if (previewKeyLocation.horizon > 2)
                previewKeyLocation.horizon = 2;
            focusSignoutPopup();
            break;
        case VK_ENTER:
            if (previewKeyLocation.horizon == 1) click_logout();
            else if (previewKeyLocation.horizon == 2) click_back();
            break;
    }
}

function keyDown_myaccount(keyCode) {
    switch (keyCode) {
        case VK_ENTER:
            click_back();
            break;
    }
}

// 키 이벤트 진입
function keyDown(event) {

    var keyCode = event.which;

    if (keyCode == VK_HID_ESC || keyCode == VK_HID_BACK)
    {
        if ($("#body_" + selectedSlideListKind + " .player").is(':visible'))
        {
            cancel_full_screen();
        }
    }


    // Device 모드가 아닐 경우 키 입력 받지 않음
    if (platform != "device") return;                   

    if (keyCode == VK_ENTER) playAudio('../websrc/wav/sound_enter.mp3');
    if (keyCode == VK_LEFT || keyCode == VK_RIGHT || keyCode == VK_UP || keyCode == VK_DOWN) playAudio('../websrc/wav/sound_arrow.mp3');


    // Devive 에서 이전 버튼 누를 경우 [BACK] 버튼 효과
    if (keyCode == VK_BACK || keyCode == VK_HID_BACK)
    {
        if (!$("#lay_editor_layer").is(':visible') && !$("#lay_new_topic").is(':visible')) {
            click_back();
            
        }
        return;
    }

    if (currentPage == "featured") keyDown_featured(keyCode);
    else if (currentPage == "playlists") keyDown_playLists(keyCode);
    else if (currentPage == "editor") keyDown_editor(keyCode);
    else if (currentPage == "support") keyDown_support(keyCode);
    else if (currentPage == "settings") keyDown_account(keyCode);
    else if (currentPage == "theme") keyDown_theme(keyCode);
    else if (currentPage == "faq") keyDown_faq(keyCode);
    else if (currentPage == "about") keyDown_about(keyCode);
    else if (currentPage == "forum") keyDown_forum(keyCode);
    else if (currentPage == "signout") keyDown_signout(keyCode);
    else if (currentPage == "myaccount") keyDown_myaccount(keyCode);
    focusMainHorizon();
}


