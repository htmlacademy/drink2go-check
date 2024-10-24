const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [970]
    }
  });

  const input0 = document.getElementById('min');
  const input1 = document.getElementById('max');
  const inputs = [min, max];

  rangeSlider.noUiSlider.on('update', (values, handle) =>{
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    const arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}

const reset = () => {
  const buttonReset = document.querySelector('.form__button-reset');

  buttonReset.addEventListener('click', () => {
    rangeSlider.noUiSlider.reset();
  });
};
reset();
