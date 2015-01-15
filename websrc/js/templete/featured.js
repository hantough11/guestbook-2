// Featured Class 정의
function Featured() {
    this.project_name = new String;
    this.background = new Object();
    this.background.kind = new String;
    this.background.color = new String;
    this.background.image = new Object();
    this.background.image.url = new String;
    this.background.top = new Number();
    this.background.left = new Number();
    this.background.width = new Number();
    this.background.height = new Number();
    this.background.percentage = new Number();

    this.cell = new Array();
    for (var i = 1; i <= 25; i++) {
        this.cell[i] = new Object();
        this.cell[i].kind = new String;
        this.cell[i].x = new Number;
        this.cell[i].y = new Number;

        this.cell[i].image = new Object();
        this.cell[i].image.theFirstOrderFiveImages = 1;
        this.cell[i].image.selectedFiveImageNo = 0;

        this.cell[i].image.url = new Array();
        this.cell[i].image.url[1] = new String;
        this.cell[i].image.url[2] = new String;
        this.cell[i].image.url[3] = new String;
        this.cell[i].image.url[4] = new String;
        this.cell[i].image.url[5] = new String;

        this.cell[i].image.imageInCellPercentage = new Array();
        this.cell[i].image.imageInCellPercentage[1] = 100;
        this.cell[i].image.imageInCellTop = new Array();
        this.cell[i].image.imageInCellLeft = new Array();
        this.cell[i].image.imageInCellWidth = new Array();
        this.cell[i].image.imageInCellHeight = new Array();
        this.cell[i].image.imageInEditPercentage = new Array();
        this.cell[i].image.imageInEditPercentage[1] = 100;
        this.cell[i].image.imageInEditPositionX = new Array();
        this.cell[i].image.imageInEditPositionY = new Array();

        this.cell[i].widget = new Object();
        this.cell[i].widget.vod_id = new String;
        this.cell[i].widget.image_url = new String;
        this.cell[i].widget.widget_kind = new String;
        this.cell[i].widget.weather_id = new String;
        this.cell[i].widget.weather_kind = new Number;

        this.cell[i].text = new Object();
        this.cell[i].text.contents = new String;
        this.cell[i].text.font_size = new Number;
        this.cell[i].text.font_color = new String;
        this.cell[i].text.font_family = new String;
        this.cell[i].text.font_align = new String;
        this.cell[i].text.font_back_color = new String;
        this.cell[i].text.font_weight = new String;
        this.cell[i].text.font_vertical = new String;
    }
}


function set_featured() {
    // Featured Class 초기화
    Featured.prototype.divided = 0;

    // featured 인스턴스 생성
    featured = new Array();

    // Featured #1
    featured[1] = new Featured();
    featured[1].project_name = "The Body Shop";
    featured[1].divided = 4;
    featured[1].background.kind = "image"
    featured[1].background.image.url = "../websrc/img/theme/1/bodyshop_1.jpg";

    featured[1].cell[1].kind = "image";
    featured[1].cell[1].x = 2;
    featured[1].cell[1].y = 5;
    featured[1].cell[1].image.url[1] = "../websrc/img/theme/1/1_1_a.jpg";
    featured[1].cell[1].image.url[2] = "../websrc/img/theme/1/1_1_b.jpg";
    featured[1].cell[1].image.url[3] = "../websrc/img/theme/1/1_1_c.jpg";

    featured[1].cell[3].kind = "image";
    featured[1].cell[3].x = 3;
    featured[1].cell[3].y = 1;
    featured[1].cell[3].image.url[1] = "../websrc/img/theme/1/1_2.jpg";

    featured[1].cell[8].kind = "widgets";
    featured[1].cell[8].title = "Youtube Live";;
    featured[1].cell[8].x = 3;
    featured[1].cell[8].y = 3;
    featured[1].cell[8].widget.widget_kind = "video";
    featured[1].cell[8].widget.vod_id = "PLGsnBFKcZu0ug3YGFbFeIE_GPeQVh4x6E";

    featured[1].cell[23].kind = "image";
    featured[1].cell[23].x = 3;
    featured[1].cell[23].y = 1;
    featured[1].cell[23].image.url[1] = "../websrc/img/theme/1/1_3_a.jpg";
    featured[1].cell[23].image.url[2] = "../websrc/img/theme/1/1_3_b.jpg";
    featured[1].cell[23].image.url[3] = "../websrc/img/theme/1/1_3_c.jpg";


    // Featured #2
    featured[2] = new Featured();
    featured[2].project_name = "Heineken";
    featured[2].divided = 4;
    featured[2].background.kind = "image"
    featured[2].background.image.url = "../websrc/img/theme/2/heineken_3.jpg";
             
    featured[2].cell[1].kind = "image";
    featured[2].cell[1].x = 2;
    featured[2].cell[1].y = 5;
    featured[2].cell[1].image.url[1] = "../websrc/img/theme/2/2_1.jpg";
             
    featured[2].cell[3].kind = "image";
    featured[2].cell[3].x = 3;
    featured[2].cell[3].y = 1;
    featured[2].cell[3].image.url[1] = "../websrc/img/theme/2/2_2.jpg";
             
    featured[2].cell[8].kind = "widgets";
    featured[2].cell[8].title = "Youtube Live";;
    featured[2].cell[8].x = 3;
    featured[2].cell[8].y = 3;
    featured[2].cell[8].widget.widget_kind = "video";
    featured[2].cell[8].widget.vod_id = "PLGsnBFKcZu0uLxPcLoeX5xmHxdBobuVdi";
             
    featured[2].cell[23].kind = "image";
    featured[2].cell[23].x = 3;
    featured[2].cell[23].y = 1;
    featured[2].cell[23].image.url[1] = "../websrc/img/theme/2/2_3.jpg";


    // Featured #3
    featured[3] = new Featured();
    featured[3].project_name = "Heineken CF";
    featured[3].divided = 3;
    featured[3].background.kind = "image"
    featured[3].background.image.url = "../websrc/img/theme/3/heineken_1.jpg";

    featured[3].cell[1].kind = "widgets";
    featured[3].cell[1].title = "Youtube Live";;
    featured[3].cell[1].x = 4;
    featured[3].cell[1].y = 4;
    featured[3].cell[1].widget.widget_kind = "video";
    featured[3].cell[1].widget.vod_id = "PLGsnBFKcZu0uLxPcLoeX5xmHxdBobuVdi";

    featured[3].cell[5].kind = "image";
    featured[3].cell[5].x = 1;
    featured[3].cell[5].y = 4;
    featured[3].cell[5].image.url[1] = "../websrc/img/theme/3/3_2_a.jpg";
    featured[3].cell[5].image.url[2] = "../websrc/img/theme/3/3_2_b.jpg";

    featured[3].cell[21].kind = "image";
    featured[3].cell[21].x = 5;
    featured[3].cell[21].y = 1;
    featured[3].cell[21].image.url[1] = "../websrc/img/theme/3/3_1_a.jpg";
    featured[3].cell[21].image.url[2] = "../websrc/img/theme/3/3_1_b.jpg";


    // Featured #4
    featured[4] = new Featured();
    featured[4].project_name = "Kia Soul EV";
    featured[4].divided = 3;
    featured[4].background.kind = "image"
    featured[4].background.image.url = "../websrc/img/theme/4/kia_soul_5-2.jpg";

    featured[4].cell[1].kind = "image";
    featured[4].cell[1].x = 2;
    featured[4].cell[1].y = 5;
    featured[4].cell[1].image.url[1] = "../websrc/img/theme/4/4_1.jpg";
             
    featured[4].cell[3].kind = "widgets";
    featured[4].cell[3].title = "Youtube Live";;
    featured[4].cell[3].x = 3;
    featured[4].cell[3].y = 3;
    featured[4].cell[3].widget.widget_kind = "video";
    featured[4].cell[3].widget.vod_id = "PLGsnBFKcZu0tCnZ7ler_yDou46tm3SaHv";
             
    featured[4].cell[18].kind = "image";
    featured[4].cell[18].x = 3;
    featured[4].cell[18].y = 2;
    featured[4].cell[18].image.url[1] = "../websrc/img/theme/4/4_2_a.jpg";
    featured[4].cell[18].image.url[2] = "../websrc/img/theme/4/4_2_b.jpg";
    featured[4].cell[18].image.url[3] = "../websrc/img/theme/4/4_2_c.jpg";


    // Featured #5
    featured[5] = new Featured();
    featured[5].project_name = "LG G3";
    featured[5].divided = 3;
    featured[5].background.kind = "image"
    featured[5].background.image.url = "../websrc/img/theme/5/LG_G3_2.jpg";
              
    featured[5].cell[1].kind = "image";
    featured[5].cell[1].x = 2;
    featured[5].cell[1].y = 5;
    featured[5].cell[1].image.url[1] = "../websrc/img/theme/5/5_1_a.jpg";
    featured[5].cell[1].image.url[2] = "../websrc/img/theme/5/5_1_b.jpg";
    featured[5].cell[1].image.url[3] = "../websrc/img/theme/5/5_1_c.jpg";
    featured[5].cell[1].image.url[4] = "../websrc/img/theme/5/5_1_d.jpg";

    featured[5].cell[3].kind = "widgets";
    featured[5].cell[3].title = "Youtube Live";;
    featured[5].cell[3].x = 3;
    featured[5].cell[3].y = 3;
    featured[5].cell[3].widget.widget_kind = "video";
    featured[5].cell[3].widget.vod_id = "PLGsnBFKcZu0s6X3z_stW-jeCWQYcgjWhN";
              
    featured[5].cell[18].kind = "image";
    featured[5].cell[18].x = 3;
    featured[5].cell[18].y = 2;
    featured[5].cell[18].image.url[1] = "../websrc/img/theme/5/5_2_a.jpg";
    featured[5].cell[18].image.url[2] = "../websrc/img/theme/5/5_2_b.jpg";
    featured[5].cell[18].image.url[3] = "../websrc/img/theme/5/5_2_c.jpg";
    featured[5].cell[18].image.url[4] = "../websrc/img/theme/5/5_2_d.jpg";

    // Featured #6
    featured[6] = new Featured();
    featured[6].project_name = "UNIQLO";
    featured[6].divided = 5;
    featured[6].background.kind = "image"
    featured[6].background.image.url = "../websrc/img/theme/6/uniqlo_3.jpg";
            
    featured[6].cell[1].kind = "image";
    featured[6].cell[1].x = 5;
    featured[6].cell[1].y = 1;
    featured[6].cell[1].image.url[1] = "../websrc/img/theme/6/6_1.jpg";

    featured[6].cell[6].kind = "image";
    featured[6].cell[6].x = 1;
    featured[6].cell[6].y = 3;
    featured[6].cell[6].image.url[1] = "../websrc/img/theme/6/6_2_a.jpg";
    featured[6].cell[6].image.url[2] = "../websrc/img/theme/6/6_2_b.jpg";
    featured[6].cell[6].image.url[3] = "../websrc/img/theme/6/6_2_c.jpg";
    featured[6].cell[6].image.url[4] = "../websrc/img/theme/6/6_2_d.jpg";
    featured[6].cell[6].image.url[5] = "../websrc/img/theme/6/6_2_e.jpg";

    featured[6].cell[7].kind = "widgets";
    featured[6].cell[7].title = "Youtube Live";;
    featured[6].cell[7].x = 3;
    featured[6].cell[7].y = 3;
    featured[6].cell[7].widget.widget_kind = "video";
    featured[6].cell[7].widget.vod_id = "PLGsnBFKcZu0u2EaoYsz7seq7w1qE-jsyu";
             
    featured[6].cell[10].kind = "image";
    featured[6].cell[10].x = 1;
    featured[6].cell[10].y = 3;
    featured[6].cell[10].image.url[1] = "../websrc/img/theme/6/6_3_a.jpg";
    featured[6].cell[10].image.url[2] = "../websrc/img/theme/6/6_3_b.jpg";
    featured[6].cell[10].image.url[3] = "../websrc/img/theme/6/6_3_c.jpg";
    featured[6].cell[10].image.url[4] = "../websrc/img/theme/6/6_3_d.jpg";
    featured[6].cell[10].image.url[5] = "../websrc/img/theme/6/6_3_e.jpg";

    featured[6].cell[21].kind = "image";
    featured[6].cell[21].x = 5;
    featured[6].cell[21].y = 1;
    featured[6].cell[21].image.url[1] = "../websrc/img/theme/6/6_4.jpg";


    // Featured #7
    featured[7] = new Featured();
    featured[7].project_name = "Kia New Soul";
    featured[7].divided = 5;
    featured[7].background.kind = "image"
    featured[7].background.image.url = "../websrc/img/theme/7/kia_soul_8.jpg";
              
    featured[7].cell[1].kind = "image";
    featured[7].cell[1].x = 5;
    featured[7].cell[1].y = 1;
    featured[7].cell[1].image.url[1] = "../websrc/img/theme/7/7_1.jpg";
              
    featured[7].cell[6].kind = "image";
    featured[7].cell[6].x = 1;
    featured[7].cell[6].y = 3;
    featured[7].cell[6].image.url[1] = "../websrc/img/theme/7/7_2_a.jpg";
    featured[7].cell[6].image.url[2] = "../websrc/img/theme/7/7_2_b.jpg";
    featured[7].cell[6].image.url[3] = "../websrc/img/theme/7/7_2_c.jpg";
              
    featured[7].cell[7].kind = "widgets";
    featured[7].cell[7].title = "Youtube Live";;
    featured[7].cell[7].x = 3;
    featured[7].cell[7].y = 3;
    featured[7].cell[7].widget.widget_kind = "video";
    featured[7].cell[7].widget.vod_id = "PLGsnBFKcZu0ufT3an8Czzk1CVOr2ZEXgN";
              
    featured[7].cell[10].kind = "image";
    featured[7].cell[10].x = 1;
    featured[7].cell[10].y = 3;
    featured[7].cell[10].image.url[1] = "../websrc/img/theme/7/7_3_a.jpg";
    featured[7].cell[10].image.url[2] = "../websrc/img/theme/7/7_3_b.jpg";
    featured[7].cell[10].image.url[3] = "../websrc/img/theme/7/7_3_c.jpg";

    featured[7].cell[21].kind = "image";
    featured[7].cell[21].x = 5;
    featured[7].cell[21].y = 1;
    featured[7].cell[21].image.url[1] = "../websrc/img/theme/7/7_4.jpg";


    // Featured #8
    featured[8] = new Featured();
    featured[8].project_name = "LG G3 Features";
    featured[8].divided = 4;
    featured[8].background.kind = "image"
    featured[8].background.image.url = "../websrc/img/theme/8/LG_G3_1.jpg";
             
    featured[8].cell[1].kind = "image";
    featured[8].cell[1].x = 5;
    featured[8].cell[1].y = 1;
    featured[8].cell[1].image.url[1] = "../websrc/img/theme/8/8_1.jpg";
             
    featured[8].cell[6].kind = "image";
    featured[8].cell[6].x = 2;
    featured[8].cell[6].y = 4;
    featured[8].cell[6].image.url[1] = "../websrc/img/theme/8/8_2_a.jpg";
    featured[8].cell[6].image.url[2] = "../websrc/img/theme/8/8_2_b.jpg";
    featured[8].cell[6].image.url[3] = "../websrc/img/theme/8/8_2_c.jpg";
    featured[8].cell[6].image.url[4] = "../websrc/img/theme/8/8_2_d.jpg";

    featured[8].cell[8].kind = "widgets";
    featured[8].cell[8].title = "Youtube Live";;
    featured[8].cell[8].x = 3;
    featured[8].cell[8].y = 3;
    featured[8].cell[8].widget.widget_kind = "video";
    featured[8].cell[8].widget.vod_id = "PLGsnBFKcZu0s6X3z_stW-jeCWQYcgjWhN";
             
    featured[8].cell[23].kind = "image";
    featured[8].cell[23].x = 3;
    featured[8].cell[23].y = 1;
    featured[8].cell[23].image.url[1] = "../websrc/img/theme/8/8_3_a.jpg";
    featured[8].cell[23].image.url[2] = "../websrc/img/theme/8/8_3_b.jpg";
    featured[8].cell[23].image.url[3] = "../websrc/img/theme/8/8_3_c.jpg";
    featured[8].cell[23].image.url[4] = "../websrc/img/theme/8/8_3_d.jpg";


    // Featured #9
    featured[9] = new Featured();
    featured[9].project_name = "Interstellar";
    featured[9].divided = 4;
    featured[9].background.kind = "image"
    featured[9].background.image.url = "../websrc/img/theme/9/inerstellar_1.jpg";
              
    featured[9].cell[1].kind = "image";
    featured[9].cell[1].x = 1;
    featured[9].cell[1].y = 5;
    featured[9].cell[1].image.url[1] = "../websrc/img/theme/9/9_1_a.jpg";
    featured[9].cell[1].image.url[2] = "../websrc/img/theme/9/9_1_b.jpg";
    featured[9].cell[1].image.url[3] = "../websrc/img/theme/9/9_1_c.jpg";
    featured[9].cell[1].image.url[4] = "../websrc/img/theme/9/9_1_d.jpg";
    featured[9].cell[1].image.url[5] = "../websrc/img/theme/9/9_1_e.jpg";

    featured[9].cell[2].kind = "widgets";
    featured[9].cell[2].title = "Youtube Live";;
    featured[9].cell[2].x = 3;
    featured[9].cell[2].y = 3;
    featured[9].cell[2].widget.widget_kind = "video";
    featured[9].cell[2].widget.vod_id = "PLGsnBFKcZu0sZGLkguGItvC--1JQxEX3C";

    featured[9].cell[5].kind = "image";
    featured[9].cell[5].x = 1;
    featured[9].cell[5].y = 5;
    featured[9].cell[5].image.url[1] = "../websrc/img/theme/9/9_3_a.jpg";
    featured[9].cell[5].image.url[2] = "../websrc/img/theme/9/9_3_b.jpg";
    featured[9].cell[5].image.url[3] = "../websrc/img/theme/9/9_3_c.jpg";
    featured[9].cell[5].image.url[4] = "../websrc/img/theme/9/9_3_d.jpg";
    featured[9].cell[5].image.url[5] = "../websrc/img/theme/9/9_3_e.jpg";
              
    featured[9].cell[17].kind = "image";
    featured[9].cell[17].x = 3;
    featured[9].cell[17].y = 2;
    featured[9].cell[17].image.url[1] = "../websrc/img/theme/9/9_2_a.jpg";
    featured[9].cell[17].image.url[2] = "../websrc/img/theme/9/9_2_b.jpg";
    featured[9].cell[17].image.url[3] = "../websrc/img/theme/9/9_2_c.jpg";
    featured[9].cell[17].image.url[4] = "../websrc/img/theme/9/9_2_d.jpg";
    featured[9].cell[17].image.url[5] = "../websrc/img/theme/9/9_2_e.jpg";

}

/*
function set_featured() {

    // Featured Class 초기화
    Featured.prototype.divided = 0;

    // featured 인스턴스 생성
    featured = new Array();


    // featured 1 정의
    featured[1] = new Featured();
    featured[1].divided = 2;

    featured[1].background.kind = "image"
    featured[1].background.image.url = "../websrc/img/theme_background/01.jpg";

    featured[1].cell[1].kind = "image";
    featured[1].cell[1].x = 5;
    featured[1].cell[1].y = 4;
    featured[1].cell[1].image.url[1] = "../websrc/img/theme/01/img01.jpg";

    featured[1].cell[21].kind = "image";
    featured[1].cell[21].x = 5;
    featured[1].cell[21].y = 1;
    featured[1].cell[21].image.url[1] = "../websrc/img/theme/01/img02.jpg";


    // featured 2 정의
    featured[2] = new Featured();
    featured[2].divided = 2;

    featured[2].background.kind = "image"
    featured[2].background.image.url = "../websrc/img/theme_background/02.jpg";

    featured[2].cell[1].kind = "image";
    featured[2].cell[1].x = 5;
    featured[2].cell[1].y = 4;
    featured[2].cell[1].image.url[1] = "../websrc/img/theme/02/img01.jpg";

    featured[2].cell[21].kind = "widgets";
    featured[2].cell[21].x = 5;
    featured[2].cell[21].y = 1;
    featured[2].cell[21].widget.image_url = "../websrc/img/theme/02/w_time.png";


    // featured 3 정의
    featured[3] = new Featured();
    featured[3].divided = 3;

    featured[3].background.kind = "image"
    featured[3].background.image.url = "../websrc/img/theme_background/03.jpg";

    featured[3].cell[1].kind = "image";
    featured[3].cell[1].x = 5;
    featured[3].cell[1].y = 4;
    featured[3].cell[1].image.url[1] = "../websrc/img/theme/03/img01.jpg";

    featured[3].cell[21].kind = "widgets";
    featured[3].cell[21].x = 1;
    featured[3].cell[21].y = 1;
    featured[3].cell[21].widget.image_url = "../websrc/img/theme/03/w_time.png";

    featured[3].cell[22].kind = "widgets";
    featured[3].cell[22].x = 4;
    featured[3].cell[22].y = 1;
    featured[3].cell[22].widget.image_url = "../websrc/img/theme/03/w_weather.png";


    // featured 4 정의
    featured[4] = new Featured();
    featured[4].divided = 2;

    featured[4].background.kind = "image"
    featured[4].background.image.url = "../websrc/img/theme_background/03-1.jpg";

    featured[4].cell[1].kind = "image";
    featured[4].cell[1].x = 5;
    featured[4].cell[1].y = 2;
    featured[4].cell[1].image.url[1] = "../websrc/img/theme/03-1/img01.jpg";

    featured[4].cell[11].kind = "image";
    featured[4].cell[11].x = 5;
    featured[4].cell[11].y = 3;
    featured[4].cell[11].image.url[1] = "../websrc/img/theme/03-1/img02.jpg";


    // featured 5 정의
    featured[5] = new Featured();
    featured[5].divided = 3;

    featured[5].background.kind = "image"
    featured[5].background.image.url = "../websrc/img/theme_background/03-2.jpg";

    featured[5].cell[1].kind = "image";
    featured[5].cell[1].x = 5;
    featured[5].cell[1].y = 2;
    featured[5].cell[1].image.url[1] = "../websrc/img/theme/03-2/img01.jpg";

    featured[5].cell[11].kind = "image";
    featured[5].cell[11].x = 5;
    featured[5].cell[11].y = 2;
    featured[5].cell[11].image.url[1] = "../websrc/img/theme/03-2/img02.jpg";

    featured[5].cell[21].kind = "image";
    featured[5].cell[21].x = 5;
    featured[5].cell[21].y = 1;
    featured[5].cell[21].image.url[1] = "../websrc/img/theme/03-2/img03.jpg";


    // featured 6 정의
    featured[6] = new Featured();
    featured[6].divided = 3;

    featured[6].background.kind = "image"
    featured[6].background.image.url = "../websrc/img/theme_background/04.jpg";

    featured[6].cell[1].kind = "widgets";
    featured[6].cell[1].x = 1;
    featured[6].cell[1].y = 1;
    featured[6].cell[1].widget.image_url = "../websrc/img/theme/04/w_time.png";

    featured[6].cell[2].kind = "image";
    featured[6].cell[2].x = 4;
    featured[6].cell[2].y = 5;
    featured[6].cell[2].image.url[1] = "../websrc/img/theme/04/img01.jpg";

    featured[6].cell[6].kind = "widgets";
    featured[6].cell[6].x = 1;
    featured[6].cell[6].y = 4;
    featured[6].cell[6].widget.image_url = "../websrc/img/theme/04/w_weather.png";


    // featured 7 정의
    featured[7] = new Featured();
    featured[7].divided = 3;

    featured[7].background.kind = "image"
    featured[7].background.image.url = "../websrc/img/theme_background/05.jpg";

    featured[7].cell[1].kind = "image";
    featured[7].cell[1].x = 4;
    featured[7].cell[1].y = 5;
    featured[7].cell[1].image.url[1] = "../websrc/img/theme/05/img.jpg";

    featured[7].cell[5].kind = "widgets";
    featured[7].cell[5].x = 1;
    featured[7].cell[5].y = 3;
    featured[7].cell[5].widget.image_url = "../websrc/img/theme/05/w_time.png";

    featured[7].cell[20].kind = "widgets";
    featured[7].cell[20].x = 1;
    featured[7].cell[20].y = 2;
    featured[7].cell[20].widget.image_url = "../websrc/img/theme/05/w_weather.png";


    // featured 8 정의
    featured[8] = new Featured();
    featured[8].divided = 4;

    featured[8].background.kind = "image"
    featured[8].background.image.url = "../websrc/img/theme_background/06.jpg";

    featured[8].cell[1].kind = "widgets";
    featured[8].cell[1].x = 1;
    featured[8].cell[1].y = 1;
    featured[8].cell[1].widget.image_url = "../websrc/img/theme/06/w_time.png";

    featured[8].cell[2].kind = "image";
    featured[8].cell[2].x = 4;
    featured[8].cell[2].y = 4;
    featured[8].cell[2].image.url[1] = "../websrc/img/theme/06/img01.jpg";

    featured[8].cell[6].kind = "widgets";
    featured[8].cell[6].x = 1;
    featured[8].cell[6].y = 3;
    featured[8].cell[6].widget.image_url = "../websrc/img/theme/06/w_weather.png";

    featured[8].cell[21].kind = "image";
    featured[8].cell[21].x = 5;
    featured[8].cell[21].y = 1;
    featured[8].cell[21].image.url[1] = "../websrc/img/theme/06/img02.jpg";


    // featured 9 정의
    featured[9] = new Featured();
    featured[9].divided = 3;

    featured[9].background.kind = "image"
    featured[9].background.image.url = "../websrc/img/theme_background/07.jpg";

    featured[9].cell[1].kind = "widgets";
    featured[9].cell[1].x = 1;
    featured[9].cell[1].y = 4;
    featured[9].cell[1].widget.image_url = "../websrc/img/theme/07/w_time.png";

    featured[9].cell[2].kind = "image";
    featured[9].cell[2].x = 4;
    featured[9].cell[2].y = 4;
    featured[9].cell[2].image.url[1] = "../websrc/img/theme/07/img01.jpg";

    featured[9].cell[21].kind = "image";
    featured[9].cell[21].x = 5;
    featured[9].cell[21].y = 1;
    featured[9].cell[21].image.url[1] = "../websrc/img/theme/07/img02.jpg";


    // featured 10 정의
    featured[10] = new Featured();
    featured[10].divided = 5;

    featured[10].background.kind = "image"
    featured[10].background.image.url = "../websrc/img/theme_background/08.jpg";

    featured[10].cell[1].kind = "widgets";
    featured[10].cell[1].x = 1;
    featured[10].cell[1].y = 1;
    featured[10].cell[1].widget.image_url = "../websrc/img/theme/08/w_time.png";

    featured[10].cell[2].kind = "image";
    featured[10].cell[2].x = 4;
    featured[10].cell[2].y = 1;
    featured[10].cell[2].image.url[1] = "../websrc/img/theme/08/img01.jpg";

    featured[10].cell[6].kind = "widgets";
    featured[10].cell[6].x = 1;
    featured[10].cell[6].y = 3;
    featured[10].cell[6].widget.image_url = "../websrc/img/theme/08/w_weather.png";

    featured[10].cell[7].kind = "image";
    featured[10].cell[7].x = 4;
    featured[10].cell[7].y = 4;
    featured[10].cell[7].image.url[1] = "../websrc/img/theme/08/img02.jpg";


    // featured 11 정의
    featured[11] = new Featured();
    featured[11].divided = 4;

    featured[11].background.kind = "image"
    featured[11].background.image.url = "../websrc/img/theme_background/08-3.jpg";

    featured[11].cell[1].kind = "image";
    featured[11].cell[1].x = 4;
    featured[11].cell[1].y = 4;
    featured[11].cell[1].image.url[1] = "../websrc/img/theme/08-3/img01.jpg";

    featured[11].cell[5].kind = "widgets";
    featured[11].cell[5].x = 1;
    featured[11].cell[5].y = 1;
    featured[11].cell[5].widget.image_url = "../websrc/img/theme/08-3/w_time.png";

    featured[11].cell[10].kind = "widgets";
    featured[11].cell[10].x = 1;
    featured[11].cell[10].y = 3;
    featured[11].cell[10].widget.image_url = "../websrc/img/theme/08-3/w_weather.png";

    featured[11].cell[21].kind = "image";
    featured[11].cell[21].x = 5;
    featured[11].cell[21].y = 1;
    featured[11].cell[21].image.url[1] = "../websrc/img/theme/08-3/img02.jpg";


    // featured 12 정의
    featured[12] = new Featured();
    featured[12].divided = 3;

    featured[12].background.kind = "image"
    featured[12].background.image.url = "../websrc/img/theme_background/08-4.jpg";

    featured[12].cell[1].kind = "image";
    featured[12].cell[1].x = 4;
    featured[12].cell[1].y = 4;
    featured[12].cell[1].image.url[1] = "../websrc/img/theme/08-4/img01.jpg";

    featured[12].cell[5].kind = "widgets";
    featured[12].cell[5].x = 1;
    featured[12].cell[5].y = 4;
    featured[12].cell[5].widget.image_url = "../websrc/img/theme/08-4/w_time.png";

    featured[12].cell[21].kind = "image";
    featured[12].cell[21].x = 5;
    featured[12].cell[21].y = 1;
    featured[12].cell[21].image.url[1] = "../websrc/img/theme/08-4/img02.jpg";


    // featured 13 정의
    featured[13] = new Featured();
    featured[13].divided = 4;

    featured[13].background.kind = "image"
    featured[13].background.image.url = "../websrc/img/theme_background/09.jpg";

    featured[13].cell[1].kind = "image";
    featured[13].cell[1].x = 1;
    featured[13].cell[1].y = 5;
    featured[13].cell[1].image.url[1] = "../websrc/img/theme/09/img01.jpg";

    featured[13].cell[2].kind = "image";
    featured[13].cell[2].x = 4;
    featured[13].cell[2].y = 4;
    featured[13].cell[2].image.url[1] = "../websrc/img/theme/09/img02.jpg";

    featured[13].cell[22].kind = "widgets";
    featured[13].cell[22].x = 1;
    featured[13].cell[22].y = 1;
    featured[13].cell[22].widget.image_url = "../websrc/img/theme/09/w_time.png";

    featured[13].cell[23].kind = "widgets";
    featured[13].cell[23].x = 3;
    featured[13].cell[23].y = 1;
    featured[13].cell[23].widget.image_url = "../websrc/img/theme/09/w_weather.png";


    // featured 14 정의
    featured[14] = new Featured();
    featured[14].divided = 4;

    featured[14].background.kind = "image"
    featured[14].background.image.url = "../websrc/img/theme_background/09-5.jpg";

    featured[14].cell[1].kind = "image";
    featured[14].cell[1].x = 4;
    featured[14].cell[1].y = 4;
    featured[14].cell[1].image.url[1] = "../websrc/img/theme/09-5/img01.jpg";

    featured[14].cell[5].kind = "image";
    featured[14].cell[5].x = 1;
    featured[14].cell[5].y = 5;
    featured[14].cell[5].image.url[1] = "../websrc/img/theme/09-5/img02.jpg";

    featured[14].cell[21].kind = "widgets";
    featured[14].cell[21].x = 1;
    featured[14].cell[21].y = 1;
    featured[14].cell[21].widget.image_url = "../websrc/img/theme/09-5/w_time.png";

    featured[14].cell[22].kind = "widgets";
    featured[14].cell[22].x = 3;
    featured[14].cell[22].y = 1;
    featured[14].cell[22].widget.image_url = "../websrc/img/theme/09-5/w_weather.png";


    // featured 15 정의
    featured[15] = new Featured();
    featured[15].divided = 4;

    featured[15].background.kind = "image"
    featured[15].background.image.url = "../websrc/img/theme_background/10.jpg";

    featured[15].cell[1].kind = "widgets";
    featured[15].cell[1].x = 2;
    featured[15].cell[1].y = 1;
    featured[15].cell[1].widget.image_url = "../websrc/img/theme/10/w_time.png";

    featured[15].cell[6].kind = "widgets";
    featured[15].cell[6].x = 2;
    featured[15].cell[6].y = 2;
    featured[15].cell[6].widget.image_url = "../websrc/img/theme/10/w_weather.png";

    featured[15].cell[3].kind = "image";
    featured[15].cell[3].x = 3;
    featured[15].cell[3].y = 3;
    featured[15].cell[3].image.url[1] = "../websrc/img/theme/10/img01.jpg";

    featured[15].cell[16].kind = "image";
    featured[15].cell[16].x = 5;
    featured[15].cell[16].y = 2;
    featured[15].cell[16].image.url[1] = "../websrc/img/theme/10/img02.jpg";


    // featured 16 정의
    featured[16] = new Featured();
    featured[16].divided = 4;

    featured[16].background.kind = "image"
    featured[16].background.image.url = "../websrc/img/theme_background/11.jpg";

    featured[16].cell[1].kind = "image";
    featured[16].cell[1].x = 3;
    featured[16].cell[1].y = 3;
    featured[16].cell[1].image.url[1] = "../websrc/img/theme/11/img01.jpg";

    featured[16].cell[4].kind = "widgets";
    featured[16].cell[4].x = 2;
    featured[16].cell[4].y = 1;
    featured[16].cell[4].widget.image_url = "../websrc/img/theme/11/w_time.png";

    featured[16].cell[9].kind = "widgets";
    featured[16].cell[9].x = 2;
    featured[16].cell[9].y = 2;
    featured[16].cell[9].widget.image_url = "../websrc/img/theme/11/w_weather.png";

    featured[16].cell[16].kind = "image";
    featured[16].cell[16].x = 5;
    featured[16].cell[16].y = 2;
    featured[16].cell[16].image.url[1] = "../websrc/img/theme/11/img02.jpg";


    // featured 17 정의
    featured[17] = new Featured();
    featured[17].divided = 3;

    featured[17].background.kind = "image"
    featured[17].background.image.url = "../websrc/img/theme_background/12.jpg";

    featured[17].cell[1].kind = "image";
    featured[17].cell[1].x = 3;
    featured[17].cell[1].y = 3;
    featured[17].cell[1].image.url[1] = "../websrc/img/theme/12/img01.jpg";

    featured[17].cell[4].kind = "image";
    featured[17].cell[4].x = 2;
    featured[17].cell[4].y = 3;
    featured[17].cell[4].image.url[1] = "../websrc/img/theme/12/img02.jpg";

    featured[17].cell[16].kind = "image";
    featured[17].cell[16].x = 5;
    featured[17].cell[16].y = 2;
    featured[17].cell[16].image.url[1] = "../websrc/img/theme/12/img03.jpg";


    // featured 18 정의
    featured[18] = new Featured();
    featured[18].divided = 3;

    featured[18].background.kind = "image"
    featured[18].background.image.url = "../websrc/img/theme_background/13.jpg";

    featured[18].cell[1].kind = "image";
    featured[18].cell[1].x = 3;
    featured[18].cell[1].y = 4;
    featured[18].cell[1].image.url[1] = "../websrc/img/theme/13/img01.jpg";

    featured[18].cell[4].kind = "image";
    featured[18].cell[4].x = 2;
    featured[18].cell[4].y = 4;
    featured[18].cell[4].image.url[1] = "../websrc/img/theme/13/img02.jpg";

    featured[18].cell[21].kind = "image";
    featured[18].cell[21].x = 5;
    featured[18].cell[21].y = 1;
    featured[18].cell[21].image.url[1] = "../websrc/img/theme/13/img03.jpg";


    // featured 19 정의
    featured[19] = new Featured();
    featured[19].divided = 3;

    featured[19].background.kind = "image"
    featured[19].background.image.url = "../websrc/img/theme_background/14.jpg";

    featured[19].cell[1].kind = "image";
    featured[19].cell[1].x = 2;
    featured[19].cell[1].y = 3;
    featured[19].cell[1].image.url[1] = "../websrc/img/theme/14/img01.jpg";

    featured[19].cell[3].kind = "image";
    featured[19].cell[3].x = 3;
    featured[19].cell[3].y = 3;
    featured[19].cell[3].image.url[1] = "../websrc/img/theme/14/img02.jpg";

    featured[19].cell[16].kind = "widgets";
    featured[19].cell[16].x = 2;
    featured[19].cell[16].y = 2;
    featured[19].cell[16].widget.image_url = "../websrc/img/theme/14/w_weather.png";

    featured[19].cell[18].kind = "image";
    featured[19].cell[18].x = 3;
    featured[19].cell[18].y = 2;
    featured[19].cell[18].image.url[1] = "../websrc/img/theme/14/img03.jpg";


    // featured 20 정의
    featured[20] = new Featured();
    featured[20].divided = 4;

    featured[20].background.kind = "image"
    featured[20].background.image.url = "../websrc/img/theme_background/14-6.jpg";

    featured[20].cell[1].kind = "image";
    featured[20].cell[1].x = 5;
    featured[20].cell[1].y = 1;
    featured[20].cell[1].image.url[1] = "../websrc/img/theme/14-6/img01.jpg";

    featured[20].cell[6].kind = "image";
    featured[20].cell[6].x = 3;
    featured[20].cell[6].y = 4;
    featured[20].cell[6].image.url[1] = "../websrc/img/theme/14-6/img02.jpg";

    featured[20].cell[9].kind = "image";
    featured[20].cell[9].x = 2;
    featured[20].cell[9].y = 2;
    featured[20].cell[9].image.url[1] = "../websrc/img/theme/14-6/img03.jpg";

    featured[20].cell[19].kind = "image";
    featured[20].cell[19].x = 2;
    featured[20].cell[19].y = 2;
    featured[20].cell[19].image.url[1] = "../websrc/img/theme/14-6/04.jpg";


    // featured 21 정의
    featured[21] = new Featured();
    featured[21].divided = 5;

    featured[21].background.kind = "image"
    featured[21].background.image.url = "../websrc/img/theme_background/14-7.jpg";

    featured[21].cell[1].kind = "image";
    featured[21].cell[1].x = 3;
    featured[21].cell[1].y = 4;
    featured[21].cell[1].image.url[1] = "../websrc/img/theme/14-7/img01.jpg";

    featured[21].cell[4].kind = "image";
    featured[21].cell[4].x = 2;
    featured[21].cell[4].y = 2;
    featured[21].cell[4].image.url[1] = "../websrc/img/theme/14-7/img02.jpg";

    featured[21].cell[14].kind = "image";
    featured[21].cell[14].x = 2;
    featured[21].cell[14].y = 2;
    featured[21].cell[14].image.url[1] = "../websrc/img/theme/14-7/img03.jpg";

    featured[21].cell[21].kind = "widgets";
    featured[21].cell[21].x = 1;
    featured[21].cell[21].y = 1;
    featured[21].cell[21].widget.image_url = "../websrc/img/theme/14-7/w_time.png";

    featured[21].cell[22].kind = "widgets";
    featured[21].cell[22].x = 4;
    featured[21].cell[22].y = 1;
    featured[21].cell[22].widget.image_url = "../websrc/img/theme/14-7/w_weather.png";


    // featured 22 정의
    featured[22] = new Featured();
    featured[22].divided = 3;

    featured[22].background.kind = "image"
    featured[22].background.image.url = "../websrc/img/theme_background/14-8.jpg";

    featured[22].cell[1].kind = "image";
    featured[22].cell[1].x = 3;
    featured[22].cell[1].y = 2;
    featured[22].cell[1].image.url[1] = "../websrc/img/theme/14-8/img01.jpg";

    featured[22].cell[4].kind = "image";
    featured[22].cell[4].x = 2;
    featured[22].cell[4].y = 5;
    featured[22].cell[4].image.url[1] = "../websrc/img/theme/14-8/img03.jpg";

    featured[22].cell[11].kind = "image";
    featured[22].cell[11].x = 3;
    featured[22].cell[11].y = 3;
    featured[22].cell[11].image.url[1] = "../websrc/img/theme/14-8/img02.jpg";


    // featured 23 정의
    featured[23] = new Featured();
    featured[23].divided = 4;

    featured[23].background.kind = "image"
    featured[23].background.image.url = "../websrc/img/theme_background/14-9.jpg";

    featured[23].cell[1].kind = "image";
    featured[23].cell[1].x = 3;
    featured[23].cell[1].y = 2;
    featured[23].cell[1].image.url[1] = "../websrc/img/theme/14-9/img01.jpg";

    featured[23].cell[4].kind = "image";
    featured[23].cell[4].x = 2;
    featured[23].cell[4].y = 4;
    featured[23].cell[4].image.url[1] = "../websrc/img/theme/14-9/img03.jpg";

    featured[23].cell[11].kind = "image";
    featured[23].cell[11].x = 3;
    featured[23].cell[11].y = 2;
    featured[23].cell[11].image.url[1] = "../websrc/img/theme/14-9/img02.jpg";

    featured[23].cell[21].kind = "image";
    featured[23].cell[21].x = 5;
    featured[23].cell[21].y = 1;
    featured[23].cell[21].image.url[1] = "../websrc/img/theme/14-9/img04.jpg";


    // featured 24 정의
    featured[24] = new Featured();
    featured[24].divided = 5;

    featured[24].background.kind = "image"
    featured[24].background.image.url = "../websrc/img/theme_background/14-10.jpg";

    featured[24].cell[1].kind = "image";
    featured[24].cell[1].x = 3;
    featured[24].cell[1].y = 2;
    featured[24].cell[1].image.url[1] = "../websrc/img/theme/14-10/img01.jpg";

    featured[24].cell[4].kind = "image";
    featured[24].cell[4].x = 2;
    featured[24].cell[4].y = 4;
    featured[24].cell[4].image.url[1] = "../websrc/img/theme/14-10/img03.jpg";

    featured[24].cell[11].kind = "image";
    featured[24].cell[11].x = 3;
    featured[24].cell[11].y = 2;
    featured[24].cell[11].image.url[1] = "../websrc/img/theme/14-10/img02.jpg";

    featured[24].cell[21].kind = "widgets";
    featured[24].cell[21].x = 1;
    featured[24].cell[21].y = 1;
    featured[24].cell[21].widget.image_url = "../websrc/img/theme/14-10/w_time.png";

    featured[24].cell[22].kind = "widgets";
    featured[24].cell[22].x = 4;
    featured[24].cell[22].y = 1;
    featured[24].cell[22].widget.image_url = "../websrc/img/theme/14-10/w_weather.png";


    // featured 25 정의
    featured[25] = new Featured();
    featured[25].divided = 4;

    featured[25].background.kind = "image"
    featured[25].background.image.url = "../websrc/img/theme_background/14-11.jpg";

    featured[25].cell[1].kind = "image";
    featured[25].cell[1].x = 3;
    featured[25].cell[1].y = 2;
    featured[25].cell[1].image.url[1] = "../websrc/img/theme/14-11/img01.jpg";

    featured[25].cell[4].kind = "image";
    featured[25].cell[4].x = 2;
    featured[25].cell[4].y = 4;
    featured[25].cell[4].image.url[1] = "../websrc/img/theme/14-11/img03.jpg";

    featured[25].cell[11].kind = "image";
    featured[25].cell[11].x = 3;
    featured[25].cell[11].y = 2;
    featured[25].cell[11].image.url[1] = "../websrc/img/theme/14-11/img02.jpg";

    featured[25].cell[21].kind = "widgets";
    featured[25].cell[21].x = 5;
    featured[25].cell[21].y = 1;
    featured[25].cell[21].widget.image_url = "../websrc/img/theme/14-11/w_time.png";


    // featured 26 정의
    featured[26] = new Featured();
    featured[26].divided = 5;

    featured[26].background.kind = "image"
    featured[26].background.image.url = "../websrc/img/theme_background/14-11.jpg";

    featured[26].cell[1].kind = "widgets";
    featured[26].cell[1].x = 1;
    featured[26].cell[1].y = 1;
    featured[26].cell[1].widget.image_url = "../websrc/img/theme/15/w_time.png";

    featured[26].cell[2].kind = "image";
    featured[26].cell[2].x = 4;
    featured[26].cell[2].y = 1;
    featured[26].cell[2].image.url[1] = "../websrc/img/theme/15/img01.jpg";

    featured[26].cell[6].kind = "image";
    featured[26].cell[6].x = 2;
    featured[26].cell[6].y = 3;
    featured[26].cell[6].image.url[1] = "../websrc/img/theme/15/img02.jpg";

    featured[26].cell[8].kind = "image";
    featured[26].cell[8].x = 3;
    featured[26].cell[8].y = 3;
    featured[26].cell[8].image.url[1] = "../websrc/img/theme/15/img03.jpg";

    featured[26].cell[21].kind = "image";
    featured[26].cell[21].x = 5;
    featured[26].cell[21].y = 1;
    featured[26].cell[21].image.url[1] = "../websrc/img/theme/15/img04.jpg";


    // featured 27 정의
    featured[27] = new Featured();
    featured[27].divided = 4;

    featured[27].background.kind = "image"
    featured[27].background.image.url = "../websrc/img/theme_background/16.jpg";

    featured[27].cell[1].kind = "image";
    featured[27].cell[1].x = 1;
    featured[27].cell[1].y = 5;
    featured[27].cell[1].image.url[1] = "../websrc/img/theme/16/img01.jpg";

    featured[27].cell[2].kind = "image";
    featured[27].cell[2].x = 4;
    featured[27].cell[2].y = 1;
    featured[27].cell[2].image.url[1] = "../websrc/img/theme/16/img02.jpg";

    featured[27].cell[7].kind = "image";
    featured[27].cell[7].x = 2;
    featured[27].cell[7].y = 4;
    featured[27].cell[7].image.url[1] = "../websrc/img/theme/16/img03.jpg";

    featured[27].cell[9].kind = "image";
    featured[27].cell[9].x = 2;
    featured[27].cell[9].y = 4;
    featured[27].cell[9].image.url[1] = "../websrc/img/theme/16/img04.jpg";


    // featured 28 정의
    featured[28] = new Featured();
    featured[28].divided = 6;

    featured[28].background.kind = "image"
    featured[28].background.image.url = "../websrc/img/theme_background/17.jpg";

    featured[28].cell[1].kind = "widgets";
    featured[28].cell[1].x = 1;
    featured[28].cell[1].y = 1;
    featured[28].cell[1].widget.image_url = "../websrc/img/theme/17/w_time.png";

    featured[28].cell[2].kind = "widgets";
    featured[28].cell[2].x = 3;
    featured[28].cell[2].y = 1;
    featured[28].cell[2].widget.image_url = "../websrc/img/theme/17/w_weather.png";

    featured[28].cell[5].kind = "image";
    featured[28].cell[5].x = 1;
    featured[28].cell[5].y = 4;
    featured[28].cell[5].image.url[1] = "../websrc/img/theme/17/img03.jpg";

    featured[28].cell[6].kind = "image";
    featured[28].cell[6].x = 1;
    featured[28].cell[6].y = 4;
    featured[28].cell[6].image.url[1] = "../websrc/img/theme/17/img01.jpg";

    featured[28].cell[7].kind = "image";
    featured[28].cell[7].x = 3;
    featured[28].cell[7].y = 3;
    featured[28].cell[7].image.url[1] = "../websrc/img/theme/17/img02.jpg";

    featured[28].cell[22].kind = "image";
    featured[28].cell[22].x = 4;
    featured[28].cell[22].y = 1;
    featured[28].cell[22].image.url[1] = "../websrc/img/theme/17/img04.jpg";


    // featured 29 정의
    featured[29] = new Featured();
    featured[29].divided = 7;

    featured[29].background.kind = "image"
    featured[29].background.image.url = "../websrc/img/theme_background/18.jpg";

    featured[29].cell[1].kind = "image";
    featured[29].cell[1].x = 2;
    featured[29].cell[1].y = 1;
    featured[29].cell[1].image.url[1] = "../websrc/img/theme/18/img01.jpg";

    featured[29].cell[3].kind = "widgets";
    featured[29].cell[3].x = 1;
    featured[29].cell[3].y = 1;
    featured[29].cell[3].widget.image_url = "../websrc/img/theme/18/w_time.png";

    featured[29].cell[4].kind = "widgets";
    featured[29].cell[4].x = 2;
    featured[29].cell[4].y = 1;
    featured[29].cell[4].widget.image_url = "../websrc/img/theme/18/w_weather.png";

    featured[29].cell[6].kind = "image";
    featured[29].cell[6].x = 1;
    featured[29].cell[6].y = 4;
    featured[29].cell[6].image.url[1] = "../websrc/img/theme/18/img02.jpg";

    featured[29].cell[7].kind = "image";
    featured[29].cell[7].x = 3;
    featured[29].cell[7].y = 3;
    featured[29].cell[7].image.url[1] = "../websrc/img/theme/18/img03.jpg";

    featured[29].cell[10].kind = "image";
    featured[29].cell[10].x = 1;
    featured[29].cell[10].y = 3;
    featured[29].cell[10].image.url[1] = "../websrc/img/theme/18/img04.jpg";

    featured[29].cell[22].kind = "image";
    featured[29].cell[22].x = 4;
    featured[29].cell[22].y = 1;
    featured[29].cell[22].image.url[1] = "../websrc/img/theme/18/img05.jpg";


    // featured 30 정의
    featured[30] = new Featured();
    featured[30].divided = 6;

    featured[30].background.kind = "image"
    featured[30].background.image.url = "../websrc/img/theme_background/18-12.jpg";

    featured[30].cell[1].kind = "image";
    featured[30].cell[1].x = 5;
    featured[30].cell[1].y = 1;
    featured[30].cell[1].image.url[1] = "../websrc/img/theme/18-12/img01.jpg";

    featured[30].cell[6].kind = "image";
    featured[30].cell[6].x = 1;
    featured[30].cell[6].y = 3;
    featured[30].cell[6].image.url[1] = "../websrc/img/theme/18-12/img02.jpg";

    featured[30].cell[7].kind = "image";
    featured[30].cell[7].x = 3;
    featured[30].cell[7].y = 3;
    featured[30].cell[7].image.url[1] = "../websrc/img/theme/18-12/img03.jpg";

    featured[30].cell[10].kind = "image";
    featured[30].cell[10].x = 1;
    featured[30].cell[10].y = 3;
    featured[30].cell[10].image.url[1] = "../websrc/img/theme/18-12/img04.jpg";

    featured[30].cell[21].kind = "widgets";
    featured[30].cell[21].x = 1;
    featured[30].cell[21].y = 1;
    featured[30].cell[21].widget.image_url = "../websrc/img/theme/18-12/w_time.png";

    featured[30].cell[22].kind = "widgets";
    featured[30].cell[22].x = 4;
    featured[30].cell[22].y = 1;
    featured[30].cell[22].widget.image_url = "../websrc/img/theme/18-12/w_weather.png";


    // featured 31 정의
    featured[31] = new Featured();
    featured[31].divided = 6;

    featured[31].background.kind = "image"
    featured[31].background.image.url = "../websrc/img/theme_background/19.jpg";

    featured[31].cell[1].kind = "image";
    featured[31].cell[1].x = 4;
    featured[31].cell[1].y = 1;
    featured[31].cell[1].image.url[1] = "../websrc/img/theme/19/img01.jpg";

    featured[31].cell[6].kind = "image";
    featured[31].cell[6].x = 2;
    featured[31].cell[6].y = 4;
    featured[31].cell[6].image.url[1] = "../websrc/img/theme/19/img02.jpg";

    featured[31].cell[8].kind = "image";
    featured[31].cell[8].x = 2;
    featured[31].cell[8].y = 2;
    featured[31].cell[8].image.url[1] = "../websrc/img/theme/19/img03.jpg";

    featured[31].cell[18].kind = "image";
    featured[31].cell[18].x = 2;
    featured[31].cell[18].y = 2;
    featured[31].cell[18].image.url[1] = "../websrc/img/theme/19/img04.jpg";

    featured[31].cell[5].kind = "widgets";
    featured[31].cell[5].x = 1;
    featured[31].cell[5].y = 1;
    featured[31].cell[5].widget.image_url = "../websrc/img/theme/19/w_time.png";

    featured[31].cell[10].kind = "widgets";
    featured[31].cell[10].x = 1;
    featured[31].cell[10].y = 4;
    featured[31].cell[10].widget.image_url = "../websrc/img/theme/19/w_weather.png";


    // featured 32 정의
    featured[32] = new Featured();
    featured[32].divided = 7;

    featured[32].background.kind = "image"
    featured[32].background.image.url = "../websrc/img/theme_background/19-14.jpg";

    featured[32].cell[1].kind = "widgets";
    featured[32].cell[1].x = 1;
    featured[32].cell[1].y = 1;
    featured[32].cell[1].widget.image_url = "../websrc/img/theme/19-14/w_time.png";

    featured[32].cell[6].kind = "widgets";
    featured[32].cell[6].x = 1;
    featured[32].cell[6].y = 4;
    featured[32].cell[6].widget.image_url = "../websrc/img/theme/19-14/w_weather.png";

    featured[32].cell[2].kind = "image";
    featured[32].cell[2].x = 4;
    featured[32].cell[2].y = 1;
    featured[32].cell[2].image.url[1] = "../websrc/img/theme/19-14/img01.jpg";

    featured[32].cell[7].kind = "image";
    featured[32].cell[7].x = 2;
    featured[32].cell[7].y = 2;
    featured[32].cell[7].image.url[1] = "../websrc/img/theme/19-14/img02.jpg";

    featured[32].cell[9].kind = "image";
    featured[32].cell[9].x = 2;
    featured[32].cell[9].y = 2;
    featured[32].cell[9].image.url[1] = "../websrc/img/theme/19-14/img03.jpg";

    featured[32].cell[17].kind = "image";
    featured[32].cell[17].x = 2;
    featured[32].cell[17].y = 2;
    featured[32].cell[17].image.url[1] = "../websrc/img/theme/19-14/img04.jpg";

    featured[32].cell[19].kind = "image";
    featured[32].cell[19].x = 2;
    featured[32].cell[19].y = 2;
    featured[32].cell[19].image.url[1] = "../websrc/img/theme/19-14/img05.jpg";


    // featured 33 정의
    featured[33] = new Featured();
    featured[33].divided = 6;

    featured[33].background.kind = "image"
    featured[33].background.image.url = "../websrc/img/theme_background/20.jpg";

    featured[33].cell[1].kind = "image";
    featured[33].cell[1].x = 5;
    featured[33].cell[1].y = 1;
    featured[33].cell[1].image.url[1] = "../websrc/img/theme/20/img01.jpg";

    featured[33].cell[6].kind = "image";
    featured[33].cell[6].x = 3;
    featured[33].cell[6].y = 4;
    featured[33].cell[6].image.url[1] = "../websrc/img/theme/20/img02.jpg";

    featured[33].cell[9].kind = "image";
    featured[33].cell[9].x = 1;
    featured[33].cell[9].y = 2;
    featured[33].cell[9].image.url[1] = "../websrc/img/theme/20/img03.jpg";

    featured[33].cell[10].kind = "image";
    featured[33].cell[10].x = 1;
    featured[33].cell[10].y = 2;
    featured[33].cell[10].image.url[1] = "../websrc/img/theme/20/img04.jpg";

    featured[33].cell[19].kind = "image";
    featured[33].cell[19].x = 1;
    featured[33].cell[19].y = 2;
    featured[33].cell[19].image.url[1] = "../websrc/img/theme/20/img05.jpg";

    featured[33].cell[20].kind = "image";
    featured[33].cell[20].x = 1;
    featured[33].cell[20].y = 2;
    featured[33].cell[20].image.url[1] = "../websrc/img/theme/20/img06.jpg";


    // featured 34 정의
    featured[34] = new Featured();
    featured[34].divided = 9;

    featured[34].background.kind = "image"
    featured[34].background.image.url = "../websrc/img/theme_background/21.jpg";

    featured[34].cell[1].kind = "image";
    featured[34].cell[1].x = 4;
    featured[34].cell[1].y = 1;
    featured[34].cell[1].image.url[1] = "../websrc/img/theme/21/img01.jpg";

    featured[34].cell[5].kind = "widgets";
    featured[34].cell[5].x = 1;
    featured[34].cell[5].y = 1;
    featured[34].cell[5].widget.image_url = "../websrc/img/theme/21/w_time.png";

    featured[34].cell[6].kind = "image";
    featured[34].cell[6].x = 2;
    featured[34].cell[6].y = 4;
    featured[34].cell[6].image.url[1] = "../websrc/img/theme/21/img02.jpg";

    featured[34].cell[8].kind = "image";
    featured[34].cell[8].x = 1;
    featured[34].cell[8].y = 2;
    featured[34].cell[8].image.url[1] = "../websrc/img/theme/21/img03.jpg";

    featured[34].cell[9].kind = "image";
    featured[34].cell[9].x = 1;
    featured[34].cell[9].y = 2;
    featured[34].cell[9].image.url[1] = "../websrc/img/theme/21/img04.jpg";

    featured[34].cell[10].kind = "image";
    featured[34].cell[10].x = 1;
    featured[34].cell[10].y = 2;
    featured[34].cell[10].image.url[1] = "../websrc/img/theme/21/img05.jpg";

    featured[34].cell[18].kind = "image";
    featured[34].cell[18].x = 1;
    featured[34].cell[18].y = 2;
    featured[34].cell[18].image.url[1] = "../websrc/img/theme/21/img06.jpg";

    featured[34].cell[19].kind = "image";
    featured[34].cell[19].x = 1;
    featured[34].cell[19].y = 2;
    featured[34].cell[19].image.url[1] = "../websrc/img/theme/21/img07.jpg";

    featured[34].cell[20].kind = "image";
    featured[34].cell[20].x = 1;
    featured[34].cell[20].y = 2;
    featured[34].cell[20].image.url[1] = "../websrc/img/theme/21/img08.jpg";


    // featured 35 정의
    featured[35] = new Featured();
    featured[35].divided = 5;

    featured[35].background.kind = "image"
    featured[35].background.image.url = "../websrc/img/theme_background/22.jpg";

    featured[35].cell[1].kind = "image";
    featured[35].cell[1].x = 1;
    featured[35].cell[1].y = 5;
    featured[35].cell[1].image.url[1] = "../websrc/img/theme/22/img01.jpg";

    featured[35].cell[2].kind = "image";
    featured[35].cell[2].x = 4;
    featured[35].cell[2].y = 1;
    featured[35].cell[2].image.url[1] = "../websrc/img/theme/22/img02.jpg";

    featured[35].cell[7].kind = "image";
    featured[35].cell[7].x = 2;
    featured[35].cell[7].y = 2;
    featured[35].cell[7].image.url[1] = "../websrc/img/theme/22/img03.jpg";

    featured[35].cell[9].kind = "image";
    featured[35].cell[9].x = 2;
    featured[35].cell[9].y = 4;
    featured[35].cell[9].image.url[1] = "../websrc/img/theme/22/img05.jpg";

    featured[35].cell[17].kind = "image";
    featured[35].cell[17].x = 2;
    featured[35].cell[17].y = 2;
    featured[35].cell[17].image.url[1] = "../websrc/img/theme/22/img04.jpg";


    // featured 36 정의
    featured[36] = new Featured();
    featured[36].divided = 4;

    featured[36].background.kind = "image"
    featured[36].background.image.url = "../websrc/img/theme_background/23.jpg";

    featured[36].cell[1].kind = "widgets";
    featured[36].cell[1].x = 1;
    featured[36].cell[1].y = 1;
    featured[36].cell[1].widget.image_url = "../websrc/img/theme/23/w_time.png";

    featured[36].cell[2].kind = "image";
    featured[36].cell[2].x = 3;
    featured[36].cell[2].y = 5;
    featured[36].cell[2].image.url[1] = "../websrc/img/theme/23/img02.jpg";

    featured[36].cell[5].kind = "image";
    featured[36].cell[5].x = 1;
    featured[36].cell[5].y = 5;
    featured[36].cell[5].image.url[1] = "../websrc/img/theme/23/img03.jpg";

    featured[36].cell[6].kind = "image";
    featured[36].cell[6].x = 1;
    featured[36].cell[6].y = 4;
    featured[36].cell[6].image.url[1] = "../websrc/img/theme/23/img01.jpg";


    // featured 37 정의
    featured[37] = new Featured();
    featured[37].divided = 5;

    featured[37].background.kind = "image"
    featured[37].background.image.url = "../websrc/img/theme_background/24.jpg";

    featured[37].cell[1].kind = "image";
    featured[37].cell[1].x = 1;
    featured[37].cell[1].y = 5;
    featured[37].cell[1].image.url[1] = "../websrc/img/theme/24/img01.jpg";

    featured[37].cell[2].kind = "widgets";
    featured[37].cell[2].x = 1;
    featured[37].cell[2].y = 1;
    featured[37].cell[2].widget.image_url = "../websrc/img/theme/24/w_time.png";

    featured[37].cell[3].kind = "widgets";
    featured[37].cell[3].x = 1;
    featured[37].cell[3].y = 1;
    featured[37].cell[3].widget.image_url = "../websrc/img/theme/24/w_weather.png";

    featured[37].cell[4].kind = "image";
    featured[37].cell[4].x = 2;
    featured[37].cell[4].y = 5;
    featured[37].cell[4].image.url[1] = "../websrc/img/theme/24/img03.jpg";

    featured[37].cell[7].kind = "image";
    featured[37].cell[7].x = 2;
    featured[37].cell[7].y = 4;
    featured[37].cell[7].image.url[1] = "../websrc/img/theme/24/img02.jpg";


    // featured 38 정의
    featured[38] = new Featured();
    featured[38].divided = 5;

    featured[38].background.kind = "image"
    featured[38].background.image.url = "../websrc/img/theme_background/25.jpg";

    featured[38].cell[1].kind = "image";
    featured[38].cell[1].x = 3;
    featured[38].cell[1].y = 4;
    featured[38].cell[1].image.url[1] = "../websrc/img/theme/25/img01.jpg";

    featured[38].cell[4].kind = "image";
    featured[38].cell[4].x = 2;
    featured[38].cell[4].y = 2;
    featured[38].cell[4].image.url[1] = "../websrc/img/theme/25/img02.jpg";

    featured[38].cell[14].kind = "image";
    featured[38].cell[14].x = 2;
    featured[38].cell[14].y = 3;
    featured[38].cell[14].image.url[1] = "../websrc/img/theme/25/img03.jpg";

    featured[38].cell[21].kind = "widgets";
    featured[38].cell[21].x = 1;
    featured[38].cell[21].y = 1;
    featured[38].cell[21].widget.image_url = "../websrc/img/theme/25/w_time.png";

    featured[38].cell[22].kind = "widgets";
    featured[38].cell[22].x = 2;
    featured[38].cell[22].y = 1;
    featured[38].cell[22].widget.image_url = "../websrc/img/theme/25/w_weather.png";


    // featured 39 정의
    featured[39] = new Featured();
    featured[39].divided = 6;

    featured[39].background.kind = "image"
    featured[39].background.image.url = "../websrc/img/theme_background/26.jpg";

    featured[39].cell[1].kind = "image";
    featured[39].cell[1].x = 1;
    featured[39].cell[1].y = 5;
    featured[39].cell[1].image.url[1] = "../websrc/img/theme/26/img01.jpg";

    featured[39].cell[2].kind = "widgets";
    featured[39].cell[2].x = 1;
    featured[39].cell[2].y = 1;
    featured[39].cell[2].widget.image_url = "../websrc/img/theme/26/w_time.png";

    featured[39].cell[3].kind = "widgets";
    featured[39].cell[3].x = 1;
    featured[39].cell[3].y = 1;
    featured[39].cell[3].widget.image_url = "../websrc/img/theme/26/w_weather.png";

    featured[39].cell[4].kind = "image";
    featured[39].cell[4].x = 2;
    featured[39].cell[4].y = 5;
    featured[39].cell[4].image.url[1] = "../websrc/img/theme/26/img03.jpg";

    featured[39].cell[7].kind = "image";
    featured[39].cell[7].x = 2;
    featured[39].cell[7].y = 2;
    featured[39].cell[7].image.url[1] = "../websrc/img/theme/26/img02.jpg";

    featured[39].cell[17].kind = "image";
    featured[39].cell[17].x = 2;
    featured[39].cell[17].y = 2;
    featured[39].cell[17].image.url[1] = "../websrc/img/theme/26/img04.jpg";


    // featured 40 정의
    featured[40] = new Featured();
    featured[40].divided = 4;

    featured[40].background.kind = "image"
    featured[40].background.image.url = "../websrc/img/theme_background/27.jpg";

    featured[40].cell[1].kind = "image";
    featured[40].cell[1].x = 3;
    featured[40].cell[1].y = 4;
    featured[40].cell[1].image.url[1] = "../websrc/img/theme/27/img01.jpg";

    featured[40].cell[4].kind = "image";
    featured[40].cell[4].x = 2;
    featured[40].cell[4].y = 5;
    featured[40].cell[4].image.url[1] = "../websrc/img/theme/27/img02.jpg";

    featured[40].cell[21].kind = "widgets";
    featured[40].cell[21].x = 1;
    featured[40].cell[21].y = 1;
    featured[40].cell[21].widget.image_url = "../websrc/img/theme/27/w_time.png";

    featured[40].cell[22].kind = "widgets";
    featured[40].cell[22].x = 2;
    featured[40].cell[22].y = 1;
    featured[40].cell[22].widget.image_url = "../websrc/img/theme/27/w_weather.png";


    // featured 41 정의
    featured[41] = new Featured();
    featured[41].divided = 9;

    featured[41].background.kind = "image"
    featured[41].background.image.url = "../websrc/img/theme_background/28.jpg";

    featured[41].cell[1].kind = "image";
    featured[41].cell[1].x = 4;
    featured[41].cell[1].y = 1;
    featured[41].cell[1].image.url[1] = "../websrc/img/theme/28/img01.jpg";

    featured[41].cell[5].kind = "widgets";
    featured[41].cell[5].x = 1;
    featured[41].cell[5].y = 1;
    featured[41].cell[5].widget.image_url = "../websrc/img/theme/28/w_time.png";

    featured[41].cell[6].kind = "image";
    featured[41].cell[6].x = 1;
    featured[41].cell[6].y = 2;
    featured[41].cell[6].image.url[1] = "../websrc/img/theme/28/img03.jpg";

    featured[41].cell[7].kind = "image";
    featured[41].cell[7].x = 2;
    featured[41].cell[7].y = 4;
    featured[41].cell[7].image.url[1] = "../websrc/img/theme/28/img02.jpg";

    featured[41].cell[9].kind = "image";
    featured[41].cell[9].x = 1;
    featured[41].cell[9].y = 2;
    featured[41].cell[9].image.url[1] = "../websrc/img/theme/28/img04.jpg";

    featured[41].cell[10].kind = "image";
    featured[41].cell[10].x = 1;
    featured[41].cell[10].y = 2;
    featured[41].cell[10].image.url[1] = "../websrc/img/theme/28/img05.jpg";

    featured[41].cell[16].kind = "image";
    featured[41].cell[16].x = 1;
    featured[41].cell[16].y = 2;
    featured[41].cell[16].image.url[1] = "../websrc/img/theme/28/img06.jpg";

    featured[41].cell[19].kind = "image";
    featured[41].cell[19].x = 1;
    featured[41].cell[19].y = 2;
    featured[41].cell[19].image.url[1] = "../websrc/img/theme/28/img07.jpg";

    featured[41].cell[20].kind = "image";
    featured[41].cell[20].x = 1;
    featured[41].cell[20].y = 2;
    featured[41].cell[20].image.url[1] = "../websrc/img/theme/28/img08.jpg";


    // featured 42 정의
    featured[42] = new Featured();
    featured[42].divided = 5;

    featured[42].background.kind = "image"
    featured[42].background.image.url = "../websrc/img/theme_background/29.jpg";

    featured[42].cell[1].kind = "image";
    featured[42].cell[1].x = 5;
    featured[42].cell[1].y = 1;
    featured[42].cell[1].image.url[1] = "../websrc/img/theme/29/img01.jpg";

    featured[42].cell[6].kind = "image";
    featured[42].cell[6].x = 4;
    featured[42].cell[6].y = 3;
    featured[42].cell[6].image.url[1] = "../websrc/img/theme/29/img02.jpg";

    featured[42].cell[10].kind = "image";
    featured[42].cell[10].x = 1;
    featured[42].cell[10].y = 3;
    featured[42].cell[10].image.url[1] = "../websrc/img/theme/29/img03.jpg";

    featured[42].cell[21].kind = "widgets";
    featured[42].cell[21].x = 1;
    featured[42].cell[21].y = 1;
    featured[42].cell[21].widget.image_url = "../websrc/img/theme/29/w_time.png";

    featured[42].cell[22].kind = "widgets";
    featured[42].cell[22].x = 4;
    featured[42].cell[22].y = 1;
    featured[42].cell[22].widget.image_url = "../websrc/img/theme/29/w_weather.png";


    // featured 43 정의
    featured[43] = new Featured();
    featured[43].divided = 6;

    featured[43].background.kind = "image"
    featured[43].background.image.url = "../websrc/img/theme_background/30.jpg";

    featured[43].cell[1].kind = "widgets";
    featured[43].cell[1].x = 1;
    featured[43].cell[1].y = 1;
    featured[43].cell[1].widget.image_url = "../websrc/img/theme/30/w_time.png";

    featured[43].cell[2].kind = "image";
    featured[43].cell[2].x = 4;
    featured[43].cell[2].y = 1;
    featured[43].cell[2].image.url[1] = "../websrc/img/theme/30/img01.jpg";

    featured[43].cell[6].kind = "widgets";
    featured[43].cell[6].x = 1;
    featured[43].cell[6].y = 4;
    featured[43].cell[6].widget.image_url = "../websrc/img/theme/30/w_weather.png";

    featured[43].cell[7].kind = "image";
    featured[43].cell[7].x = 4;
    featured[43].cell[7].y = 2;
    featured[43].cell[7].image.url[1] = "../websrc/img/theme/30/img02.jpg";

    featured[43].cell[17].kind = "image";
    featured[43].cell[17].x = 2;
    featured[43].cell[17].y = 2;
    featured[43].cell[17].image.url[1] = "../websrc/img/theme/30/img03.jpg";

    featured[43].cell[19].kind = "image";
    featured[43].cell[19].x = 2;
    featured[43].cell[19].y = 2;
    featured[43].cell[19].image.url[1] = "../websrc/img/theme/30/img04.jpg";


    // featured 44 정의
    featured[44] = new Featured();
    featured[44].divided = 5;

    featured[44].background.kind = "image"
    featured[44].background.image.url = "../websrc/img/theme_background/31.jpg";

    featured[44].cell[1].kind = "image";
    featured[44].cell[1].x = 3;
    featured[44].cell[1].y = 3;
    featured[44].cell[1].image.url[1] = "../websrc/img/theme/31/img01.jpg";

    featured[44].cell[4].kind = "image";
    featured[44].cell[4].x = 2;
    featured[44].cell[4].y = 5;
    featured[44].cell[4].image.url[1] = "../websrc/img/theme/31/img03.jpg";

    featured[44].cell[16].kind = "image";
    featured[44].cell[16].x = 3;
    featured[44].cell[16].y = 1;
    featured[44].cell[16].image.url[1] = "../websrc/img/theme/31/img02.jpg";

    featured[44].cell[21].kind = "widgets";
    featured[44].cell[21].x = 1;
    featured[44].cell[21].y = 1;
    featured[44].cell[21].widget.image_url = "../websrc/img/theme/31/w_time.png";

    featured[44].cell[22].kind = "widgets";
    featured[44].cell[22].x = 2;
    featured[44].cell[22].y = 1;
    featured[44].cell[22].widget.image_url = "../websrc/img/theme/31/w_weather.png";



    // featured 45 정의
    featured[45] = new Featured();
    featured[45].divided = 5;

    featured[45].background.kind = "image"
    featured[45].background.image.url = "../websrc/img/theme_background/32.jpg";

    featured[45].cell[1].kind = "widgets";
    featured[45].cell[1].x = 1;
    featured[45].cell[1].y = 1;
    featured[45].cell[1].widget.image_url = "../websrc/img/theme/32/w_time.png";

    featured[45].cell[2].kind = "widgets";
    featured[45].cell[2].x = 2;
    featured[45].cell[2].y = 1;
    featured[45].cell[2].widget.image_url = "../websrc/img/theme/32/w_weather.png";

    featured[45].cell[4].kind = "image";
    featured[45].cell[4].x = 2;
    featured[45].cell[4].y = 5;
    featured[45].cell[4].image.url[1] = "../websrc/img/theme/32/img03.jpg";

    featured[45].cell[6].kind = "image";
    featured[45].cell[6].x = 3;
    featured[45].cell[6].y = 3;
    featured[45].cell[6].image.url[1] = "../websrc/img/theme/32/img01.jpg";

    featured[45].cell[21].kind = "image";
    featured[45].cell[21].x = 3;
    featured[45].cell[21].y = 1;
    featured[45].cell[21].image.url[1] = "../websrc/img/theme/32/img02.jpg";


    // featured 46 정의
    featured[46] = new Featured();
    featured[46].divided = 5;

    featured[46].background.kind = "image"
    featured[46].background.image.url = "../websrc/img/theme_background/33.jpg";

    featured[46].cell[1].kind = "widgets";
    featured[46].cell[1].x = 1;
    featured[46].cell[1].y = 1;
    featured[46].cell[1].widget.image_url = "../websrc/img/theme/33/w_time.png";

    featured[46].cell[2].kind = "image";
    featured[46].cell[2].x = 3;
    featured[46].cell[2].y = 5;
    featured[46].cell[2].image.url[1] = "../websrc/img/theme/33/img02.jpg";

    featured[46].cell[5].kind = "image";
    featured[46].cell[5].x = 1;
    featured[46].cell[5].y = 5;
    featured[46].cell[5].image.url[1] = "../websrc/img/theme/33/img03.jpg";

    featured[46].cell[6].kind = "widgets";
    featured[46].cell[6].x = 1;
    featured[46].cell[6].y = 1;
    featured[46].cell[6].widget.image_url = "../websrc/img/theme/33/w_weather.png";

    featured[46].cell[11].kind = "image";
    featured[46].cell[11].x = 1;
    featured[46].cell[11].y = 3;
    featured[46].cell[11].image.url[1] = "../websrc/img/theme/33/img01.jpg";


    // featured 47 정의
    featured[47] = new Featured();
    featured[47].divided = 5;

    featured[47].background.kind = "image"
    featured[47].background.image.url = "../websrc/img/theme_background/34.jpg";

    featured[47].cell[1].kind = "image";
    featured[47].cell[1].x = 4;
    featured[47].cell[1].y = 4;
    featured[47].cell[1].image.url[1] = "../websrc/img/theme/34/img01.jpg";

    featured[47].cell[5].kind = "widgets";
    featured[47].cell[5].x = 1;
    featured[47].cell[5].y = 1;
    featured[47].cell[5].widget.image_url = "../websrc/img/theme/34/w_time.png";

    featured[47].cell[10].kind = "widgets";
    featured[47].cell[10].x = 1;
    featured[47].cell[10].y = 1;
    featured[47].cell[10].widget.image_url = "../websrc/img/theme/34/w_weather.png";

    featured[47].cell[21].kind = "image";
    featured[47].cell[21].x = 5;
    featured[47].cell[21].y = 1;
    featured[47].cell[21].image.url[1] = "../websrc/img/theme/34/img03.jpg";


    // featured 48 정의
    featured[48] = new Featured();
    featured[48].divided = 4;

    featured[48].background.kind = "image"
    featured[48].background.image.url = "../websrc/img/theme_background/35.jpg";

    featured[48].cell[1].kind = "image";
    featured[48].cell[1].x = 1;
    featured[48].cell[1].y = 5;
    featured[48].cell[1].image.url[1] = "../websrc/img/theme/35/img01.jpg";

    featured[48].cell[2].kind = "image";
    featured[48].cell[2].x = 2;
    featured[48].cell[2].y = 3;
    featured[48].cell[2].image.url[1] = "../websrc/img/theme/35/img02.jpg";

    featured[48].cell[4].kind = "image";
    featured[48].cell[4].x = 2;
    featured[48].cell[4].y = 5;
    featured[48].cell[4].image.url[1] = "../websrc/img/theme/35/img04.jpg";

    featured[48].cell[17].kind = "image";
    featured[48].cell[17].x = 2;
    featured[48].cell[17].y = 2;
    featured[48].cell[17].image.url[1] = "../websrc/img/theme/35/img03.jpg";


    // featured 49 정의
    featured[49] = new Featured();
    featured[49].divided = 6;

    featured[49].background.kind = "image"
    featured[49].background.image.url = "../websrc/img/theme_background/36.jpg";

    featured[49].cell[2].kind = "image";
    featured[49].cell[2].x = 3;
    featured[49].cell[2].y = 5;
    featured[49].cell[2].image.url[1] = "../websrc/img/theme/36/img03.jpg";

    featured[49].cell[5].kind = "image";
    featured[49].cell[5].x = 1;
    featured[49].cell[5].y = 5;
    featured[49].cell[5].image.url[1] = "../websrc/img/theme/36/img04.jpg";

    featured[49].cell[6].kind = "widgets";
    featured[49].cell[6].x = 1;
    featured[49].cell[6].y = 1;
    featured[49].cell[6].widget.image_url = "../websrc/img/theme/36/w_time.png";

    featured[49].cell[11].kind = "widgets";
    featured[49].cell[11].x = 1;
    featured[49].cell[11].y = 1;
    featured[49].cell[11].widget.image_url = "../websrc/img/theme/36/w_weather.png";


    // featured 50 정의
    featured[50] = new Featured();
    featured[50].divided = 9;

    featured[50].background.kind = "image"
    featured[50].background.image.url = "../websrc/img/theme_background/37.jpg";

    featured[50].cell[1].kind = "widgets";
    featured[50].cell[1].x = 1;
    featured[50].cell[1].y = 1;
    featured[50].cell[1].widget.image_url = "../websrc/img/theme/37/w_time.png";

    featured[50].cell[2].kind = "image";
    featured[50].cell[2].x = 2;
    featured[50].cell[2].y = 5;
    featured[50].cell[2].image.url[1] = "../websrc/img/theme/37/img03.jpg";

    featured[50].cell[4].kind = "image";
    featured[50].cell[4].x = 2;
    featured[50].cell[4].y = 1;
    featured[50].cell[4].image.url[1] = "../websrc/img/theme/37/img04.jpg";

    featured[50].cell[6].kind = "image";
    featured[50].cell[6].x = 1;
    featured[50].cell[6].y = 2;
    featured[50].cell[6].image.url[1] = "../websrc/img/theme/37/img01.jpg";

    featured[50].cell[9].kind = "image";
    featured[50].cell[9].x = 1;
    featured[50].cell[9].y = 2;
    featured[50].cell[9].image.url[1] = "../websrc/img/theme/37/img05.jpg";

    featured[50].cell[10].kind = "image";
    featured[50].cell[10].x = 1;
    featured[50].cell[10].y = 2;
    featured[50].cell[10].image.url[1] = "../websrc/img/theme/37/img06.jpg";

    featured[50].cell[4].kind = "image";
    featured[50].cell[4].x = 2;
    featured[50].cell[4].y = 1;
    featured[50].cell[4].image.url[1] = "../websrc/img/theme/37/img04.jpg";

    featured[50].cell[16].kind = "image";
    featured[50].cell[16].x = 1;
    featured[50].cell[16].y = 2;
    featured[50].cell[16].image.url[1] = "../websrc/img/theme/37/img02.jpg";

    featured[50].cell[19].kind = "image";
    featured[50].cell[19].x = 1;
    featured[50].cell[19].y = 2;
    featured[50].cell[19].image.url[1] = "../websrc/img/theme/37/img07.jpg";

    featured[50].cell[20].kind = "image";
    featured[50].cell[20].x = 1;
    featured[50].cell[20].y = 2;
    featured[50].cell[20].image.url[1] = "../websrc/img/theme/37/img08.jpg";
}

*/