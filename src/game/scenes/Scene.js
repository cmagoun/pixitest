import { Container } from "../../Aliases";

export default class Scene {
    constructor(gm, spriteMap, sceneManager) {
        this.gm = gm;
        this.spriteMap = spriteMap;
        this.mgr = sceneManager;
        this.initialized = false;
        this.container = new Container();
    }
}