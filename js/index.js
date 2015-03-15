    function saveData() {
    	window.localStorage.setItem("nombre", $("#nombre").val());
    	window.localStorage.setItem("telefono", $("#telefono").val());
    }

    function sendData() {
    	window.localStorage.setItem("estoy", 1);
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


    function changeButton () {
        if ($(".estoy").hasClass('hidden')) {
            $(".estoy").removeClass('hidden');
            $(".green").addClass('hidden');
        } else{
            $(".green").removeClass('hidden');
            $(".estoy").addClass('hidden');
        };
    }

    function clickEstoy () {
        sendData(); 
        changeButton();
        $("#configurationButton").addClass("hidden");

    }

    function unlist() {

        window.localStorage.setItem("estoy", 0);
        $.ajax({
            url: 'http://tractoresalberto.esy.es/unlist.php',
            type: 'POST',
            data: {name: nombre},
    	})
    	.done(function() {
    		console.log("success");
    		changeButton();
            $("#configurationButton").removeClass("hidden");
    	})
    	.fail(function() {
    		console.log("error");
    	})
    	.always(function(msg) {
    		console.log("complete");
    		console.log(msg);
    	});
    	
    }

    function clickNoEstoy () {
        unlist();
    }

    $( document ).ready(function() {
    	nombre = window.localStorage.getItem("nombre");
    	telefono = window.localStorage.getItem("telefono"); 	
    	$("#nombre").val(nombre);
    	$("#telefono").val(telefono);
    	if (window.localStorage.getItem("estoy") == "1") {
    		changeButton();
    		$("#configurationButton").addClass("hidden");
    	};
	});