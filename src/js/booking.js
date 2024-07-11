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
  let arriveDate = getParam('arrive-date');
  let travelerCount = getParam('traveler-count');
  let roundtrip = getParam('roundtrip');
   

  let bookingSummary = 
    `<section class="travel-from">
      <p>From: ${capitalize(from)}</p>
      <div class="circle" style="background: var(--color-${from})"></div>
      <p>Leave By: ${leaveDate}</p>
    </section>
    <section class="travel-through">
      <p>Travelers: ${travelerCount}</p>
      <div class="travel-arrow"></div>
      <p>RoundTrip: ${roundtrip ? 'Yes' : 'No'}</p>
    </section>
    <section class="travel-to">
      <p>To: ${capitalize(to)}</p>
      <div class="circle" style="background: var(--color-${to})"></div>
      <p>Arrive By: ${arriveDate}</p>
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
