<?php
  $pageName= basename($_SERVER['REQUEST_URI']); //must define $pageName variable to be able to use it later
  ?>
<!-- navbar -->

<nav class="navmenu">
  <ul>
    <li 
    <?php
      if ($pageName=="index.php#home")
        echo "class=\"active\""
    ?>>
    <a class="i1" href="#home"><span>Home</span></a></li>
    
    <li
    <?php
      if ($pageName=="index.php#about")
        echo "class=\"active\""
    ?>
    ><a href="#about"><span>About</span></a></li>
    
    <li
    <?php
      if ($pageName=="index.php#portfolio")
        echo "class=\"active\""
    ?>
    ><a href="#portfolio"><span>Work</span></a></li>
    
    <li
    <?php
      if ($pageName=="index.php#resume")
        echo "class=\"active\""
    ?>
    ><a href="#resume"><span>CV</span></a></li>
    
    <li
    <?php
      if ($pageName=="index.php#contact")
        echo "class=\"active\""
    ?>
    ><a href="#contact"><span>Connect</span></a></li>
  </ul>
</nav><!-- //Menu -->