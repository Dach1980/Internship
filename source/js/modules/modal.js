import { selectOption, closeSelectOptions } from './select.js';

const modalElement = document.querySelector('.modal');
const pageBodyElement = document.querySelector('.page-body');
const openModalButton = document.querySelector('.about__button');
const closeModalButton = document.querySelector('.modal__close-button');
const modalInputFields = document.querySelectorAll('.modal__field');
const selectFields = document.querySelectorAll('.select__field');

const isEscapeKey = (evt) => evt.key === 'Escape';

const showModal = () => {
  modalElement.classList.remove('visually-hidden');
  modalElement.classList.add('modal--opened');
  pageBodyElement.classList.add('page-body--menu');
  selectOption();
};

const hideModal = () => {

  modalElement.classList.add('visually-hidden');
  pageBodyElement.classList.remove('page-body--menu');
};

openModalButton.addEventListener('click', () => {
  for (let i = 0; i < selectFields.length; i++) {
    selectFields[i].value = '';
  }

  showModal();
});

closeModalButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  for (let i = 0; i < modalInputFields.length; i++) {
    modalInputFields[i].value = '';
  }

  for (let i = 0; i < selectFields.length; i++) {
    selectFields[i].value = '';
  }

  hideModal();
  closeSelectOptions();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();

    for (let i = 0; i < modalInputFields.length; i++) {
      modalInputFields[i].value = '';
    }

    for (let i = 0; i < selectFields.length; i++) {
      selectFields[i].value = '';
    }

    hideModal();
  }
});

document.addEventListener('click', (evt) => {
  const target = evt.target;
  const itsModal = target === modalElement || modalElement.contains(target);
  const itsModalOpenButton = target === openModalButton;
  const modalIsActive = modalElement.classList.contains('modal--opened');

  if (!itsModal && !itsModalOpenButton && modalIsActive) {
    hideModal();
  }
});
