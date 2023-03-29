const btnTheme = document.getElementById('header__btn');
const root = document.querySelector(':root');

btnTheme.addEventListener('click', () => {
  root.classList.toggle('light-theme')
})