import { GameCard } from '@/types/card'

export const duplicated = (cards: Omit<GameCard, 'uid'>[]): GameCard[] =>
	cards.flatMap(card => [
		{ ...card, uid: `${card.id}_1`, pairId: card.id },
		{ ...card, uid: `${card.id}_2`, pairId: card.id },
	])
