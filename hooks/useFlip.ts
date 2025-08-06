import { useEffect, Dispatch, SetStateAction } from 'react'

import { GameCard } from '@/types/card'

export function useFlip(
	setCards: Dispatch<SetStateAction<GameCard[]>>,
	setCanFlip: Dispatch<SetStateAction<boolean>>,
	delay = 1000
) {
	useEffect(() => {
		const timer = setTimeout(() => {
			setCards(prev => prev.map(card => ({ ...card, status: 'closed' })))
			setCanFlip(true)
		}, delay)

		return () => clearTimeout(timer)
	}, [setCards, setCanFlip, delay])
}
