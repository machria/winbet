<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Page d'acceuil</title>
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
	crossorigin="anonymous">
</head>
<body>

	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container-fluid">
			<a class="navbar-brand" href="#"><img class="logo"
				src="Logo_winbet.png" alt="logo"></a>

			<style>
.logo {
	width: 64px;
	heigth: 64px;
}

body {
	background-color: grey;
}
</style>

			<button class="navbar-toggler" type="button"
				data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item"><a class="nav-link accueil"
						aria-current="page" href="#">Accueil</a></li>
					<li class="nav-item"><a class="nav-link public" href="#"
						tabindex="-1" aria-disabled="true">Public</a></li>
					<li class="nav-item"><a class="nav-link premium" href="#"
						tabindex="-1" aria-disabled="true">Premium</a></li>
					<li class="nav-item"><a class="nav-link galerie" href="#"
						tabindex="-1" aria-disabled="true">Galerie</a></li>
					<li class="nav-item"><a class="nav-link contact" href="#"
						tabindex="-1" aria-disabled="true">Contact</a></li>
					<li class="nav-item"><a class="nav-link inscription" href="#"
						tabindex="-1" aria-disabled="true">Inscription</a></li>
					<li class="nav-item"><a class="nav-link inscription" href="#"
						tabindex="-1" aria-disabled="true">Connexion</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<div>
		<p class = "nos_packs">NOS PACKS</p>
	</div>
	<div class="jumbotron">
		<div class="container">
			<div class="row">

				<div class="col-sm-4">
					<div class="back_pack">
						<div class=pack_header>
							<h2>PACK CLASSIQUE</h2>
							<h3>14,99 €</h3>
						</div>
						<div>
							<ul>
								<li class = "li_OK">Accès à l'espace Premium</li>
								<li class = "li_KO">Accès à la montante</li>
								<li class = "li_KO">Accès à la formation de gestion</li>
								<li class = "li_OK">Minimum un pronostic par jours</li>
								<li class = "li_OK">Analyses rédigées et détaillées</li>
								<li class = "li_OK">Expertise Football</li>
								<li class = "li_OK">Expertise Tennis</li>
								<li class = "li_OK">Expertise Basketball</li>
							</ul>
						</div>
						<div class="div_button_pack_classique">
							<button class="button_pack_classique" type="button">
								Devenir Premium</button>
						</div>

					</div>
				</div>

				<div class="col-sm-4">
					<div class="back_pack">
						<div class=pack_header>
							<h2>PACK TRIMESTRIEL</h2>
							<h3>39,99 €</h3>
						</div>
						<div>
							<ul>
								<li class = "li_OK">Accès à l'espace Premium</li>
								<li class = "li_OK">Accès à la montante</li>
								<li class = "li_KO">Accès à la formation de gestion</li>
								<li class = "li_OK">Minimum un pronostic par jours</li>
								<li class = "li_OK">Analyses rédigées et détaillées</li>
								<li class = "li_OK">Expertise Football</li>
								<li class = "li_OK">Expertise Tennis</li>
								<li class = "li_OK">Expertise Basketball</li>
							</ul>
						</div>
						<div class="div_button_pack_classique">
							<button class="button_pack_classique" type="button">
								Devenir Premium</button>
						</div>

					</div>
				</div>

				<div class="col-sm-4">
					<div class="back_pack">
						<div class=pack_header>
							<h2>PACK ANNUEL</h2>
							<h3>150 €</h3>
						</div>
						<div>
							<ul>
								<li class = "li_OK">Accès à l'espace Premium</li>
								<li class = "li_OK">Accès à la montante</li>
								<li class = "li_OK">Accès à la formation de gestion</li>
								<li class = "li_OK">Minimum un pronostic par jours</li>
								<li class = "li_OK">Analyses rédigées et détaillées</li>
								<li class = "li_OK">Expertise Football</li>
								<li class = "li_OK">Expertise Tennis</li>
								<li class = "li_OK">Expertise Basketball</li>
							</ul>
						</div>
						<div class="div_button_pack_classique">
							<button class="button_pack_classique" type="button">
								Devenir Premium</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<style>
.jumbotron {
	padding: 2rem;
	margin: 2rem;
	background-color: #FF5757;
	border-radius: 0.2rem;
}

.pack_header {
	text-align: center;
	margin-top : 20px;
	padding-top : 20px;
}

.button_pack_classique {
	border-radius: 0.5rem;
	color: white;
	background-color: #32CD32;
	display: block;
	margin :auto;
}

.back_pack {
	border-radius: 0.2rem;
	background-color: #F5F5F5;
	height : 90%;
}

.div_button_pack_classique{
	margin-bottom : 10%;
}

.li_OK{
	list-style: url('bouton-v.svg');
}

.li_KO{
	list-style: url('bouton-x.svg');
}

.nos_packs{
	text-align : center;
	font-family : Marker Felt, fantasy;
	font-size : 50px;
	margin-top :5%;
}
</style>
	<div class=jumbotron>
		<div id="carouselExampleControls" class="carousel slide"
			data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="Pronos1.jpeg" class="imgPronos" alt="P1">
				</div>
				<div class="carousel-item">
					<img src="Pronos2.jpeg" class="imgPronos" alt="P2">
				</div>
				<div class="carousel-item">
					<img src="Pronos3.jpeg" class="imgPronos" alt="P3">
				</div>
				<div class="carousel-item">
					<img src="Pronos4.jpeg" class="imgPronos" alt="P4">
				</div>
				<div class="carousel-item">
					<img src="Pronos5.jpeg" class="imgPronos" alt="P5">
				</div>
				<div class="carousel-item">
					<img src="Pronos6.jpeg" class="imgPronos" alt="P6">
				</div>
				<div class="carousel-item">
					<img src="Pronos7.jpeg" class="imgPronos" alt="P7">
				</div>
				<div class="carousel-item">
					<img src="Pronos8.jpeg" class="imgPronos" alt="P8">
				</div>
				<div class="carousel-item">
					<img src="Pronos9.jpeg" class="imgPronos" alt="P9">
				</div>
				<div class="carousel-item">
					<img src="Pronos10.jpeg" class="imgPronos" alt="P10">
				</div>
				<div class="carousel-item">
					<img src="Pronos11.jpeg" class="imgPronos" alt="P11">
				</div>
				<div class="carousel-item">
					<img src="Pronos12.jpeg" class="imgPronos" alt="P12">
				</div>
				<div class="carousel-item">
					<img src="Pronos13.jpeg" class="imgPronos" alt="P13">
				</div>
				<div class="carousel-item">
					<img src="Pronos14.jpeg" class="imgPronos" alt="P14">
				</div>
				<div class="carousel-item">
					<img src="Pronos15.jpeg" class="imgPronos" alt="P15">
				</div>
				<div class="carousel-item">
					<img src="Pronos16.jpeg" class="imgPronos" alt="P16">
				</div>
				<div class="carousel-item">
					<img src="Pronos17.jpeg" class="imgPronos" alt="P17">
				</div>
			</div>

			<button class="carousel-control-prev" type="button"
				data-bs-target="#carouselExampleControls" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button"
				data-bs-target="#carouselExampleControls" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>

	<style>
.imgPronos {
	width: 200px;
	heigth: 200px;
	text-align: center;
	margin: auto;
	display: flex;
}
</style>

	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
		crossorigin="anonymous"></script>
</body>
</html>