<?php

if (isset($_POST)) {
	include 'connection.php';
	$response = [];
	$sql = "INSERT INTO tasks (name, duedate, priority) VALUES ('". $_POST['name'] ."', '". $_POST['duedate'] ."', '". $_POST['priority'] ."')";

	if ($db->query($sql) === TRUE) {
		$response[] = [
			'ok' => TRUE,
			'result_type' => 'new_task',
			'new_id' => mysqli_insert_id($db)
		];
		echo json_encode($response);
	}
	else {
		$response[] = [
			"fialure" => $db->error
		];
		echo json_encode($response);
	}

	mysqli_close($db);
}
else {
	$response["faild"] = "Valores nulos";
	echo json_encode($response);
}
