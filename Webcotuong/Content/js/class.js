class Position {

    //Class để lưu vị trí con cờ

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    
}


class pieces{
    constructor(name, kind, image, position){
        this.name = name;
        this.kind = kind;
        this.image = image;
        this.position = position;
    }
}