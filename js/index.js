const headerElement =  document.querySelector("header");
window.addEventListener("scroll",function(e){
 // console.log(e)
	if(window.scrollY > 70){
     headerElement.classList.add("change-color");
	}
	else{
	headerElement.classList.remove("change-color")
	}
	
})