var points = JSON.parse(' [{"title":"TITLE","point":[51.74621757225929,36.19680599999998]},{"title":"TITLE","point":[51.681279572319106,39.185339]},{"title":"TITLE","point":[51.681279572319106,39.185339]},{"title":"TITLE","point":[52.35002507184713,35.35414149999997]},{"title":"TITLE","point":[51.05697957268876,35.70881399999996]},{"title":"TITLE","point":[51.05697957268876,35.70881399999996]}]')

var myMap;
ymaps.ready(init);

function init() {
  myMap = new ymaps.Map("map", {
    center: [51.74621757225929, 36.19680599999998],
    zoom: 14,
    controls: []
    // изменение маркера
  });

  for (var i = 0; i < points.length; i++) {
    myMap.geoObjects
      .add(new ymaps.Placemark([points[i].point[0], points[i].point[1]], {
        balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
      }, {
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/img/marker-yamap.svg',
        // Размеры метки.
        iconImageSize: [55, 55],
      }));
  }
}

var subMenu = document.querySelectorAll('.submap');
var linksMap = document.querySelectorAll('.offices-list__item');

var handlerResult = function (linkMap) {
  linkMap.addEventListener('click', function () {
    console.log(linkMap.dataset.point);
    myMap.setCenter(linkMap.dataset.point.split(','), 12, "map");
    return linkMap.dataset.point.split(',');
  });
};

for (var i = 0; i < linksMap.length; i++) {
  handlerResult(linksMap[i]);
}

var handlerAddr = function (j) {
  // при клике на название адреса показывает блок с адресом
  linksMap[j].addEventListener('click', function () {
    document.querySelectorAll('.submap-wrapper .active').forEach(n => n.classList.remove('active'));
    subMenu[j].classList.toggle('active');
    document.querySelectorAll('.offices-list .active').forEach(n => n.classList.remove('active'));
    linksMap[j].classList.add('active');
  });
};

for (var j = 0; j < linksMap.length; j++) {
  handlerAddr(j);
}