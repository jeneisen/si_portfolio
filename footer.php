  <?php    
 $filename= basename($_SERVER['REQUEST_URI']);
if (file_exists($filename)) {
    echo "$filename was last modified: " . date ("F d Y.", filemtime($filename));
}
?>