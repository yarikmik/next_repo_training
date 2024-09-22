'use client';

export default function Error({
	error,
	reset
}: { error: Error, reset: () =>void}) {
	return <>
		<div>Чтото пошло не так - pages</div>
		<div>{JSON.stringify(error)}</div>
		<button onClick={()=> reset()}>Еще раз</button>
	</>;
}