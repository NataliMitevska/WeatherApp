const lightbtn = document.getElementById('lightbtn');
const body = document.body;
const isLightMode = localStorage.getItem('lightMode') === 'enabled';

if (isLightMode) {
    body.classList.add('light-mode');
    lightbtn.checked = true;
}
lightbtn.addEventListener('change', () => {
    if (lightbtn.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('lightMode', 'enabled');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('lightMode','disabled');
    }
});
