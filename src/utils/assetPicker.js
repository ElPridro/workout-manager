import { programs } from '../pages/programPage.js';

function pick(asset) {

    const assets = [];
    for (const program of programs) {
        assets.push(program.focusedMuscleGroups.banner)
    }

    const randomAssetPicker = Math.floor( Math.random() * assets.length )

    return assets[randomAssetPicker]
}