<?php
$ip = $_SERVER['REMOTE_ADDR']; 
switch ($ip) {
    case "10.122.0.6":
        echo "COVIDSELFCHECK-DO-01";
        break;
    case "10.122.0.7":
        echo "COVIDSELFCHECK-DO-02";
        break;
    case "10.122.0.8":
        echo "COVIDSELFCHECK-DO-03";
        break;
}
?>