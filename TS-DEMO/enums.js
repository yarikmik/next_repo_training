// enums удобнее чем литеральные типы
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Left"] = 4] = "Left"; // автоматом станет 4
})(Direction || (Direction = {}));
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Right"] = "RIGHT";
    DirectionStr["Left"] = "LEFT";
})(DirectionStr || (DirectionStr = {}));
var Decission;
(function (Decission) {
    Decission[Decission["Yes"] = 1] = "Yes";
    Decission["No"] = "No";
    Decission[Decission["calc"] = calEnum()] = "calc"; // рссчитываемы enum, только числовые значения
})(Decission || (Decission = {}));
function calEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(DirectionStr); //редко используемая конструкция, enum как объект для функции
var ITest;
(function (ITest) {
    ITest[ITest["A"] = 0] = "A";
})(ITest || (ITest = {}));
var itest = ITest.A;
var nameA = ITest[itest]; //A
var cs = 0 /* ConstEnum.A */;
