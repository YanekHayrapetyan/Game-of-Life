

/////////////////////////HUNTER/////////////////////////

var LivingCreature =require("./ClassSuper.js")
var Beast=require("./classBeast.js")
var random = require("./random.js");
module.exports =class Hunter extends LivingCreature{

    constructor(x, y, index) {
     super(x,y,index)
        this.energy = 25;
        this.killed = 0
        this.reload = 0
    }
    
    move() {
        super.move(0,1,3)
        this.leave();
   }
    leave() {

        for (var i in HunterArr) {
            if (HunterArr[i].killed >= 5 && this.energy > 0) {
                if (HunterArr[i].x == this.x && HunterArr.y == this.y) {
                
            
                                matrix[this.y][this.x] = this.remember;
                            HunterArr.splice(i, 1);
                            break;
                    
                }
            }
        }
    }
    kill() {
        if (this.reload == 0) {
            var newCell = random(super.chooseCell(2, 3, 3));
            if (newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
               
                for (var i in grassEaterArr) {
                    if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        matrix[newX][newY]=0
                  
                    }
                }
                for (var i in BeastArr) {
                    if (newX == BeastArr[i].x && newY == BeastArr[i].y) {
                        BeastArr.splice(i, 1);
                        matrix[newX][newY]=0
                       
                    }
                }
               
                this.killed += 1
            }
            this.reload = 3
        }
        this.reload -= 1
    }
    die() {
        if (this.energy <= 0 || super.chooseCell(0,0,1)==[]) {
                for (let i in HunterArr){
                    if (HunterArr[i].x==this.x && HunterArr[i].y==this.y){
                matrix[this.y][this.x] = 0
                HunterArr.splice(i, 1);
                    }
            }
            }
            var newCell = super.chooseCell(0, 0, 1)

    
    

            if (newCell) {
                for (var i in newCell) {
                    var newX = newCell[i][0];
                    var newY = newCell[i][1];
                    for (var i in grassArr) {
                        if (newX == grassArr[i].x && newY == grassArr[i].y) {
                            grassArr.splice(i, 1);
                            
                        }
                    }
                    matrix[newY][newX] = 0;
                    
                    matrix[newY][newX] = 3;

var newbeast = new Beast(newX, newY, 3)
                    BeastArr.push(newbeast)

                }
            }
        }

    

}


