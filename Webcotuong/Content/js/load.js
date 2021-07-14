$( document ).ready(function() {
    DisplayChess();
});
//den
const xe_den1 = new pieces("xe_den1", "b", "/Content/imageco/Xe_den.png", new Position(235, 1));
const ma_den1 = new pieces("ma_den1", "b", "/Content/imageco/Ma_den.png", new Position(303, 1));
const voi_den1 = new pieces("voi_den1", "b", "/Content/imageco/Voi_den.png", new Position(371, 1));
const si_den1 = new pieces("si_den1", "b", "/Content/imageco/Si_den.png", new Position(439, 1));
const tuong = new pieces("tuong", "b", "/Content/imageco/Tuong_den.png", new Position(505, 1));
const si_den2 = new pieces("si_den1", "b", "/Content/imageco/Si_den.png", new Position(573, 1));
const voi_den2 = new pieces("voi_den1", "b", "/Content/imageco/Voi_den.png", new Position(639, 1));
const ma_den2 = new pieces("ma_den1", "b", "/Content/imageco/Ma_den.png", new Position(706, 1));
const xe_den2 = new pieces("xe_den1", "b", "/Content/imageco/Xe_den.png", new Position(776, 1));
const phao_den1 = new pieces("phao_den1", "b", "/Content/imageco/Phao_den.png", new Position(303,140));
const phao_den2 = new pieces("phao_den1", "b", "/Content/imageco/Phao_den.png", new Position(706,140));
const tot_den1 = new pieces("tot_den", "b", "/Content/imageco/Tot_den.png", new Position(235,204));
const tot_den2 = new pieces("tot_den", "b", "/Content/imageco/Tot_den.png", new Position(371,204));
const tot_den3 = new pieces("tot_den", "b", "/Content/imageco/Tot_den.png", new Position(505,204));
const tot_den4 = new pieces("tot_den", "b", "/Content/imageco/Tot_den.png", new Position(639,204));
const tot_den5 = new pieces("tot_den", "b", "/Content/imageco/Tot_den.png", new Position(776,204));
//do
const tot_do1 = new pieces("tot_do", "r", "/Content/imageco/Tot_do.png", new Position(235,405));
const tot_do2 = new pieces("tot_do", "r", "/Content/imageco/Tot_do.png", new Position(371,405));
const tot_do3 = new pieces("tot_do", "r", "/Content/imageco/Tot_do.png", new Position(505,405));
const tot_do4 = new pieces("tot_do", "r", "/Content/imageco/Tot_do.png", new Position(639,405));
const tot_do5 = new pieces("tot_do", "r", "/Content/imageco/Tot_do.png", new Position(776,405));
const phao_do1 = new pieces("phao_do", "r", "/Content/imageco/Phao_do.png", new Position(303,474));
const phao_do2 = new pieces("phao_do", "r", "/Content/imageco/Phao_do.png", new Position(706,474));
const xe_do1 = new pieces("xe_do1", "r", "/Content/imageco/Xe_do.png", new Position(235,610));
const ma_do1 = new pieces("ma_do1", "r", "/Content/imageco/Ma_do.png", new Position(303,610));
const voi_do1 = new pieces("voi_do1", "r", "/Content/imageco/Voi_do.png", new Position(371,610));
const si_do1 = new pieces("si_do1", "r", "/Content/imageco/Si_do.png", new Position(439,610));
const tuong_do = new pieces("tuong_do", "r", "/Content/imageco/Tuong_do.png", new Position(505,610));
const si_do2 = new pieces("si_do1", "r", "/Content/imageco/Si_do.png", new Position(573,610));
const voi_do2 = new pieces("voi_do1", "r", "/Content/imageco/Voi_do.png", new Position(639,610));
const ma_do2 = new pieces("ma_do1", "r", "/Content/imageco/Ma_do.png", new Position(706,610));
const xe_do2 = new pieces("xe_do1", "r", "/Content/imageco/Xe_do.png", new Position(776,610));

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
            var pos = new Position(x,y);
            console.log(pos);
            let kind = img.attr("class").split(" ")[1];
            console.log(kind);
            var chuoi = new Array();
            chuoi = getMove(name, kind, pos);
            console.log(chuoi);
            chuoi.forEach(e => {
                $(".bg").append('<img class="drop-image" src="/Content/imageco/b_box.png" style="position: absolute; width: 5%; left: '+e.x+'px; top: '+e.y+'px"/>');
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