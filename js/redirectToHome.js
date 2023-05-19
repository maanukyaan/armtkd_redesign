const headerLogo = document.querySelector(".header__container");
const footerLogo = document.querySelector(".footer__left img");

const logos = [headerLogo, footerLogo];

logos.forEach(logo => {
    logo.addEventListener("click", function (e) {
        document.location.assign("https://armtkd.am/index.html");
    })
})