import renderHeaderFooter from './headerfooter.js';
import { renderSlider } from './display.js';
import { getAPI } from './dataServices.js';
// import { getFandom } from './externalApi.js';

renderHeaderFooter();
renderSlider();
// getFandom();


let planetData = await getAPI('planets/');
console.log('planetData: ' + planetData.length);