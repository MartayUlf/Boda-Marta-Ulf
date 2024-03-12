const bg_dark = document.querySelector(".bg-dark");
const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");
const navbar = document.querySelector('.navbar');


bg_dark.addEventListener("click", () => {
  sidebar.classList.toggle("close")
  bg_dark.classList.toggle("close")
});



sidebarClose.addEventListener("click", () => {
  sidebar.classList.toggle("close")
  bg_dark.classList.toggle("close")
});

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

$(document).ready( function() {
  $('.menu-items li a').click(function(e) {
      e.preventDefault();
      $('main div.show').fadeOut(300).removeClass('show');
      $($(this).attr('href')).fadeIn(300).addClass('show');
      sidebar.classList.toggle("close")
      bg_dark.classList.toggle("close")
  })

  // Song controller
  $('.home-song  .song img').click(function(e){
    if($(this).attr('alt') == 'song_pause'){
      $(this).parent().find('#song')[0].play();
      $(this).attr('src', './images/song_play.svg')
      $(this).attr('alt', 'song_play')
    }else{
      $(this).parent().find('#song')[0].pause();
      $(this).attr('src', './images/song_pause.svg')
      $(this).attr('alt', 'song_pause')
    }
    
  });

  

 // setTimeout(() => {  $('.home-song  .song img').click();   document.getElementById("song").play();},2000)


  // Scroll
  $( window ).on( "scroll", function() {
    
    if(window.scrollY > 60){
      navbar.classList.add("fixed")
    }else{
      navbar.classList.remove("fixed")
    }
  })
});