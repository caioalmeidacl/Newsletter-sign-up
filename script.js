const main = document.querySelector("main");
const success = document.querySelector(".success");
const input = document.querySelector("#email");

function changeImage(width) {
    const image = document.querySelector('#image');
    const mobileSrc = "/assets/images/illustration-sign-up-mobile.svg";
    const desktopSrc = "/assets/images/illustration-sign-up-desktop.svg";


    const newSrc = width <= 1059 ? mobileSrc : desktopSrc;
    if (image.getAttribute('src') !== newSrc) {
        image.setAttribute('src', newSrc);
    }
}
// no carregamento da página
changeImage(window.innerWidth);
window.addEventListener('resize', () => changeImage(window.innerWidth));

function checkField() {
    const regex = /^[^\s@]+@[^\s@]+\.com+$/; 
    const isValid = regex.test(input.value);
    const msg = document.querySelector(".errorMsg");

    msg.classList.toggle("hidden", isValid); // toggle=:> false para remover
    input.classList.toggle("error", !isValid); // true para aparecer
    
    return [isValid , input.value] ;
}

function handleForm(e) {
    e.preventDefault();
    const [isValid , email] = checkField(); 
    if(isValid){
        const userEmail =  document.querySelector("#user-email");
        userEmail.innerHTML = email;
        main.classList.replace("visible","hidden"); 
        success.classList.replace("hidden", "visible"); 
    }
}   

function goBack(){
    main.classList.replace("hidden", "visible"); 
    success.classList.replace("visible","hidden"); 
    input.value = "";  
}
document.querySelector('form').addEventListener("submit", handleForm);
document.querySelector('#dismiss').addEventListener("click", goBack);