import * as Vector from '../../utils/vector';
//import * as Animate from './Animate';

//because this moves a sprite, this checks followers
class Slide {
    constructor(from, to, speed) {
        this.speed = speed;
        this.from = from;
        this.to = to;
        this.initialized = false;

        //this.followerPos = new Map();

        const vec = Vector.subtract(to)(from);
        this.direction = Vector.normalized(vec);
    }

    init(entity, cm, time) {
        //Animate.initFollowerPos(entity, this.from, this.followerPos, cm);
        //cm.editComponentOf(entity.id, "sprite", {draw: entity.sprite.draw});
        const pixiSprite = entity.sprite.ref;
        pixiSprite.x = entity.sprite.x;
        pixiSprite.y = entity.sprite.y;
    }

    update(entity, cm, time) {
        this.transform(entity, cm);
        //Animate.setFollowerPosition(entity, this.followerPos, cm);
    }

    transform(entity, cm) {
        const pixiSprite = entity.sprite.ref;
        pixiSprite.x += this.direction.x * this.speed;
        pixiSprite.y += this.direction.y * this.speed;


        // const draw = entity.sprite.draw;
        // draw.x += this.direction.x * this.speed;
        // draw.y += this.direction.y * this.speed;
        // cm.editComponentOf(entity.id, "sprite", {draw});
    }

    done(entity, cm, time) {
        const pixiSprite = entity.sprite.ref;
        const draw = {x:pixiSprite.x, y:pixiSprite.y};

        const dist = Vector.subtract(draw)(this.to);
        return Vector.magSqr(dist) < 2; //figure out whether we are using px or spaces
    }

    complete(entity, cm) {
        //entity.edit("sprite", {draw:{x: entity.pos.vec.x, y:entity.pos.vec.y}});
        //Animate.setFollowerPosition(entity, this.followerPos, cm);
        const pixiSprite = entity.sprite.ref;
        pixiSprite.x = this.to.x;
        pixiSprite.y = this.to.y;

        cm.editComponentOf(entity.id, "sprite", {x:this.to.x, y:this.to.y});
    }
}

export default Slide;