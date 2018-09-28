<?php
include 'connection.php';
$response = [];

$sql = "UPDATE tasks SET name='" . $_POST['name'] . "' WHERE id='" . $_POST['id'] . "'";

if (mysqli_query($db, $sql)) {
	$response[] = [
		'ok' => TRUE,
		'result_type' => "update_task",
		'id' => $_POST['id']
	];
	echo json_encode($response);
}
else {
	$response[] = [
		"fialure" => $db->error,
	];
	echo json_encode($response);
}

mysqli_close($db);
