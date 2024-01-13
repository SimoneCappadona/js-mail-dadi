const resultElement = document.querySelector("#js_result");
const mailInput = document.querySelector("#mail-input");
const mailButton = document.querySelector("#mail-button");
const logForm = document.querySelector("form");
const mailAuthenticatorElement = document.querySelector("#auth-mail");

mailAuthenticatorElement.classList.add("d-none");

mailButton.addEventListener("click", function () {
  const mails = [
    "simocappa95@mail.com",
    "ciao123@mail.com",
    "tiziano.boolean@mail.com",
    "luigi.boolean@mail.com",
    "mattia.boolean@mail.com",
    "adriano.boolean@mail.com",
  ];
  let mailCheck;
  const mailValue = mailInput.value.trim().toLowerCase();

  for (let i = 0; i < mails.length; i++) {
    const mail = mails[i];
    if (mail == mailValue) {
      mailCheck = true;
    }
  }

  if (mailCheck) {
    logForm.classList.add("d-none");
    resultElement.innerHTML = "Accesso Consentito";
  } else {
    mailInput.classList.add("is-invalid");
    mailAutheticatorElement.classList.remove("d-none");
  }
});
