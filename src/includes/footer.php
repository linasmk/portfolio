<footer class="footer">
	<section class="footer__contact-details fade_in">
		<a href="tel:+45-42-33-20-88"><span class="danish_flag"></span>+45 42 33 20 88</a>
		<!-- <a href="tel:+370-672-48029" rel="nofollow"><span class="lithuanian_flag"></span>+370 672 48029</a> -->
		<a href="includes/mailhandler.php"><span class="email"></span>Email Me</a>
		</section>
  <div class="footer__copyright">
    <p class="footer__copyright-p">&copy 2020 Linas Mackonis</p>
  </div>
</footer>
  <?php
    global $page;
    if($page == 'home') {
      echo '<script src="js/index.js"></script>';
    } ?>
</body>
</html>