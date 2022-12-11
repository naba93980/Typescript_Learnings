interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst?: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto, Story {

    public cameraMode: string = "bokeh";
    public filter: string = "rgb";
    constructor() { }
    
    createStory(): void {
        console.log("story created");
    }
}

const newAcc = new Instagram();
newAcc.createStory()