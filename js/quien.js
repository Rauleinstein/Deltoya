
	function getData() {
		$.ajax({
			url: 'http://tractoresalberto.esy.es/lista.php',
			type: 'POST',
		})
		.done(function(data) {
			console.log("success");
			datos = JSON.parse(data);
			showData();
		})
		.fail(function() {
			console.log("error");
		})
		.always(function(msg) {
			console.log("complete");
			console.log(msg);
		});
	}

	function showData() {

		var listahtml = "";

		for (var i = datos.length - 1; i >= 0; i--) {
			listahtml += "<a>"+datos[i].nombre+" "+datos[i].numero+"</a><br>";
		};
		$("#lista").html(listahtml);
	}

    $( document ).ready(function() {
    	nombre = window.localStorage.getItem("nombre");
    	telefono = window.localStorage.getItem("telefono");
    	getData();
	});