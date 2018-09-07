export default class PixiSceneManager {
    constructor(app) {
        this.app = app;
        this.screens = [];
    }

    setScreens(screens) {
        this.app.stage.removeChildren();
        this.screens = screens;
        screens.forEach(s => {
            if(!s.initialized) s.init();
            this.app.stage.addChild(s.container);
        });
    }
}