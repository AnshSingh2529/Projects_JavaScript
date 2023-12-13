const form = document.querySelector('form');
// this usercase will give you empty value.
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener(
  'submit',
  function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
      result.innerHTML = `Please give a valid height ${height}`;
    }
    if (weight === '' || weight < 0 || isNaN(weight)) {
      result.innerHTML = `Please gie a valid weight ${weight}`;
    }
    let BMI = (weight / ((height * height) / 10000)).toFixed(2); //toFixed is used for (upto what decimal value).

    //to show result
    result.innerHTML = `<span>${BMI}</span>`;
    if (BMI >= 25) {
      result.innerHTML = `<span>${BMI}</span> your are Overweight`;
    }
  },
  false
);
