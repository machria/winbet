document.addEventListener('DOMContentLoaded', function () {
fetch('http://localhost:5000/getParisPublic')
.then(response => response.json())
.then(data => loadHTMLTable(data['data']));
});

function loadHTMLTable(data) {
    
    const table = document.querySelector('table tbody');

    if (data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
        return;
    }

    let tableHtml = "";
    console.log(data)
    data.forEach(function ({match, prono, cote, status, type}) {
        tableHtml += "<tr>";
        tableHtml += `<td>${match}</td>`;
        tableHtml += `<td>${prono}</td>`;
        tableHtml += `<td>${cote}</td>`;
        tableHtml += `<td>${status}</td>`;
        if(type=="Football")
            urlFoot = "ballon-de-football.svg";
        tableHtml += `<td><img src = ${urlFoot}></td>`;
        tableHtml += "</tr>";
    });

    table.innerHTML = tableHtml;
    
}

