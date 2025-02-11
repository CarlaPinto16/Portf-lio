<?php
 
    session_start();

    include_once('conexao.php');

    $chave = 'As Armas e os Barões Assinalados';

    if(!empty($_POST)){

        $utilizador = $password = '';

        if(isset($_POST['utilizador'])) $utilizador = trim($_POST['utilizador']);
        if(isset($_POST['password']))   $password   = trim($_POST['password']);

        $sql = 'SELECT * FROM utilizadores WHERE utilizador = "'.$utilizador.'" AND password ="'. sha1($chave . $password) .'"';
        $resultado = mysqli_query($link, $sql);

        if($resultado and mysqli_num_rows($resultado) == 1){

            $linha = mysqli_fetch_array($resultado);

            $_SESSION['idutilizador'] = $linha['idutilizador'];
            $_SESSION['utilizador']   = $linha['utilizador'];
            #$_SESSION['nome']         = $linha['nome'];
            $_SESSION['tipo']         = $linha['tipo'];
            # $_SESSION['password']   = $linha['password'];
        }
    }

    if(isset($_GET['s']) and $_GET['s'] == 'sair'){
        $_SESSION['idutilizador'] = '';
        $_SESSION['utilizador']   = '';
        #$_SESSION['nome']         = '';
        $_SESSION['tipo']         = '';
        # $_SESSION['password'] = '';
    }


?><!DOCTYPE html>
<html lang="pt-pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
<div id="corpo">
<?php

    # print '<p>Exemplo de login com sessões e <b>com</b> ligação a Base de Dados.</p>';

    if( isset($_SESSION['utilizador']) and !empty($_SESSION['utilizador']) ){

        include_once('menu.php');
        
    }
    else {
        print '<img src="imagens/1.jpg" alt="">';
        
        print '<div id="login" class="limite c">';
            print '<div class="p30">';

                print '<form action="'. $url .'" method="post">';
                    print '<input type="text" name="utilizador" placeholder="Utilizador" class="c">';
                    print '<input type="text" name="password"   placeholder="Password" class="c">';
                    print '<input type="submit" class="botao" value="Enviar">';
                print '</form>';

            print '</div>';
        print '</div>';
    }




    #include_once('fundo.php');
?>
</div>
</body> 
</html>
