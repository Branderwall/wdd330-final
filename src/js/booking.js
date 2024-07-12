import { getAPI, getJson, planetSchema } from './dataServices';
import { renderDestination, renderSlider } from './display';
import renderHeaderFooter from './headerfooter';
import { capitalize, getParam, setData } from './utils';

renderHeaderFooter();
getBooking();

function getBooking() {
  let from = getParam('from');
  let to = getParam('to');
  let leaveDate = getParam('leave-date');
  let returnDate = getParam('return-date');
  let travelerCount = getParam('traveler-count');
  let roundtrip = getParam('roundtrip');

  let travelArrow = `<div class="icon travel-arrow"></div>`;
  travelArrow += roundtrip ? `<div class="icon travel-arrow2"></div>` : ``;

  let bookingSummary = `<section class="travel-from">
      <p>From: ${capitalize(from)}</p>
      <i class="fa-solid fa-arrow-down-long"></i>
      <div class="circle" style="background: var(--color-${from})"></div>
      <p>Leave By: ${leaveDate}</p>
    </section>
    <section class="travel-through">
      <p>Travelers: ${travelerCount}</p>
      <div class="travel-arrow-container">${travelArrow}</div>
      <p>RoundTrip: ${roundtrip ? 'Yes' : 'No'}</p>
    </section>
    <section class="travel-to">
      <p>To: ${capitalize(to)}</p>
      <div class="circle" style="background: var(--color-${to})"></div>
      <p>Return On: ${returnDate}</p>
    </section>`;

  setData('#booking-summary', bookingSummary);

  /*
  from=Alderaan
  to=Coruscant
  leave-date=2024-07-24
  arrive-date=2024-08-01
  traveler-count=3
  roundtrip=on

  */

  // renderSlider(sliderName);
}
