
<header class="header">
       
        <nav class="navbar">
            <a href="#" class="logo">Portfolio</a>
            <ul class="nav-menu">
                <li><a href="#home" style="--i:1" class="active">Home</a>            
           </li>
           <li><a href="#about" style="--i:2">About</a></li>
           <li>  <a href="#services" style="--i:4">Services</a></li>
           <li> <a href="#Skills" style="--i:3">Skills</a></li>
           <li>  <a href="#contact" style="--i:5">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
        </nav>
       
      
    </header>
    li{
    list-style: none;
}
.header{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    padding:20px 10%;
    background:transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    background: #081C29;
}
.logo{
    position: relative;
    font-size: 60px;
    color: #fff;
    text-decoration:none;
    font-weight:bold;
    cursor:default ;
    opacity: 0;
    animation: slideRight 1s ease forwards;
}