import './index.scss';
import {Application, Loader} from './Aliases';
import SpriteMap from './utils/SpriteMap';
import {BaseGameManager} from './ecs/GameManager';
import * as Entities from './game/Entities';
import SceneOne from './game/scenes/SceneOne';
import SceneTwo from './game/scenes/SceneTwo';
import PixiSceneManager from './utils/PixiSceneManager';

const app = new Application();
document.body.appendChild(app.view);

const mgr = new PixiSceneManager(app);

const spriteMap = new SpriteMap();

const gm = new BaseGameManager();
Entities.paladin("p1", 100, 100, gm.cm);
Entities.paladin("p2", 150, 150, gm.cm);
Entities.ranger("r1", 200, 200, gm.cm);

Loader
    .add("creatures", "dist/creatures.png")
    .add("world", "dist/world.png")
    .load(setup);

function setup() {
    spriteMap.load("paladin1", "dist/creatures.png", 24, 24, 24, 24);
    spriteMap.load("paladin2","dist/creatures.png", 24, 48, 24, 24);
    spriteMap.load("ranger1", "dist/creatures.png", 48, 24, 24, 24);
    spriteMap.load("ranger2", "dist/creatures.png", 48, 48, 24, 24);
    spriteMap.load("wall2_x", "dist/world.png", 24, 48, 24, 24);
    spriteMap.load("wall2_ul", "dist/world.png", 408, 48, 24, 24);
    spriteMap.load("wall2_ur", "dist/world.png", 432, 48, 24, 24);
    spriteMap.load("wall2_ll", "dist/world.png", 456, 48, 24, 24);
    spriteMap.load("wall2_lr", "dist/world.png", 480, 48, 24, 24);
    spriteMap.load("wall2_v", "dist/world.png", 360, 48, 24, 24);
    spriteMap.load("wall2_h", "dist/world.png", 288, 48, 24, 24);
    spriteMap.load("floor_check_big", "dist/world.png", 120, 48, 24, 24);
    spriteMap.load("floor_check_small", "dist/world.png", 96, 48, 24, 24);

    const sceneOne = new SceneOne(gm, spriteMap, mgr);
    const sceneTwo = new SceneTwo(gm, spriteMap, mgr);
    mgr.setScreens([sceneOne, sceneTwo]);

}

