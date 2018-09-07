import {TexCache, Texture} from '../Aliases';
import { Rectangle, Sprite } from 'pixi.js';

export default class SpriteMap {
    constructor() {
        this.dc = new Map();
    }

    load(key, sheet, x, y, w, h) {
        const tex = TexCache[sheet];
  
        const rec = new Rectangle(x, y, w, h);
        const newTex = new Texture(tex, rec);

        this.dc.set(key, {sprite: new Sprite(newTex), frame:rec});
    }

    get(key) {
        const result =  this.dc.get(key);
        const newTex = new Texture(result.sprite.texture, result.frame);
        return new Sprite(newTex);
    }
}