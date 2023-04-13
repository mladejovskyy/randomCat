const catImg = document.querySelector('#catImg');
const catBtn = document.querySelector('#catBtn');

catBtn.addEventListener('click', async () => {
    const res = await axios.get('https://api.thecatapi.com/v1/images/search');
    catImg.src = res.data[0].url
})


const modeImg = document.querySelector('.modeImg')
const darkMode = document.querySelector('.dark');
const lightMode = document.querySelector('.light');
const body = document.querySelector('body');

const darkmode = () => {
    catBtn.style.cssText = 'background-color: #252525; color: #800080;'
    body.style.cssText = 'background-color: #252525; color: #f0f0f0;'
};

const lightmode = () => {
    catBtn.style.cssText = 'background-color: #f0f0f0; color: #252525;'
    body.style.cssText = 'background-color: #f0f0f0; color: #252525;'
};

darkMode.addEventListener('click', () => {
    darkmode();
    darkMode.classList.toggle("hide");
    lightMode.classList.toggle("hide");
});

lightMode.addEventListener('click', () => {
    lightmode();
    darkMode.classList.toggle("hide");
    lightMode.classList.toggle("hide");
});



