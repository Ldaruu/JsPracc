const tableTag = document.querySelector('#mytable');
const form = document.getElementsByTagName('form')[0];
const http = new XMLHttpRequest();
http.open('GET','/books');
http.onload = () => {
    if(http.status === 200){
        const data = JSON.parse(http.responseText);
        console.log(data);
        renderTable(data);
    }
}
http.send();

const renderTable = (data) => {
    const tr = document.createElement('tr');
    const thTitle = document.createElement('th');
    const thAuthor = document.createElement('th');
    const thDesc= document.createElement('th');
    const thPub = document.createElement('th');
    const thPrice = document.createElement('th');
    thTitle.textContent = 'Title';
    thAuthor.textContent = 'Author';
    thDesc.textContent = 'Description';
    thPub.textContent = 'Publisher';
    thPrice.textContent = 'Price';
    tr.appendChild(thTitle);
    tr.appendChild(thAuthor);
    tr.appendChild(thDesc);
    tr.appendChild(thPub);
    tr.appendChild(thPrice);
    tableTag.appendChild(tr);
    data.forEach(element => {
        const tdtr = document.createElement('tr');
        const tdTitle = document.createElement('td');
        const tdAuthor = document.createElement('td');
        const tdDesc= document.createElement('td');
        const tdPub = document.createElement('td');
        const tdPrice = document.createElement('td');
        tdTitle.textContent = element.book_name;
        tdAuthor.textContent = element.aut_name;
        tdDesc.textContent = element.cate_descrip;
        tdPub.textContent = element.pub_name;
        tdPrice.textContent = element.book_price;
        tdtr.appendChild(tdTitle);
        tdtr.appendChild(tdAuthor);
        tdtr.appendChild(tdDesc);
        tdtr.appendChild(tdPub);
        tdtr.appendChild(tdPrice);
        tableTag.appendChild(tdtr); 
        });
}
 const{book_name,aut_name,cate_descrip,pub_name,book_price} = form.elements ;
 let url= '/books?';

 form.addEventListener('submit', (event => {
     event.preventDefault();
     if(book_name.value){
         url += `book_name=${book_name.value}&`;
     }
     if(aut_name.value){
         url += `aut_name=${aut_name.value}&`;
     }
     if(cate_descrip.value){
         url += `cate_descrip=${cate_descrip.value}&`;
     }
     if(pub_name.value){
         url += `pub_name=${pub_name.value}&`;
     }
     if(book_price.value){
         url += `book_price=${book_price.value}&`;
     }

     const search = new XMLHttpRequest();
     search.open('GET', url);
     search.onload = () =>{
         if(search.status == 200){
             const data =JSON.parse(search.responseText);
             renderTable(data);
             console.log(url);
         }
     }
     search.send();
 }));