<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="UTF-8" http-equiv="Content-Type"
				content="text/html; charset=iso-8859-1">
	<title>Task</title>
	<link type="text/css" rel="stylesheet" href="assets/css/index.css"/>
</head>
<body>
<div class="app">
	<div class="is-title">
		<div class="title">Mis tareas</div>
	</div>
	<div class="is-menu">
		<div class="items">
			<div class="options-left">
				<a class="options" ><i class="fas fa-plus"></i> Nueva Tarea</a>
				<a class="options"> Modificar datos</a>
				<a class="options"><i class="icono fas fa-arrow-up"></i></a>
				<a class="options"><i class="icono fas fa-arrow-down"></i></a>
				<a class="options" id="trashed"><i class="icono far fa-trash-alt"></i></a>
				<a class="options" id="update">Actualizar</a>
			</div>

			<div class="options-right">
				<a class="options">Ver:</a>
				<a class="options">Tareas completas</a>
				<a class="options" id="remove">Papelera</a>
			</div>
		</div>
	</div>

	<div class="is-content">
		<div class="content">

			<div class="is-note">
				<!-- List Notes -->
				<div class="list-note" id="list-note"></div>

				<!--Add Notes-->
				<div class="note">
					<input type="checkbox" class="note-check"/>
					<input type="text" name="task-box" class="note-input" id="task-box"/>
				</div>
			</div>

		</div>
	</div>
</div>

<script src="./assets/js/lib/jquery.min.js"></script>
<script src="./assets/js/index.js"></script>
</body>
</html>