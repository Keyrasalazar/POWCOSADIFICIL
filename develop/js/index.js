(($) => {
	const add = document.getElementById("task-box");

	add.addEventListener('change', () => {
		const name = add.value;
		const date = new Date();
		const duedate =  date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay();
		const priority = date.getSeconds();

		if (name !== '') {
			$.ajax({
				url: "../../app/query/insert.php",
				type:"POST",
				data: Object.assign({
					name,
					duedate,
					priority
				}),
				dataType: 'json',
				success:function(response) {
					const json = response[0];

					if (json['ok']) {
						console.log(json);
						$('#task-box').val('');
						showTask();
					}
					else {
						alert(json['fialure']);
					}
				},
				error:function(error){
					alert("Ups, Ha ocurrido un error al guardar la nota."+ error);
				}
			});
		} else {
			alert("La caja de texto esta vacia");
		}
	});

	// Papelera
	document.getElementById('trashed').addEventListener('click', () => {
		const id = $("input:checked").attr('id');
		const trashed =  1;

		$.ajax({
			url: "../../app/query/trashed.php",
			type:"POST",
			data: Object.assign({
				id,
				trashed
			}),
			dataType: 'json',
			success:function(response) {
				const json = response[0];

				if (json['ok']) {
					console.log(json);
					alert("Reciclado en papelera task: "+json['id']);
					showTask();
				}
				else {
					alert(json['fialure']);
				}
			},
			error:function(error){
				alert("Ups, Ha ocurrido un error al guardar la nota."+ error);
			}
		});
	});

	// Remove
	document.getElementById('remove').addEventListener('click', () => {
		const id = $("input:checked").attr('id');

		$.ajax({
			url: "../../app/query/delete.php",
			type:"POST",
			data: Object.assign({
				id,
			}),
			dataType: 'json',
			success:function(response) {
				const json = response[0];

				if (json['ok']) {
					console.log(json);
					alert("Delete task: "+json['id']);
					showTask();
				}
				else {
					alert(json['fialure']);
				}
			},
			error:function(error){
				alert("Ups, Ha ocurrido un error al guardar la nota."+ error);
			}
		});
	});

	// Update
	document.getElementById('update').addEventListener('click', () => {
		const id = $("input:checked").attr('id');
		const name = $("note"+id).val();

		if (name !== '') {
			$.ajax({
				url: "../../app/query/update.php",
				type: "POST",
				data: Object.assign({
					id,
					name,
					duedate,
					priority
				}),
				dataType: 'json',
				success: function (response) {
					const json = response[0];

					if (json['ok']) {
						console.log(json);
						alert("Delete task: " + json['id']);
						showTask();
					}
					else {
						alert(json['fialure']);
					}
				},
				error: function (error) {
					alert("Ups, Ha ocurrido un error al guardar la nota." + error);
				}
			});
		} else {
			alert('La caja de texto no debe estar vacia')
		}
	});

	let showTask = () => {
		$.ajax({
			url: "../../app/query/show.php",
			type: "GET",
			cache: false,
			success:function(response) {
				const json = JSON.parse(response);
				document.getElementById('list-note').innerHTML = '';

				for(const i in json) {
					if (json[i].trashed !== '1') {
						$('#list-note').append('<div class="note" id="note-' + json[i].id + '"><input type="checkbox" class="note-check" id="' + json[i].id + '"/><input type="text" id="note-input" class="note-input note-' + json[i].id + '" value="' + json[i].name + '"/></div>');
					}
				}
			},
			error:function(){
				alert("Ups, Ha ocurrido un error al mostrar las notas.");
			}
		});
	};

	showTask();
})(jQuery);
