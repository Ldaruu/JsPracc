const list = document.getElementById('msg');
const host = 'http://localhost:8080/api/posts';

const apiCall = () => {
const http =  new XMLHttpRequest();
http.open('GET', host, true);
http.onload = () => {
    if(http.status >= 200 && http.status < 400){
        let result = JSON.parse(http.responseText);
        renderHTML(result);
    }
}
http.send();
}
apiCall();
setInterval(()=>{
location.reload();
},9000);

const renderHTML = (data) => {
   let HTMLString = "";
   for( let i =0; i < data.length; i++){
       HTMLString += '<div class="post">';
       HTMLString += '<a class="upvote" id="' + data[i].id +'" href="#">⬆</a>';
       HTMLString += '<span class="vote">'+ data[i].vote +'</span>';
       HTMLString += '<a class="downvote" id="' + data[i].id +'" href="#">⬇</a>';
       HTMLString += '<a class="url" href='+data[i].url+'><span class="title" ></span>'+ data[i].title +'</a>'
       HTMLString += '<span class="date">'+ data[i].date +'</span>';
       HTMLString += '</div>';             
   }
   list.insertAdjacentHTML('beforeend',HTMLString);
} 