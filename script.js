  // Tryna get navbar on every page

  var topbar = `<nav id="topbar">
  <a href="./index.html"><img src="./AS_logo.png" alt="Letter A and S in typographic style"/></a>
  <div id="nav-left">
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Membership</a>
    <a href="./dashboard.html"><i style="font-size: 3vmax;" class="ri-account-circle-line"></i></a>
    <i id="hamburger-icon" class="ri-menu-3-line" onclick="sidebarToggle()"></i>
    </div>
    
  </nav>`;

  (document.getElementById("topbar").innerHTML = topbar);

  // Tryna get Sidebar out of it's place (in mobile only)

  function sidebarToggle() {
    var sidebar = document.querySelector("#sidebar");
    if (sidebar.style.display === "none") {
      sidebar.style.display = "flex";
    } else {
      sidebar.style.display = "none";
    }
  }

  //  Now we'll make it appear using JS

  var sidebar = `<div id="sidebar-content">
  <div id="sidebar-links">
    <a href="#">About</a>
    <a href="#">Contact</a> 
    <a href="#">Membership</a>
  </div>
  <div id="sidebar-socials">
    <i class="ri-facebook-fill"></i>
    <i class="ri-instagram-line"></i>
    <i class="ri-twitter-x-fill"></i>
    <i class="ri-linkedin-fill"></i>
  </div>
  </div>`

  document.querySelector("#sidebar").innerHTML = sidebar;


  // Sucessfully Done


  
  //  Now if someone's click on outside sidebar, it will be closed:

  // document.body.addEventListener("click", function (event) {
  //   if (!sidebar.contains(event.target)) {
  //     sidebar.style.display = "none"; 
  //   }
  // });
  
  // Failed 




  window.onscroll = function () {
    section_2ImgAnimation();
  }

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
    var notification = confirm(
      "Would You Like to Stay Motivated & Get Notified?"
    );
    if (notification == true) {
      alert("Alright, Your Success Begins Now 🎉");
    } else {
      alert("What? Lost in a sec 💀");
    }
  }
