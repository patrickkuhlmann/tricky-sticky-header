import { useState, useEffect } from 'react';

export const Direction = {
	Up: 'up',
	Down: 'down'
} as const

export type DirectionKeys = typeof Direction[keyof typeof Direction]

export const useScrollDirection = () => {
	const [scrollDirection, setScrollDirection] = useState<DirectionKeys | null>(null)
	useEffect(() => {
		let lastY = 0
		const handleScroll = () => {
			if (window.scrollY < lastY) setScrollDirection(Direction.Up)
			if (window.scrollY > lastY) setScrollDirection(Direction.Down)
			lastY = window.scrollY
		}

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return scrollDirection;
}
