import { useEffect } from 'react'

import { CardStatus, GameCard } from '@/types/card'

interface UseCardCheckerProps {
	cards: GameCard[]
	openedCards: string[]
	setCards: React.Dispatch<React.SetStateAction<GameCard[]>>
	setOpenedCards: (uids: string[]) => void
	setCanFlip: (value: boolean) => void
	setGameResult: (res: 'won' | 'lost' | null) => void
}

export function useCardChecker({
	cards,
	openedCards,
	setCards,
	setOpenedCards,
	setCanFlip,
	setGameResult,
}: UseCardCheckerProps) {
	useEffect(() => {
		if (openedCards.length !== 2) return

		setCanFlip(false)

		const [firstUid, secondUid] = openedCards
		const firstCard = cards.find(card => card.uid === firstUid)
		const secondCard = cards.find(card => card.uid === secondUid)

		if (!firstCard || !secondCard) {
			setOpenedCards([])
			setCanFlip(true)
			return
		}

		if (firstCard.pairId === secondCard.pairId) {
			const updated = cards.map(card =>
				card.pairId === firstCard.pairId
					? { ...card, status: 'finished' as CardStatus }
					: card
			)

			setCards(updated)
			setOpenedCards([])
			setCanFlip(true)

			const isGameWon = updated.every(card => card.status === 'finished')
			if (isGameWon) {
				setTimeout(() => {
					setGameResult('won')
				}, 500)
			}
		} else {
			setTimeout(() => {
				setCards(prev =>
					prev.map(card =>
						card.uid === firstUid || card.uid === secondUid
							? { ...card, status: 'closed' as CardStatus }
							: card
					)
				)
				setOpenedCards([])
				setCanFlip(true)
				setGameResult('lost')
			}, 500)
		}
	}, [openedCards, cards, setCards, setCanFlip, setOpenedCards, setGameResult])
}
