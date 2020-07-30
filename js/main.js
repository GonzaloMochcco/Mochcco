
/*EFECTO SCROLL NAV*/
window.addEventListener("scroll", function(){
	let desplazamientoActual = window.pageYOffset;
	if (desplazamientoActual > 1) {
		document.getElementsByTagName("nav")[0].style.background = "#fff"
	}else{
		document.getElementsByTagName("nav")[0].style.background = "rgba(255, 255, 255, 0.0)"
	}
});
window.addEventListener("scroll", function(){
	let desplazamientoActual1 = window.pageYOffset;
	if (desplazamientoActual1 > 1) {
		document.getElementsByTagName("nav")[0].style.boxShadow = " 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)"
	}else{
		document.getElementsByTagName("nav")[0].style.boxShadow = "none"
	}
});



