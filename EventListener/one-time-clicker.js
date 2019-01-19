const title = document.getElementsByTagName('h1')[0];
const button = document.querySelector('button');
// button.addEventListener('click', getDateAndDisable);
button.addEventListener('click', dateTimeAndDisable );

function getDateAndDisable(){
    const date = new Date();
    title.textContent=date;
    console.log(date);
    button.disabled = true;
}
function dateTimeAndDisable(){
    const date = new Date();
    title.textContent=date;
    console.log(date);
    button.removeEventListener('click',dateTimeAndDisable);
}