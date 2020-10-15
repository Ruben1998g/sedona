var open =  document.querySelector(".main-nav--open");
var close =  document.querySelector(".main-nav--close");

var nav = document.querySelectorAll(".main-nav ul li:not(:last-child)");

open.classList.remove("hidden");
close.classList.remove("hidden");

	for(var i=0; i<=nav.length-1; i++){
		nav[i].classList.add("hidden");
	}

open.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i=0; i<=nav.length-1; i++){
		nav[i].classList.remove("hidden");
	}
	open.classList.add("hidden");
});

close.addEventListener("click", function(evt){
	evt.preventDefault();
	for(var i=0; i<=nav.length-1; i++){
		nav[i].classList.add("hidden");
	}
	open.classList.remove("hidden");
});