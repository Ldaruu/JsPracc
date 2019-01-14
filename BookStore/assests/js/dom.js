const tableTag = document.querySelector('#mytable');
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
    console.log(tr);
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
        console.log(tdtr);
        });

}