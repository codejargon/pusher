<?php


require_once __DIR__ . '/vendor/autoload.php';


$chatkit = new Chatkit\Chatkit([
  'instance_locator' => 'v1:us1:3c2d3a4a-4b98-4652-b960-43a7b91cd1b4',
  'key' => '9c283740-a2b8-4ce2-a243-b1b8fa5110dc:1BssznN3WRarocEx5hWrn/xteb8anrK3QaORxR1Bl24='
]);

header('Content-Type: application/json');

    $result = array();
    $params = $_POST;

    if( !isset($_POST['functionname']) ) { $result['error'] = 404; }
    if( !isset($result['error']) ) {
        switch($_POST['functionname']) {
            case 'createUser':
                   $result['result'] =$chatkit->createUser($_POST['request']);
                break;
            default:
               $result['error'] = 'Not found function '.$_POST['functionname'].'!';
               break;
        }

    }
    echo json_encode($result);
?>
