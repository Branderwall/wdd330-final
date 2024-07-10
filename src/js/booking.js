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
  `<p>From: ${capitalize(from)}</p>
  <p>To: ${capitalize(to)}</p>
  <p>Leave By: ${leaveDate}</p>
  <p>Arrive By: ${arriveDate}</p>
  <p>Travelers: ${travelerCount}</p>
  <p>RoundTrip: ${roundtrip ? 'Yes' : 'No'}</p>`;

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
