interface Dict {
	desc: string,
	isActive: boolean,
}

interface List {
	name: string,
	value: number,
}


interface Example {
	userId: number,
	id: number,
	title: string,
	info: Dict,
	tags: List[]
}



const ex: Example = {
	"userId": 1,
	"id": 1,
	"title": "delectus aut autem",
	"info": {
		"desc": "delectus aut autem",
		"isActive": true
	},
	"tags": [
		{
			"name": "my name",
			"value": 1000
		}
	]
}