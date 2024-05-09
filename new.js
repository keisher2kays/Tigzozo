document.getElementById("mode-toggle").addEventListener("click",function() {
document.body.classList.toggle("dark-mode");
if (document.body.classList.contains("dark-mode")) {
    
    document.getElementById("mode-toggle").classList.remove("fa-sun");
    document.getElementById("mode-toggle").classList.add("fa-moon");
}else{
    document.getElementById("mode-toggle").classList.remove("fa-moon");
    document.getElementById("mode-toggle").classList.add("fa-sun"); 
}
   
});