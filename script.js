function changeImage(width) {
    const image = document.querySelector('#image');
    const mobileSrc = "/assets/images/illustration-sign-up-mobile.svg";
    const desktopSrc = "/assets/images/illustration-sign-up-desktop.svg";


    const newSrc = width <= 768 ? mobileSrc : desktopSrc;
    if (image.getAttribute('src') !== newSrc) {
        image.setAttribute('src', newSrc);
    }
}
// no carregamento da página
changeImage(window.innerWidth);

window.addEventListener('resize', () => changeImage(window.innerWidth));
