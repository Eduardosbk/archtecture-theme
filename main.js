
window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').classList.add('display')
  }, 1000);
};

document.querySelector('.hamburguer-menu').addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
  document.querySelector('body').classList.toggle('active');
});

function closeMenu() {
  document.querySelector('.container').classList.toggle('change');
  document.querySelector('body').classList.remove('active');
};


