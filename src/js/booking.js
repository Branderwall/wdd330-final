import { setStorage } from './dataServices';
import renderHeaderFooter from './headerfooter';
import { capitalize, getParams, setData, fullDate } from './utils';

renderHeaderFooter();
getBooking();

document.forms['checkout'].addEventListener('submit', (event) => {
  event.preventDefault();
  location.href = '/checkout/';
});

function getBooking() {
  let bookingData = getParams();

  let from = bookingData.from;
  let to = bookingData.to;
  let leaveDate = bookingData['leave-date'];
  let returnDate = bookingData['return-date'];
  let travelerCount = bookingData['traveler-count'];
  let roundtrip = bookingData.roundtrip;

  let travelArrow = `<div class="icon travel-arrow"></div>`;
  travelArrow += roundtrip ? `<div class="icon travel-arrow2"></div>` : ``;

  let bookingSummary = `<section class="travel-from">
      <p>From: ${capitalize(from)}</p>
      <i class="fa-solid fa-arrow-down-long"></i>
      <div class="circle" style="background: var(--color-${from})"></div>
      <p>Leave By: ${fullDate(leaveDate)}</p>
    </section>
    <section class="travel-through">
      <p>Travelers: ${travelerCount}</p>
      <div class="travel-arrow-container">${travelArrow}</div>
      <p>Round Trip: ${roundtrip ? 'Yes' : 'No'}</p>
    </section>
    <section class="travel-to">
      <p>To: ${capitalize(to)}</p>
      <div class="circle" style="background: var(--color-${to})"></div>
      <p>Return On: ${fullDate(returnDate)}</p>
    </section>`;

  setData('#booking-summary', bookingSummary);

  setStorage('gt_stor', bookingData);

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