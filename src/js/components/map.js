import ymaps from 'ymaps';

const map = document.getElementById('map');

ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=fe250f75-7719-412f-a245-802cd13d0166&lang=ru_RU').then((maps) => {
  const myMap = new maps.Map(map, {
    center: [55.590180, 37.670259],
    zoom: 17,
    // controls: ['searchControl'],
  });
  console.log(myMap);

  const placemark = new maps.Placemark([55.590180, 37.670259]);
  myMap.geoObjects.add(placemark);
});
