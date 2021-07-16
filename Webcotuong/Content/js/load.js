$( document ).ready(function() {
    DisplayChess();
});
////den
//const xe_den1 = new pieces("xe_den1", "b", "/Content/coduyluan/Xe_den.png", new Position(229, 0));
//const ma_den1 = new pieces("ma_den1", "b", "/Content/coduyluan/Ma_den.png", new Position(297, 0));
//const voi_den1 = new pieces("voi_den1", "b", "/Content/coduyluan/Voi_den.png", new Position(365, 0));
//const si_den1 = new pieces("si_den1", "b", "/Content/coduyluan/Si_den.png", new Position(433, 0));
//const tuong = new pieces("tuong", "b", "/Content/coduyluan/Tuong_den.png", new Position(501, 0));
//const si_den2 = new pieces("si_den1", "b", "/Content/coduyluan/Si_den.png", new Position(569, 0));
//const voi_den2 = new pieces("voi_den1", "b", "/Content/coduyluan/Voi_den.png", new Position(637, 0));
//const ma_den2 = new pieces("ma_den1", "b", "/Content/coduyluan/Ma_den.png", new Position(705, 0));
//const xe_den2 = new pieces("xe_den1", "b", "/Content/coduyluan/Xe_den.png", new Position(773, 0));
//const phao_den1 = new pieces("phao_den1", "b", "/Content/coduyluan/Phao_den.png", new Position(297,136));
//const phao_den2 = new pieces("phao_den1", "b", "/Content/coduyluan/Phao_den.png", new Position(705,136));
//const tot_den1 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(229,204));
//const tot_den2 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(365,204));
//const tot_den3 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(501,204));
//const tot_den4 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(637,204));
//const tot_den5 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(773,204));
////do
//const tot_do1 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(229,528));
//const tot_do2 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(365,528));
//const tot_do3 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(501,528));
//const tot_do4 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(637,528));
//const tot_do5 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(773,528));
//const phao_do1 = new pieces("phao_do", "r", "/Content/coduyluan/Phao_do.png", new Position(297,596));
//const phao_do2 = new pieces("phao_do", "r", "/Content/coduyluan/Phao_do.png", new Position(705,596));
//const xe_do1 = new pieces("xe_do1", "r", "/Content/coduyluan/Xe_do.png", new Position(229,732));
//const ma_do1 = new pieces("ma_do1", "r", "/Content/coduyluan/Ma_do.png", new Position(297,732));
//const voi_do1 = new pieces("voi_do1", "r", "/Content/coduyluan/Voi_do.png", new Position(365,732));
//const si_do1 = new pieces("si_do1", "r", "/Content/coduyluan/Si_do.png", new Position(433,732));
//const tuong_do = new pieces("tuong_do", "r", "/Content/coduyluan/Tuong_do.png", new Position(501,732));
//const si_do2 = new pieces("si_do1", "r", "/Content/coduyluan/Si_do.png", new Position(569,732));
//const voi_do2 = new pieces("voi_do1", "r", "/Content/coduyluan/Voi_do.png", new Position(637,732));
//const ma_do2 = new pieces("ma_do1", "r", "/Content/coduyluan/Ma_do.png", new Position(705,732));
//const xe_do2 = new pieces("xe_do1", "r", "/Content/coduyluan/Xe_do.png", new Position(773, 732));


//den
const xe_den1 = new pieces("xe_den1", "b", "/Content/coduyluan/Xe_den.png", new Position(229, 120));
const ma_den1 = new pieces("ma_den1", "b", "/Content/coduyluan/Ma_den.png", new Position(297, 120));
const voi_den1 = new pieces("voi_den1", "b", "/Content/coduyluan/Voi_den.png", new Position(365, 120));
const si_den1 = new pieces("si_den1", "b", "/Content/coduyluan/Si_den.png", new Position(433, 120));
const tuong = new pieces("tuong", "b", "/Content/coduyluan/Tuong_den.png", new Position(501, 120));
const si_den2 = new pieces("si_den1", "b", "/Content/coduyluan/Si_den.png", new Position(569, 120));
const voi_den2 = new pieces("voi_den1", "b", "/Content/coduyluan/Voi_den.png", new Position(637, 120));
const ma_den2 = new pieces("ma_den1", "b", "/Content/coduyluan/Ma_den.png", new Position(705, 120));
const xe_den2 = new pieces("xe_den1", "b", "/Content/coduyluan/Xe_den.png", new Position(773, 120));
const phao_den1 = new pieces("phao_den1", "b", "/Content/coduyluan/Phao_den.png", new Position(297, 256));
const phao_den2 = new pieces("phao_den1", "b", "/Content/coduyluan/Phao_den.png", new Position(705, 256));
const tot_den1 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(229, 324));
const tot_den2 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(365, 324));
const tot_den3 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(501, 324));
const tot_den4 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(637, 324));
const tot_den5 = new pieces("tot_den", "b", "/Content/coduyluan/Tot_den.png", new Position(773, 324));


//do
const tot_do1 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(229, 528));
const tot_do2 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(365, 528));
const tot_do3 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(501, 528));
const tot_do4 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(637, 528));
const tot_do5 = new pieces("tot_do", "r", "/Content/coduyluan/Tot_do.png", new Position(773, 528));
const phao_do1 = new pieces("phao_do1", "r", "/Content/coduyluan/Phao_do.png", new Position(297, 596));
const phao_do2 = new pieces("phao_do1", "r", "/Content/coduyluan/Phao_do.png", new Position(705, 596));
const xe_do1 = new pieces("xe_do1", "r", "/Content/coduyluan/Xe_do.png", new Position(229, 732));
const ma_do1 = new pieces("ma_do1", "r", "/Content/coduyluan/Ma_do.png", new Position(297, 732));
const voi_do1 = new pieces("voi_do1", "r", "/Content/coduyluan/Voi_do.png", new Position(365, 732));
const si_do1 = new pieces("si_do1", "r", "/Content/coduyluan/Si_do.png", new Position(433, 732));
const tuong_do = new pieces("tuong_do", "r", "/Content/coduyluan/Tuong_do.png", new Position(501, 732));
const si_do2 = new pieces("si_do1", "r", "/Content/coduyluan/Si_do.png", new Position(569, 732));
const voi_do2 = new pieces("voi_do1", "r", "/Content/coduyluan/Voi_do.png", new Position(637, 732));
const ma_do2 = new pieces("ma_do1", "r", "/Content/coduyluan/Ma_do.png", new Position(705, 732));
const xe_do2 = new pieces("xe_do1", "r", "/Content/coduyluan/Xe_do.png", new Position(773, 732));

const mang = [xe_den1,ma_den1,voi_den1,si_den1,tuong,si_den2,voi_den2,ma_den2,xe_den2,phao_den1,phao_den2,tot_den1,tot_den2,tot_den3,tot_den4,
    tot_den5, tot_do1,tot_do2,tot_do3,tot_do4,tot_do5,phao_do1,phao_do2,xe_do1,ma_do1,voi_do1,si_do1,tuong_do,si_do2,voi_do2,ma_do2,xe_do2
];

function DisplayChess(){
    for(let i = 0; i<mang.length; i++)
    {
        var p = mang[i].position;
        $(".bg").append('<img src="'+mang[i].image+'" class="'+mang[i].name+' '+mang[i].kind+'"  alt="" style="position: absolute; width: 5%; left: '+p.x+'px; top: '+p.y+'px">');
        Drag(mang[i].name);
    }
}
function Drag(id){
    $('.'+id+'').draggable({
        containment: ".boxstrangle", //gioi han keo
        revert: 'invalid', //quay lai vi tri ban dau

        start: function(ev,ui){
            let img = ui.helper;
            var name = img.attr("class").split(" ")[0];
            console.log(name); //split chia cai chuoi thanh cac phan bang dau cach
            let x = $(img).css("left").slice(0,3);
            let y = $(img).css("top").slice(0,3);
            var pos = new Position(x, y);
            console.log(pos);
            let kind = img.attr("class").split(" ")[1];
            console.log(kind);
            var chuoi = new Array();
            chuoi = getMove(name, kind, pos);
            console.log(chuoi);
            chuoi.forEach(e => {
                $(".bg").append('<img class="drop-image" src="/Content/coduyluan/CanMove1.png" style="position: absolute; width: 5%; left: '+e.x+'px; top: '+e.y+'px"/>');
                Drop("drop-image");
            });
        }, //ev la dai dien cho su kien, ui la hinh dc keo
        stop: function(ev,ui){
            $(".drop-image").remove();
        }
    });
}
function Drop(id){
    $('.'+id+'').droppable({
        accept: 'img',
        disabled :false,
        drop: function(ev, ui) {
            var dropped = ui.draggable;
            var droppedOn = $(this);

            let x = $(droppedOn).css("left").slice(0,3);
            let y = $(droppedOn).css("top").slice(0,3);
            
            $(dropped).css({"top": y+'px', "left": x+'px', "position":'absolute'});
            $(droppedOn).remove();

            if (findimage(dropped, x, y) != undefined)
            $(findimage(dropped, x, y)).remove();
        }
    });
}

function findimage(i,a,b) {
    var arr = new Array();
    var image = document.createElement("img");
    $('.bg').find('img').each(function () {
        arr.push($(this));
    });
    
    arr.forEach(e => {
        let x = $(e).css("left").slice(0, 3);
        let y = $(e).css("top").slice(0, 3);       
        if (a == x && b == y) {           
            if ($(e).attr("class") != $(i).attr("class")) {
                image = e;
            }
        }       
    });
    return image;
}