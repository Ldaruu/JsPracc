const characterDiv =  document.getElementsByClassName('character')[0];
const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', () => {
    const myReq = new XMLHttpRequest();
    const getName = document.querySelector('#name');

    myReq.open('GET', 'https://swapi.co/api/people/?search=' + getName.value, true);

    myReq.onload = () => {
        if(myReq.status >= 200 && myReq.status < 400){
            let myData = JSON.parse(myReq.responseText);
            renderHTML(myData);
            
            // for( let i = 0; i < myData.results.length; i++){
            //     let characterNames = document.createElement('p');
            //     console.log(myData.results[i].name);
            //     characterNames.textContent = myData.results[i].name;

            //     characterDiv.appendChild(characterNames);
            
            // }
            
        }
    }
    myReq.send();
});

const renderHTML = (data) => {
    for(let i = 0; i < data.results.length; i++){
        let characterNames = document.createElement('p');
        characterNames.textContent = data.results[i].name;
        characterDiv.appendChild(characterNames);   
    }
};