// MODAL

// Grab from DOM
var modal = document.querySelector(".modal");
var modalBg = document.querySelector(".modal-bg");
var closeButton = document.querySelector(".close-button");
var closeBg = document.querySelector(".modal-bg");
var openImg = document.getElementsByClassName("open-modal");

// Event listeners
closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalBg.classList.toggle("closed");
});

closeBg.addEventListener("click", function () {
  modal.classList.toggle("closed");
  modalBg.classList.toggle("closed");
});

// Iterate through and add event listeners to open-img
for (var i = 0; i < openImg.length; i++) {
  openImg[i].addEventListener('click', function (e) {
    e.preventDefault();

    modal.classList.toggle("closed");
    modalBg.classList.toggle("closed");
  });
}


// Smooth scrolling

	$(function() {
		$('a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});
