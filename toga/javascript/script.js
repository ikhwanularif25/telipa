window.onscroll = function () {
    shrinkHeader();
};

function shrinkHeader() {
    const header = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}

document.getElementById("hamburger-menu").addEventListener("click", function () {
    const header = document.getElementById("header");
    header.classList.toggle("open");
});


document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    hamburgerMenu.addEventListener("click", function () {
        navMenu.classList.toggle("open");
        hamburgerMenu.classList.toggle("open"); // Tambahkan toggle untuk hamburger-menu
        if (navMenu.classList.contains("open")) {
            hamburgerMenu.innerHTML = ""; // Kosongkan isi hamburger
        } else {
            hamburgerMenu.innerHTML = "&#9776;"; // Ubah ke menu hamburger
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('your-element-id');
    if (element) {
        element.addEventListener('click', function () {
            // Your event handler code
        });
    }
});