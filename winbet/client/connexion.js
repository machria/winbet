const connectBtn = document.querySelector('#connect-btn');

connectBtn.onclick = function () {
    const passwordInput = document.querySelector('#password-input');
    const password = passwordInput.value;
    
    const emailInput = document.querySelector('#email-input');
    const email = emailInput.value;
    
    
    //passwordInput.value = "";

    //emailInput.value = "";

    
    

    fetch('http://localhost:5000/connect', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ password : password, email : email})
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