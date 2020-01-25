<?php /*header("Cache-Control: no-cache");*/
$page = 'home';
 require_once("includes/header.php"); ?>
<article id="hero" class="hero">
	<div class="hero_inner__wrapper">
		<section class="hero_text fade_in">
			<h1>Linas Mackonis <br><span>- front-end web developer</span></h1>
		</section>
		<div class="hero_img fade_in"></div>
		<div class="iphone_img">
			<a class="slide_out" href="#projects">
			<img src="img/iphone_on.png" alt="Iphone with a turned on screen"></a>
		</div>
	</div>
</article>
<article id="about_me" class="about_me">
	<h2 class="fade_in">About Me</h2>
	<p class="fade_in intro_p">Some introductions should be like a miniskirt, short enough to maintain the interest, but long enough to cover the subject.</p>
	<h3>Hello and nice to meet you! I am Linas and I love to make simple and beautiful websites, for medium and small-sized businesses.</h3>

	<p class="fade_in">I am a passionate front-end web developer with a soon-to-be 3 years of freelancing experience. I am educated at <a class="link" href="https://www.baaa.dk/programmes/ap-degree/multimedia-design/" target="_blank">Business Academy Aarhus</a> and I continue to live in Denmark, but I provide my services across the EU and beyond.</p>
	
	<p class="fade_in">You are always welcome to contact me or check my <a href="https://github.com/linasmk">GitHub profile</a>.</p>
</article>
<article id="my_stack" class="my_stack">
	<h2 class="fade_in">My Stack</h2>
	<div class="my_stack__icons">
		<img data-src="img/html_icon.svg" alt="HTML icon" class="html_icon fade_in" title="HTML">
		<img data-src="img/css_icon.svg" alt="CSS icon" class="css_icon fade_in" title="CSS">
		<img data-src="img/js_icon.svg" alt="JavaScript icon" class="css_icon fade_in" title="JavaScript">
		<img data-src="img/sass_icon.svg" alt="Sass icon" class="sass_icon fade_in" title="SASS">
		<img data-src="img/npm_icon.svg" alt="NPM icon" class="npm_icon fade_in" title="NPM">
		<img data-src="img/gulp_icon.svg" alt="Gulp icon" class="gulp_icon fade_in" title="Gulp">
		<img data-src="img/ai_icon.svg" alt="AI icon" class="ai_icon fade_in" title="Adobe Illustrator">
		<img data-src="img/php_icon.svg" alt="PHP icon" class="php_icon fade_in" title="PHP">
		<img data-src="img/wp_icon.svg" alt="WordPress icon" class="wp_icon fade_in" title="WordPress">
		<img data-src="img/svg_icon.svg" alt="SVG icon" class="svg_icon fade_in" title="SVG">
	</div>

</article>
<article id="projects" class="projects"> 
	<section class="projects_content">
		<h2 class="fade_in">Projects</h2>
		<p class="fade_in">My designs, code structures and front-end applications are build by using SCSSsss, Gulp.js, JavaScript, PHP and WordPress. Please find some of my projects below.</p>
	</section>
	<div class="project_background">
			<?php require_once("includes/content/carousel.php"); ?>
  </div><!-- End of project_background -->
</article>



<article id="contact" class="contact">
	<section class="contact_content">
		<h2 class="fade_in">Contact</h2>
		<p class="fade_in">You should definitely contact me if you are seeking for a front-end developer with a responsive design, JavasScript, WordPress and SEO skillset under his belt. Do not hesitate to get in touch for a long-term or small ad hoc projects or if you need any help in making fast loading and neatly written site for your business.</p>
	</section>
	<div class="contact_background">
		<section class="contact_details fade_in">
			<a href="tel:+45-42-33-20-88"><span class="danish_flag"></span>+45 42 33 20 88</a>
			<!-- <a href="tel:+370-672-48029" rel="nofollow"><span class="lithuanian_flag"></span>+370 672 48029</a> -->
			
			<a href="includes/mailhandler.php"><span class="email"></span>Email Me</a>  
		</section>
	</div>
</article>


<?php require_once("includes/footer.php"); ?>
