var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
  // Создание экземпляра карты и его привязка к контейнеру с
  // заданным id ("map").
  myMap = new ymaps.Map(
    "map",
    {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [7.838114, 98.299123], // Москва
      zoom: 15,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );

  var myPlacemark = new ymaps.Placemark([7.838114, 98.299123]);
  myMap.geoObjects.add(myPlacemark);

}
