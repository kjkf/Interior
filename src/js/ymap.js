// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [42.86544695, 74.63104363811836],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15,
        controls: ['zoomControl']
        //controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
    });

    //myMap.controls.add('smallZoomControl', { top: 25, left: 5 });
    var myPlacemark = new ymaps.Placemark([42.86544695, 74.63104363811836], {
        balloonContent: '<span class="hintContent">БЦ Monolit ул. Льва Толстого 36к/1</span>',
        hintContent: '<span class="hintContent">БЦ Monolit ул. Льва Толстого 36к/1</span>'
    });
    myMap.geoObjects.add(myPlacemark);
    //myPlacemark.balloon.open();
}