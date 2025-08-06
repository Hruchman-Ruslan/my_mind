import { Dispatch, SetStateAction } from 'react'

import { GameCard } from '@/types/card'

type CardFlipLogicProps = {
	cards: GameCard[]
	uid: string
	openedCards: string[]
	canFlip: boolean
	setCards: Dispatch<SetStateAction<GameCard[]>>
	setOpenedCards: Dispatch<React.SetStateAction<string[]>>
}

export const handleCardFlip = ({
	cards,
	uid,
	openedCards,
	canFlip,
	setCards,
	setOpenedCards,
}: CardFlipLogicProps) => {
	if (!canFlip) return

	const card = cards.find(c => c.uid === uid)
	if (!card || card.status !== 'closed' || openedCards.length === 2) return

	setOpenedCards(prev => [...prev, uid])
	setCards(prev =>
		prev.map(c => (c.uid === uid ? { ...c, status: 'open' } : c))
	)
}
