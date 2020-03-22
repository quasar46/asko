//tabs
var tablinks = document.querySelectorAll('.tablinks');
var tabcontent = document.querySelectorAll('.tabcontent');

var makeActive = function (index) {
  tablinks[index].addEventListener('click', function () {
    document.querySelectorAll('.tablinks').forEach(n => n.classList.remove('active'));
    this.classList.toggle('active');
    document.querySelectorAll('.tabcontent').forEach(n => n.classList.remove('active'));
    tabcontent[index].classList.toggle('active');
  });
};

for (var i = 0; i < tablinks.length; i++) {
  makeActive(i);
}


// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//mobile menu
$('.burger').click(function () {
  $('.mobile-menu').addClass('active');
});

$('.mobile-menu-list__close').click(function () {
  $('.mobile-menu').removeClass('active');
});