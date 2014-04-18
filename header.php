<?php
  $pageName= basename($_SERVER['REQUEST_URI']); //must define $pageName variable to be able to use it later
  ?>
<!-- navbar -->

<nav class="navmenu">
  <ul>
    <li 
    <?php
      if ($pageName=="#home")
        echo "class=\"active\""
    ?>>
    <a class="i1" href="#home"><span>Home</span></a></li>
    
    <li
    <?php
      if ($pageName=="#about")
        echo "class=\"active\""
    ?>
    ><a href="#about"><span>About</span></a></li>
    
    <li
    <?php
      if ($pageName=="#portfolio")
        echo "class=\"active\""
    ?>
    ><a href="#portfolio"><span>Work</span></a></li>
    
    <li
    <?php
      if ($pageName=="#resume")
        echo "class=\"active\""
    ?>
    ><a href="#resume"><span>CV</span></a></li>
    
    <li
    <?php
      if ($pageName=="#contact")
        echo "class=\"active\""
    ?>
    ><a href="#contact"><span>Connect</span></a></li>
  </ul>
</nav><!-- //Menu -->