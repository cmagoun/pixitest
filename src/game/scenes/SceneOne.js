import Scene from './Scene';

export default class SceneOne extends Scene {
    constructor(gm, spriteMap, mgr) {
        super(gm, spriteMap, mgr);
    } 

    init() {
        const entities = this.gm.entities();
        entities.forEach(e => {
            const sprite = this.spriteMap.getSprite(e, this.gm.cm);
            this.container.addChild(sprite);
        });
    }
}