var makeSelectCellImage = new MakeSelectImageWindow();
var maxSelectCellImageMyImages = new Number;

var makeSelectBackgroundImage = new MakeSelectImageWindow();
var maxSelectBackgroundImageMyImages = new Number;
var maxSelectBackgroundImage_digitalAndArt = new Number;
var maxSelectBackgroundImage_plantsAndFlowers = new Number;
var maxSelectBackgroundImage_placesAndLandscape = new Number;
var maxSelectBackgroundImage_natureAndAnimals = new Number;

function loadSelectCellImageInfo() {
    var j = 1;

    for (i = 0; i < selectCellImage.myImages.url.length; i++) {
        if (selectCellImage.myImages.url[i] != undefined)
            j++;
    }
    maxSelectCellImageMyImages = j - 1;
}

function loadSelectBackgroundImageInfo() {
    var i = 1, j = 1, k = 1, l = 1, m = 1;

    while (selectBackgroundImage.myImages.url[i] != undefined) { i++; }
    while (selectBackgroundImage.digitalAndArt.url[j] != undefined) { j++; }
    while (selectBackgroundImage.plantsAndFlowers.url[k] != undefined) { k++; }
    while (selectBackgroundImage.placesAndLandscape.url[l] != undefined) { l++; }
    while (selectBackgroundImage.natureAndAnimals.url[m] != undefined) { m++; }

    maxSelectBackgroundImageMyImages = i - 1;
    maxSelectBackgroundImage_digitalAndArt = j - 1;
    maxSelectBackgroundImage_plantsAndFlowers = k - 1;
    maxSelectBackgroundImage_placesAndLandscape = l - 1;
    maxSelectBackgroundImage_natureAndAnimals = m - 1;
}

function MakeSelectImageWindow() {
    var current_image_date = new String();

    this.deleteAll = function () {
        $(this.wrapper).html("");
        current_image_date = "";
    }

    this.build = function (kind) {
        var imageTop = new Number;
        var imageLeft = new Number;
        var posOfTitle = new Number;
        var urlOfImage = new String;
        var dayCount = new Number;
        var inWrapper;

        if (this.maxMyImages <= 0) {
            $("#lay_editor_layer .select_an_image .title_myImages .noImage").show();
        }
        else {
            $("#lay_editor_layer .select_an_image .title_myImages .noImage").hide();
        }

        imageTop = 26;
        imageLeft = 20;
        dayCount = 0;

        if (this.category == "cell") {
            kind = "myImages";
            for (var i = 1; i <= selectCellImage.myImages.url.length; i++) {
                if (!$(this.wrapper + " ." + kind + "_" + i).is(':visible')) {
                    if (selectCellImage.myImages.upload_date[i] == undefined) continue;

                    // 첫번째 이미지 등록시 날짜 타이틀 등록
                    if (current_image_date == "") {
                        current_image_date = selectCellImage.myImages.upload_date[i];
                        $(this.wrapper).prepend("<div class='title_date_" + i + "'>" + current_image_date + "</div>");
                        $(this.wrapper + " ." + "title_date_" + i).css("top", imageTop);
                        imageTop += +34;
                    }
                    else {                        
                        // 다음 이미지 등록시 날짜가 다를 경우
                        if (current_image_date != selectCellImage.myImages.upload_date[i]) {
                            current_image_date = selectCellImage.myImages.upload_date[i];
                            imageTop += 107;
                            $(this.wrapper).prepend("<div class='title_date_" + i + "'>" + current_image_date + "</div>");
                            $(this.wrapper + " ." + "title_date_" + i).css("top", imageTop);
                            imageTop += 34;                 // 날짜 타이틀 높이
                            imageLeft = 20;
                            dayCount = 0;
                        }
                            // 다음 이미지 등록시 날짜가 같을 경우
                        else {
                            if (dayCount % 3 == 0) {
                                imageTop += 107;
                                imageLeft = 20;
                            }
                            else {
                                imageLeft += 176;
                            }
                        }
                    }
                    dayCount++;

                    $(this.wrapper + " ." + "title_date_" + i).css({
                        "margin": "0",
                        "position": "absolute",
                        "display": "block",
                        "left": "20px",
                        "width": "540px",
                        "height": "18px",
                        "color": "#fff",
                        "font-size": "10pt",
                        "font-weight": "bolder",
                        "font-family": "arial",
                        "border-bottom": "2px solid #666"
                    });

                    // 이미지 등록
                    $(this.wrapper).prepend('<a id="' + kind + 'Id_' + i + '" href="#"><div id = "' + i + '" class="' + kind + '_' + i + ' ' + kind + 'Img"><div class="delete"></div></div></a>');

                    urlOfImage = selectCellImage.myImages.url[i];
                    inWrapper = this.wrapper;

                    getMeta(urlOfImage, i, imageTop, imageLeft, kind, setCss);
                    $(".cellImage.scr-cont").css({ "height": imageTop + 150 });
                }
            }
        }
        else if (this.category == "background") {
            kind = "myImages";
            for (var i = 1; i <= selectBackgroundImage.myImages.url.length; i++) {
                if (!$(this.wrapper + " ." + kind + "_" + i).is(':visible')) {
                    if (selectBackgroundImage.myImages.upload_date[i] == undefined) continue;
                    // 첫번째 이미지 등록시 날짜 타이틀 등록
                    if (current_image_date == "") {
                        current_image_date = selectBackgroundImage.myImages.upload_date[i];
                        $(this.wrapper).prepend("<div class='title_date_" + i + "'>" + current_image_date + "</div>");
                        $(this.wrapper + " ." + "title_date_" + i).css("top", imageTop);
                        imageTop = imageTop + 34;
                    }
                    else {
                        // 다음 이미지 등록시 날짜가 다를 경우
                        if (current_image_date != selectBackgroundImage.myImages.upload_date[i]) {
                            current_image_date = selectBackgroundImage.myImages.upload_date[i];
                            imageTop += 107;
                            $(this.wrapper).prepend("<div class='title_date_" + i + "'>" + current_image_date + "</div>");
                            $(this.wrapper + " ." + "title_date_" + i).css("top", imageTop);
                            imageTop += 34;                 // 날짜 타이틀 높이
                            imageLeft = 20;
                            dayCount = 0;
                        }
                            // 다음 이미지 등록시 날짜가 같을 경우
                        else {
                            if (dayCount % 3 == 0) {
                                imageTop += 107;
                                imageLeft = 20;
                            }
                            else {
                                imageLeft += 176;
                            }
                        }
                    }
                    dayCount++;

                    $(this.wrapper + " ." + "title_date_" + i).css({
                        "margin": "0",
                        "position": "absolute",
                        "display": "block",
                        "left": "20px",
                        "width": "540px",
                        "height": "18px",
                        "color": "#fff",
                        "font-size": "10pt",
                        "font-weight": "bolder",
                        "font-family": "arial",
                        "border-bottom": "2px solid #666"
                    });

                    // 이미지 등록
                    $(this.wrapper).prepend('<a id="' + kind + 'Id_' + i + '" href="#"><div id = "' + i + '" class="' + kind + '_' + i + ' ' + kind + 'Img"><div class="delete"></div></div></a>');
                    urlOfImage = selectBackgroundImage.myImages.url[i];
                    inWrapper = this.wrapper;

                    getMeta(urlOfImage, i, imageTop, imageLeft, kind, setCss);
                    $(".backgroundImage.scr-cont").css({ "height": imageTop + 150 });
                }
            }

            //**Digital and Art**
            
            imageTop += 107;
            dayCount = 0;
            kind = "digitalAndArt";
            
            $(this.wrapper).append("<div class='title_" + kind + "'>Digital and Art</div>");
            $(this.wrapper + " .title_" + kind).css({
                "top": imageTop,
                "margin": "0",
                "position": "absolute",
                "display": "block",
                "left": "20px",
                "width": "540px",
                "height": "18px",
                "color": "#fff",
                "font-size": "10pt",
                "font-weight": "bolder",
                "font-family": "arial",
                "border-bottom": "2px solid #666"
            });
            imageTop = imageTop + 34;

            for (var i = 1; i <= selectBackgroundImage.digitalAndArt.url.length; i++) {
                if (dayCount % 3 == 0) {
                    if (dayCount != 0) imageTop += 107;
                    imageLeft = 20;
                }
                else {
                    imageLeft += 176;
                }
                dayCount++;

                // 이미지 등록
                $(this.wrapper).prepend('<a id="' + kind + 'Id_' + i + '" href="#"><div id = "' + i + '" class="' + kind + '_' + i + ' ' + kind + 'Img"><div class="delete"></div></div></a>');
                urlOfImage = selectBackgroundImage.digitalAndArt.url[i];
                inWrapper = this.wrapper;

                getMeta(urlOfImage, i, imageTop, imageLeft, kind, setCss);
                $(".backgroundImage.scr-cont").css({ "height": imageTop + 150 });
            }

            //**Plants and Flowers**

            imageTop += 107;
            dayCount = 0;
            kind = "plantsAndFlowers";

            $(this.wrapper).append("<div class='title_" + kind + "'>Plants and Flowers</div>");
            $(this.wrapper + " .title_" + kind).css({
                "top": imageTop,
                "margin": "0",
                "position": "absolute",
                "display": "block",
                "left": "20px",
                "width": "540px",
                "height": "18px",
                "color": "#fff",
                "font-size": "10pt",
                "font-weight": "bolder",
                "font-family": "arial",
                "border-bottom": "2px solid #666"
            });
            imageTop = imageTop + 34;

            for (var i = 1; i <= selectBackgroundImage.plantsAndFlowers.url.length; i++) {
                if (dayCount % 3 == 0) {
                    if (dayCount != 0) imageTop += 107;
                    imageLeft = 20;
                }
                else {
                    imageLeft += 176;
                }
                dayCount++;

                // 이미지 등록
                $(this.wrapper).prepend('<a id="' + kind + 'Id_' + i + '" href="#"><div id = "' + i + '" class="' + kind + '_' + i + ' ' + kind + 'Img"><div class="delete"></div></div></a>');
                urlOfImage = selectBackgroundImage.plantsAndFlowers.url[i];
                inWrapper = this.wrapper;

                getMeta(urlOfImage, i, imageTop, imageLeft, kind, setCss);
                $(".backgroundImage.scr-cont").css({ "height": imageTop + 150 });
            }
            
            //**Places and Landscape**

            imageTop += 107;
            dayCount = 0;
            kind = "placesAndLandscape";

            $(this.wrapper).append("<div class='title_" + kind + "'>Places and Landscape</div>");
            $(this.wrapper + " .title_" + kind).css({
                "top": imageTop,
                "margin": "0",
                "position": "absolute",
                "display": "block",
                "left": "20px",
                "width": "540px",
                "height": "18px",
                "color": "#fff",
                "font-size": "10pt",
                "font-weight": "bolder",
                "font-family": "arial",
                "border-bottom": "2px solid #666"
            });
            imageTop = imageTop + 34;

            for (var i = 1; i <= selectBackgroundImage.placesAndLandscape.url.length; i++) {
                if (dayCount % 3 == 0) {
                    if (dayCount != 0) imageTop += 107;
                    imageLeft = 20;
                }
                else {
                    imageLeft += 176;
                }
                dayCount++;

                // 이미지 등록
                $(this.wrapper).prepend('<a id="' + kind + 'Id_' + i + '" href="#"><div id = "' + i + '" class="' + kind + '_' + i + ' ' + kind + 'Img"><div class="delete"></div></div></a>');
                urlOfImage = selectBackgroundImage.placesAndLandscape.url[i];
                inWrapper = this.wrapper;

                getMeta(urlOfImage, i, imageTop, imageLeft, kind, setCss);
                $(".backgroundImage.scr-cont").css({ "height": imageTop + 150 });
            }

            //**Nature and Animals**

            imageTop += 107;
            dayCount = 0;
            kind = "natureAndAnimals";

            $(this.wrapper).append("<div class='title_" + kind + "'>Places and Landscape</div>");
            $(this.wrapper + " .title_" + kind).css({
                "top": imageTop,
                "margin": "0",
                "position": "absolute",
                "display": "block",
                "left": "20px",
                "width": "540px",
                "height": "18px",
                "color": "#fff",
                "font-size": "10pt",
                "font-weight": "bolder",
                "font-family": "arial",
                "border-bottom": "2px solid #666"
            });
            imageTop = imageTop + 34;

            for (var i = 1; i <= selectBackgroundImage.natureAndAnimals.url.length; i++) {
                if (dayCount % 3 == 0) {
                    if (dayCount != 0) imageTop += 107;
                    imageLeft = 20;
                }
                else {
                    imageLeft += 176;
                }
                dayCount++;

                // 이미지 등록
                $(this.wrapper).prepend('<a id="' + kind + 'Id_' + i + '" href="#"><div id = "' + i + '" class="' + kind + '_' + i + ' ' + kind + 'Img"><div class="delete"></div></div></a>');
                urlOfImage = selectBackgroundImage.natureAndAnimals.url[i];
                inWrapper = this.wrapper;

                getMeta(urlOfImage, i, imageTop, imageLeft, kind, setCss);
                $(".backgroundImage.scr-cont").css({ "height": imageTop + 150 });
            }

            function setCss(width, height, order, tmpUrl, tmpTop, tmpLeft, _kind) {
                var tmpWidth = width;
                var tmpHeight = height;

                // 세로 비율이 더 크다면, 세로 높이를 최대화 한것을 기준으로 가로 설정
                if ((tmpWidth / 160) < (tmpHeight / 90)) {
                    $(inWrapper + " ." + _kind + "_" + order).css({
                        "background-image": "url(" + tmpUrl + ")",
                        "background-size": "auto 100%",
                        "background-position-x": "50%",
                        "background-repeat": "no-repeat",
                        "position": "absolute",
                        "display": "block",
                        top: tmpTop,
                        left: tmpLeft,
                        "width": "160px",
                        "height": "90px",
                        "border": "1px solid #666"
                    });
                }

                    // 가로 비율이 더 크다면, 가로 높이를 최대화 한것을 기준으로 세로 설정
                else {
                    $(inWrapper + " ." + _kind + "_" + order).css({
                        "background-image": "url(" + tmpUrl + ")",
                        "background-size": "100% auto",
                        "background-position-y": "50%",
                        "background-repeat": "no-repeat",
                        "position": "absolute",
                        "display": "block",
                        top: tmpTop,
                        left: tmpLeft,
                        "width": "160px",
                        "height": "90px",
                        "border": "1px solid #666"
                    });
                }
            }


            function getMeta(url, order, tmpImageTop, tmpImageLeft, _kind, callback) {
                var img = new Image();
                img.src = url;
                img.onload = function () {
                    callback(this.width, this.height, order, url, tmpImageTop, tmpImageLeft, _kind);
                }
            }
        };
    }
}
