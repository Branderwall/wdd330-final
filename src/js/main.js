import renderHeaderFooter from './headerfooter.js';
import { renderSlider } from './display.js';
import { getAPI, planetFilter } from './dataServices.js';
// import { getFandom } from './externalApi.js';

renderHeaderFooter();
renderSlider();
// getFandom();


let planetData = await getAPI('planets/', planetFilter);
// console.log('planetData: ' + JSON.stringify(planetData[0]));