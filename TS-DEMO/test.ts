let a: number = 4;
let b: string = 'sdfsd';
let c = true;

let d: string[] = ['sdfsd', 'sdfsdf']

let e: any = 3;

function test (a: string): string | number {
	return ''
}

const test2 = (a: number): number  => {
	return a * 2
}

const test3 = (a: number): void  => {
}

d = d.map(x => x.toLowerCase())
d = d.map((x: string) => x.toLowerCase())

function countCoord (coord: {lat: number, long?: number}) {

}

function printIt (id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString())
	} else if (typeof id === 'string') {
		console.log(id.toUpperCase())
	}
}

function getSum(a: number | number[]){
	if (Array.isArray(a)) {
		a.reduce
	}
}

const x:undefined = undefined
const z:null = null