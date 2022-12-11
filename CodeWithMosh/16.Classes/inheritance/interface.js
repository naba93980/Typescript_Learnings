var Instagram = /** @class */ (function () {
    function Instagram() {
        this.cameraMode = "bokeh";
        this.filter = "rgb";
    }
    Instagram.prototype.createStory = function () {
        console.log("story created");
    };
    return Instagram;
}());
var newAcc = new Instagram();
newAcc.createStory();
