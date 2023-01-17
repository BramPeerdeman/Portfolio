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


        //particles

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
    {
        "particles": {
          "number": {
            "value": 199,
            "density": {
              "enable": true,
              "value_area": 1657.2100474277727
            }
          },
          "color": {
            "value": "#ffe100"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 3
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.5291259800856225,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 10,
              "opacity_min": 1,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 160.3412060865523,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1.763753266952075
          },
          "move": {
            "enable": true,
            "speed": 4.810236182596568,
            "direction": "bottom",
            "random": false,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": false,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
)});