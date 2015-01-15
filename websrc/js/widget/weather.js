var APIKEY = "39b3277dff1fa7c67cc17308f742ad2b";
var LOCATION = "";

function Weather() {
    this.type = new Number();
    this.image_url = new String();
}

var weatherList = new Array();

weatherList[1] = new Weather();
weatherList[1].type = 1;
weatherList[1].image_url = "../websrc/img/main/weather_sample_01.png";

weatherList[2] = new Weather();
weatherList[2].type = 2;
weatherList[2].image_url = "../websrc/img/main/weather_sample_02.png";

weatherList[3] = new Weather();
weatherList[3].type = 3;
weatherList[3].image_url = "../websrc/img/main/weather_sample_03.png";

weatherList[4] = new Weather();
weatherList[4].type = 4;
weatherList[4].image_url = "../websrc/img/main/weather_sample_04.png";

weatherList[5] = new Weather();
weatherList[5].type = 5;
weatherList[5].image_url = "../websrc/img/main/weather_sample_05.png";

weatherList[6] = new Weather();
weatherList[6].type = 6;
weatherList[6].image_url = "../websrc/img/main/weather_sample_06.png";

weatherList[7] = new Weather();
weatherList[7].type = 7;
weatherList[7].image_url = "../websrc/img/main/weather_sample_07.png";

weatherList[8] = new Weather();
weatherList[8].type = 8;
weatherList[8].image_url = "../websrc/img/main/weather_sample_08.png";

var weatherplayer;

var MONTH = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

function WeatherPlayer(_index, _id, _kind, _font_color, _font_back_color, _font_family) {
    var index = _index;
    var id = _id;
    var kind = _kind;
    var interval = new Number;
    var data = new String;

    if (_font_family == "") _font_family = "Arial";


    this.run = function () {
        GetWeather();
        interval = setInterval(function () { GetWeather(); }, 600000);
    };

    function GetWeather() {
        
        $.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: 'type=accurate&id=' + id + "&APPID=" + APIKEY,
            dataType: 'json',
            success: function (result) {
                var contry = result.sys.country;
                var city = result.name.substring(0,10);
                var temp = result.main.temp - 273.15;               //온도
                var temp_min = result.main.temp_min - 273.15;       //최저온도
                var temp_max = result.main.temp_max - 273.15;       //최고온도
                var humidity = result.main.humidity;                  //습도
                var pressure = result.main.pressure;                  //습도
                var wind_speed = result.wind.speed;
                var summary = result.weather[0].description;           //요약
                var summary_icon = "./websrc/img/main/" + result.weather[0].icon + ".png";
                var rain = result.rain;
                var deg = result.wind.deg;
                var degString;
                var sunrise = result.sys.sunrise;
                var sunset = result.sys.sunset;

                if (parseFloat(deg) >= 22.5 && parseFloat(deg) < 67.5) degString = "North-East";
                else if (parseFloat(deg) >= 67.5 && parseFloat(deg) < 112.5) degString = "East";
                else if (parseFloat(deg) >= 112.5 && parseFloat(deg) < 157.5) degString = "South-East";
                else if (parseFloat(deg) >= 157.5 && parseFloat(deg) < 202.5) degString = "South";
                else if (parseFloat(deg) >= 202.5 && parseFloat(deg) < 247.5) degString = "South-West";
                else if (parseFloat(deg) >= 247.5 && parseFloat(deg) < 292.5) degString = "West";
                else if (parseFloat(deg) >= 292.5 && parseFloat(deg) < 347.5) degString = "North-West";
                else if (parseFloat(deg) >= 347.5 || parseFloat(deg) < 22.5) degString = "North";



                dt = new Date();
                var month = MONTH[dt.getMonth()];
                console.log(dt.getMonth());
                var day = dt.getDate();

                var _html = new String();

                $(".weather_" + index + " .weather_data").css("font-family", _font_family);
                $(".weather_" + index + " .weather_data").css("color", _font_color);
                $(".weather_" + index + " .weather_data").css("background-color", _font_back_color);

                if (kind == "1")
                {
                    _html = "<div class='weather_big'>" + city + ", " + contry + "</div>";
                    _html += "<div class='weather_img'><img src='" + summary_icon + "' width='64'></div>";
                    _html += "<div class='weather_normal'>" + summary + "</div>";
                }
                if (kind == "2") {
                    _html = "<div class='weather_big'>" + temp.toFixed(2) + "℃</div>";
                    _html += "<div class='space'></div>";
                    _html += "<div class='weather_small grey half'>MAX</div>";
                    _html += "<div class='weather_small grey half'>MIN</div>";
                    _html += "<div class='weather_normal half'>" + temp_max.toFixed(1) + "℃</div>";
                    _html += "<div class='weather_normal half'>" + temp_min.toFixed(1) + "℃</div>";
                }
                
                if (kind == "3") {
                    _html = "<div class='weather_big'>" + month + " " + day + "</div>";
                    _html += "<div class='weather_img'><img src='" + summary_icon + "' width='64'></div>";
                    _html += "<div class='weather_normal'>" + summary + "</div>";
                }

                if (kind == "4") {
                    _html = "<div class='weather_big'>" + temp.toFixed(2) + "℃</div>";
                    _html += "<div class='space'></div>";
                    _html += "<div class='weather_small grey half_33'>WIND</div>";
                    _html += "<div class='weather_small grey half_33'>Humidit</div>";
                    _html += "<div class='weather_small grey half_33'>RAIN/3hrs</div>";
                    _html += "<div class='weather_normal half_33'>" + wind_speed + "㎧</div>";
                    _html += "<div class='weather_normal half_33'>" + humidity + "%</div>";
                    _html += "<div class='weather_normal half_33'>" + rain + "Min</div>";
                }

                console.log(kind);
                console.log(_html);
                $(".weather_" + index + " .weather_data").html(_html);
            }
        });
    }

    this.abort = function () {
        clearInterval(interval);
    };
}



function search_location(value)
{
    var _html = new String();
    var height = new Number();
    var _id = new String();
    var _name = new String();
    var _country = new String();

    $(".location_select .list_item_container").html("<div style='width:100%;height:300px;'><div style='position:relative;left:50%;margin-left:-40px;'><img src='/websrc/img/main/icon_loading.gif' width='80' height='80'></div></div>");

    $.ajax({
        type: "GET",
        url: "http://api.openweathermap.org/data/2.5/find",
        data: 'callback=?&q=' + value + '&type=like&sort=population&cnt=30',
        dataType: 'json',
        success: function (result) {

            if (result.count == 0)
            {
                _html += "<div class='nodata'>No search data.</div>";
                $(".location_select .recent").html("Found 0 result");
                $(".location_select .list_item_container ").html(_html);
                return;
            }

            for (i = 0; i < result.count; i++)
            {
                _id = result.list[i].id;
                _name = result.list[i].name;
                if (_name.length > 10)
                {
                    _name = _name.substring(0,10) + "..";
                }
                _country = result.list[i].sys.country;
                if (_country.length > 10) {
                    _country = _country.substring(0, 10) + "..";
                }

                _html += "<div class='item' style='cursor:pointer;' onclick=\"select_location('" + _id + "','" + _name + "','" + _country + "')\">";
                _html += result.list[i].name + " ";
                _html += result.list[i].sys.country + "  ";
                _html += "[ ID : " + result.list[i].id + " ]";
                _html += "</div>";
                _html += "<div class='item_line'></div>";
                height += 45;
            }

            $(".location_select .recent").html("Found " + result.count + " results");
            $(".location_select .list_item_container ").html(_html);
            weatherScroll.setBarArea(height);
            weatherScroll.setup();
        }
    });
}

function select_location(id, name, country)
{
    LOCATION = id;
    close_loc_popup();
    $("#lay_editor_layer .widgets .weather .weather_playlists .popup_btn").text(name + ", " + country);
    $("#select_an_image_block").remove();

    // 쿠키 저장
    var recent = new String();
    var data = new String();

    recent = GetCookie("recent_location");

    if (recent != null)
    {
        if (recent.match(name + "@" + country + "@" + id)) {
            return;
        }
        var arr = recent.split('|');
        if (arr.length < 20) {
            data = name + "@" + country + "@" + id + "|";
            for (i = 0; i < arr.length-1; i++) {
                data += arr[i] + "|";
            }
        }
        else {
            data = name + "@" + country + "@" + id + "|";
            for (i = 0; i < 19; i++) {
                data += arr[i] + "|";
            }
        }
    }
    else
    {
        data = name + "@" + country + "@" + id + "|";
    }

    SetCookie("recent_location", data);
}

function close_loc_popup()
{
    $("#lay_editor_layer .widgets .weather .location_select").hide();
    $("#select_an_image_block").remove();
}

function update_recnet_locaiton() {
    var recent = new String();
    var _html = new String();
    var height = new Number();
    
    recent = GetCookie("recent_location");
    
    if (recent == null)
    {
        $(".location_select .recent").html("Your recent 0 searches");
        return;
    }
    var arr = recent.split('|');
    for( i=0; i<arr.length-1; i++)
    {
        var arr2 = arr[i].split('@');
        _html += "<div class='item' style='cursor:pointer;' onclick=\"select_location('" + arr2[2] + "','" + arr2[0] + "','" + arr2[1] + "')\">";
        _html += arr2[0] + " ";
        _html += arr2[1] + "  ";
        _html += "[ ID : " + arr2[2] + " ]";
        _html += "</div>";
        _html += "<div class='item_line'></div>";
        height += 45;
    }

    $(".location_select .recent").html("Your recent " + parseInt(arr.length-1) + " searches");
    $(".location_select .list_item_container ").html(_html);
    weatherScroll.setBarArea(height);
    weatherScroll.setup();
}
