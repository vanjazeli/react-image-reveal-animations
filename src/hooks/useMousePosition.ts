import { useState, useEffect } from 'react';

export default function useMousePosition() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e: MouseEvent) => {
		setMousePosition({ x: e.x, y: e.y });
		console.log(e);
	};

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return mousePosition;
}
