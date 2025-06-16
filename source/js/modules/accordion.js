const accordionPanelHeading = document.querySelectorAll('.faq__item');
const isEnterKey = (evt) => evt.key === 'Enter';

const accordionCLicked = () => {
  for (let i = 0; i < accordionPanelHeading.length; i++) {
    accordionPanelHeading[i].addEventListener('click', () => {
      accordionPanelHeading[i].classList.toggle('faq__item--active');

      if (accordionPanelHeading[i].classList.contains('faq__item--disabled')) {
        accordionPanelHeading[i].classList.remove('faq__item--active');
      }
    });

    accordionPanelHeading[i].addEventListener('keydown', (evt) => {
      if (isEnterKey(evt)) {
        accordionPanelHeading[i].classList.toggle('faq__item--active');
      }
    });
  }
};


accordionCLicked();
