let thumbDiv =  document.getElementById('thumb');

const myReq = new XMLHttpRequest();
myReq.open('GET', 'http://api.giphy.com/v1/gifs/search?q=dumb+dumber&api_key=LCTqQxbLKacDnf61FqHGzFLTeW6qZPI8',true);
myReq.onload = () => {
    if(myReq.status >= 200 && myReq.status < 400){
        let myData = JSON.parse(myReq.responseText);
       renderHTML(myData); 
       makeGIF(myData);  
    //    console.log(myData.data[1].images.fixed_height_still.url);

    }else{
        console.log('Something went wrong!');
    }
};
myReq.send();


const renderHTML = (data) => {
    htmlString ="";

    for(let i =0; i < 16; i++){
        htmlString += '<img class="img" src="' + data.data[i].images.fixed_height_still.url + '">';
        
    }
    thumbDiv.insertAdjacentHTML('beforeend', htmlString);
};

const makeGIF = (data) => {
    thumbDiv.addEventListener('click', ()=>{
        const img = document.getElementsByTagName('img');
        for( let j = 0; j< img.length; j++){
            img[j].onclick = () =>{
            if(img[j].src === data.data[j].images.fixed_height_still.url){
                img[j].setAttribute('src',data.data[j].images.original.url);
            }else{
                img[j].setAttribute('src',data.data[j].images.fixed_height_still.url);
             }
        }
     }
    });
}

    




