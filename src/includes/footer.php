<footer>
	<p>&copy 2020 Linas Mackonis. All rights reserved</p>
</footer>


<script src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
  <?php 
    global $page;
    if($page == 'home') {
      echo '<script src="js/main.min.js"></script>';
    } ?>
</body>
</html>