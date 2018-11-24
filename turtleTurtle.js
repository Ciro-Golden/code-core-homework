class Turtle { // we create a Class turtle &
    /* using a constructor will makes it easy to create multiple objects(this.x, this.y, this.path, 
    this.direction ) with the same properties and methods. */
    //The static keyword(constructor) defines a static method for a class
    constructor(x, y) {
            this.x = x;
            this.y = y;
            /*In most cases, the value of THIS is determined by how a function is called. 
            It can't be set by assignment during execution, and it may be different each 
            time the function is called */
            this.path = [
                [x, y]
            ];
            this.direction = 1;
        }
        /* Any methods defined in the body class is considered a prototype method.*/
    right() {
            if (this.direction === 3) {
                this.direction = 0;
            } else {
                this.direction++;
            }
            return this;
        }
        /* Any methods defined in the body class is considered a prototype method.*/

    left() {
        if (this.direction === 0) {
            this.direction = 3;
        } else {
            this.direction--;
        }
        return this;
    }

    /* Any methods defined in the body class is considered a prototype method.*/

    forward(distance) {
            for (let i = 0; i < distance; i++) {
                this.step();
            }
            return this;
        }
        /* Any methods defined in the body class is considered a prototype method.*/

    step() {
        switch (this.direction) {
            case 0:
                this.y--;
                this.path.push([this.x, this.y]);
                break;
            case 1:
                this.x++;
                this.path.push([this.x, this.y]);
                break;
            case 2:
                this.y++;
                this.path.push([this.x, this.y]);
                break;
            case 3:
                this.x--;
                this.path.push([this.x, this.y]);
        }
    }

    allPoints() {
            return this.path;
        }
        /* Any methods defined in the body class is considered a prototype method.*/
    print() {
        /* print() uses a For statment and a If/Else statement to print * if 
                (j,i) is += * else  " "  */

        for (let i = this.minY(); i <= this.maxY() + 1; i++) {
            let star = '';
            for (let j = this.minX(); j <= this.maxX() + 1; j++) {
                if (this.isPath(j, i)) {
                    star += "*";
                } else {
                    star += " ";
                }
            }
            console.log(star);
        }
    }
    minX() {
        let min = 0;
        for (let i = 0; i < this.path.length; i++) {
            if (this.path[i][0] < min) {
                min = this.path[i][0];
            }
        }
        return min;
    }
    minY() {
        let min = 0;
        for (let i = 0; i < this.path.length; i++) {
            if (this.path[i][1] < min) {
                min = this.path[i][1];
            }
        }
        return min;
    }
    maxX() {
        let max = this.path[0][0];
        for (let i = 1; i < this.path.length; i++) {
            if (this.path[i][0] > max) {
                max = this.path[i][0];
            }
        }
        return max;
    }
    maxY() {
        let max = this.path[0][1];
        for (let i = 1; i < this.path.length; i++) {
            if (this.path[i][1] > max) {
                max = this.path[i][1];
            }
        }
        return max;
    }
    isPath(x, y) {
        for (let i = 0; i < this.path.length; i++) {
            if (this.path[i][0] == x && this.path[i][1] == y) {
                return true;
            }
        }
        return false; /* if we still havent matched x,y return false  */
    }
}

new Turtle(0, 0)
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .right()
    .forward(5)
    .print()