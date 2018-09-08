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

    getSprite(entity, compMgr) {
        let resultSprite;

        if(!entity.sprite) return undefined;

        if(!entity.sprite.ref) {
            resultSprite = this.get(entity.sprite.name);
            resultSprite.x = entity.sprite.x;
            resultSprite.y = entity.sprite.y;
            compMgr.editComponentOf(entity.id, "sprite", {initialized:true});
        } else {
            resultSprite = entity.sprite.ref;
            if(!entity.sprite.initialized) {
                resultSprite.x = entity.sprite.x;
                resultSprite.y = entity.sprite.y;
            }
        } 

        return resultSprite;
    }
}