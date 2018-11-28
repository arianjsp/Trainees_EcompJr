$(document).ready(function (){
	//todas as funções devem ficar nessa parte
	//$("#id"), $(".class")
	$("p").click(function(){
		alert("Stop");
		$("p").css("color", "red");
	});
	$("#bt").click(function(){
		$("body").append("<h2>YEEEEEEI!</h2>");
	});
	$("#btnome").click(function(){
		$("body").append("<input type='text' name='sobrenome' placeholder='Sobrenome' id='snome'></input>");
        $("#btnome").attr('disabled', 'disabled'); //desabilitar o botao apos o primeiro click
	});
    $("#env").click(function() {
        nometexto = $("#nome").val();
        snometexto = $("#snome").val();
		var somaNomes = nometexto.length + snometexto.length;
		if (somaNomes < 10) {
			alert("Nome invalido");
		}
		else 
			alert("Ok!");
	});
}); 