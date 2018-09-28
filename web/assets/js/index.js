"use strict";

(function ($) {
  var add = document.getElementById("task-box");
  add.addEventListener('change', function () {
    var name = add.value;
    var date = new Date();
    var duedate = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
    var priority = date.getSeconds();

    if (name !== '') {
      $.ajax({
        url: "../../app/query/insert.php",
        type: "POST",
        data: Object.assign({
          name: name,
          duedate: duedate,
          priority: priority
        }),
        dataType: 'json',
        success: function success(response) {
          var json = response[0];

          if (json['ok']) {
            console.log(json);
            $('#task-box').val('');
            showTask();
          } else {
            alert(json['fialure']);
          }
        },
        error: function error(_error) {
          alert("Ups, Ha ocurrido un error al guardar la nota." + _error);
        }
      });
    } else {
      alert("La caja de texto esta vacia");
    }
  }); // Papelera

  document.getElementById('trashed').addEventListener('click', function () {
    var id = $("input:checked").attr('id');
    var trashed = 1;
    $.ajax({
      url: "../../app/query/trashed.php",
      type: "POST",
      data: Object.assign({
        id: id,
        trashed: trashed
      }),
      dataType: 'json',
      success: function success(response) {
        var json = response[0];

        if (json['ok']) {
          console.log(json);
          alert("Reciclado en papelera task: " + json['id']);
          showTask();
        } else {
          alert(json['fialure']);
        }
      },
      error: function error(_error2) {
        alert("Ups, Ha ocurrido un error al guardar la nota." + _error2);
      }
    });
  }); // Remove

  document.getElementById('remove').addEventListener('click', function () {
    var id = $("input:checked").attr('id');
    $.ajax({
      url: "../../app/query/delete.php",
      type: "POST",
      data: Object.assign({
        id: id
      }),
      dataType: 'json',
      success: function success(response) {
        var json = response[0];

        if (json['ok']) {
          console.log(json);
          alert("Delete task: " + json['id']);
          showTask();
        } else {
          alert(json['fialure']);
        }
      },
      error: function error(_error3) {
        alert("Ups, Ha ocurrido un error al guardar la nota." + _error3);
      }
    });
  }); // Update

  document.getElementById('update').addEventListener('click', function () {
    var id = $("input:checked").attr('id');
    var name = $("note" + id).val();

    if (name !== '') {
      $.ajax({
        url: "../../app/query/update.php",
        type: "POST",
        data: Object.assign({
          id: id,
          name: name,
          duedate: duedate,
          priority: priority
        }),
        dataType: 'json',
        success: function success(response) {
          var json = response[0];

          if (json['ok']) {
            console.log(json);
            alert("Delete task: " + json['id']);
            showTask();
          } else {
            alert(json['fialure']);
          }
        },
        error: function error(_error4) {
          alert("Ups, Ha ocurrido un error al guardar la nota." + _error4);
        }
      });
    } else {
      alert('La caja de texto no debe estar vacia');
    }
  });

  var showTask = function showTask() {
    $.ajax({
      url: "../../app/query/show.php",
      type: "GET",
      cache: false,
      success: function success(response) {
        var json = JSON.parse(response);
        document.getElementById('list-note').innerHTML = '';

        for (var i in json) {
          if (json[i].trashed !== '1') {
            $('#list-note').append('<div class="note" id="note-' + json[i].id + '"><input type="checkbox" class="note-check" id="' + json[i].id + '"/><input type="text" id="note-input" class="note-input note-' + json[i].id + '" value="' + json[i].name + '"/></div>');
          }
        }
      },
      error: function error() {
        alert("Ups, Ha ocurrido un error al mostrar las notas.");
      }
    });
  };

  showTask();
})(jQuery);