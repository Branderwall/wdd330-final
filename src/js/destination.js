import { getAPI, getJson, planetSchema } from './dataServices';
import { renderDestination, renderSlider } from './display';
import renderHeaderFooter from './headerfooter';
import { getParam } from './utils';

renderHeaderFooter();
await getDestination();

async function getDestination() {
  let name = getParam('name');
  let sliderName = '';
  if (name) {
    sliderName = `slider-${name}`;
    renderSlider(sliderName);
    let planetData = await getAPI(`/planets/?search=${name}`, planetSchema);
    let planetDescription = await getJson(name);

    await renderDestination(planetData[0], planetDescription);
  } else {
    sliderName = 'slider-home';
    renderSlider(sliderName);
  }

  // renderSlider(sliderName);
}
