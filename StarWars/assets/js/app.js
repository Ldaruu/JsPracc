const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', () => {
    const myReq = new XMLHttpRequest();
    const getName = document.querySelector('#name');
    // console.log(getName.value);

    myReq.open('GET', 'https://swapi.co/api/people/?search=' + getName.value, true);

    myReq.onload = () => {
        if(myReq.status >= 200 && myReq.status < 400){
            let myData = JSON.parse(myReq.responseText);
            console.log(myData);
        }
    }
    myReq.send();
});
