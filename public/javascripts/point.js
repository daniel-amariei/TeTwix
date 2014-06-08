var Point = function (x, y) {
    this.x = x;
    this.y = y;

    this.left = function () {
        this.x--;
    };

    this.right = function () {
        this.x++;
    };

    this.down = function () {
        this.y++;
    };
};
