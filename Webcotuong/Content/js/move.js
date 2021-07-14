function getMove(name, kind, position){
    var accept_position = new Array();
    var x = Number.parseInt(position.x);
    var y = Number.parseInt(position.y);
    
    if(name == "tot_do" && kind == "r"){
        var default_position = new Array();
        default_position.push(
            new Position(x, y-67)           
        );
        default_position.forEach(e => {
            if (e.y < 271) {
                accept_position.push(e);
                accept_position.push(new Position(x + 67, y));
                accept_position.push(new Position(x - 67, y));
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
            new Position(x - 134, y - 134),
            new Position(x + 134, y - 134)
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
            new Position(x - 67, y - 134),
            new Position(x + 67, y - 134),
            new Position(x - 134, y - 67),
            new Position(x - 134, y + 67),
            new Position(x + 134, y - 67),
            new Position(x + 134, y + 67),
            new Position(x - 67, y + 134),
            new Position(x + 67, y + 134),
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
            new Position(x - 67, y),
            new Position(x + 67, y),
            new Position(x, y - 67),
            new Position(x, y + 67)
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
            new Position(x - 67, y - 67),
            new Position(x + 67, y - 67),
            new Position(x - 67, y + 67),
            new Position(x + 67, y + 67)
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
            new Position(x, y + 67)
        );
        default_position.forEach(e => {
            if (e.y > 338) {
                accept_position.push(e);
                accept_position.push(new Position(x + 67, y));
                accept_position.push(new Position(x - 67, y));
            }
            else {
                accept_position.push(e);
            }
        });
        return accept_position;
    }
}