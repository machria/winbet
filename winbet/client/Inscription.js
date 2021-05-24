document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
});

//sur interaction du bouton ajouter un login

const addBtn = document.querySelector('#add-name-btn');

addBtn.onclick = function () {
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    const bornInput = document.querySelector('#born-input');
    const born = bornInput.value;
    const passwordInput = document.querySelector('#password-input');
    const password = passwordInput.value;
    const statusInput = document.querySelector('#status-select');
    const status = statusInput.value;
    const emailInput = document.querySelector('#email-input');
    const email = emailInput.value;
    
    nameInput.value = "";
    bornInput.value = "";
    passwordInput.value = "";
    statusInput.value = "";
    emailInput.value = "";

    console.log("name input get :" + name)
    
    fetch('http://localhost:5000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name : name, born : born, password : password, status : status, email : email})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}



function insertRowIntoTable(data) {
    
    console.log(data);
    const table = document.querySelector('table tbody');
    const isTableData = table.querySelector('.no-data');

    let tableHtml = "<tr>";

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === 'dateAdded') {
                data[key] = new Date(data[key]).toLocaleString();
            }
            tableHtml += `<td>${data[key]}</td>`;
        }
    }

    tableHtml += `<td><button class="delete-row-btn" data-id=${data.id}>Delete</td>`;
    tableHtml += `<td><button class="edit-row-btn" data-id=${data.id}>Edit</td>`;

    tableHtml += "</tr>";

    if (isTableData) {
        table.innerHTML = tableHtml;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHtml;
    }
    
}

function loadHTMLTable(data) {
    
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }
    
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    const choicePack = document.getElementById('info-pack');
    const pricePack = document.getElementById('price-pack');
    
    let price = "";
    let texte = "";
    if(id==1){
        texte +="<ul>";
        texte +=`<li class = "li_OK">Acces a l'espace Premium</li>`;
        texte +=`<li class = "li_KO">Acces a la montante</li>`;
        texte +=`<li class = "li_KO">Acces a la formation de gestion</li>`;
        texte +=`<li class = "li_OK">Minimum un pronostic par jours</li>`;
        texte +=`<li class = "li_OK">Analyses redigees et detaillees</li>`;
        texte +=`<li class = "li_OK">Expertise Football</li>`;
        texte +=`<li class = "li_OK">Expertise Tennis</li>`;  
        texte +=`<li class = "li_OK">Expertise Basketball</li>`;
        texte +="</ul>";
        price += "<h1>14,99</h1>";
    }
    else if(id==2){
        texte +="<ul>";
        texte +=`<li class = "li_OK">Acces a l'espace Premium</li>`;
        texte +=`<li class = "li_OK">Acces a la montante</li>`;
        texte +=`<li class = "li_KO">Acces a la formation de gestion</li>`;
        texte +=`<li class = "li_OK">Minimum un pronostic par jours</li>`;
        texte +=`<li class = "li_OK">Analyses redigees et detaillees</li>`;
        texte +=`<li class = "li_OK">Expertise Football</li>`;
        texte +=`<li class = "li_OK">Expertise Tennis</li>`;  
        texte +=`<li class = "li_OK">Expertise Basketball</li>`;
        texte +="</ul>";
        price += "<h1>39,99</h1>";
    }
    else{
        texte +="<ul>";
        texte +=`<li class = "li_OK">Acces a l'espace Premium</li>`;
        texte +=`<li class = "li_OK">Acces a la montante</li>`;
        texte +=`<li class = "li_OK">Acces a la formation de gestion</li>`;
        texte +=`<li class = "li_OK">Minimum un pronostic par jours</li>`;
        texte +=`<li class = "li_OK">Analyses redigees et detaillees</li>`;
        texte +=`<li class = "li_OK">Expertise Football</li>`;
        texte +=`<li class = "li_OK">Expertise Tennis</li>`;  
        texte +=`<li class = "li_OK">Expertise Basketball</li>`;
        texte +="</ul>";
        price += "<h1>150</h1>";
    }
    choicePack.innerHTML = texte;
    pricePack.innerHTML = price;
    
}
function deleteRow(data) {
   /*
   */
}

