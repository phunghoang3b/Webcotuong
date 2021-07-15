function getMove(name, kind, position){
    var accept_position = new Array();

    var x = Number.parseInt(position.x);
    var y = Number.parseInt(position.y);
    
    if(name == "tot_do" && kind == "r"){
        var default_position = new Array();

        default_position.push(
            new Position(x, y-68)           
        );

        default_position.forEach(e => {
            if (e.y < 271) {
                accept_position.push(e);
                accept_position.push(new Position(x + 68, y));
                accept_position.push(new Position(x - 68, y));
            }
            else {
                accept_position.push(e);
            }
        });   
        return accept_position;
    }
    
    if (name == "voi_do1" && kind == "r") {
        var default_position = new Array();
        default_position.push(
            new Position(x - 136, y - 136),
            new Position(x + 136, y - 136),
            new Position(x + 136, y + 136),
            new Position(x - 136, y + 136)
        );
        default_position.forEach(e => {
            if (true) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }

    if (name == "ma_do1" && kind == "r") {
        var default_position = new Array();
        default_position.push(
            new Position(x - 68, y - 136),
            new Position(x + 68, y - 136),
            new Position(x - 136, y - 68),
            new Position(x - 136, y + 68),
            new Position(x + 136, y - 68),
            new Position(x + 136, y + 68),
            new Position(x - 68, y + 136),
            new Position(x + 68, y + 136),
        );
        default_position.forEach(e => {
            if (true) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }

    if (name == "tuong_do" && kind == "r") {
        var default_position = new Array();
        default_position.push(
            new Position(x - 68, y),
            new Position(x + 68, y),
            new Position(x, y - 68),
            new Position(x, y + 68)
        );
        default_position.forEach(e => {
            if (true) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }

    if (name == "si_do1" && kind == "r") {
        var default_position = new Array();
        default_position.push(
            new Position(x - 68, y - 68),
            new Position(x + 68, y - 68),
            new Position(x - 68, y + 68),
            new Position(x + 68, y + 68)
        );
        default_position.forEach(e => {
            if (true) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }

    //Co den
    if (name == "tot_den" && kind == "b") {
        var default_position = new Array();
        default_position.push(
            new Position(x, y + 68)
        );
        default_position.forEach(e => {
            if (e.y > 338) {
                accept_position.push(e);
                accept_position.push(new Position(x + 68, y));
                accept_position.push(new Position(x - 68, y));
            }
            else {
                accept_position.push(e);
            }
        });
        return accept_position;
    }
    if (name == "voi_den1" && kind == "b") {
        var default_position = new Array();
        default_position.push(
            new Position(x + 136, y + 136),
            new Position(x - 136, y + 136),
            new Position(x - 136, y - 136),
            new Position(x + 136, y - 136)
        );
        default_position.forEach(e => {
            if (e.y < 275) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }
    if (name == "ma_den1" && kind == "b") {
        var default_position = new Array();
        default_position.push(
            new Position(x - 68, y - 136),
            new Position(x + 68, y - 136),
            new Position(x - 136, y - 68),
            new Position(x - 136, y + 68),
            new Position(x + 136, y - 68),
            new Position(x + 136, y + 68),
            new Position(x - 68, y + 136),
            new Position(x + 68, y + 136),
        );
        default_position.forEach(e => {
            if (true) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }
    if (name == "tuong" && kind == "b") {
        var default_position = new Array();
        default_position.push(
            new Position(x, y + 68),
            new Position(x, y - 68),
            new Position(x - 68, y),
            new Position(x + 68, y)
        );
        default_position.forEach(e => {
            if (e.y < 140) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }
    if (name == "si_den1" && kind == "b") {
        var default_position = new Array();
        default_position.push(
            new Position(x - 68, y + 68),
            new Position(x + 68, y + 68),
            new Position(x - 68, y - 68),
            new Position(x + 68, y - 68)
        );
        default_position.forEach(e => {
            if (e.y < 150) {
                accept_position.push(e);
            }
        });
        return accept_position;
    }
}