const themeSelector = document.querySelector('#mode-select');
const stufftochange = document.querySelector("#myboxtochangetheme");
const image = document.querySelector("#logoImage");
const slelctorlabel = document.getElementsByTagName('label');

function changeTheme() {

    if (themeSelector.value === "Dark") {
        stufftochange.classList.add("dark");
        image.src = 'byui-logo_white.png';
        slelctorlabel.id = 'dark'
    } else {
        stufftochange.classList.remove("dark");
        image.src = 'logo.webp';
        slelctorlabel.id = ""
    }


// if the value is dark then:
// add the dark class to the body
// change the source of the logo img to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);