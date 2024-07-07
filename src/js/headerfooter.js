import { getJson } from './dataServices';
import { renderListWithTemplate } from './display';
import { qs } from './utils';

let headerEl = qs('header');
let footerEl = qs('footer');

let showMenu = false;

export default async function renderHeaderFooter() {
  let header = `
    <div class="header-area">
      <div class="site-title" onclick="location.href = '/'">galactic<br />travels</div>
      <button class="menu-button" type="button">&#9776;</button>
    </div>`;

  let nav = `<div id="header-nav" class="header-menu hidden">
      <ul class="menu">
        <li onclick="location.href = '/'">Home</li>
        <li onclick="location.href = '/destination/'">Destinations</li>
        <li onclick="location.href = '/about/'">About</li>
      </ul>
    </div>`;

  const menu = await getJson('menu');
  

  let footer = `<p>&copy; Not a real website</p>
  <div id="footer-planet"></div>`;

  headerEl.textContent = '';
  headerEl.insertAdjacentHTML('afterbegin', header);
  headerEl.insertAdjacentHTML('beforeend', nav);

  footerEl.textContent = '';
  footerEl.insertAdjacentHTML('afterbegin', footer);

  renderListWithTemplate(menu, menuFn, '.menu');

  // menu toggle event listener
  document.addEventListener('click', (event) => {
    let target = event.target.closest('.menu-button');
    if (target) {
      toggleMenu();
    }
  });

  // render stars
  let stars = `<div id="stars"></div>
  <div id="stars2"></div>
  <div id="stars3"></div>`;

  headerEl.insertAdjacentHTML('beforebegin', stars);

  const values = generateRandomCoords(700);
  const values2 = generateRandomCoords(200);
  const values3 = generateRandomCoords(100);

  document.getElementById('stars').style.setProperty('--star-coords', values);
  document
    .getElementById('stars2')
    .style.setProperty('--star-coords2', values2);
  document
    .getElementById('stars3')
    .style.setProperty('--star-coords3', values3);

  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function generateRandomCoords(length) {
  let output = '';
  for (let i = 0; i < length; i++) {
    const x = Math.floor(Math.random() * document.documentElement.clientWidth);
    const y = Math.floor(
      Math.random() * document.documentElement.clientHeight +
        Math.random() * 2000,
    );

    if (i < length - 1) output += `${x}px ${y}px #FFF, `;
    else output += `${x}px ${y}px #FFF`;
  }
  return output;
}

function toggleMenu() {
  showMenu = !showMenu;
  let menu = qs('#header-nav');
  let menuBtn = qs('.menu-button');
  if (showMenu) {
    menu.classList.add('menu-open');
    menu.classList.remove('hidden');
    menuBtn.innerHTML = '&times;';
  } else {
    menu.classList.add('hidden');
    menu.classList.remove('menu-open');
    menuBtn.innerHTML = '&#9776;';
  }
}

function menuFn(item) {
  let menuItem = `<li class="menu-item" onclick="location.href = '${item.url}'">${item.title}</li>`;
  if (item.submenu) {
    menuItem = `<li class="menu-item supermenu" onclick="location.href = '${item.url}'">${item.title}</li>`;
    let submenuItems = renderListWithTemplate(
      item.submenu,
      submenuFn,
      '.menu',
      false,
      'beforeend',
      false,
    );
    menuItem += submenuItems;
  }

  return menuItem;
}

function submenuFn(item) {
  return `<li class="menu-item submenu" onclick="location.href = '${item.url}'">${item.title}</li>`;
}
