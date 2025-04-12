const imgIconMenu = document.querySelector(".img_icon_menu");
const lis = document.querySelectorAll(".li");

// Au clique sur l'icone du menu la nav barre apparaît / disparaît
imgIconMenu.addEventListener("click", () => {
  lis.forEach((li) => {
    li.classList.toggle("show");
  });
});

// --------------------------------------------------------------
// Apparition de la page de connexion au clique sur le bouton "Se connecter"
const openBtn = document.querySelector(".btn_open_login");
const closeBtn = document.querySelector(".btn_close_login");
const overlay = document.querySelector(".overlay_login");

openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// --------------------------------------------------------------
//  Apparition du compte pour créer un nouveau compte
const aCreateAccount = document.querySelector(".a_create_account");
const overlayCreateAccount = document.querySelector(".overlay_create_account");
const closeBtnCreateAccount = document.querySelector(
  ".btn_close_login_create_account"
);
const regexPasswords = document.querySelectorAll(".regexPassword");

aCreateAccount.addEventListener("click", (e) => {
  overlayCreateAccount.style.display = "flex";
  regexPasswords.forEach((regexPassword) => {
    regexPassword.style.display = "none";
  });
});

closeBtnCreateAccount.addEventListener("click", () => {
  overlayCreateAccount.style.display = "none";
  overlay.style.display = "none";
});

// --------------------------------------------------------------
// Changer l'image de l'oeil au clique sur ce dernier en fonction du type de l'input
const passwords = document.querySelectorAll(".password");
const passwordInputOverlay = document.querySelector(".password_input_overlay");
const imgEyes = document.querySelectorAll(".img_eyes");

const inputEmailConnection = document.querySelector(".input_email_connection");

imgEyes.forEach((imgEye) => {
  imgEye.addEventListener("click", () => {
    const parentInputPassword = imgEye.closest(".champ_password"); // récuprérer le parent de mon élément

    const siblingParent = parentInputPassword.firstElementChild; // récuprérer le premier enfant du parent de mon élément oeil

    imgEye.children[0].attributes.src.nodeValue =
      imgEye.children[0].attributes.src.nodeValue ===
      "/assets/eye_close_password.png"
        ? "/assets/eye_open_password.png"
        : "/assets/eye_close_password.png";

    siblingParent.type =
      siblingParent.type === "password" ? "text" : "password";
  });
});

// --------------------------------------------------------------
// Au clic sur les boutons fermés toutes les valeurs des inputs sont supprimés et les oeil des mot de passe changés ainsi que le type de input qui repassent en password
const btnsClose = document.querySelectorAll(".btn_close");
const inputs = document.querySelectorAll(".input");
const eyesNew = document.querySelectorAll(".eyes");
const loginModal = document.querySelector(".login_modal");
const verificationPasswordP = document.querySelector(
  ".p_verification_password"
);
const accountModal = document.querySelector(".account_modal");
const emailConnectionP = document.querySelector(".p_email_connection");
const pEmailCreateAccount = document.querySelector(".p_email_create_account");
const pRequiredField = document.querySelector(".p_required_field");

btnsClose.forEach((btnClose) => {
  btnClose.addEventListener("click", () => {
    eyesNew.forEach((eyeNew) => {
      eyeNew.attributes.src.nodeValue = "/assets/eye_close_password.png";
      eyeNew.attributes.alt.nodeValue = "Afficher le mot de passe";
    });
    inputs.forEach((input) => {
      input.value = "";
      input.style.border = "";
    });
    passwords.forEach((password) => {
      password.value = "";
      password.attributes.type.nodeValue = "password";
    });
    loginModal.style.height = "350px";
    accountModal.style.height = "500px";
    regexPasswords.forEach((regexPassword) => {
      regexPassword.style.display = "none";
    });
    verificationPasswordP.style.display = "none";
    emailConnectionP.style.display = "none";
    pEmailCreateAccount.style.display = "none";
    pRequiredField.style.color = "";
  });
});

// -----------------------------------------------------------------------
//  Gestion bouton de connectionavec mp et email
const passwordOverlay = document.querySelector(".password_input_overlay");
const btnConnection = document.querySelector(".btn_connection");
const passwordRegex = document.querySelector(".passwordRegex");
const inputOverlay = document.querySelectorAll(".input_overlay");

// Groupes de conditions
const ruleGroups = {
  lowercase: {
    elements: document.querySelectorAll(".lowercase_letter"),
    regex: /[a-z]/,
  },
  uppercase: {
    elements: document.querySelectorAll(".capital_letter"),
    regex: /[A-Z]/,
  },
  number: {
    elements: document.querySelectorAll(".figure"),
    regex: /\d/,
  },
  specialChar: {
    elements: document.querySelectorAll(".spacial_character"),
    regex: /[\W_]/, // \W capture tout ce qui n'est pas alphanumérique
  },
};

// Validation de l'email
const isEmailValid = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

// Validation du mot de passe global
const isPasswordStrong = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(password);

// Colorer les règles
const updatePasswordRulesDisplay = (password) => {
  for (const key in ruleGroups) {
    const { elements, regex } = ruleGroups[key];
    const isValid = regex.test(password);
    elements.forEach((el) => {
      el.style.color = isValid ? "green" : "red";
    });
  }
};

// Gérer les bordures vides
const highlightEmptyInputs = () => {
  inputs.forEach((input) => {
    input.style.border = input.value ? "" : "1px solid red";
  });
};

btnConnection.addEventListener("click", () => {
  const email = inputEmailConnection.value;
  const password = passwordOverlay.value;

  const emailValid = isEmailValid(email);
  const passwordValid = isPasswordStrong(password);

  updatePasswordRulesDisplay(password);
  highlightEmptyInputs();

  if (!emailValid && passwordValid) {
    console.log("email non valide, mp valide");
    emailConnectionP.style.display = "inline";
    inputEmailConnection.style.border = "1px solid red";
    passwordRegex.style.display = "none";
    loginModal.style.height = "375px";
  } else if (emailValid && !passwordValid) {
    console.log("email valide, mp non valide");
    emailConnectionP.style.display = "none";
    inputEmailConnection.style.border = "";
    passwordRegex.style.display = "inline";
    passwordOverlay.style.border = "1px solid red";
    loginModal.style.height = "460px";
  } else if (!emailValid && !passwordValid) {
    console.log("email et mp non valident");
    emailConnectionP.style.display = "inline";
    inputEmailConnection.style.border = "1px solid red";
    passwordOverlay.style.border = "1px solid red";

    passwordRegex.style.display = "inline";
    loginModal.style.height = "480px";
  } else {
    console.log("email et mp valident");
    emailConnectionP.style.display = "none";
    passwordRegex.style.display = "none";
    inputEmailConnection.style.border = "";
    loginModal.style.height = "350px";
    console.log("Connection réussi !");
    alert("Connection réussi");
  }
});

// --------------------------------------------------------------
// Gestion bouton créer un compte avec les mp, email, et nom et prénom
// Sélection des éléments HTML
const elements = {
  btnValidate: document.querySelector(".btn_create_valid_account"),
  inputPassword: document.querySelector(".password_input_create_account"),
  regexPasswordHint: document.querySelector(".regex_password_create_account"),
  inputPasswordConfirm: document.querySelector(".input_password_confirmation"),
  inputEmail: document.querySelector(".input_email_create_account"),
  emailHint: document.querySelector(".p_email_create_account"),
  requiredFieldHint: document.querySelector(".p_required_field"),
  firstname: document.querySelector(".input_firstname"),
  surname: document.querySelector(".input_surname"),
  accountModal: document.querySelector(".account_modal"),
  verificationPasswordP: document.querySelector(".p_password_verification"),
};

// Fonctions utilitaires
function setBorder(el, valid) {
  el.style.border = valid ? "" : "1px solid red";
}

function showElement(el) {
  if (el) el.style.display = "inline";
}

function hideElement(el) {
  if (el) el.style.display = "none";
}

function isNotEmpty(el) {
  return el && el.value.trim() !== "";
}

function validatePassword(password) {
  return {
    isValid: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasUppercase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[.*+?^=!:${}()|\[\]\/\\]/.test(password),
  };
}

function updatePasswordIndicators(checks) {
  lowercaseTextsAll.forEach(
    (el) => (el.style.color = checks.hasLowercase ? "green" : "red")
  );
  uppercaseTextsAll.forEach(
    (el) => (el.style.color = checks.hasUppercase ? "green" : "red")
  );
  figureTextsAll.forEach(
    (el) => (el.style.color = checks.hasNumber ? "green" : "red")
  );
  spacialCharacterTextsAll.forEach(
    (el) => (el.style.color = checks.hasSpecial ? "green" : "red")
  );
}

// Validation du formulaire
elements.btnValidate.addEventListener("click", () => {
  const {
    firstname,
    surname,
    inputEmail,
    inputPassword,
    inputPasswordConfirm,
    emailHint,
    regexPasswordHint,
    requiredFieldHint,
    verificationPasswordP,
    accountModal,
  } = elements;

  const password = inputPassword.value;
  const passwordConfirm = inputPasswordConfirm.value;
  const email = inputEmail.value;

  const passwordCheck = validatePassword(password);
  const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  // Mise à jour des couleurs d’indicateurs de mot de passe
  updatePasswordIndicators(passwordCheck);

  // Vérification des champs obligatoires
  const fieldsToCheck = [
    firstname,
    surname,
    inputEmail,
    inputPassword,
    inputPasswordConfirm,
  ];
  fieldsToCheck.forEach((input) => setBorder(input, isNotEmpty(input)));

  if (!isNotEmpty(firstname) || !isNotEmpty(surname)) {
    requiredFieldHint.style.color = "red";
  }

  // Vérification du mot de passe
  if (!passwordCheck.isValid) {
    showElement(regexPasswordHint);
    setBorder(inputPassword, false);
    if (accountModal) accountModal.style.height = "500px";
  } else {
    hideElement(regexPasswordHint);
  }

  // Vérification de la confirmation du mot de passe
  if (password !== passwordConfirm) {
    showElement(verificationPasswordP);
    if (accountModal) accountModal.style.height = "500px";
    setBorder(inputPasswordConfirm, false);
  } else {
    hideElement(verificationPasswordP);
  }

  // Vérification de l’email
  if (!emailValid) {
    showElement(emailHint);
    setBorder(inputEmail, false);
  } else {
    hideElement(emailHint);
  }

  // Si tout est bon
  if (
    isNotEmpty(firstname) &&
    isNotEmpty(surname) &&
    passwordCheck.isValid &&
    password === passwordConfirm &&
    emailValid
  ) {
    console.log("Formulaire valide !");
    alert("Formulaire valide");
    pRequiredField.style.color = "#cccccc";
  }
});
