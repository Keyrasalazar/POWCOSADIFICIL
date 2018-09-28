<?php
require('../database/database.php');

$db = mysqli_connect($database['db']['host'], $database['db']['username'], $database['db']['password'], $database['db']['database'], $database['db']['port']);
if (!$db) {
	die("Connection failed: " . mysqli_connect_error());
}
