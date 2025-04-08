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
// Faire apparaît le mot de passe ainsi que changer l'image de l'oeil dans la section de connection
const toggleBtn = document.querySelector(".toggle_password");
const passwordInput = document.querySelector(".div_password input");
const eyeIcon = toggleBtn.querySelector(".img_eyes_connection");

toggleBtn.addEventListener("click", () => {
  const isPassword = passwordInput.type === "password";
  passwordInput.type = isPassword ? "text" : "password";

  eyeIcon.src = isPassword
    ? "/assets/eye_open_password.png"
    : "/assets/eye_close_password.png";
});

// --------------------------------------------------------------
//  Apparition de la compte pour créer un nouveau compte
const aCreateAccount = document.querySelector(".a_create_account");
const overlayCreateAccount = document.querySelector(".overlay_create_account");
const closeBtnCreateAccount = document.querySelector(
  ".btn_close_login_create_account"
);

aCreateAccount.addEventListener("click", (e) => {
  overlayCreateAccount.style.display = "flex";
});

closeBtnCreateAccount.addEventListener("click", () => {
  overlayCreateAccount.style.display = "none";
  overlay.style.display = "none";
});

// --------------------------------------------------------------
// Faire apparaît le mot de passe ainsi que changer l'image de l'oeil dans la section de création d'un nouveau compte
const divPasswordInput = document.querySelector(
  ".div_password_create_account input"
);
console.log(divPasswordInput);
const togglePassword = document.querySelector(
  ".toggle_password_create_account"
);
const imgEyesCreateAccount = document.querySelector(".img_eyes_create_account");

togglePassword.addEventListener("click", () => {
  const isPasswordCreateAccount = divPasswordInput.type === "password";
  divPasswordInput.type = isPasswordCreateAccount ? "text" : "password";

  imgEyesCreateAccount.src = divPasswordInput
    ? "/assets/eye_open_password.png"
    : "/assets/eye_close_password.png";
});

// --------------------------------------------------------------
// // Faire apparaît le mot de passe ainsi que changer l'image de l'oeil dans la section de création d'un nouveau compte confirmation du mot de passe
const divPasswordConfirmation = document.querySelector(
  ".div_password_confirmation input"
);
const togglePasswordConfirmation = document.querySelector(
  ".toggle_password_confirmation"
);
const imgEyesCreateAccountConfirmation = document.querySelector(
  ".img_eyes_create_account_confirmation"
);

togglePasswordConfirmation.addEventListener("click", () => {
  const isPasswordCreateAccountConfirmation =
    divPasswordConfirmation.type === "password";
  divPasswordConfirmation.type = isPasswordCreateAccountConfirmation
    ? "text"
    : "password";

  imgEyesCreateAccountConfirmation.src = divPasswordConfirmation
    ? "/assets/eye_open_password.png"
    : "/assets/eye_close_password.png";
});
