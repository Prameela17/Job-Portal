const buttons = document.querySelectorAll(".all");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        buttons.forEach(btn=>{
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});


// Candidate Review
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Employer Review
var slideIndex1 = 1;
showSlides1(slideIndex1);

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (n > slides1.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex = slides1.length}
    for (i = 0; i < slides1.length; i++) {
      slides1[i].style.display = "none";
    }
    for (i = 0; i < dots1.length; i++) {
      dots1[i].className = dots1[i].className.replace(" active", "");
    }
  slides1[slideIndex1-1].style.display = "block";
  dots1[slideIndex1-1].className += " active";
}


// Salary
function formatSalary(value) {
  // Remove non-numeric characters
  var salary = value.replace(/[^0-9]/g, '');
  
  // Add commas every three digits from the right
  salary = salary.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  salary =  salary;

  // Update the input field with formatted salary
  document.getElementById('salary').value = salary;
}




// Get the Email Popup Edit
// Function to open the popup
function openEmailPopup() {
  document.getElementById("emailPopup").style.display = "block";
}

// Function to close the popup
function closeEmailPopup() {
  document.getElementById("emailPopup").style.display = "none";
}

// Function to save the email
function saveEmail() {
  var email = document.getElementById("email").value;
  // Here you can perform any necessary validation before saving the email
  alert("Email saved: " + email);
  closeEmailPopup(); // Close the popup after saving
}

// Profile Dropdown
function toggleDropdown() {
  var dropdown = document.getElementById("myDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}