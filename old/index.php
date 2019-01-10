<!doctype html>
<html>
	<head>
		<title>ErrOrnAmE</title>
		<meta charset="UTF-8">
		<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
		<link rel="stylesheet" type="text/css" href="/style.css">
		<?php if(isset($_GET['p']) && $_GET['p'] == "virtual-reality-utopia-of-the-21-century") { ?>
		<meta property="og:title" content="Virtual Reality: Utopia of the 21th century?" />
		<meta property="og:type" content="article" />
		<meta property="og:url" content="http://errorna.me/?p=virtual-reality-utopia-of-the-21-century" />
		<meta property="og:image" content="http://errorna.me/img/og/og-vr.jpg" />
		<meta property="og:description" content="Virtual Reality can be summarized with two single words: “What if?”
						What if you were in a world where you are able to be the King of an empire?
						What if you were on the seat of a spaceship heading to Mars?
						What if everything could become real?" />
		<meta property="article:published_time" content="2016-02-26T20:36:00Z">
		<meta property="article:author" content="https://twitter.com/ErrOrnAmE_">
		<meta property="article:tag" content="Virtual Reality">
		<?php } else { ?>
		<meta property="og:title" content="ErrOrnAmE" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="http://errorna.me" />
		<meta property="og:image" content="http://errorna.me/img/og/og.png" />
		<meta property="og:description" content="Welcome to my website! I hope you will enjoy what I do." />
		<?php } ?>
	</head>
	<body>
		<div id="bottom"></div>
		<div id="content">
			<header>
				<div id="errorname">
					<h1>ErrOrnAmE</h1>
					<span id="dest_A"><span class="also" id="also">I also like <span id="cursor"></span></span></span>
				</div>
				<div id="errorname_top_container">
					<div id="errorname_top">
						<h1>ErrOrnAmE</h1>
						<span id="dest_B"></span>
						<span class="to_the_top">
							<a onclick="$(window).scrollTop(0);" class="pointer">
								Up &#8679;
							</a>
						</span>
					</div>
				</div>
			</header>
			<?php if(isset($_GET['p']) && $_GET['p'] == "virtual-reality-utopia-of-the-21-century") {
				include 'pages/virtual-reality.html';
			} else { ?>
			<main>
				<section class="who">
					<h1>Who am I?</h1>
					<div class="left infos">
						<div class="left">
							<p>
								<b>Surname:</b><br/>
								<b>Pseudo:</b><br/>
								<b>Age:</b><br/>
								<b>Status:</b>
							</p>
						</div>
						<div class="right">
							<p>
								Thibaud<br/>
								ErrOrnAmE<br/>
								22 years old<br/>
								Software Architecture Student
							</p>
						</div>
					</div>
					<div class="right social">
						<div class="left">
							<p>
								<b>Twitter:</b><br/>
								<b>Facebook:</b><br/>
								<b>Mail:</b><br/>
								<b>Github:</b>
							</p>
						</div>
						<div class="right">
							<p>
								<a href="https://twitter.com/ErrOrnAmE_" target="_blank">@ErrOrnAmE_</a><br/>
								<a href="https://www.facebook.com/ErrornameGames" target="_blank">ErrOrnAmE</a><br/>
								<a href="mailto:do.not.press.enter@gmail.com" target="_blank">do.not.press.enter@gmail.com</a><br/>
								<a href="https://github.com/ErrOrnAmE" target="_blank">@ErrOrnAmE</a>
							</p>
						</div>
					</div>
					<div class="game" id="game">
					</div>
					<span style="float: right; font-style: italic; font-size: 13px; padding-top: 2px;">Click on the landscape to begin playing</span>
				</section>
				<hr/>
				<section class="what">
					<h1>My realisations :</h1>
					<article>
						<h2>
							<a href="lost_in_warehouse/">
								Lost in Warehouse
							</a>
						</h2>
						<a href="lost_in_warehouse/">
							<img src="/img/thumbnails/warehouse.png" class="right">
						</a>
						<div class="text left">
							<span class="type left"><b>Type:</b> Video game, Website</span>
							<span class="date left"><b>Date:</b> January 2016</span>
							<p class="left">During the first semester of my <b>Bachelor in Computer Games Development</b>, I developed a <b>video game</b> in HTML5/Javascript. I only had one requirement: use the <a href="https://phaser.io/" target="_blank">Phaser</a> library and make an accompanying website. It's a <b>puzzle-game</b> in isometric view with the following lore: You are a small robot in Amazon's warehouse and you have to deliver the packages.</p>
							<span class="techno left"><b>Techno:</b> HTML5/Javascript, Phaser</span>
						</div>
					</article>
					<article>
						<h2>
							<a href="cv_game/">
								The Curriculum Vitae
							</a>
						</h2>
						<a href="cv_game/">
							<img src="/img/thumbnails/cv.png" class="right">
						</a>
						<div class="text left">
							<span class="type left"><b>Type:</b> Video game, Website</span>
							<span class="date left"><b>Date:</b> December 2014</span>
							<p class="left">To find an internship during my second year of <b>DUT in Computer Engineering</b>, I decided to create a <b>video game</b> where the player would have to beat the boss to retrieve my resume. It's a classic platformer game. <b><i>OUTDATED</i></b></p>
							<span class="techno left"><b>Techno:</b> Construct2, HTML/CSS</span>
						</div>
					</article>
					<article>
						<h2>
							<a href="/pages/Noob.pdf" target="_blank">
								Noob, an example of French Transmedia
							</a>
						</h2>
						<a href="/pages/Noob.pdf" target="_blank">
							<img src="/img/thumbnails/noob.png" class="right">
						</a>
						<div class="text left">
							<span class="type left"><b>Type:</b> Analysis</span>
							<span class="date left"><b>Date:</b> December 2015</span>
							<p class="left">For the course <b>"Rights & Creative Industries"</b> of my Bachelor in Computer Games Development, I had to make an <b>analysis file</b> about a <b>Transmedia licence</b>. I chose to write about the <a href="http://noob-tv.com/" target="_blank">Noob webserie</a>, which was a passionnating subject.</p>
						</div>
					</article>
					<!-- Defunct website
					<article>
						<h2>
							<a href="http://agencetouriste.fr/" target="_blank">
								L'Agence Touriste
							</a>
						</h2>
						<a href="http://agencetouriste.fr/" target="_blank">
							<img src="img/thumbnails/touriste.png" class="right">
						</a>
						<div class="text left">
							<span class="type left"><b>Type:</b> Wordpress</span>
							<span class="date left"><b>Date:</b> Décembre 2015</span>
							<p class="left">Mon frère et deux de ses amis ont une passion: <b>le Cinéma</b>. Pour partager leur passion, j'ai mis en place un site internet sur lequel ils diffusent <b>des critiques</b> et <b>des brèves</b> sur le monde du Cinéma.</p>
						</div>
					</article>-->
					<article class="no-border last-article">
						<h2>
							<a href="/?p=virtual-reality-utopia-of-the-21-century">
								Virtual Reality: Utopia of the 21th century?
							</a>
						</h2>
						<a href="/?p=virtual-reality-utopia-of-the-21-century">
							<img src="/img/thumbnails/oculus.jpg" class="right">
						</a>
						<div class="text left">
							<span class="type left"><b>Type:</b> Analysis</span>
							<span class="date left"><b>Date:</b> February 2016</span>
							<p class="left">For the course <b>"Analysing Computer Games"</b> of my Bachelor in Computer Games Development, I made an article about Virtual Reality, talking about its history, its current evolutions and about its uses.</p>
						</div>
					</article>
				</section>
				<hr class="pre-footer"/>
			</main>
			<?php } ?>
			<footer>
					<div class="copyright left">
						&#9400; ErrOrnAmE
					</div>
					<div id="minako" class="minako right" title="コナミコマンド">
						<img src="/img/minako/up.png"><img src="/img/minako/up.png"><img src="/img/minako/down.png"><img src="/img/minako/down.png"><img src="/img/minako/left.png"><img src="/img/minako/right.png"><img src="/img/minako/left.png"><img src="/img/minako/right.png"><img src="/img/minako/B.png"><img src="/img/minako/A.png">
					</div>
					<div class="mid">
						Sprites credit: <a href="http://bevouliin.com" target="_blank">Bevouliin</a>
					</div>
			</footer>
		</div>

		<div id="pong">
			<a href="#" onclick="stopPong();return false;">
				<div class="pong" style="display: none;position: fixed;right: 15px;top: 15px;color: black;border: 1px solid black; border-radius: 0 10px 0 10px;background-color:white;z-index: 10;">
					<p style="margin: 10px 10px 10px 10px;">Esc</p>
				</div>
			</a>
			<div class="pong" style="display: none;position: fixed;left: 15px;bottom: 60px;color: black;border: 1px solid black; border-radius: 0 10px 0 10px;background-color:white;">
				<p style="margin: 10px 15px 10px 15px;">Z</p>
			</div>
			<div class="pong" style="display: none;position: fixed;left: 15px;bottom: 15px;color: black;border: 1px solid black; border-radius: 0 10px 0 10px;background-color:white;">
				<p style="margin: 10px 14px 10px 14px;">S</p>
			</div>
			<div class="pong" style="display: none;position: fixed;right: 15px;bottom: 60px;color: black;border: 1px solid black; border-radius: 0 10px 0 10px;background-color:white;">
				<p style="margin: 10px 15px 10px 15px;">&uarr;</p>
			</div>
			<div class="pong" style="display: none;position: fixed;right: 15px;bottom: 15px;color: black;border: 1px solid black; border-radius: 0 10px 0 10px;background-color:white;">
				<p style="margin: 10px 15px 10px 15px;">&darr;</p>
			</div>
			<div class="pong" style="display: none;position: fixed;left: 50%;top: 0px;color: black;font-size: 31px;">
				<p style="width: 200px; margin-left:-50%;text-align: center;">
					<span id="score1">0</span> - <span id="score2">0</span>
				</p>
			</div>
		</div>

		<script src="/libs/jquery-3.2.1.slim.min.js"></script>
		<script src="/libs/typed.js"></script>
		<script>

		/* Typing */

		var likes_names = [
			"Jinx",
			"la raclette",
			"Transistor",
			"Bouletcorp",
			"Calvin and Hobbes",
			"Community",
			"Maggot Brain",
			"Bon Entendeur"
		];

		var likes_links = [
			"https://www.youtube.com/watch?v=0nlJuwO0GDs",
			"https://www.flickr.com/photos/wu475/2048978093",
			"https://www.youtube.com/watch?v=RT55lch6y_U",
			"http://english.bouletcorp.com/2015/05/",
			"http://www.gocomics.com/calvinandhobbes/2016/01/06",
			"https://www.youtube.com/watch?v=ISEI9UN-RC4",
			"https://www.youtube.com/watch?v=JOKn33-q4Ao",
			"http://bonentendeur.com/#pour-paris"
		];

		var likes = [];

		for(var key in likes_names) {
			likes.push("<a href='"+likes_links[key]+"' target='_blank'>"+likes_names[key]+".</a>");
		}

		$(function(){
		    $("#cursor").typed({
		        strings: likes,
		        typeSpeed: 0,
		        backDelay: 3000,
		        shuffle: true,
		        loop: true
		    });
		});

		/* Scrolling */

		var isTop = true;

		$(document).scroll(function() {
			if ($(this).scrollTop()>=400 && isTop) {
				$('#errorname_top').toggle(true);
				$('#errorname').toggle(false);

				$('#also').detach().appendTo('#dest_B');

				isTop = false;
			} else if($(this).scrollTop()<400 && !isTop) {
				$('#errorname_top').toggle(false);
				$('#errorname').toggle(true);

				$('#also').detach().appendTo('#dest_A');

				isTop = true;
			}
		});

		/* Minako */
		(function () {
			if ( window.addEventListener ) {
				var state = 0, minako = [38,38,40,40,37,39,37,39,66,65];
				window.addEventListener("keydown", function(e) {
					if ( e.keyCode == minako[state] ) {
						var src=$('#minako').children()[state].src.split('/').pop();
						$('#minako').children()[state].src = '/img/minako/'+src.split('.')[0]+'_.'+src.split('.')[1];
						state++;
					}
					else if ( e.keyCode != 16 ){
						state = 0;
						$.each($('#minako').children(),function(i,img) {
							img.src = img.src.replace('_','');
						});
					}
					if ( state == 10 ) {
						startPong();
						$.each($('#minako').children(),function(i,img) {
							img.src = img.src.replace('_','');
						});
					}
				}, true);
			}
		}());

		(function () {
			if ( window.addEventListener ) {
				window.addEventListener("keydown", function(e) {
					if ( e.keyCode == 27 )
						stopPong();
				}, true);
			}
		}());

		function startPong() {
			$('#content').css("visibility","hidden");
			//$('#errorname').css("visibility", "visible");
			//$('#content').toggle();
			thisPong(true);
		}

		function stopPong() {
			$('#content').css("visibility","visible");
			//$('#content').toggle();
			thisPong(false);
		}

		</script>

		<script src="/libs/pong.js"></script>

		<?php if(isset($_GET['p']) && $_GET['p'] == "virtual-reality-utopia-of-the-21-century") { ?>

		<?php } else { ?>
		<script src="/libs/phaser.min.js"></script>

		<!-- Main script -->
		<script src="/croco_game/game.js"></script>

		<!-- States scripts -->
		<script src="/croco_game/states/boot.js"></script>
		<script src="/croco_game/states/level.js"></script>

		<!-- Classes scripts -->
		<script src="/croco_game/classes/layer_manager.js"></script>
		<script src="/croco_game/classes/player.js"></script>
		<script src="/croco_game/classes/obstacle.js"></script>
		<script src="/croco_game/classes/obstacle_group.js"></script>
		<script src="/croco_game/classes/obstacle_manager.js"></script>

		<script>
			game.state.start('Boot');
		</script>
		<?php } ?>
	</body>
</html>
