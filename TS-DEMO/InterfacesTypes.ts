type Point = {
	x: number,
	y: number
}

type D3Point = Point & { //расширение типа
z: number,
}
// типам не доступно добавление свойств

interface IPoint { // рекомендуется использовать интерфесы
	x: number,
	y: number
}

interface I3DPoint extends IPoint{ //расширение интерфейса
	z: number,
}


type stringOrNumber = string | number

const с = (point: IPoint) => {
	const d: I3DPoint = point as I3DPoint // приведение к расширенному типу (каст к определенному типу)
}

const nyCanvas = document.getElementById('canvas') as HTMLCanvasElement


function print(coord: Point){

}

function print(coord: stringOrNumber){

}

function print(coord: IPoint){

}

interface Test {
	a: number
}

interface Test { // при вызове Тест будет доступно свойство и а и б
	b: number
}  