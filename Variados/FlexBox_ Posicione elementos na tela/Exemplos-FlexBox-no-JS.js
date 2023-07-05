const container = document.querySelector('.container');
const items = document.querySelectorAll('.item');

container.style.display = 'flex';
container.style.flexDirection = 'row'; // or 'column' for vertical layout
container.style.alignItems = 'center'; // align items vertically
container.style.justifyContent = 'space-around'; // distribute items evenly

items.forEach(item => {
  item.style.flexBasis = '100px'; // initial size of items
  item.style.flexGrow = '1'; // allow items to grow
});
