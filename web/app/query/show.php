<?php
include "connection.php";
$data = [];

$sql = 'SELECT * FROM tasks';
$query = mysqli_query($db, $sql);

while ($row = mysqli_fetch_array($query)) {
	$data[] = [
		"id"=> $row['id'],
		"name" => $row['name'],
		"duedate" => $row['duedate'],
		"completed" => $row['completed'],
		"trashed" => $row['trashed'],
		"priority" => $row['priority'],
	];
}

echo json_encode($data);
mysqli_close($db);

