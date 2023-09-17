


// declaration d'un module theme 
const theme = {
    init: function () {
        console.log('liaison theme.js');
        const themeButton = document.getElementById('theme-switch');
        console.log(themeButton);
        themeButton.addEventListener('click', theme.handleThemeButtonclick);
    },

    //fonction qui permet de changement de theme
    handleThemeButtonclick: function (e) {
        console.log('clic sur lune');
        const body = document.querySelector('body');

        console.log(body);

        body.classList.toggle('theme-dark');
    }
};