const phoneInputFields = document.querySelectorAll('input[name="phone"]');

for (let i = 0; i < phoneInputFields.length; i++) {
  let previousLength = 0;
  const handlePhoneInput = () => {
    phoneInputFields[i].addEventListener('input', () => {
      const value = phoneInputFields[i].value.replace(/\D/g, '');
      const currentLength = phoneInputFields[i].value.length;

      if (currentLength < previousLength) {
        previousLength--;
        return;
      }

      phoneInputFields[i].value = '+7 ';

      if (currentLength > 1) {
        phoneInputFields[i].value += value.substring(1, 4);
      }

      if (currentLength >= 4) {
        phoneInputFields[i].value += ` ${value.substring(4, 7)}`;
      }

      if (currentLength >= 7) {
        phoneInputFields[i].value += `${value.substring(7, 9)}`;
      }

      if (currentLength >= 9) {
        phoneInputFields[i].value += `${value.substring(9, 11)}`;
      }

      previousLength++;
    });
  };
  phoneInputFields[i].addEventListener('input', handlePhoneInput);


  phoneInputFields[i].onfocus = function () {
    if (phoneInputFields[i].value === '') {
      phoneInputFields[i].value = '+7';
    }
  };

  phoneInputFields[i].onblur = function () {

    if (phoneInputFields[i].value === '+7') {
      phoneInputFields[i].value = '';
    }
  };
}
