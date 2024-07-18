import { getStorage } from './dataServices';
import renderHeaderFooter from './headerfooter';
import { capitalize, fullDate, qs, setData } from './utils';

renderHeaderFooter();
getCart();

function getCart() {

  const cart = getStorage('gt_stor');
  let summary = cart
    ? getBill(cart)
    : `<h2>Your cart is empty.</h2>`;
  setData('#checkout-summary', summary);
}

function getBill(cart) {
  const pricePerTraveler = 1000;
  const tax = 0.06;
  const travelerInsurance = 200;
  let subtotal = pricePerTraveler * cart['traveler-count'];
  let taxPrice = subtotal * tax;
  let total = subtotal + taxPrice + travelerInsurance;

  let ticket = `<h2>Trip Summary</h2>
            <p>
              Passage for ${cart['traveler-count']} Traveler${cart['traveler-count'] > 1 ? 's' : ''} from ${capitalize(cart.from)} to ${capitalize(cart.to)} on ${fullDate(cart['leave-date'])}.${(cart.roundtrip && cart['return-date'])? ' Return trip on ' + fullDate(cart['return-date']) + '.' : ''}
            </p>
            <hr />
            <p class="bill-item">
              <span>${cart['traveler-count']} Traveler${cart['traveler-count'] > 1 ? 's' : ''}:</span
              ><span><span class="credits">$</span>${subtotal}</span>
            </p>
            <p class="bill-item">
              <span>Tax & Fees:</span
              ><span><span class="credits">$</span>${taxPrice}</span>
            </p>
            <p class="bill-item">
              <span>Travel Insurance:</span
              ><span><span class="credits">$</span>${travelerInsurance}</span>
            </p>
            <hr />
            <p class="bill-item">
              <span>Total:</span><span><span class="credits">$</span>${total}</span>
            </p>
            <button type="submit" class="full-width">Checkout</button>`

  return ticket;
}
