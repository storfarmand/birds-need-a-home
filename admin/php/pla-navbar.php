<div id="navcontainer" class="row">
    <button class="navbar-toggle hidden-lg hidden-md hidden-sm visible-xs-block" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>
    <ul id="navlist" class="nav nav-tabs">

    <?php

switch ($navbar) {
  case "gallery" :
    echo "        <li class=\"active\"><a href=\"".$_SERVER['PHP_SELF']."?action=vgallery\">Galleri</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vpics\">Billeder</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=velements\">Elementer</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vbizinfo\">Firmaoplysninger</a></li>\n";
    break;
  case "pics" :
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vgallery\">Galleri</a></li>\n";
    echo "        <li class=\"active\"><a href=\"".$_SERVER['PHP_SELF']."?action=vpics\">Billeder</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=velements\">Elementer</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vbizinfo\">Firmaoplysninger</a></li>\n";
    break;
  case "elements" :
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vgallery\">Galleri</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vpics\">Billeder</a></li>\n";
    echo "        <li class=\"active\"><a href=\"".$_SERVER['PHP_SELF']."?action=velements\">Elementer</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vbizinfo\">Firmaoplysninger</a></li>\n";
    break;
  case "bizinfo" :
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=vgallery\">Galleri</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=pics\">Billeder</a></li>\n";
    echo "        <li><a href=\"".$_SERVER['PHP_SELF']."?action=velements\">Elementer</a></li>\n";
    echo "        <li class=\"active\"><a href=\"".$_SERVER['PHP_SELF']."?action=vbizinfo\">Firmaoplysninger</a></li>\n";
    break;
}
?>

    </ul>
</div>
