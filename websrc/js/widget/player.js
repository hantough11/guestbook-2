var play_config = "";
var ytplayer = new Array;
var ftplayer = new Array;
var startListNumber = 0;
var selectedListNumber = 0;

function LiveStream() {
    this.id = new String();
    this.title = new String();
    this.image_url = new String();
}

function VodPlaylists() {
    this.id = new String();
    this.title = new String();
    this.image_url = new String();
    this.play_count = new Number();
}


var livestream = new Array();
var vodPlaylists = new Array();

livestream[1] = new LiveStream();
livestream[1].id = "eRcfW2KekaM";
livestream[1].title = "[ON-Air]KBS World";
livestream[1].image_url = "https://i.ytimg.com/vi/eRcfW2KekaM/mqdefault.jpg";

livestream[2] = new LiveStream();
livestream[2].id = "mtW2UQSAC2k";
livestream[2].title = "와이티엔(24시간)HD 라이브";
livestream[2].image_url = "https://i.ytimg.com/vi/mtW2UQSAC2k/mqdefault.jpg";

livestream[3] = new LiveStream();
livestream[3].id = "-nbPzEUQ8k4";
livestream[3].title = "SPOTV MLB24";
livestream[3].image_url = "https://i.ytimg.com/vi/-nbPzEUQ8k4/mqdefault_v4711246.jpg";

livestream[4] = new LiveStream();
livestream[4].id = "O1nkPp757tk";
livestream[4].title = "BearSpotv";
livestream[4].image_url = "https://i.ytimg.com/vi/O1nkPp757tk/mqdefault.jpg";

livestream[5] = new LiveStream();
livestream[5].id = "t_d0OKESP_o";
livestream[5].title = "KBO TV Channel 24";
livestream[5].image_url = "https://i.ytimg.com/vi/t_d0OKESP_o/mqdefault.jpg";

livestream[6] = new LiveStream();
livestream[6].id = "Qb-uo0Xcg64";
livestream[6].title = "FactTVonair";
livestream[6].image_url = "https://i.ytimg.com/vi/uo0Xcg64/mqdefault_v4711248.jpg";


livestream[7] = new LiveStream();
livestream[7].id = "bNwTPAEOYy4";
livestream[7].title = "Live/JTBC뉴스";
livestream[7].image_url = "https://i.ytimg.com/vi/bNwTPAEOYy4/mqdefault.jpg";


function adjustList()
{
    var target;
    
    if (topSelectMenuName == "tv")
    {
        target = livestream;
        for (i = 1; i < target.length - startListNumber; i++) {
            $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i).css({
                'background': 'url(' + target[i + Number(startListNumber)].image_url + ')  no-repeat',
                'background-size': '100% auto'
            });
            $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i + " .title").text(target[i + Number(startListNumber)].title);
        }
    }
    else if (topSelectMenuName == "video")
    {
        target = vodPlaylists;
        for (i = 1; i < target.length - startListNumber; i++) {
            $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i).css({
                'background': 'url(' + target[i + Number(startListNumber)].image_url + ')  no-repeat',
                'background-size': '100% auto'
            });
            $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i + " .title").text(target[i + Number(startListNumber)].title);
            $("#lay_editor_layer .widgets .video .list .item_" + i + " .title").html(vodPlaylists[i].title + "<br>" + "(동영상 수 : " + vodPlaylists[i].play_count + "개)");
        }
    }
    else if (topSelectMenuName == "weather")
    {
        target = weatherList;
        for (i = 1; i < target.length - startListNumber; i++) {
            $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i).css({
                'background': 'url(' + target[i + Number(startListNumber)].image_url + ')  no-repeat',
                'background-size': '100% auto',
                'background-color' : '#000'
            });
        }
    }
    else return;

    if (selectedListNumber - startListNumber < 1 || selectedListNumber - startListNumber > 3) $("#lay_editor_layer .widgets .image_selected").hide();
    else $("#lay_editor_layer .widgets .image_selected").show();

    $("#lay_editor_layer .widgets .image_selected").css({
        'top': "125px",
        'left': "+=245px"
    });
}

function changeTvListLeft()
{
    var target;

    if (topSelectMenuName == "tv") target = livestream;
    else if (topSelectMenuName == "video") target = vodPlaylists;
    else if (topSelectMenuName == "weather") target = weatherList;
    else return;

    if (startListNumber == 0) return;
    startListNumber -= 1;

    for (i = 1; i < target.length - startListNumber; i++)
    {
        $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i).css({
            'background': 'url(' + target[i + Number(startListNumber)].image_url + ')  no-repeat',
            'background-size': '100% auto',
            'background-color': '#000'
        });
        $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i + " .title").text(target[i + Number(startListNumber)].title);
        if (topSelectMenuName == "video") $("#lay_editor_layer .widgets .video .list .item_" + i + " .title").html(vodPlaylists[i + Number(startListNumber)].title + "<br>" + "(동영상 수 : " + vodPlaylists[i + Number(startListNumber)].play_count + "개)");
    }

    if (selectedListNumber - startListNumber < 1 || selectedListNumber - startListNumber > 3) $("#lay_editor_layer .widgets .image_selected").hide();
    else $("#lay_editor_layer .widgets .image_selected").show();

    $("#lay_editor_layer .widgets .image_selected").css({
        'top': "125px",
        'left': "+=245px"
    });

}

function changeTvListRight() {
    var target;

    if (topSelectMenuName == "tv") target = livestream;
    else if (topSelectMenuName == "video") target = vodPlaylists;
    else if (topSelectMenuName == "weather") target = weatherList;
    else return;

    if (startListNumber == target.length - 4) return;
    if (target.length < 4) return;
    startListNumber += 1;

    for (i = 1; i < target.length - startListNumber; i++) {
        $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i).css({
            'background': 'url(' + target[i + Number(startListNumber)].image_url + ')  no-repeat',
            'background-size': '100% auto',
            'background-color': '#000'
        });
        $("#lay_editor_layer .widgets ." + topSelectMenuName + " .list .item_" + i + " .title").text(target[i + Number(startListNumber)].title);
        if (topSelectMenuName == "video") $("#lay_editor_layer .widgets .video .list .item_" + i + " .title").html(vodPlaylists[i + Number(startListNumber)].title + "<br>" + "(동영상 수 : " + vodPlaylists[i + Number(startListNumber)].play_count + "개)");
    }

    if (selectedListNumber - startListNumber < 1 || selectedListNumber - startListNumber > 3) $("#lay_editor_layer .widgets .image_selected").hide();
    else $("#lay_editor_layer .widgets .image_selected").show();

    $("#lay_editor_layer .widgets .image_selected").css({
        'top': "125px",
        'left': "-=245px"
    });
}

function selectTvList(sel)
{
    if (parseInt(sel) == parseInt(selectedListNumber - startListNumber)) {
        $("#lay_editor_layer .widgets .image_selected").hide();
        selectedListNumber = 0;
        return;
    }

    selectedListNumber = startListNumber + sel;
    $("#lay_editor_layer .widgets .image_selected").show();
    $("#lay_editor_layer .widgets .image_selected").css({
        top: "125px",
        left: (((sel - 1) * 245) + 300) + "px"
    });
}

function SetLiveThumnail()
{
    for (i = 1; i < livestream.length - startListNumber; i++) {
        $("#lay_editor_layer .widgets .tv .list .item_" + i).css({
            'background': 'url(' + livestream[i + Number(startListNumber)].image_url + ')  no-repeat',
            'background-size': '100% auto'
        });
        $("#lay_editor_layer .widgets .tv .list .item_" + i + " .title").text(livestream[i].title);
    }
}

function SetVodThumnail(result) {
    var total_items = Number(result.pageInfo.totalResults);

    for (i = 1; i <= total_items; i++) {
        vodPlaylists[i] = new VodPlaylists();
        vodPlaylists[i].id = result.items[i - 1].id;
        vodPlaylists[i].title = result.items[i - 1].snippet.title;
        vodPlaylists[i].image_url = result.items[i - 1].snippet.thumbnails.medium.url;
        vodPlaylists[i].play_count = Number(result.items[i - 1].contentDetails.itemCount);

        $("#lay_editor_layer .widgets .video .list .item_" + i).css({
            'background': 'url(' + vodPlaylists[i].image_url + ')  no-repeat',
            'background-size': '100% auto'
        });
        $("#lay_editor_layer .widgets .video .list .item_" + i + " .title").html(vodPlaylists[i].title + "<br>" + "(동영상 수 : " + vodPlaylists[i].play_count + "개)");
    }
}


function onYouTubeIframeAPIReady_(index)
{
    if (selectedSlideListKind == "playlists")
    {
        for (i = 1; i < 26; i++) {
            if (playlist[index].cell[i].widget.widget_kind == "tv") {
                console.log("tv:" + ytplayer[index]);
                ytplayer[index] = new YT.Player('ytplayer_' + index, {
                    videoId: playlist[index].cell[i].widget.vod_id,
                    playerVars: {
                        controls: 0,
                        autoplay: 1,
                        showinfo: 0,
                        loop: 1,
                    },
                });
            }
            if (playlist[index].cell[i].widget.widget_kind == "video") {
                console.log("video:" + ytplayer[index]);
                ytplayer[index] = new YT.Player('ytplayer_' + index, {
                    playerVars: {
                        controls: 0,
                        autoplay: 1,
                        showinfo: 0,
                        loop: 1,
                        list: playlist[index].cell[i].widget.vod_id,
                        listType: 'playlist',
                    },
                });
            }
            
        }
    }
    else if (selectedSlideListKind == "featured")
    {
        for (i = 1; i < 26; i++) {
            if (featured[index].cell[i].widget.widget_kind == "tv") {
                ftplayer[index] = new YT.Player('ftplayer_' + index, {
                    videoId: featured[index].cell[i].widget.vod_id,
                    playerVars: {
                        controls: 0,
                        autoplay: 1,
                        showinfo: 0,
                        loop: 1,
                    },
                });
            }
            if (featured[index].cell[i].widget.widget_kind == "video") {
                ftplayer[index] = new YT.Player('ftplayer_' + index, {
                    playerVars: {
                        controls: 0,
                        autoplay: 1,
                        showinfo: 0,
                        loop: 1,
                        list: featured[index].cell[i].widget.vod_id,
                        listType: 'playlist',
                    },
                });
            }
        }
    }
}

function replay(index)
{
    if (selectedSlideListKind == "playlists")
    {
        for (i = 1; i < 26; i++) {
            if (playlist[index].cell[i].widget.widget_kind == "tv") {
                ytplayer[index].loadVideoById(playlist[index].cell[i].widget.vod_id);
            }
            if (playlist[index].cell[i].widget.widget_kind == "video") {
                ytplayer[index].playVideoAt(0);
            }
        }
    }
    else if (selectedSlideListKind == "featured")
    {
        for (i = 1; i < 26; i++) {
            if (featured[index].cell[i].widget.widget_kind == "tv") {
                ftplayer[index].loadVideoById(playlist[index].cell[i].widget.vod_id);
            }
            if (featured[index].cell[i].widget.widget_kind == "video") {
                ftplayer[index].playVideoAt(0);
            }
        }
    }

}


function myPlayLists() {

    if (platform == "device")
    {
        $.ajax({
            type: "POST",
            url: "../../device",
            data: 'step=5',
            dataType: 'json',
            success: function (result) {
                SetVodThumnail(result);
            }
        });
    }
    else {
        var request = gapi.client.youtube.playlists.list({
            mine: true,
            part: 'snippet, contentDetails'
        });
        request.execute(function (response) {
            SetVodThumnail(response);
        });
    }
}

