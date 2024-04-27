let bar = document.getElementsByClassName("menu");
let nav = document.getElementsByClassName("navbar");
let close = document.getElementById("close");


if (bar) {
    bar[0].addEventListener('click', function () {
        nav[0].classList.add("active");

    });
}
if (close) {
    close.addEventListener('click', function () {
        nav[0].classList.remove("active");
    });
}