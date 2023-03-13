const menuOpen = document.getElementById('nav-icon');

let div;
let background;

menuOpen.addEventListener('click', () => {
  if(Array.from(menuOpen.attributes)[0].nodeValue === './assets/images/icon-menu.svg') {
    menuOpen.setAttribute('src', './assets/images/icon-menu-close.svg');
    handleMenuOpen();
  } else {
    menuOpen.setAttribute('src', './assets/images/icon-menu.svg');
    handleMenuClose();
  }
})

function handleMenuOpen() {
  background = document.createElement('div');
  background.style.width = '100%';
  background.style.height = '100vh';
  background.style.backgroundColor = 'var(--very-dark-blue)';
  background.style.position = 'absolute';
  background.style.top = 0;
  background.style.opacity = '0.3'
  document.body.append(background);

  div = document.createElement('div');
  div.style.backgroundColor = 'white';
  div.style.width = '60%';
  div.style.position = 'absolute';
  div.style.top = '0';
  div.style.right = '0';
  div.style.zIndex = '2';
  div.style.height = '100vh';
  
  let list = document.createElement('ul');

  let home = document.createElement('li');
  let newLi = document.createElement('li');
  let popular = document.createElement('li');
  let trending = document.createElement('li');
  let categories = document.createElement('li');

  home.className = 'menu-item';
  newLi.className = 'menu-item';
  popular.className = 'menu-item';
  trending.className = 'menu-item';
  categories.className = 'menu-item';

  home.innerText = 'Home';
  newLi.innerText = 'New';
  popular.innerText = 'Popular';
  trending.innerText = 'Trending';
  categories.innerText = 'Categories';
  
  list.append(home, newLi, popular, trending, categories);

  list.style.listStyle = 'none';
  list.style.lineHeight = '40px';
  list.style.marginTop = '150px';
  list.style.marginLeft = '-15px';


  div.append(list);

  document.body.append(div);
}

function handleMenuClose() {
  if(div) {
    div.remove();
  }
  if(background) {
    background.remove();
  }
}