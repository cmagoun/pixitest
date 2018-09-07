import Scene from './Scene';

export default class SceneOne extends Scene {
    constructor(gm, spriteMap, mgr) {
        super(gm, spriteMap, mgr);
    } 

    init() {
        const entities = this.gm.entities();
        entities.forEach(e => {
            const sprite = this.spriteMap.get(e.sprite.name);
            sprite.x = e.sprite.x;
            sprite.y = e.sprite.y;
            this.container.addChild(sprite);
        });
    }
}