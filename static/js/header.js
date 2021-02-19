var header = document.getElementById("header-selector");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  var nextPage = this.id + ".html"
  
  $(function(){
    $("#container-main").load(nextPage); 
  });
  });
}

function reply_click(clicked_id)
  {
      return clicked_id;
  }