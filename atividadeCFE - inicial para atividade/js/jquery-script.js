//efeito de esconder formulário de cadastro
$(document).ready(function(){
   $("#botao-cadastrar").click(function(){
        $("#form-cadastrar").slideToggle("slw");
        $("#section-login").slideToggle("slw");
        $("#botao-cadastrar").hide();

    });

});