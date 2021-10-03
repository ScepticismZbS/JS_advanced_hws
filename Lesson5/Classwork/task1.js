/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/

let train = {};
train.name = "Hyundai";
train.speed = "240 км/ч";
train.passengers = "200 пассажиров";
train.go = function() {
    console.log("Поезд " + train.name + " везет " + train.passengers + " со скоростью " + train.speed);
}
train.stop = function() {
    console.log("Поезд " + train.name + " остановился.");
}
train.pickUp = function(x) {
    train.passengers += x
    console.log("Пассажиров после станции: " + train.passengers);
}

train.go();
train.stop();
train.pickUp(76);


