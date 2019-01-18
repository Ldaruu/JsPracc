const title = document.getElementsByTagName('h1')[0];
window.addEventListener('keyup', function(e){
    this.console.log(e);
    title.textContent = 'Last pressed key code is: ' + e.code;
});
