const cardName = document.querySelector(".card-name");
const cardNameInput = document.querySelector("#card-name");
const cardNameLabel = document.querySelector("#labelName");

const cardNumberLabel = document.querySelector("#numberLabel");
const cardNumber = document.querySelector(".card-number");
const cardNumberInput = document.querySelector("#card-number");

const dateLabel = document.querySelector("#dateLabel");
const cardMonth = document.querySelector(".month");
const cardMonthInput = document.querySelector("#month");

const cardYear = document.querySelector(".year");
const cardYearInput = document.querySelector("#year");

const cardCVCLabel = document.querySelector("#labelcvc");
const cardCVC = document.querySelector(".cvc-number");
const cardCVCInput = document.querySelector("#cvc");

const btn = document.getElementById("btn");
const form = document.getElementById("form");
const finalState = document.getElementById("final-state");

// investigate
const format = (elem) => elem.toString().replace(/\d{4}(?=.)/g, "$& ");

const validationInput = (input, label) => {
  if (input.value === "") {
    input.classList.add("show-err");
    label.classList.add("err-message");
  }
};

const validationInputNumber = (input, label) => {
  const numberRegex = /^[\d]*$/g;
  if (numberRegex.test(input.value)) {
    input.classList.add("show-err");
    label.classList.add("err-number-only");
  }
};

const setDisplayInput = (input, output, defaultValue) => {
  input.addEventListener("input", (e) => {
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }

    if (input.value.trim() !== "") {
      output.innerHTML = format(input.value.trim());
    } else {
      output.innerHTML = defaultValue;
    }
  });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    cardName.value !== "" &&
    cardNumberInput.value !== "" &&
    cardMonthInput.value !== "" &&
    cardYearInput.value !== "" &&
    cardCVCInput.value !== ""
  ) {
    form.style.display = "none";
    finalState.style.display = "flex";
  }

  validationInput(cardNameInput, cardNameLabel);
  validationInput(cardMonthInput, dateLabel);
  validationInput(cardYearInput, dateLabel);
  validationInput(cardCVCInput, cardCVCLabel);
  validationInputNumber(cardNumberInput, cardNumberLabel);
});

setDisplayInput(cardNumberInput, cardNumber, (DEFAULT = "0000 0000 0000 0000"));
setDisplayInput(cardNameInput, cardName, (DEFAULT = "jane appleseed"));
setDisplayInput(cardMonthInput, cardMonth, (DEFAULT = "00"));
setDisplayInput(cardYearInput, cardYear, (DEFAULT = "00"));
setDisplayInput(cardCVCInput, cardCVC, (DEFAULT = "000"));
