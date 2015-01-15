//function $(id) {return document.querySelector(id);}
function addEvent(obj, type, fn) { return obj.addEventListener(type, fn, false); }
function removeEvent(obj, type, fn) { return obj.removeEventListener(type, fn, false); }

/**
 * 스크롤 생성하기
 * 스크롤 관련 style및 class명 미리 정의 필요.
 * 사용 방법 : new scr(); 
 *	- new연산자로 함수 생성 및 호출
 */

var myFaqScroll;
var weatherScroll;
var myCellImageScroll;
var myBackgroundImageScroll;

window.scr = function (kind) {

    var _this = this,
    oArea = document.querySelector('.' + kind + '.scr-area'),
    oCont = document.querySelector('.' + kind + '.scr-cont'),
    oBarArea = document.querySelector('.' + kind + '.scr-bar-area'),
    oScr_bar = document.querySelector('.' + kind + '.scr-bar'),
    bScroll = false, bAnimated = false,
    areaH, contH, barAreaH, barH, minH, contY, childH, start = {};

    this.setBarArea = function ( value) {
        contH = value;
    };

    this.setup = function () {	

        var _this = this;

        areaH = oArea.clientHeight;
        contH = oCont.scrollHeight + 30;
        barAreaH = oBarArea.clientHeight;
		barH = $(oScr_bar).height();
        minH = barAreaH - barH;

        contY = ((contH - areaH) / (barAreaH - barH));
        //oScr_bar.style.height = barH + 'px';
        oCont.style.top = 0;
        oScr_bar.style.top = 0;

        // cellImage -> 3줄 미만시 스크롤바 안 보이게 함
        if (kind == "cellImage") {
            $("#lay_editor_layer .images .select_an_image .imageScroll").show();
            $("#lay_editor_layer .images .select_an_image .imageScroll .navigator").show();
			childH = parseInt(190 / (maxSelectCellImageMyImages / 3 + 1));
		}
		else if(kind == "backgroundImage") {
			$("#lay_editor_layer .backgrounds .select_an_image .imageScroll").show();
			$("#lay_editor_layer .backgrounds .select_an_image .imageScroll .navigator").show();
			childH = 120;
		}
		else if(kind == "faq") {
			$("#body_faq .imageScroll").show();
			$("#body_faq .imageScroll .navigator").show();
			childH = 40;
		}
		else if (kind == "weatherSrc") {
		    $("#lay_editor_layer .location_select .contents_outer .imageScroll").show();
		    $("#lay_editor_layer .location_select .contents_outer .imageScroll .navigator").show();
		    childH = 20;
		}
		
        // 스크롤 높이
        /*
        if (areaH >= contH) {
            bScroll = true;
            oBarArea.style.display = 'none';
            return;
        }
        */

        if (!bScroll) {
            addEvent(oScr_bar, 'mousedown', _this.down);
            addEvent(document, 'mouseup', _this.up);
            addEvent(document, 'keydown', _this.keyDown);
            addEvent(oCont, 'mousewheel', _this.wheel);
            /**
            * 스크롤 바 영역에서 벗어낫을 경우 스크롤 해제
            * 사용시 주석해제
            * addEvent(oScr_bar,'mouseout' , _this.up); 
            */
        }
    };

    this.down = function (e) {
        if (bAnimated) return;
        bAnimated = true;

        // 초기 스크롤 높이값 구하기
        var scrTop = oScr_bar.style.top.replace('px', '') * -1;
        start = { top: scrTop, eventY: e.pageY };

        addEvent(document, 'mousemove', _this.move);
    };

    this.move = function (e) {
        if (!bAnimated) return;

        var posY = start.eventY - e.pageY;
        var posTop = start.top + posY;

        // 최소, 최대 이동높이 확인
        if (posTop * -1 < 0) posTop = 0;
        else if (minH < posTop * -1) posTop = -minH;

        // 컨텐츠 이동 높이 구하기
        var contPosY = contY * posTop;

        // 스크롤 이동
        oCont.style.top = contPosY + 'px';
        oScr_bar.style.top = -(posTop) + 'px';
    };

    this.keyDown = function (e) {
        var delta;
        switch (e.keyCode) {
            //case 37: delta = 1; break;
            case 38:
                delta = 1;
                break;
            //case 39: delta = 1; break;
            case 40:
                delta = -1;
                break;
            default: return;
        }
        _this.keyMove(delta);
    };

    this.wheel = function (e) {
        e.stopPropagation();
        var delta = e.wheelDelta / 120; //( 1 or -1 )
        _this.keyMove(delta);
    };

    this.keyMove = function (delta) {
        if (areaH > contH) return;
        
        var moveH = (delta * childH) + oCont.style.top.replace('px', '') * 1;
        var maxH = contH - areaH;

        if (moveH > 0) {
            moveH = 0;
        } else if (moveH < -maxH) {
            moveH = -maxH;
        }

        var posTop = moveH / contY;
        oCont.style.top = moveH + 'px';
        oScr_bar.style.top = -posTop + 'px';
    };

    this.up = function (e) {
        if (!bAnimated) return;
        bAnimated = false;
        removeEvent(document, 'mousemove', _this.move);
    };

    this.setup();
};
