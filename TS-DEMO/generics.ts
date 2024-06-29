function logTime<T>(num: T): T {
	console.log(new Date());
	return num;
}

logTime<string>('asada')
logTime<number>(123)


function logTime2<T>(num: T): T {
	if (typeof num == 'string') {
		num.toLocaleUpperCase()
	}
	return num;
}


interface MyInterface {
	transform: <T, F>(a: T) => F
}

class MyGenClass<T> {
	value: T
}
const aa = new MyGenClass<number>()
aa.value


interface TimeStamp {
	stamp: number
}
function logTimeStamp<T extends TimeStamp>(num: T): T {
	console.log(num.stamp)
	return num
}

