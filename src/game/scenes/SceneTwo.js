import Scene from './Scene';

export default class SceneTwo extends Scene {
    constructor(gm, spriteMap, mgr) {
        super(gm, spriteMap, mgr);
    }

    init() {
        const sprite = this.spriteMap.get("wall2_x");
        sprite.x = 250;
        sprite.y = 10;
        this.container.addChild(sprite);
        // const text = new Text("TEST ME");
        // text.x = 250;
        // text.y = 10;
        //text.style={fill:"#ffffff"};

        //this.container.addChild(text);
    }
}