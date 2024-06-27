let cd: 'test' = 'test' //литеральный тип, может принимать значения только 'test'


type actionType = 'up' | 'down';

function performAction(action: actionType):-1|1 { // используется для ограничения наборов принимаемых значений
	switch(action){
		case 'up':
			return 1
		case 'down':
			return -1
	}
}


interface ComplexAction {
	s: string;
}

function performAction1(action: actionType | ComplexAction):-1|1 {
	switch(action){
		case 'up':
			return 1
		case 'down':
			return -1
	}
}