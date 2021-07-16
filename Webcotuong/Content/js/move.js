function getMove(name, kind, Position){
    var accept_Position = new Array();

    var x = Number.parseInt(Position.x);
    var y = Number.parseInt(Position.y);
    
    if(name == "tot_do" && kind == "r"){
        var default_Position = new Array();

        default_Position.push(
            new Position(x, y-68)           
        );

        default_Position.forEach(e => {
            if(e.y < 392 && e.x < 773 && e.x > 229) {
                accept_Position.push(e);
                accept_Position.push(new Position(x - 68, y));
                accept_Position.push(new Position(x + 68, y));
            }
            else if (e.y < 392 && e.x < 773)
            {
                accept_Position.push(e);
                accept_Position.push(new Position(x + 68, y));
            }
            else if (e.y < 392 && e.x > 229)
            {
                accept_Position.push(e);
      
                accept_Position.push(new Position(x - 68, y));
            }
            else{
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }
    
    if (name == "voi_do1" && kind == "r") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x - 136, y - 136),
            new Position(x + 136, y - 136),
            new Position(x + 136, y + 136),
            new Position(x - 136, y + 136)
        );
        default_Position.forEach(e => {
            if (e.x >= 229 && e.y <= 732 && e.y > 392) {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }

    if (name == "ma_do1" && kind == "r") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x - 68, y - 136),
            new Position(x + 68, y - 136),
            new Position(x - 136, y - 68),
            new Position(x - 136, y + 68),
            new Position(x + 136, y - 68),
            new Position(x + 136, y + 68),
            new Position(x - 68, y + 136),
            new Position(x + 68, y + 136),
        );
        default_Position.forEach(e => {
            //if (e.x >= 229 && e.y <= 732 && e.x <=773) {
            //    accept_Position.push(e);
            //}
            if (checkCo(e.x + 68, e.y) == true /* && checkCo(e.x + 68, e.y) != ""*/) {
                accept_Position.push(new Position(x - 68, y - 136),
                    new Position(x + 68, y - 136),
                   

                    new Position(x - 68, y + 136),
                    new Position(x + 68, y + 136),
                );
            }
           
        });
        return accept_Position;
    }

    if (name == "tuong_do" && kind == "r") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x - 68, y),
            new Position(x + 68, y),
            new Position(x, y - 68),
            new Position(x, y + 68)
        );
        default_Position.forEach(e => {
            if (e.y <= 732 && e.x >= 433 && e.x <= 569 && e.y >= 596) {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }

    if (name == "si_do1" && kind == "r") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x - 68, y - 68),
            new Position(x + 68, y - 68),
            new Position(x - 68, y + 68),
            new Position(x + 68, y + 68)
        );
        default_Position.forEach(e => {
            if (e.y <= 732 && e.x >= 433 && e.y >= 596 && e.x <= 569) {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }

    //Co den
    if (name == "tot_den" && kind == "b") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x, y + 68)
        );
        default_Position.forEach(e => {
            if (e.y > 460) {
                accept_Position.push(e);
                accept_Position.push(new Position(x + 68, y));
                accept_Position.push(new Position(x - 68, y));
            }
            else {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }
    if (name == "voi_den1" && kind == "b") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x + 136, y + 136),
            new Position(x - 136, y + 136),
            new Position(x - 136, y - 136),
            new Position(x + 136, y - 136)
        );
        default_Position.forEach(e => {
            if (e.y < 275) {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }
    if (name == "ma_den1" && kind == "b") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x - 68, y - 136),
            new Position(x + 68, y - 136),
            new Position(x - 136, y - 68),
            new Position(x - 136, y + 68),
            new Position(x + 136, y - 68),
            new Position(x + 136, y + 68),
            new Position(x - 68, y + 136),
            new Position(x + 68, y + 136),
        );
        default_Position.forEach(e => {
            if (true) {
                accept_Position.push(new Position(x + 68, y));
            }
        });
        return accept_Position;
    }
    if (name == "tuong" && kind == "b") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x, y + 68),
            new Position(x, y - 68),
            new Position(x - 68, y),
            new Position(x + 68, y)
        );
        default_Position.forEach(e => {
            if (e.y < 140) {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }
    if (name == "si_den1" && kind == "b") {
        var default_Position = new Array();
        default_Position.push(
            new Position(x - 68, y + 68),
            new Position(x + 68, y + 68),
            new Position(x - 68, y - 68),
            new Position(x + 68, y - 68)
        );
        default_Position.forEach(e => {
            if (e.y < 150) {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }
    if (name == "xe_do1" && kind == "r") {
        var default_Position = new Array();
        default_Position.push(
            //dọc đi lên 
            //new Position(x, y - 68),
            //new Position(x, y - 136),
            //new Position(x, y - 204),
            //new Position(x, y - 272),
            //new Position(x, y - 340),
            //new Position(x, y - 408),
            //new Position(x, y - 476),
            //new Position(x, y - 544),
            //new Position(x, y - 612),

            new Position(x, y - 68),
            new Position(x, y - 136),
            new Position(x, y - 204),
            new Position(x + 68, y - 68)
            ////dọc đi xuống
            //new Position(x, y + 68),
            //new Position(x, y + 136),
            //new Position(x, y + 204),
            //new Position(x, y + 272),
            //new Position(x, y + 340),
            //new Position(x, y + 408),
            //new Position(x, y + 476),
            //new Position(x, y + 544),
            //new Position(x, y + 612),
            ////ngang qua trái
            //new Position(y, x - 68),
            //new Position(y, x - 136),
            //new Position(y, x - 204),
            //new Position(y, x - 272),
            //new Position(y, x - 340),
            //new Position(y, x - 408),
            //new Position(y, x - 476),
            //new Position(y, x - 544),
            ////ngang qua phải
            //new Position(y, x + 68),
            //new Position(y, x + 136),
            //new Position(y, x + 204),
            //new Position(y, x + 272),
            //new Position(y, x + 340),
            //new Position(y, x + 408),
            //new Position(y, x + 476),
            //new Position(y, x + 544)
        );
        default_Position.forEach(e => {
            if (true) {
                accept_Position.push(e);
            }
        });
        return accept_Position;
    }
}

function findimage(a, b) {
    var arr = new Array();
    var flag = false;
    var image = document.createElement("img");
    $('.bg').find('img').each(function () {
        arr.push($(this));
    });

    arr.forEach(e => {
        let x = $(e).css("left").slice(0, 3);
        let y = $(e).css("top").slice(0, 3);
        if (a == x && b == y) {
            if ($(e).attr("class") != $(i).attr("class")) {
                flag = true;
            }
        }
    });
    return flag;
}

function checkCo(x, y)
{
    var arr = new Array();
    var flag = false;
    var image;
    $('.bg').find('img').each(function () {
        arr.push($(this));
    });

    //arr.forEach(e => {
    //    let ax = $(e).css("left").slice(0, 3);
    //    let ay = $(e).css("top").slice(0, 3);

    //    if(ax == x && ay == y)
    //        image = $(e).        
    //});
    
    return flag;

}