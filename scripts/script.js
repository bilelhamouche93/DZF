var handlers = {
  viewImg: function(id){
    var imgsrc = id.parentElement.parentElement.parentElement.parentElement.querySelector("img").getAttribute("src");
    var newtab= window.open(imgsrc, '_blank');
    newtab.focus();    
  }
};