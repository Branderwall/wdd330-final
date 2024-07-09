import renderHeaderFooter from './headerfooter.js';
import { renderListWithTemplate, renderSlider } from './display.js';
import { getJson } from './dataServices.js';
// import { getFandom } from './externalApi.js';

renderHeaderFooter();
renderSlider('slider-home');
bookingForm();


async function bookingForm() {
  let destinationList = await getJson('destination-list');
  let list = destinationList.map((location) => location.name);
  renderListWithTemplate(list, formOptionFn, '#from-list');
  renderListWithTemplate(list, formOptionFn, '#to-list');
}


function formOptionFn(listItem) {
  return `<option value="${listItem}">`
}