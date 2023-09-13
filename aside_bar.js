function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("mySidenav").style.height = "100vh";
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav").style.transition = "2s";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.display = "none";
}