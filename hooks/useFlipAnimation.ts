import { useRef, useEffect } from 'react'

import { Animated } from 'react-native'

import { CardStatus } from '@/types/card'

export function useFlipAnimation(status: CardStatus) {
	const flipAnim = useRef(
		new Animated.Value(status === 'closed' ? 0 : 180)
	).current

	useEffect(() => {
		Animated.spring(flipAnim, {
			toValue: status === 'closed' ? 0 : 180,
			useNativeDriver: true,
			friction: 8,
			tension: 10,
		}).start()
	}, [status, flipAnim])

	const frontStyle = {
		transform: [
			{
				rotateY: flipAnim.interpolate({
					inputRange: [0, 180],
					outputRange: ['0deg', '180deg'],
				}),
			},
		],
	}

	const backStyle = {
		transform: [
			{
				rotateY: flipAnim.interpolate({
					inputRange: [0, 180],
					outputRange: ['180deg', '360deg'],
				}),
			},
		],
	}

	return { frontStyle, backStyle }
}
