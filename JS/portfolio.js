//opens and closes the contact form 
  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  // displays first image on loading
  var slideIndex = 1;
  showSlides(slideIndex);

  //enables left and right arrows on carpousel
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  //changes slides when dots are clicked
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  
  function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //adds mySlides to slide aray
    var dots = document.getElementsByClassName("dot"); //adds all dot elements to the dot variable array
    if (n > slides.length) {slideIndex = 1}; //if n is greater than slide array length, index is set to 1
    if (n < 1) {slideIndex = slides.length};  //sets slide index to length of slidearray if n is less than 1
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //sets each item in slide array to display none
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active ", ""); // this loop "FOR" removes active style from inactive dots
    }
    slides[slideIndex - 1].style.display = "block";  //displays images in slideshow
    dots[slideIndex - 1].classname += " active ";  // adds active style to active dot image
  }

  //  this close contact form when clicked off of form
  //adds event listener for site
  document.addEventListener("click", function(event){
    //this closes contact if anywhere but contact form is clicked
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
      closeForm()
    }
  }, false )