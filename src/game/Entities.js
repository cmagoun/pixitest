import * as Components from './Components';

export const paladin = (name, x, y, cm) => {
    return cm.createEntity(name)
        .add(Components.sprite("paladin1", x, y));
};

export const ranger = (name, x, y, cm) => {
    return cm.createEntity(name)
        .add(Components.sprite("ranger1", x, y));
};

export const wall = (spriteName, x, y, cm) => {
    return cm.createEntity(`wall_${x}_${y}`)
        .add(Components.sprite(spriteName, x, y))
        .add(Components.tag("wall"));
};