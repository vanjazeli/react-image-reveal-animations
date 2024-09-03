import useMousePosition from '../hooks/useMousePosition';
import { ReactElement, ReactNode, useState, useRef, useEffect } from 'react';
import React from 'react';
import gsap from 'gsap';

type FadeWrapProps = {
	className?: string;
	revealElement: ReactElement;
	children: ReactNode;
};

export default function FadeWrap({ className, revealElement, children }: FadeWrapProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const animationWrap = useRef<HTMLDivElement>(null);
	const animationDuration = 0.25;
	const timeline = useRef<gsap.core.Timeline | null>(null);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	useEffect(() => {
		if (isHovered) {
			gsap.killTweensOf(animationWrap.current);
			timeline.current = gsap
				.timeline({ onStart: () => setIsAnimating(true) })
				.add('startLabel')
				.add(gsap.to(animationWrap.current, { opacity: 1, duration: animationDuration }), 'startLabel');
		}
		if (!isHovered && isAnimating) {
			gsap.killTweensOf(animationWrap.current);
			timeline.current = gsap
				.timeline({ onComplete: () => setIsAnimating(false) })
				.add('startLabel')
				.add(gsap.to(animationWrap.current, { opacity: 0, duration: animationDuration }), 'startLabel');
		}
	}, [isAnimating, isHovered]);

	const { mousePosition } = useMousePosition();

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
			{(isHovered || isAnimating) && (
				<div style={{ position: 'fixed', top: `${mousePosition.y + 20}px`, left: `${mousePosition.x + 20}px`, height: '160px', width: '240px', pointerEvents: 'none', opacity: '0', overflow: 'hidden' }} ref={animationWrap}>
					{styledRevealElement}
				</div>
			)}
		</span>
	);
}
