<?php $page = 'error_page'; ?>
<?php include("includes/header_nonavigation.php"); ?>
<article class="not_found">
  <h2>Ooops, wrong address!</h2>
  <p>404 page not found...</p>
  
  <!--<img src="img/not-found112x112.png" alt="Not found image"
     srcset="img/not-found212x212.png, img/not-found312x312.png"

     sizes="(not (orientation: portrait) or (min-width: 400px)) 212px"> -->
  
  <picture>
    <source 
    media="(min-width: 1800px)"
    srcset="img/not-found512x512.png"
    sizes="200px">
    <source 
    media="(min-width: 1500px)"
    srcset="img/not-found412x412.png">
    <source 
    media="(min-width: 900px)"
    srcset="img/not-found312x312.png">
    <source 
    media="(min-width: 820px)"
    srcset="img/not-found212x212.png">
    <img src="img/not-found112x112.png" alt="Not found image">
  </picture>

  <a href="index.php" class="back_btn">Go back to site!</a>
</article>
<?php include("includes/footer.php"); ?>