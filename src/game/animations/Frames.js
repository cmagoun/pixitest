class Frames {
    constructor(spriteMap, frames, delayPerFrame, loop) {
        this.spriteMap = spriteMap;
        this.frames = frames; //array of textures ?? or names?
        this.delay = delayPerFrame;
        this.loop = loop || false;
        this.lasttime = 0.0;
        this.initialized = false;
        this.index = 0;
        this.orig = ""
    }

    init(entity, cm, time) {
        this.lasttime = time;
        this.orig = entity.sprite.name;
        this.swapToFrame(entity, 0);
        //cm.editComponentOf(entity.id, "sprite", {name:this.frames[0]});
    }

    update(entity, cm, time) {
        const elapsed = time - this.lasttime;
        if(elapsed >= this.delay) {
            this.lasttime = time;
            this.index++;
                
            if(this.index > this.frames.length-1 && this.loop) this.index = 0;
            const drawIndex = Math.min(this.index, this.frames.length-1)
            this.swapToFrame(entity, drawIndex);
            //cm.editComponentOf(entity.id, "sprite", {name:this.frames[drawIndex]});
        }
    }

    done(entity, cm, time) {
        return !this.loop && this.index > this.frames.length-1;
    }

    complete(entity, cm) {
        entity.sprite.ref.texture = this.spriteMap.getTexture(this.orig);
        //entity.edit("sprite", {name: this.orig});
    }

    swapToFrame(entity, index) {
        entity.sprite.ref.texture = this.spriteMap.getTexture(this.frames[index]);
    }

}

export default Frames;