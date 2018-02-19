$(document).ready(function(){
	$('.image-slick').slick({
		mobileFirst: true,
		autoplay: true,
		pauseOnHover: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		
		
		// Scroll effect fade 
		swipe: false,
		fade: true,
		
		//Mobile Responsive (2 breakpoints 768,1024)
		responsive: [
		{
			breakpoint: 1024,
			settings:{
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				
				// Scroll effect swipe
				swipe: true,
				fade: false,
				
			}
		},
		{
			breakpoint: 768,
			settings:{
				slidesToShow: 2,
				slidesToScroll: 2,
				
				// Scroll effect swipe 
				swipe: true,
				fade: false,
				
			}
		},
		
	]
		
	});
});

function revealAnswer(number){
	//I have used a switch case statement with the parameters sent to the function to know which answer to reveal	
	switch(number){
		case 1:
			var answer = document.getElementById("answer1");
			break;
		case 2:
			var answer = document.getElementById("answer2");
			break;
		case 3:
			var answer = document.getElementById("answer3");
			break;
		case 4:
			var answer = document.getElementById("answer4");
			break;
		case 5:
			var answer = document.getElementById("answer5");
			break;
	}
		
		if (answer.style.display == ""){
				answer.style.display = "block";
			}else{
				answer.style.display = "";
			}
	
};