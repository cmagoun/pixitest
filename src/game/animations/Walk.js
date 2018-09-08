import Frames from "./Frames";
import Slide from "./Slide";

export default class Walk {
    constructor(spriteMap, frames, from, to, speed) {
        this.spriteMap = spriteMap;
        this.frames = frames; //array of textures ?? or names?
        this.initialized = false;

        this.frames = new Frames(spriteMap, frames, 150, true);
        this.slide = new Slide(from, to, speed);

        this.flip = this.slide.direction.x > 0;
    }

    init(entity, cm, time) {
        this.frames.init(entity, cm, time);
        this.slide.init(entity, cm, time);

        if(this.flip) {
            entity.sprite.ref.scale.x = -1;
            entity.sprite.ref.anchor.x = 1;
        } else {
            entity.sprite.ref.scale.x = 1;
            entity.sprite.ref.anchor.x = 0;
        }
    }

    update(entity, cm, time) {
        this.frames.update(entity, cm, time);
        this.slide.update(entity, cm, time);
    }

    done(entity, cm, time) {
        return this.slide.done(entity, cm, time);
    }

    complete(entity, cm) {
        this.frames.complete(entity, cm);
        this.slide.complete(entity, cm);
    }
}

