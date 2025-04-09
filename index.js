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

aCreateAccount.addEventListener("click", (e) => {
  overlayCreateAccount.style.display = "flex";
});

closeBtnCreateAccount.addEventListener("click", () => {
  overlayCreateAccount.style.display = "none";
  overlay.style.display = "none";
});

// --------------------------------------------------------------
// Changer l'image de l'oeil au clique sur ce dernier en fonction du type de l'input
const passwords = document.querySelectorAll(".password");
const imgEyes = document.querySelectorAll(".img_eyes");

imgEyes.forEach((imgEye) => {
  imgEye.addEventListener("click", () => {
    const eyes = imgEye.querySelector("img");
    const container = imgEye.closest(".champ_password");

    const passwordNew = container.querySelector(".password");

    if (passwordNew.type === "password") {
      passwordNew.type = "text";
      eyes.src = "/assets/eye_open_password.png";
      eyes.alt = "Masquer le mot de passe";
    } else {
      passwordNew.type = "password";
      eyes.src = "/assets/eye_close_password.png";
      eyes.alt = "Afficher le mot de passe";
    }
  });
});

// --------------------------------------------------------------
// Au clic sur les boutons fermés toutes les valeurs des inputs sont supprimés et les oeil des mot de passe changés ainsi que le type de input qui repassent en password
const btnsClose = document.querySelectorAll(".btn_close");
const inputs = document.querySelectorAll(".input");
const eyesNew = document.querySelectorAll(".eyes");

btnsClose.forEach((btnClose) => {
  btnClose.addEventListener("click", () => {
    eyesNew.forEach((eyeNew) => {
      eyeNew.attributes.src.nodeValue = "/assets/eye_close_password.png";
      eyeNew.attributes.alt.nodeValue = "Afficher le mot de passe";
    });
    inputs.forEach((input) => {
      input.value = "";
      input.attributes.type.nodeValue = "password";
    });
  });
});

// Ajouter les conditions obligatoires pour les mot de passe (majsucule, minuscule, chiffre, caractères spéciaux)
const passwordOverlay = document.querySelector(".password_input_overlay");
console.log(passwordOverlay);

const btnConnection = document.querySelector(".btn_connection");
console.log(btnConnection);

btnConnection.addEventListener("click", () => {
  const passwordValid = passwordOverlay.value;

  const regexPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/.test(passwordValid);
  if (regexPasswordValid) {
    console.log("Mot de passe valide");
  } else {
    console.log("Mot de passe invalide");
  }
});
