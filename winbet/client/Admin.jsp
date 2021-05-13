<!DOCTYPE html>
<html lang="en">
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
   <jsp:include page="Nav.jsp" />
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
</style>
    <div>
		<p class = "ispn">Inscription</p>
	</div>
    <div class="jumbotron">
        <main>
            <label for = "match-input">Match:</label>
            <input type="text" id="match-input">
            <br><br>
            <label for = "pronostic-input">Pronostic:</label>
            <input type="text" id="pronostic-input">
            <br><br>
            <label for = "cote-input">Cote:</label>
            <input type="number" id="cote-input">
            <br><br>
            <label for = "statut-input">Statut:</label>
            <select name="statut" id="statut-select">
                <option value="Public">Public</option>
                <option value="Premium">Premium</option>
            </select>
            <br><br>
            <label for = "type-select">Type:</label>
            <select name="type" id="type-select">
                <option value="Football">Football</option>
                <option value="Tennis">Tennis</option>
                <option value="Basket">Basket</option>
                <option value="Rugby">Rugby</option>
            </select>
            <br><br>
            <button id="add-pronostic-btn">Ajouter pronostic</button>
            <script src="Admin.js"></script>
        </main>
    </div>
</body>
</html>