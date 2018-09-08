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
Entities.paladin("p1", 24, 24, gm.cm);


Loader
    .add("creatures", "dist/creatures.png")
    .add("world", "dist/world.png")
    .load(setup);

function setup() {
    spriteMap.loadTexture("paladin1", "dist/creatures.png", 24, 24, 24, 24);
    spriteMap.loadTexture("paladin2","dist/creatures.png", 24, 48, 24, 24);
    spriteMap.loadTexture("ranger1", "dist/creatures.png", 48, 24, 24, 24);
    spriteMap.loadTexture("ranger2", "dist/creatures.png", 48, 48, 24, 24);
    spriteMap.loadTexture("wall2_x", "dist/world.png", 24, 48, 24, 24);
    spriteMap.loadTexture("wall2_ul", "dist/world.png", 408, 48, 24, 24);
    spriteMap.loadTexture("wall2_ur", "dist/world.png", 432, 48, 24, 24);
    spriteMap.loadTexture("wall2_ll", "dist/world.png", 456, 48, 24, 24);
    spriteMap.loadTexture("wall2_lr", "dist/world.png", 480, 48, 24, 24);
    spriteMap.loadTexture("wall2_v", "dist/world.png", 360, 48, 24, 24);
    spriteMap.loadTexture("wall2_h", "dist/world.png", 288, 48, 24, 24);
    spriteMap.loadTexture("floor_check_big", "dist/world.png", 120, 48, 24, 24);
    spriteMap.loadTexture("floor_check_small", "dist/world.png", 96, 48, 24, 24);
    spriteMap.loadTexture("floor_grey", "dist/world.png", 168, 48, 24, 24);

    const playerLayer = new SceneOne(gm, spriteMap, mgr);
    const floorLayer = new SceneTwo(gm, spriteMap, mgr);
    mgr.setScreens([floorLayer, playerLayer]);

    function gameLoop() {
        requestAnimationFrame(gameLoop);
        app.render(app.stage);
        //actually run a game loop that manages game state
        gm.runAnimations();
    }

    requestAnimationFrame(gameLoop);
}

