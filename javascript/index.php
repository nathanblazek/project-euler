<?php 
    $files = glob('./js/*.js');
    $numbers = [];
    foreach($files as $file){
        $numbers[] = basename($file,".js");
    }
    asort($numbers);
    $project = (isset($_GET['project'])) ? $_GET['project']:false;

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Project Euler | Nathan Blazek</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="css/bootstrap-responsive.css">
        <link rel="stylesheet" type="text/css" href="css/custom.css">
        <script src="common.js"></script>
        <?php if($project){?><script src="js/<?php echo $project; ?>.js"></script><?php } ?>
    </head>
    <body>
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="brand" href="#">Project Euler</a>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span3">
          <div class="well sidebar-nav">
            <ul class="nav nav-list">
                <?php foreach($numbers as $num){?>
                <li><a href="index.php?project=<?php echo $num; ?>"><?php echo $num; ?></a></li>
                <?php } ?>
                </ul>
          </div><!--/.well -->
        </div><!--/span-->
        <div class="span9">
          <div class="hero-unit">
          <?php if($project){?>
            <h1>Project <span id="projectNumber"></span></h1>
            <h2>Description</h2>
            <p id="projectDescription">Lorem ipsum</p>
            <h2>Result</h2>
            <p><pre id="projectOutput"></pre></p>
            <h2>Code</h2>
            <p><pre><code><?php 
echo htmlspecialchars(file_get_contents('./js/'.$project.'.js', FILE_USE_INCLUDE_PATH));
            ?></code></pre></p>
            <small>This answer may include functions that are added to the <a href="common.js">common javascript file</a></small>
          <?php } else {?>
            <h1>Welcome to Project Euler!</h1>
            <p>This is a dumping ground to execute project euler code. This way, I can avoid recreating a basic index.html file and can just get to work. Click a link on the left to see my code.</p>
            <p><a href="#" class="btn btn-primary btn-large">Learn more &raquo;</a></p>
          <?php } ?>
          </div>
        </div><!--/span-->
      </div><!--/row-->

      <hr>

      <footer>
        <p>&copy; Nathan Blazek 2019</p>
      </footer>

    </div><!--/.fluid-container-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
        <script type="text/javascript" src="home.js"></script>
    </body>
</html>