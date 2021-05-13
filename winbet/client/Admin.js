const addBtn = document.querySelector('#add-pronostic-btn');

addBtn.onclick = function () {
    const matchInput = document.querySelector('#match-input');
    const match = matchInput.value;
    const pronosticInput = document.querySelector('#pronostic-input');
    const pronostic = pronosticInput.value;
    const coteInput = document.querySelector('#cote-input');
    const cote = coteInput.value;
    const statutInput = document.querySelector('#statut-select');
    const statut = statutInput.value;
    const typeInput = document.querySelector('#type-select');
    const type = typeInput.value;
    
    matchInput.value = "";
    pronosticInput.value = "";
    coteInput.value = "";
    statutInput.value = "";
    typeInput.value = "";
    
    fetch('http://localhost:5000/insertMatch', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ match : match, pronostic : pronostic, cote : cote, statut : statut, type : type})
    })
    .then(response => response.json())
    .then(data => insertRowIntoTable(data['data']));
}

function insertRowIntoTable(data) {
    /*
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
    */
}