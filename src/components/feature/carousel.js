"use strict";
const controls = document.querySelectorAll(".controls");
let slides = document.querySelectorAll("#all_slides .slide");
let currentSlide = 0;
const nextSlide = () => {
  goToSlide(currentSlide + 1);
};
const previousSlide = () => {
  goToSlide(currentSlide - 1);
};
let slideInterval = setInterval(nextSlide, 2100);
const goToSlide = (s) => {
  slides[currentSlide].className = "slide";
  currentSlide = (s + slides.length) % slides.length;
  slides[currentSlide].className = "slide active";
};
let playing = true;
let pauseButton = document.querySelector("#pause");
const pauseSlideshow = () => {
  pauseButton.innerHTML = '<i class="fas fa-play-circle"></i>';
  playing = false;
  clearInterval(slideInterval);
};
const playSlideshow = () => {
  pauseButton.innerHTML = '<i class="fas fa-pause-circle"></i>';
  playing = true;
  slideInterval = setInterval(nextSlide, 2100);
};
pauseButton.onclick = () => {
  if (playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};
let next_btn = document.querySelector("#next");
let previous_btn = document.querySelector("#previous");
next_btn.onclick = () => {
  pauseSlideshow();
  nextSlide();
};
previous_btn.onclick = () => {
  pauseSlideshow();
  previousSlide();
};
