import renderHeaderFooter from './headerfooter.js';
import { getJson } from './dataServices.js';
import { renderSlider } from './display.js';

renderHeaderFooter();

let data = await getJson('slider');
let homeSlider = data.images;

renderSlider(homeSlider);

