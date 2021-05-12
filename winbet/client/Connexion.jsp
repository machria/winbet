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
            
            <label for = "email-input">Email:</label>
            <input type="text" id="email-input">
            <br><br>
            <label for = "password-input">Mot de passe:</label>
            <input type="text" id="password-input">
            <br><br>
            
            <button id="connect-btn">Connexion</button>

            
            
        </main>
    </div>
    <script src="connexion.js"></script>
</body>
</html>
