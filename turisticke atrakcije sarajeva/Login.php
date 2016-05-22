<!DOCTYPE HTML >
<HTML>
<HEAD>
<meta charset="UTF-8">
<TITLE>Turističke atrakcije Sarajeva|Login</TITLE>
<link rel="stylesheet" type="text/css" href="stil.css">

</HEAD>
<BODY>
 <?php
    $msg = '';
	$_ok=false;
  
    if (isset($_POST["posalji"]) && !empty($_POST["username"]) 
     && !empty($_POST["password"])) {
		 $_username=$_POST["username"];
		 $_password=$_POST["password"];
		 $_adminPodaci=file("adnela.txt");
		 foreach($_adminPodaci as $_admin)
		 {
			 $_adminPodaci=explode(',',$_admin);
			 if($_adminPodaci[0]==$_username && $_adminPodaci[1]==md5($_password))
			 {
				 $_SESSION["Log"]=true;
				 $msg="";
				 $_ok=true;
			
			 
				 
			 }
		 }
		 if(! $_ok)
		 {
			 $msg='Greska';
			 
		 }
	 }
	 
	 if($_ok)
	 {
		 header("Location:Administrator.php");
	 }
      
        
  ?>
  <h1><br><br>Login</h1>
<form action="Login.php" method='POST'>
<div class="login-frame">
<label>Username</label><br>
<input type="text" name="username" required placeholder="Username=Adnela"> <br>
<label>Password</label><br>
<input type="password" name="password"required placeholder="Password=Adnela"> <br>
<input type="submit" name="posalji" value="Login"><br>
</div>
</form>
<h4><?php echo $msg; ?></h4>

</BODY>

</HTML>