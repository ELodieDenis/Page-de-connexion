const imgIconMenu = document.querySelector(".img_icon_menu");

const lis = document.querySelectorAll(".li");

// Au clique sur l'icone du menu la nav barre apparaît / disparaît
imgIconMenu.addEventListener("click", () => {
  lis.forEach((li) => {
    li.classList.toggle("show");
  });
});

// Activer l'effet glassmorphism au clique sur le bouton de connection
// const buttonConnection = document.querySelector(".button_connection");
// const overlay = document.querySelector(".overlay");

// // Ajouter un événement au clic sur le bouton
// buttonConnection.addEventListener("click", () => {
//   overlay.classList.add("active"); // Ajouter la classe active pour afficher l'overlay
// });
