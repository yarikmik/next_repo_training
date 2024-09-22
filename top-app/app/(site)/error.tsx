'use client';

export default function Error({
	error
}: { error: Error }) {
	return <>
		<div>Чтото пошло не так - Root</div>
		<div>{JSON.stringify(error)}</div>
	</>;
}