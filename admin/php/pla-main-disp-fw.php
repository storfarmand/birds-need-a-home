<?php

switch ($pg_idx) {
    case "gallery" :
        require('php/pla-gallery.php');
        break;
    case "pics" :
        require('php/pla-pics.php');
        break;
    case "elements" :
        require('php/pla-elements.php');
        break;
    case "bizinfo" :
        require('php/pla-bizinfo.php');
        break;
    default :
        require('php/pla-content.php');
}

foreach($_REQUEST as $idx=>$val) {
}

?>
