    function saveData() {
    	window.localStorage.setItem("nombre", $("#nombre").val());
    	window.localStorage.setItem("telefono", $("#telefono").val());
    }

    $( document ).ready(function() {
    	var nombre = window.localStorage.getItem("nombre");
    	var telefono = window.localStorage.getItem("telefono");
    	$("#nombre").val(nombre);
    	$("#telefono").val(telefono);
	});