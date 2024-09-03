import useMousePosition from '../hooks/useMousePosition';
import { ReactElement, ReactNode, useState } from 'react';
import React from 'react';

type BoringWrapProps = {
	className?: string;
	revealElement: ReactElement;
	children: ReactNode;
};

export default function BoringWrap({ className, revealElement, children }: BoringWrapProps) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const { x, y } = useMousePosition();

	const styledRevealElement = React.cloneElement(revealElement, {
		style: {
			...revealElement.props.style,
			objectFit: 'cover',
			width: '100%',
			height: '100%',
		},
	});

	return (
		<span className={className} style={{ maxWidth: 'max-content' }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			{children}
			{isHovered && <div style={{ position: 'fixed', top: `${y + 20}px`, left: `${x + 20}px`, height: '160px', width: '240px', pointerEvents: 'none', overflow: 'hidden' }}>{styledRevealElement}</div>}
		</span>
	);
}
