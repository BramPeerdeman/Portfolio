// close the div in 5 secs
window.setTimeout("closeHelpDiv();", 2000);

function closeHelpDiv(){
document.getElementById("cover").style.display=" none";
}

		// navigation starts here
		$("#toggle").click(function() {
			$(this).toggleClass('on');
			$("#resize").toggleClass("active");
		});
		$("#resize ul li a").click(function() {
			$(this).toggleClass('on');
			$("#resize").toggleClass("active");
		});
		$(".close-btn").click(function() {
			$(this).toggleClass('on');
			$("#resize").toggleClass("active");
		});
		// navigation ends here
		// nav animation
		TweenMax.from("#brand", 1, {
			delay: 0.4,
			y: 10,
			opacity: 0,
			ease: Expo.easeInOut
		})
		TweenMax.staggerFrom("#menu li a", 1, {
			delay: 0.4,
			opacity: 0,
			ease: Expo.easeInOut
		}, 0.1);
		// nav animation ends
		new WOW().init();


const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");

window.onload = function() {
  setTimeout(function() {
    word1.classList.add("visible");
  }, 1000);
  setTimeout(function() {
    word2.classList.add("visible");
  }, 1500);
};