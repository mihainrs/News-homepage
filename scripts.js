let burgermenu = document.querySelector(".header");
let borgir = document.querySelector(".burger");
let body = document.body;

borgir.addEventListener("click", () => {
      if (burgermenu.style.display != "flex") {
            burgermenu.style.display = "flex";
            body.style.backgroundColor = "rgba(0, 0, 0, 30%)";
            borgir.src = "assets/images/icon-menu-close.svg";
      } else{
            burgermenu.style.display = "none";
            body.style.backgroundColor = "white";
            borgir.src = "assets/images/icon-menu.svg"
      }
})