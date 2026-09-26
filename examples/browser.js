import { createQuantsPlugin } from "../src/quants.js";

const quants = createQuantsPlugin();
const pink = await quants.collect({ topic:"Pink Floyd", tags:["music"] });
const bangkok = await quants.collect({ topic:"Bangkok", tags:["place"] });
await quants.flip(pink,bangkok,{ relation:"bit-flip", weight:1 });

console.log(quants.newsSeeds("Pink Floyd",{depth:2}));
