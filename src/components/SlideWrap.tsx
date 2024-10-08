import useMousePosition from '../hooks/useMousePosition';
import { ReactElement, ReactNode, useState, useRef, useEffect } from 'react';
import React from 'react';
import gsap from 'gsap';

type SlideWrapProps = {
	className?: string;
	revealElement: ReactElement;
	children: ReactNode;
};

export default function SlideWrap({ className, revealElement, children }: SlideWrapProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);

	const animationWrap = useRef<HTMLDivElement>(null);
	const animationHolder = useRef<HTMLDivElement>(null);
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
			gsap.killTweensOf(animationHolder.current);
			timeline.current = gsap
				.timeline({ onStart: () => setIsAnimating(true) })
				.add('startLabel')
				.add(gsap.fromTo(animationWrap.current, { x: 50, y: '100%', rotate: 50 }, { x: 0, y: '0%', rotate: 0, duration: animationDuration, ease: 'power2.out' }), 'startLabel')
				.add(gsap.fromTo(animationHolder.current, { x: -50, y: '-100%', rotate: -50, scale: 1.8 }, { x: 0, y: 0, rotate: 0, scale: 1, duration: animationDuration, ease: 'power2.out' }), 'startLabel');
		}
		if (!isHovered && isAnimating) {
			gsap.killTweensOf(animationWrap.current);
			gsap.killTweensOf(animationHolder.current);
			timeline.current = gsap
				.timeline({ onComplete: () => setIsAnimating(false) })
				.add('startLabel')
				.add(gsap.to(animationWrap.current, { x: 80, y: -200, rotate: -30, duration: animationDuration, ease: 'power2.out' }), 'startLabel')
				.add(gsap.to(animationHolder.current, { x: -80, y: 200, rotate: 30, duration: animationDuration, ease: 'power2.out' }), 'startLabel');
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
				<div style={{ position: 'fixed', top: `${mousePosition.y + 20}px`, left: `${mousePosition.x + 20}px`, height: '160px', width: '240px', pointerEvents: 'none', overflow: 'hidden', zIndex: isHovered ? 1 : 'auto' }}>
					<div style={{ height: '100%', width: '100%', objectFit: 'cover', overflow: 'hidden' }} ref={animationWrap}>
						<div style={{ height: '100%', width: '100%', objectFit: 'cover', overflow: 'hidden' }} ref={animationHolder}>
							{styledRevealElement}
						</div>
					</div>
				</div>
			)}
		</span>
	);
}
