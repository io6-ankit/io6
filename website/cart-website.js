const cartContainer = document.querySelector(".cart-container");

eventListeners();

function eventListeners() {
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.toggle("show-navbar");
  });
  document.getElementById("card-btn").addEventListener("click", () => {
    cartContainer.classList.toggle("show-cart-container");
  });
}
