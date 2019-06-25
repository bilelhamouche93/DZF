var g = document.getElementsByClassName("viewBtn");

for (var i = 0, len = g.length; i < len; i++){
    (function(index){
        g[i].onclick = function(){
            var imgsrc = document.getElementsByClassName("viewBtn")[index].parentElement.parentElement.parentElement.parentElement.querySelector("img").getAttribute("src");
            var newtab= window.open(imgsrc, '_blank');
            newtab.focus();
        }
    })(i);
}


