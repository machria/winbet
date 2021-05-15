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
const searchBtn = document.querySelector('#search-btn');
const updateBtn = document.querySelector('#update-row-btn');
document.querySelector('table tbody').addEventListener('click', function(event) {
    if (event.target.className === "delete-row-btn") {
        deleteRowById(event.target.dataset.id);
    }
    if (event.target.className === "edit-row-btn") {
        handleEditRow(event.target.dataset.id);
    }
});

function deleteRowById(id) {
    fetch('http://localhost:5000/delete/' + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    });
}

function handleEditRow(id) {
    const updateSection = document.querySelector('#update-row');
    updateSection.hidden = false;
    document.querySelector('#update-name-input').dataset.id = id;
}

updateBtn.onclick = function() {
    const updateNameInput = document.querySelector('#update-name-input');

    console.log(updateNameInput);

    fetch('http://localhost:5000/update', {
        method: 'PATCH',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            id: updateNameInput.dataset.id,
            name: updateNameInput.value
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            location.reload();
        }
    })
}

/*
var delBtn = document.getElementsByClassName('delete-row-btn')[0];
console.log(delBtn);
for (let item of delBtn) {
    console.log(item);
    item.addEventListener("click", function (Event) {
            console.log(item);

    const delInput = item.attr("data-id") ;
    const iddel = delInput;

    console.log("name input get :" + delInput);
    
    fetch('http://localhost:5000/delete', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ iddel : iddel})
    })
    .then(response => response.json())
    .then(data => deleteRow(data['data']));
});
};


 var element = document.querySelector('.delete-row-btn');
element.onclick = function () {
     console.log(item);

    const delInput = $(this).data().value;
    const iddel = delInput;

    console.log("name input get :" + delInput);
    
    fetch('http://localhost:5000/delete', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ iddel : iddel})
    })
    .then(response => response.json())
    .then(data => deleteRow(data['data']));
};


 */
 searchBtn.onclick = function() {
    const searchValue = document.querySelector('#search-input').value;

    fetch('http://localhost:5000/search/' + searchValue)
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
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

    let tableHtml = "";
    console.log(data)
    data.forEach(function ({id_membre, pseudo, password, born_date,email, status}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${id_membre}</td>`;
        tableHtml += `<td>${pseudo}</td>`;
        tableHtml += `<td>${password}</td>`;
        tableHtml += `<td>${new Date(born_date).toLocaleString()}</td>`;
        tableHtml += `<td>${email}</td>`;
        tableHtml += `<td>${status}</td>`;
        tableHtml += `<td><button class="delete-row-btn" data-id=${id_membre}>Delete</td>`;
        tableHtml += `<td><button class="edit-row-btn" data-id=${id_membre}>Edit</td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
    
}
function deleteRow(data) {
   /*
   */
}