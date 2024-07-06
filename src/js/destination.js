import { getAPI, getJson, planetSchema } from './dataServices';
import { renderDestination, renderSlider } from './display';
import renderHeaderFooter from './headerfooter';
import { getParam } from './utils';

renderHeaderFooter();
await getDestination();

async function getDestination() {
  let name = getParam('name');
  let planetData = await getAPI(`/planets/?search=${name}`, planetSchema);
  let planetDescription = await getJson(name);
  const sliderName = (name) ? `slider-${name}` : 'slider-home';
  renderSlider(sliderName);

  await renderDestination(planetData[0], planetDescription);
}
