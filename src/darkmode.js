
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}
/*
let lightMode = localStorage.getItem('active'); 

const lightModeToggle = document.getElementById('toggle');
const body = document.querySelector('body');

const enableLightMode = () => {
  document.body.classList.add('active');
  document.toggle.classList.add('active');
  localStorage.setItem('active', 'enabled');
}

const disableLightMode = () => {
  document.body.classList.remove('active');
  localStorage.setItem('active', null);
}
 
if (active === 'enabled') {
  enableLightMode();
}

lightModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('active'); 
  
  if (active !== 'enabled') {
    enableLightMode();
  } else {  
    disableLightMode(); 
  }
});
*/