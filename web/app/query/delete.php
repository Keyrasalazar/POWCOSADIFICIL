<?php
include 'connection.php';

$sql = "DELETE from tasks WHERE id='" . $_POST['id'] . "'";

if (mysqli_query($db, $sql)) {
	$response[] = [
		'ok' => TRUE,
		"result_type" => "deleted_task",
		"id" => $_POST['id']
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
