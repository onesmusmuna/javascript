const counterEl = document.querySelector(".counter");
const counterValueEl = document.querySelector(".counter__value");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterTitleEl = document.querySelector(".counter__title");

increaseButtonEl.addEventListener("click", incrementCounter);

decreaseButtonEl.addEventListener("click", decrementCounter);

function incrementCounter() {
  // get current value element
  const currentValue = counterValueEl.textContent;

  // convert string to value
  const currentValueNumber = +currentValue;

  // increment by 1
  let newValue = currentValueNumber + 1;

  // if current value is greater than 5, force it to be 5

  if (newValue > 5) {
    newValue = 5;

    // give visual indicators for the limitation
    counterEl.classList.add("counter--limit");

    // update title and show limit has been reached
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for going >5";

    // disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }

  counterValueEl.textContent = newValue;

  // unfocus || blur the increment button
  increaseButtonEl.blur();
}

function decrementCounter() {
  // get current value
  const currentValue = +counterValueEl.textContent;

  // if current value is 0, don't decrease

  currentValue <= 0
    ? (counterValueEl.textContent = 0)
    : (counterValueEl.textContent = currentValue - 1);

  // unfocus || blur the increment button
  decreaseButtonEl.blur();
}

resetButtonEl.addEventListener("click", () => {
  // set counter to 0
  counterValueEl.textContent = 0;

  // reset background color
  counterEl.classList.remove("counter--limit");

  // reset counter title
  counterTitleEl.textContent = "Fancy counter";

  // anable the increase and decrease button
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;

  // unfocus || blur the reset button
  resetButtonEl.blur();
});

// increment when you press any key
document.addEventListener("keydown", incrementCounter);
