<?php
$ip = $_SERVER['REMOTE_ADDR']; 

if($ip == "10.122.0.6"){
    echo "COVIDSELFCHECK-DO-01";
}

if($ip == "10.122.0.7"){
    echo "COVIDSELFCHECK-DO-02";
}

if($ip == "10.122.0.8"){
    echo "COVIDSELFCHECK-DO-03";
}


?>