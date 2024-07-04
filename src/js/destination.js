import { getAPI, planetSchema } from "./dataServices";
import { renderDestination } from "./display";
import renderHeaderFooter from "./headerfooter";
import { getParam } from "./utils";


renderHeaderFooter();
await getDestination();




async function getDestination() {
  let name = getParam('name');
  let planetData = await getAPI(`/planets/?search=${name}`, planetSchema);
  console.log("planetData: ", JSON.stringify(planetData[0]));
  renderDestination(planetData[0]);
}