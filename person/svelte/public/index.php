<?php 
	$dev = false;
	$root = $dev? '' : dirname($_SERVER['REQUEST_URI']);
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width,initial-scale=1'>
		<title>Svelte app</title>
		<link rel='icon' type='image/png' href='<?= $root ?>/favicon.png'>
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css" crossorigin="anonymous">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link
			href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
			rel="stylesheet">
		<link rel='stylesheet' href='<?= $root ?>/foundation-icons.css'>
		<link rel='stylesheet' href='<?= $root ?>/global.css'>
		<link rel='stylesheet' href='<?= $root ?>/build/bundle.css'>
		<script defer src='<?= $root ?>/build/bundle.js'></script>
	</head>
	<body></body>
</html>
