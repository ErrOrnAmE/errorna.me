<?php
	$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
?>
<!doctype html>
<html>
	<head>
		<script type="text/javascript">
			var userLang = navigator.language || navigator.userLanguage; 
			alert ("En javascript, la langue détecté est: " + userLang);
		</script>
	</head>
	<body>
		<p>En php, la langue détecté est: <?=$lang;?></p>
	</body>
</html>