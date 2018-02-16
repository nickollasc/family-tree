// Author: nickollascarvalho@gmail.com - License: GPL

$(function() {

  $( document ).ready( $( '#select_machos_femeas' ).val( '#' ) );

  $("#select_machos_femeas").change(function(){
    var id = $(this).attr('id');
    var macho_femea = $(this).val();

    $('#nome_curio_img*').remove();
    $('#nome_curio*').remove();

    // gera menu dinamicamente
    $.getJSON("functions.php?func=getMachosFemeas&macho_femea=" + $(this).val(), function(dadosRetornados){
      $.each(dadosRetornados, function (key, value) {
        $.each(value.nome, function (key2, value2) {
        $("#div_nomes_machos_femeas").after("<img id='nome_curio_img' src='images/" + macho_femea + ".png'/><a id='nome_curio' href='#'>" + value.nome[key2] + "</a><br />");

        $("#nome_curio").click(function(){

          $('td').removeAttr('name');
          $('p').text("sem_nome");
          $('p').css( { "visibility":"hidden", "color":"black" } );
          $('td').css( { "background-color":"white", "border-style":"solid" } );

          // seta cor da celula do curio selecionado
          if ( macho_femea == "Macho" ) {
            $("#celula_curio").css( "border-color", "blue" );
          } else {
            $("#celula_curio").css( "border-color", "red" );
          }         

          // seta nome do curio selecionado
          $("#curio").text( value.nome[key2] );
          $("#curio").css( "visibility", "visible" );

          // pega pais curio 
          $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value.nome[key2], function(dadosRetornados){
            $.each(dadosRetornados, function (key_pais, value_pais) {
 
              $("#pai").text( value_pais.pai.substring(0,13) ).css("visibility", "visible");
              $("#mae").text( value_pais.mae.substring(0,13) ).css("visibility", "visible");

              $(this).setColorCel(value_pais.pai, 'celula_pai');
              $(this).setColorCel(value_pais.mae, 'celula_mae');

          // pega avoo e avoh do pai
          $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_pais.pai, function(dadosRetornados){
            $.each(dadosRetornados, function (key_avos, value_avos) {
              $("#avoo_pai").text( value_avos.pai.substring(0,13) ).css("visibility", "visible");
              $("#avoh_pai").text( value_avos.mae.substring(0,13) ).css("visibility", "visible");

              $(this).setColorCel(value_avos.pai, 'celula_avoo_pai');
              $(this).setColorCel(value_avos.mae, 'celula_avoh_pai');

              // pega bisavoo e bisavoh pai 1
              $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_avos.pai, function(dadosRetornados){
                $.each(dadosRetornados, function (key_bisavos_pai_1, value_bisavos_pai_1) {
                  $("#bisavoo_pai_1").text( value_bisavos_pai_1.pai.substring(0,13) ).css("visibility", "visible");
                  $("#bisavoh_pai_1").text( value_bisavos_pai_1.mae.substring(0,13) ).css("visibility", "visible");

                  $(this).setColorCel(value_bisavos_pai_1.pai, 'celula_bisavoo_pai_1');
                  $(this).setColorCel(value_bisavos_pai_1.mae, 'celula_bisavoh_pai_1');

                // pega tataravoo e tataravoh pai 1 1
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_pai_1.pai, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_pai_1_1, value_tataravos_pai_1_1) {
                    $("#tataravo_pai_1_1").text( value_tataravos_pai_1_1.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_pai_1_1").text( value_tataravos_pai_1_1.mae.substring(0,13) ).css("visibility", "visible");
 
                    $(this).setColorCel(value_tataravos_pai_1_1.pai, 'celula_tataravo_pai_1_1');
                    $(this).setColorCel(value_tataravos_pai_1_1.mae, 'celula_tataravoh_pai_1_1');

                  }); // $.each(dadosRetornados... get tataravoo_pai_1_1
                }); // $.getJSON("functions.php ... get tataravoo_pai_1_1

                // pega tataravoo e tataravoh pai 1 2
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_pai_1.mae, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_pai_1_2, value_tataravos_pai_1_2) {
                    $("#tataravo_pai_1_2").text( value_tataravos_pai_1_2.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_pai_1_2").text( value_tataravos_pai_1_2.mae.substring(0,13) ).css("visibility", "visible");

                    $(this).setColorCel(value_tataravos_pai_1_2.pai, 'celula_tataravo_pai_1_2');
                    $(this).setColorCel(value_tataravos_pai_1_2.mae, 'celula_tataravoh_pai_1_2');

                  }); // $.each(dadosRetornados... get tataravoo_pai_1_2
                }); // $.getJSON("functions.php ... get tataravoo_pai_1_2

                }); // $.each(dadosRetornados... get bisavoo_pai_1
              }); // $.getJSON("functions.php ... get bisavoo_pai_1

              // pega bisavoo e bisavoh pai 2 
              $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_avos.mae, function(dadosRetornados){
                $.each(dadosRetornados, function (key_bisavos_pai_2, value_bisavos_pai_2) {
                  $("#bisavoo_pai_2").text( value_bisavos_pai_2.pai.substring(0,13) ).css("visibility", "visible");
                  $("#bisavoh_pai_2").text( value_bisavos_pai_2.mae.substring(0,13) ).css("visibility", "visible");

                    $(this).setColorCel(value_bisavos_pai_2.pai, 'celula_bisavoo_pai_2');
                    $(this).setColorCel(value_bisavos_pai_2.mae, 'celula_bisavoh_pai_2');

                // pega tataravoo e tataravoh pai 2 1
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_pai_2.pai, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_pai_2_1, value_tataravos_pai_2_1) {
                    $("#tataravo_pai_2_1").text( value_tataravos_pai_2_1.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_pai_2_1").text( value_tataravos_pai_2_1.mae.substring(0,13) ).css("visibility", "visible");

                    $(this).setColorCel(value_tataravos_pai_2_1.pai, 'celula_tataravo_pai_2_1');
                    $(this).setColorCel(value_tataravos_pai_2_1.mae, 'celula_tataravoh_pai_2_1');
 
                  }); // $.each(dadosRetornados... get tataravoo_pai_2_1
                }); // $.getJSON("functions.php ... get tataravoo_pai_2_1

                // pega tataravoo e tataravoh pai 2 2
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_pai_2.mae, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_pai_2_2, value_tataravos_pai_2_2) {
                    $("#tataravo_pai_2_2").text( value_tataravos_pai_2_2.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_pai_2_2").text( value_tataravos_pai_2_2.mae.substring(0,13) ).css("visibility", "visible");

                    $(this).setColorCel(value_tataravos_pai_2_2.pai, 'celula_tataravo_pai_2_2');
                    $(this).setColorCel(value_tataravos_pai_2_2.mae, 'celula_tataravoh_pai_2_2');

                  }); // $.each(dadosRetornados... get tataravoo_pai_2_1
                }); // $.getJSON("functions.php ... get tataravoo_pai_2_1

                }); // $.each(dadosRetornados... get bisavoo_pai_2
              }); // $.getJSON("functions.php ... get bisavoo_pai_2

            }); // $.each(dadosRetornados... get avoo_pai 
          }); // $.getJSON("functions.php ... get avoo pai 

          // pega avoo e avoh da mae
          $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_pais.mae, function(dadosRetornados){
            $.each(dadosRetornados, function (key_avos, value_avos) {
              $("#avoo_mae").text( value_avos.pai.substring(0,13) ).css("visibility", "visible");
              $("#avoh_mae").text( value_avos.mae.substring(0,13) ).css("visibility", "visible");

              $(this).setColorCel(value_avos.pai, 'celula_avoo_mae');
              $(this).setColorCel(value_avos.mae, 'celula_avoh_mae');

              // pega bisavoo e bisavoo mae 1
              $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_avos.pai, function(dadosRetornados){
                $.each(dadosRetornados, function (key_bisavos_mae_1, value_bisavos_mae_1) {
                  $("#bisavoo_mae_1").text( value_bisavos_mae_1.pai.substring(0,13) ).css("visibility", "visible");
                  $("#bisavoh_mae_1").text( value_bisavos_mae_1.mae.substring(0,13) ).css("visibility", "visible");

                  $(this).setColorCel(value_bisavos_mae_1.pai, 'celula_bisavoo_mae_1');
                  $(this).setColorCel(value_bisavos_mae_1.mae, 'celula_bisavoh_mae_1');

                // pega tataravoo e tataravoh mae 1 1
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_mae_1.pai, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_mae_1_1, value_tataravos_mae_1_1) {
                    $("#tataravo_mae_1_1").text( value_tataravos_mae_1_1.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_mae_1_1").text( value_tataravos_mae_1_1.mae.substring(0,13) ).css("visibility", "visible");

                    $(this).setColorCel(value_tataravos_mae_1_1.pai, 'celula_tataravo_mae_1_1');
                    $(this).setColorCel(value_tataravos_mae_1_1.mae, 'celula_tataravoh_mae_1_1');

                  }); // $.each(dadosRetornados... get tataravoo_mae_1_1
                }); // $.getJSON("functions.php ... get tataravoo_mae_1_1

                // pega tataravoo e tataravoh mae 1 2
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_mae_1.mae, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_mae_1_2, value_tataravos_mae_1_2) {
                    $("#tataravo_mae_1_2").text( value_tataravos_mae_1_2.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_mae_1_2").text( value_tataravos_mae_1_2.mae.substring(0,13) ).css("visibility", "visible");

                    $(this).setColorCel(value_tataravos_mae_1_2.pai, 'celula_tataravo_mae_1_2');
                    $(this).setColorCel(value_tataravos_mae_1_2.mae, 'celula_tataravoh_mae_1_2');

                  }); // $.each(dadosRetornados... get tataravoo_mae_1_2
                }); // $.getJSON("functions.php ... get tataravoo_mae_1_2

                }); // $.each(dadosRetornados... get bisavoo_mae_1
              }); // $.getJSON("functions.php ... get bisavoo_mae_1

              // pega bisavoo e bisavoh mae 2 
              $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_avos.mae, function(dadosRetornados){
                $.each(dadosRetornados, function (key_bisavos_mae_2, value_bisavos_mae_2) {
                  $("#bisavoo_mae_2").text( value_bisavos_mae_2.pai.substring(0,13) ).css("visibility", "visible");
                  $("#bisavoh_mae_2").text( value_bisavos_mae_2.mae.substring(0,13) ).css("visibility", "visible");

                  $(this).setColorCel(value_bisavos_mae_2.pai, 'celula_bisavoo_mae_2');
                  $(this).setColorCel(value_bisavos_mae_2.mae, 'celula_bisavoh_mae_2');        

                // pega tataravoo e tataravoh mae 2 1
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_mae_2.pai, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_mae_2_1, value_tataravos_mae_2_1) {
                    $("#tataravo_mae_2_1").text( value_tataravos_mae_2_1.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_mae_2_1").text( value_tataravos_mae_2_1.mae.substring(0,13) ).css("visibility", "visible");

                    $(this).setColorCel(value_tataravos_mae_2_1.pai, 'celula_tataravo_mae_2_1');
                    $(this).setColorCel(value_tataravos_mae_2_1.mae, 'celula_tataravoh_mae_2_1');     

                  }); // $.each(dadosRetornados... get tataravoo_mae_2_1
                }); // $.getJSON("functions.php ... get tataravoo_mae_2_1

                // pega tataravoo e tataravoh mae 2 2
                $.getJSON("functions.php?func=getPaiMae&nomeCurio=" + value_bisavos_mae_2.mae, function(dadosRetornados){
                  $.each(dadosRetornados, function (key_tataravos_mae_2_2, value_tataravos_mae_2_2) {
                    $("#tataravo_mae_2_2").text( value_tataravos_mae_2_2.pai.substring(0,13) ).css("visibility", "visible");
                    $("#tataravoh_mae_2_2").text( value_tataravos_mae_2_2.mae.substring(0,13) ).css("visibility", "visible");
   
                    $(this).setColorCel(value_tataravos_mae_2_2.pai, 'celula_tataravo_mae_2_2');
                    $(this).setColorCel(value_tataravos_mae_2_2.mae, 'celula_tataravoh_mae_2_2');     
   
                  }); // $.each(dadosRetornados... get tataravoo_mae_2_2
                }); // $.getJSON("functions.php ... get tataravoo_mae_2_2

                }); // $.each(dadosRetornados... get bisavoo_mae_2
              }); // $.getJSON("functions.php ... get bisavoo_mae_2

            }); // $.each(dadosRetornados... get avoo_mae 
          }); // $.getJSON("functions.php ... get avoo mae 

          }); // $.each(dadosRetornados, ... pais
        }); // $.getJSON("functions...pais  
                    
        }); // $("#nome_curio").click....

          }); // $.each(value.nome...
        }); // $.each(dadosRetornados...

    }); // $.getJSON("functions.php...
  }); // change(function()...
 
  // coloca nome do curio na celula e altera cores
  $.fn.setColorCel = function(nomeCurio, celula) {
   
   $.getJSON("functions.php?func=getVivoMorto&nomeCurio=" + nomeCurio, function(dadosRetornados){
     $.each(dadosRetornados, function (key, value) {      
       $("#" + celula).attr("name", nomeCurio); 

       if( nomeCurio.length > 13 ) {
         $("#" + celula).css( { "background-color":"white", "border-style":"solid solid dotted solid" } );
       } else {
         $("#" + celula).css( "background-color", "white" );
       }

       if ( value.vivo_morto == 'Morto' ) { 
         $("#" + celula).css("background-color", "#909090");
       } else if ( ! value.vivo_morto ) {
         $("#" + celula).css("background-color", "black");
         $("#" + celula.split("celula_")[1]).css("color", "white" );
       } 
     }); // $.each(dadosRetornados... 
   }); // $.getJSON("functions...         
                       
  }; // $.fn.setColorCel

  $("td").click(function(){
   
    var celula = $(this);
    var nomeCurio = celula.attr('name');

    $.getJSON("functions.php?func=getAnelOrigem&nomeCurio=" + nomeCurio, function(dadosRetornados){
      $.each(dadosRetornados, function (key, value) {      

        var msgAlert = "curio: " + nomeCurio;

        if ( dadosRetornados ) {

          if ( celula.css("background-color") == "rgb(255, 255, 255)" ) {
            msgAlert +=  "\nstatus: vivo"; 
          } else {
            msgAlert +=  "\nstatus: morto"; 
          }            

          if ( value.numero_anel ) {
            msgAlert +=  "\nnumero anel: " + value.numero_anel; 
          } else {
            msgAlert += "\nnumero anel: nao cadastrado"; 
          }

          if ( value.origem ) {
            msgAlert += "\norigem: " + value.origem; 
          } else {
            msgAlert += "\norigem: nome do criador nao cadastrado"; 
          }
        }        

        if ( celula.css("background-color") != "rgb(0, 0, 0)" && 
             $("#" + celula.attr("id").split("celula_")[1]).css("visibility") != "hidden" ) {

          alert( msgAlert );

        } else if ( celula.css("background-color") == "rgb(0, 0, 0)" ) {
          alert( "curio " + nomeCurio + " nao esta cadastrado(a)!" );
        } 

      }); // $.each(dadosRetornados... 
    }); // $.getJSON("functions...         
  }); // $("#curio...

});
