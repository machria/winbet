<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesheet.css">
    <title>Inscription</title>
    <link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
	crossorigin="anonymous">
</head>
<body>
   <jsp:include page="Header.jsp" />
			<style>

                label{
                    display: block;
	                width: 150px;
                    float: left;
                    text-align: left;
                }
                
                .ispn{
	               text-align : center;
	               font-family : Marker Felt, fantasy;
	               font-size : 50px;
	               margin-top :5%;
                }
                
                .jumbotron {
                    padding: 2rem;
                    margin: 2rem;
                    background-color: #FF5757;
                    border-radius: 0.2rem;
                }
                .jumbotron-inscription-pack {
                    padding: 2rem;
                    margin: 2rem;
                    background-color: #212529 ; 
                    border-radius: 0.2rem;
                    display : flex;
                }
                #info-pack{
                    color : white;
                    
                }
                #price-pack{
                    color : white;
                    text-align: center;
                }
                .logo-inscription{
                    width: 180px;
	                height: 180px;
                }
                .li_OK{
                    list-style: url('bouton-v.svg');
                }

                .li_KO{
                    list-style: url('bouton-x.svg');
                }
                
</style>
    
    <div>
		<p class = "ispn">Inscription</p>
	</div>
    
    <div class="jumbotron-inscription-pack">
        <div class="col-sm-4">
            <div id="logo-inscription">
                <img class="logo-inscription" src="Logo_winbet.png" alt="logo">
            </div>
        </div>
        <div class="col-sm-4">
            <div id="info-pack">
            </div>
        </div>
        <div class="col-sm-4">
            <div id="price-pack">
                
            </div>
        </div>
    </div>
    
    <div class="jumbotron">
        <main>
            <label for = "name-input">Pseudo:</label>
            <input type="text" id="name-input">
            <br><br>
            <label for = "born-input">Date de naissance:</label>
            <input type="date" id="born-input">
            <br><br>
            <label for = "email-input">Email:</label>
            <input type="text" id="email-input">
            <br><br>
            <label for = "password-input">Mot de passe:</label>
            <input type="text" id="password-input">
            <br><br>
            <label for = "status-select">Statut:</label>
            <select name="status" id="status-select">
                <option value="Public">Public</option>
                <option value="Premium">Premium</option>
            </select>
            <br><br>
            <button id="add-name-btn">Add People</button>

        </main>
    </div>
    <jsp:include page="Footer.jsp" />
    <script src="Inscription.js"></script>
    <script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
		crossorigin="anonymous"></script>
</body>
</html>