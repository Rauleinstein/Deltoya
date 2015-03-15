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

    function solucionInput () {
               var ver = window.navigator.appVersion;
            ver = ver.toLowerCase();

        if ( ver.indexOf("android 4.1") >= 0 ){            

            var idMaxLengthMap = {};

            //loop through all input-text and textarea element
            $.each($(':text, textarea, :password'), function () {
                var id = $(this).attr('id'),
                    maxlength = $(this).attr('maxlength');

                //element should have id and maxlength attribute
                if ((typeof id !== 'undefined') && (typeof maxlength !== 'undefined')) {
                    idMaxLengthMap[id] = maxlength;

                    //remove maxlength attribute from element
                    $(this).removeAttr('maxlength');

                    //replace maxlength attribute with onkeypress event
                    $(this).attr('onkeypress','if(this.value.length >= maxlength ) return false;');
                }
            });

            //bind onchange & onkeyup events
            //This events prevents user from pasting text with length more then maxlength
            $(':text, textarea, :password').bind('change keyup', function () {
                var id = $(this).attr('id'),
                    maxlength = '';
                if (typeof id !== 'undefined' && idMaxLengthMap.hasOwnProperty(id)) {
                    maxlength = idMaxLengthMap[id];
                    if ($(this).val().length > maxlength) {

                        //remove extra text which is more then maxlength
                        $(this).val($(this).val().slice(0, maxlength));
                    }
                }
            });
        }
    }

    $( document ).ready(function() {
        solucionInput();
    	nombre = window.localStorage.getItem("nombre");
    	telefono = window.localStorage.getItem("telefono"); 	
    	$("#nombre").val(nombre);
    	$("#telefono").val(telefono);
    	if (window.localStorage.getItem("estoy") == "1") {
    		changeButton();
    		$("#configurationButton").addClass("hidden");
    	};
	});