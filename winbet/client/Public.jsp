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
    <jsp:include page="Header.jsp" />
    <div>
		<p class = "pronos_public">Pronos Public</p>
	</div>
    <div class="jumbotron">
        <table id="table">
                    <thead>
                        <th>Match</th>
                        <th>Pronos</th>
                        <th>Cote</th>
                        <th>Statut</th>
                        <th>Sport</th>
                    </thead>
                    <tbody></tbody>
                </table>
        </div>
        <script src="Public.js"></script>
        <script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
		crossorigin="anonymous"></script>
        <style>
            .jumbotron {
                padding: 2rem;
                margin: 2rem;
                background-color: #FF5757;
                border-radius: 0.2rem;
            }
            .pronos_public{
                text-align : center;
                font-family : Marker Felt, fantasy;
                font-size : 50px;
                margin-top :5%;
            }
        </style>
        <jsp:include page="Footer.jsp" />
        <script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
		crossorigin="anonymous"></script>
    </body>
</html>