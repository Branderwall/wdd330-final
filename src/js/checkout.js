import { getStorage } from './dataServices';
import renderHeaderFooter from './headerfooter';
import { setData } from './utils';

renderHeaderFooter();
getCart();

function getCart() {
  let cart = getStorage('gt_stor');
  let summary = '';
  if (cart) {
    summary = `<p>${JSON.stringify(cart)}</p>`;
  } else {
    summary = `<h2>Your cart is empty.</h2>`;
  }

  setData('#checkout-summary', summary);
}
