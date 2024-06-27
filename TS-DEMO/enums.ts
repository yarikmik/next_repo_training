// enums удобнее чем литеральные типы

enum Direction { // числовой enum
	Up = 1, //обозначить с какого числа идет нумерация
	Down, // автоматом станет 2
	Right, // автоматом станет 3
	Left // автоматом станет 4
}

enum DirectionStr { // строковы enum
	Up = 'UP', 
	Down = 'DOWN', 
	Right = 'RIGHT', 
	Left = 'LEFT' 
}

enum Decission { // гетерогенный enum
	Yes = 1, 
	No = 'No',
	calc = calEnum()  // рссчитываемы enum, только числовые значения
}

function calEnum() {
	return 2;
}

function runEnum(obj: {Up: string}){

}

runEnum(DirectionStr) //редко используемая конструкция, enum как объект для функции

enum ITest {
	A
}

let itest = ITest.A
let nameA = ITest[itest] //A

const enum ConstEnum {
	A,
	B
}

let cs= ConstEnum.A


enum Dice {
	One = 1,
	Two,
	Tree
}

function ruDice(dice: Dice) {
	switch(dice){
		case Dice.One:
			return 'один'
		case Dice.Two:
			return 'два'
		case Dice.Tree:
			return 'три'
		default:
			const a: never = dice
	}

}