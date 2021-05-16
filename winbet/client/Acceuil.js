function redirectionInscription(id) {
    console.log("Ligne 9");
    window.location = '/winbet/winbet/winbet/client/index.jsp?id='+id;
}

document.addEventListener('click', function(event) {
    if (event.target.className === "button_pack_classique") {
        console.log("Ligne 3");
        redirectionInscription(event.target.dataset.id);
    }
    console.log("Ligne 6");
});


