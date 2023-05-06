class Player{
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h; 
    }

    show(){
        push()
        imageMode(CENTER)
        image(playerImage, this.x, this.y, this.w, this.h)

        pop();
    }
}