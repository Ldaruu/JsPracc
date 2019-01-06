let counter = 1;
const animalDIV = document.getElementById('animal-info');
const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    const myReq =  new XMLHttpRequest();
    myReq.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+counter+'.json');
    myReq.onload = ()=>{
        if(myReq.status >= 200 && myReq.status < 400){
            let myDate = JSON.parse(myReq.responseText);
            addPtags(myDate);
        }else{
            console.log('Connection made with server, but it run into an ERROR!');
        }
       
    };

    myReq.onerror = () =>{
        console.log('Connection Error');
    };

    myReq.send();
    counter++;
    if(counter > 3){
        btn.classList.add('hide');
    }
});

const addPtags = (data) => {
    let htmpString = "";

    for(let i =0; i < data.length; i++){
        htmpString += "<p>" + data[i].name + "is a "+ data[i].species+  " that likes to eat ";
            for(let j = 0; j < data[i].foods.likes.length; j++){
                if(j == 0){
                    htmpString += data[i].foods.likes[j];
                }else{
                    htmpString += " and "+ data[i].foods.likes[j];

                }
            }

            htmpString += ', and dislikes ';

            for(let j = 0; j < data[i].foods.dislikes.length; j++){
                if(j == 0){
                    htmpString += data[i].foods.dislikes[j];
                }else{
                    htmpString += " and "+ data[i].foods.dislikes[j];

                }
            }


                htmpString += ".</p>";
    }
    animalDIV.insertAdjacentHTML('beforeend', htmpString);
};

