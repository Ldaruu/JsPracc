const button = document.getElementsByTagName('button')[0];

const count=()=> {
const list = document.getElementsByTagName('li');
const result = document.getElementsByClassName('result')[0];
result.textContent = list.length;
};
button.addEventListener('click',count);