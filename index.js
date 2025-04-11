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
//  Apparition de la compte pour créer un nouveau compte
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
console.log(passwords);
const passwordInputOverlay = document.querySelector(".password_input_overlay");
const imgEyes = document.querySelectorAll(".img_eyes");
console.log(imgEyes[0]);
console.log(imgEyes[0].children[0].attributes.src.nodeValue);

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

btnsClose.forEach((btnClose) => {
  btnClose.addEventListener("click", () => {
    eyesNew.forEach((eyeNew) => {
      eyeNew.attributes.src.nodeValue = "/assets/eye_close_password.png";
      eyeNew.attributes.alt.nodeValue = "Afficher le mot de passe";
    });
    inputs.forEach((input) => {
      input.value = "";
    });
    passwords.forEach((password) => {
      console.log(password);
      console.log(password.attributes);
      console.log(password.attributes.type);
      console.log(password.attributes.type.nodeValue);

      password.value = "";
      password.attributes.type.nodeValue = "password";
    });
    loginModal.style.height = "350px";
    accountModal.style.height = "480px";
    regexPasswords.forEach((regexPassword) => {
      regexPassword.style.display = "none";
    });
    verificationPasswordP.style.display = "none";
    emailConnectionP.style.display = "none";
  });
});

// --------------------------------------------------------------
// Ajouter les conditions obligatoires pour les mot de passe (majsucule, minuscule, chiffre, caractères spéciaux) dans la fenêtre de connection
const passwordOverlay = document.querySelector(".password_input_overlay");
const btnConnection = document.querySelector(".btn_connection");
const passwordRegex = document.querySelector(".passwordRegex");

const lowercaseTextsAll = document.querySelectorAll(".lowercase_letter");
const uppercaseTextsAll = document.querySelectorAll(".capital_letter");
const figureTextsAll = document.querySelectorAll(".figure");
const spacialCharacterTextsAll =
  document.querySelectorAll(".spacial_character");

btnConnection.addEventListener("click", () => {
  const regexEmailValid =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      inputEmailConnection.value
    );

  const passwordValid = passwordOverlay.value;

  const regexPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(passwordValid);
  const containsNumber = /\d/.test(passwordValid);
  const containsLowercase = /[a-z]/.test(passwordValid);
  const containsUppercase = /[A-Z]/.test(passwordValid);
  const containsSpacialCaracter = /[.*+?^=!:${}()|\[\]\/\\]/.test(
    passwordValid
  );

  lowercaseTextsAll.forEach((lowercaseTextAll) => {
    lowercaseTextAll.style.color = containsLowercase ? "green" : "red";
  });
  uppercaseTextsAll.forEach((uppercaseTextAll) => {
    uppercaseTextAll.style.color = containsUppercase ? "green" : "red";
  });
  figureTextsAll.forEach((figureTextAll) => {
    figureTextAll.style.color = containsNumber ? "green" : "red";
  });
  spacialCharacterTextsAll.forEach((spacialCharacterTextAll) => {
    spacialCharacterTextAll.style.color = containsSpacialCaracter
      ? "green"
      : "red";
  });

  if (regexPasswordValid && !regexEmailValid) {
    console.log("email non valide, mp valide");
    emailConnectionP.style.display = "inline";
    loginModal.style.height = "375px";
  } else if (!regexPasswordValid && regexEmailValid) {
    console.log("email valide, mp non valide");
    passwordRegex.style.display = "inline";
    loginModal.style.height = "465px";
  } else if (!regexPasswordValid && !regexEmailValid) {
    console.log("email et mp non valident");
    emailConnectionP.style.display = "inline";
    passwordRegex.style.display = "inline";
    loginModal.style.height = "490px";
  } else {
    console.log("email et mp valident");
    passwordRegex.style.display = "none";
    loginModal.style.height = "350px";
  }
});

// --------------------------------------------------------------
// Ajouter les conditions obligatoires pour les mot de passe (majsucule, minuscule, chiffre, caractères spéciaux) dans la fenêtre de création d'un compte
const validCreateAccount = document.querySelector(".btn_create_valid_account");
const inputPasswordCreateAccount = document.querySelector(
  ".password_input_create_account"
);
const regexPasswordValid = document.querySelector(
  ".regex_password_create_account"
);
const inputPasswordConfirmation = document.querySelector(
  ".input_password_confirmation"
);

validCreateAccount.addEventListener("click", () => {
  const passwordValidCreateAccount = inputPasswordCreateAccount.value;

  const regexPasswordValidCreateAccount =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(
      passwordValidCreateAccount
    );
  const containsNumberCreateAccount = /\d/.test(passwordValidCreateAccount);
  const containsLowercaseCreateAccount = /[a-z]/.test(
    passwordValidCreateAccount
  );
  const containsUppercaseCreateAccount = /[A-Z]/.test(
    passwordValidCreateAccount
  );
  const containsSpacialCaracterCreateAccount = /[.*+?^=!:${}()|\[\]\/\\]/.test(
    passwordValidCreateAccount
  );

  lowercaseTextsAll.forEach((lowercaseTextAll) => {
    lowercaseTextAll.style.color = containsLowercaseCreateAccount
      ? "green"
      : "red";
  });

  uppercaseTextsAll.forEach((uppercaseTextAll) => {
    uppercaseTextAll.style.color = containsUppercaseCreateAccount
      ? "green"
      : "red";
  });

  figureTextsAll.forEach((figureTextAll) => {
    figureTextAll.style.color = containsNumberCreateAccount ? "green" : "red";
  });

  spacialCharacterTextsAll.forEach((spacialCharacterTextAll) => {
    spacialCharacterTextAll.style.color = containsSpacialCaracterCreateAccount
      ? "green"
      : "red";
  });

  if (regexPasswordValidCreateAccount) {
    console.log("Mot de passe valide");
    regexPasswordValid.style.display = "none";
    accountModal.style.height = "480px";
  } else {
    console.log("Mot de passe invalide");
    regexPasswordValid.style.display = "inline";
    accountModal.style.height = "580px";
  }

  const valueInputPassWordCreateAccount = inputPasswordCreateAccount.value;
  const valueInputPasswordConfirmation = inputPasswordConfirmation.value;

  if (valueInputPasswordConfirmation !== valueInputPassWordCreateAccount) {
    verificationPasswordP.style.display = "inline";
    if ((regexPasswordValid.style.display = "none")) {
      accountModal.style.height = "500px";
    } else {
      accountModal.style.height = "630px";
    }
  } else {
    console.log("les deux mot de passe sont identiques");
  }
});

// --------------------------------------------------------------
