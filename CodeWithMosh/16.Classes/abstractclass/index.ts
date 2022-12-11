abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    abstract printCameraMode(): void;
    printFilter() {
        console.log(this.filter);
    };
}

class Instagram extends TakePhoto{
    constructor(camMode:string,filter:string) {
        super(camMode, filter);
    }
    printCameraMode() {
        console.log("camera mode is bokeh");
    }
}

const photo1 = new Instagram("test", "tiger");
photo1.printFilter();
photo1.printCameraMode();