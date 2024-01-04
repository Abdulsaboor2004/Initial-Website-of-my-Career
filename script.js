


// Tryna get navbar on every page

var topbar = `<nav id="topbar">
<a href="./index.html"><img src="./AS_logo.png" alt="Letter A and S in typographic style"/></a>
<div id="nav-left">
  <a href="#">About</a>
  <a href="#">Contact</a>
  <a href="#">Services</a>
  <a href="./dashboard.html"><i style="font-size: 3vmax;" class="ri-account-circle-line"></i></a>
  <i id="hamburger-icon" class="ri-menu-3-line" onclick="sidebarToggle()"></i>
  </div>
  
  
</nav>`

var nav = document.getElementById('topbar').innerHTML = topbar;



// Tryna get Sidebar out of it's place (in mobile only)




function sidebarToggle() {
  var sidebar = document.querySelector("#sidebar");
  if (sidebar.style.display === "none") {
    
    sidebar.style.display = "flex";
    

  } else {
    
    sidebar.style.display = "none";
    
  }
  
}

// Sucessfully Done

window.onscroll = function () {
  section_2ImgAnimation();
};

function section_2ImgAnimation() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // document.querySelector('#section-2-img').style = "visibility: visible;";
    document.querySelector("#section-2-img").style.visibility = "visible";
  } else {
    // document.querySelector('#section-2-img').style = "visibility: hidden;";
    document.querySelector("#section-2-img").style.visibility = "hidden";
  }
}

function imIn() {
  var userEmail = prompt("Great! Tell us ur E-MAIL to get in");
  var notification = confirm("Would You Like to Stay Motivated & Get Notified?");
  if (notification == true) {
    alert("Alright, Your Success Begins Now 🎉")
} else {    
    alert("What? Lost in a sec 💀")
  }
}
