window.onload = () => {
const characterDiv =  document.getElementsByClassName('character')[0];
const movieDiv = document.getElementsByClassName('movies')[0];
const searchButton = document.querySelector('#search');
searchButton.addEventListener('click', () => {
    const myReq = new XMLHttpRequest();
    const getName = document.querySelector('#name');

    myReq.open('GET', 'https://swapi.co/api/people/?search=' + getName.value, true);
    myReq.onload = () => {
        if(myReq.status >= 200 && myReq.status < 400){
            let myData = JSON.parse(myReq.responseText);
            renderHTML(myData);
            
            getMovies(myData);
            
        }
    }
    myReq.send();
});

const renderHTML = (data) => {
    for(let i = 0; i < data.results.length; i++){
        let characterNames = document.createElement('h5');
        characterNames.textContent = data.results[i].name;
        characterDiv.appendChild(characterNames);   
    }
};
    const getMovies = (data) => {
            const h5Tags = document.getElementsByTagName('h5');
            
            for(let i = 0; i < h5Tags.length; i++){
                h5Tags[i].onclick = () => {
                    for( let j = 0; j < data.results[i].films.length; j++){
                        let urlHost = data.results[i].films[j];
                        let http = new XMLHttpRequest();

                        http.open('GET', urlHost, true);
                        http.onload = () => {
                            let movie = JSON.parse(http.response);
                            let movieTitle = document.createElement('li');
                            movieTitle.textContent = movie.title;
                            movieDiv.appendChild(movieTitle);
                            let releaseDate = document.createElement('p');
                             releaseDate.textContent = 'Release Date: ' + movie.release_date;
                             movieTitle.appendChild(releaseDate);
                        }
                    
                        http.send();
                    }
                }
               
            }
    }
}
