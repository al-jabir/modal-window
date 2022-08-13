const modal = document.querySelector('.modal');
const showButton = document.querySelectorAll('.show-modal');
const closeButton = document.querySelector('.close-modal');
const overLay = document.querySelector('.overlay');

window.onload = () => {
  showButton.forEach(list => {
    list.addEventListener('click', () => {
      modal.classList.remove('hidden');
      overLay.classList.remove('hidden');
    });
  });

  closeButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
  });
};
