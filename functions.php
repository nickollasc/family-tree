<?php

// Author: nickollascarvalho@gmail.com - License: GPL

switch( $_REQUEST['func'] ) {

  case 'getPaiMae':
    getPaiMae( $_REQUEST['nomeCurio'] );
    break;
  case 'getMachosFemeas':
    getMachosFemeas( $_REQUEST['macho_femea'] );
    break;
  case 'getVivoMorto':
    getVivoMorto( $_REQUEST['nomeCurio'] );
    break;
  case 'getAnelOrigem':
    getAnelOrigem( $_REQUEST['nomeCurio'] );
    break;
  case 'getInternoExterno':
    getVivoMorto( $_REQUEST['nomeCurio'] );
    break;
}

function getMachosFemeas( $macho_femea ){

  include('db_connection.php');

  $sql = "SELECT nome
                FROM arvore_genealogica
                WHERE sexo='$macho_femea'
                AND vivo_morto='Vivo' 
                AND interno_externo='Interno'
                ORDER BY nome DESC"; 

  $result = $mysqli->query( $sql );

  while ( $row = $result->fetch_assoc() ) {

    $arr['dados']['nome'][] = $row['nome'];
  }
  $mysqli->close();

  echo json_encode( $arr );
}

function getPaiMae( $nomeCurio ){

  include('db_connection.php');

  $sql = "SELECT pai, mae
                FROM arvore_genealogica
                WHERE nome='$nomeCurio' 
                LIMIT 1";

  $result = $mysqli->query( $sql );

  while ( $row = $result->fetch_assoc() ) {

    $arr['dados']['pai'] = $row['pai'];
    $arr['dados']['mae'] = $row['mae'];
  }
  $mysqli->close();

  if ( empty( $arr ) ) $arr = '';

  echo json_encode( $arr );
}

function getVivoMorto( $nomeCurio ){

  include('db_connection.php');

  $sql = "SELECT vivo_morto
                FROM arvore_genealogica
                WHERE nome='$nomeCurio' 
                LIMIT 1";

  $result = $mysqli->query( $sql );

  while ( $row = $result->fetch_assoc() ) {

    $arr['dados']['vivo_morto'] = $row['vivo_morto']; 
  }
  $mysqli->close();

  if ( empty( $arr['dados']['vivo_morto'] ) ) $arr['dados']['vivo_morto'] = '';

  echo json_encode( $arr );
}

function getInternoExterno( $nomeCurio ){

  include('db_connection.php');

  $sql = "SELECT interno_externo
                FROM arvore_genealogica
                WHERE nome='$nomeCurio' 
                LIMIT 1";

  $result = $mysqli->query( $sql );

  while ( $row = $result->fetch_assoc() ) {

    $arr['dados']['interno_externo'] = $row['interno_externo']; 
  }
  $mysqli->close();

  if ( empty( $arr['dados']['interno_externo'] ) ) $arr['dados']['interno_externo'] = '';

  echo json_encode( $arr );
}

function getAnelOrigem( $nomeCurio ){

  include('db_connection.php');

  $sql = "SELECT numero_anel, origem
                FROM arvore_genealogica
                WHERE nome='$nomeCurio' 
                LIMIT 1";

  $result = $mysqli->query( $sql );

  while ( $row = $result->fetch_assoc() ) {

    if ( $row['numero_anel'] ) { 
      $arr['dados']['numero_anel'] = $row['numero_anel'];
    }

    if ( $row['origem'] ) { 
      $arr['dados']['origem'] = $row['origem'];
    }
  }
  $mysqli->close();

  if ( empty( $arr['dados']['numero_anel'] ) ) $arr['dados']['numero_anel'] = '';
  if ( empty( $arr['dados']['origem'] ) ) $arr['dados']['origem'] = '';

  echo json_encode( $arr );
}

?>
