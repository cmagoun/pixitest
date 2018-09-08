import Scene from './Scene';
import Walk from '../animations/Walk';

export default class SceneOne extends Scene {
    constructor(gm, spriteMap, mgr) {
        super(gm, spriteMap, mgr);
        this.onClick = this.handleClick.bind(this);
        this.clicks = 0;
    } 

    init() {
        document.addEventListener("click", this.onClick);

        const entities = this.gm.entities();
        entities.forEach(e => {
            const sprite = this.spriteMap.getSprite(e, this.gm.cm);
            this.container.addChild(sprite);
        });
    }

    handleClick() {
        const pally = this.gm.entity("p1");

        const multiplier = this.clicks%2 === 0
            ? 1
            : -1;

        this.clicks++;

        const from = {x:pally.sprite.x, y:pally.sprite.y};
        const to = {x:pally.sprite.x + (96 * multiplier), y:pally.sprite.y};

        this.gm.animate(
            pally.id, 
            new Walk(
                this.spriteMap, 
                ["paladin1", "paladin2"],
                from,
                to,
                1.0));
    }
}