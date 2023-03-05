const down = document.querySelector(".down");
const login = document.querySelector(".login");
const cekTagihanSpp = document.querySelector(".cek-tagihan-spp");
const right = document.getElementById("right");

window.onload = function () {
  down.classList.toggle("scroll-down");
  login.classList.toggle("scroll-login");
  cekTagihanSpp.classList.toggle("scroll-spp");
  right.classList.toggle("scroll-right");
};



// console.log(right);
