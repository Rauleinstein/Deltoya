    function saveData() {
    	window.localStorage.setItem("nombre", $("#nombre").val());
    	window.localStorage.setItem("telefono", $("#telefono").val());
    }

    function sendData() {
    	$.ajax({
    		url: 'http://tractoresalberto.esy.es/insert.php',
    		type: 'POST',
    		
    		data: {name: nombre, whats: telefono },
    	})
    	.done(function() {
    		console.log("success");
    	})
    	.fail(function() {
    		console.log("error");
    	})
    	.always(function(msg) {
    		console.log("complete");
    		console.log(msg);
    	});
    	
    }

    function getData() {
    	$.ajax({
    		url: 'http://tractoresalberto.esy.es/lista.php',
    		type: 'POST',
    	})
    	.done(function() {
    		console.log("success");
    	})
    	.fail(function() {
    		console.log("error");
    	})
    	.always(function(msg) {
    		console.log("complete");
    		console.log(msg);
    	});
    	
    }

    $( document ).ready(function() {
    	nombre = window.localStorage.getItem("nombre");
    	telefono = window.localStorage.getItem("telefono");
    	$("#nombre").val(nombre);
    	$("#telefono").val(telefono);
	});