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