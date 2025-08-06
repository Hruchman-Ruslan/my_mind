import { useState } from 'react'
import { ImageBackground } from 'react-native'

import { GameCard } from '@/types/card'

import { dogsSet } from '@/constants/gameData'

import { duplicated } from '@/utils/duplicated'
import { shuffle } from '@/utils/shuffle'

import { useFlip } from '@/hooks/useFlip'
import { handleCardFlip } from '@/hooks/useCardFlip'
import { useCardChecker } from '@/hooks/useCardChecker'

import Modal from '@/components/Modal'
import CardGrid from '@/components/CardGrid'

import dogs_bg from '@/assets/images/bg/dogs_bg.jpg'

export default function Dogs() {
	const [cards, setCards] = useState<GameCard[]>(() =>
		shuffle(duplicated(dogsSet))
	)
	const [openedCards, setOpenedCards] = useState<string[]>([])
	const [canFlip, setCanFlip] = useState<boolean>(false)
	const [gameResult, setGameResult] = useState<'won' | 'lost' | null>(null)

	useFlip(setCards, setCanFlip, 2000)

	const handlePress = (uid: string) => {
		handleCardFlip({
			cards,
			uid,
			openedCards,
			canFlip,
			setCards,
			setOpenedCards,
		})
	}

	useCardChecker({
		cards,
		openedCards,
		setCards,
		setOpenedCards,
		setCanFlip,
		setGameResult,
	})

	return (
		<ImageBackground source={dogs_bg} style={{ flex: 1 }} resizeMode='cover'>
			<CardGrid
				paddingTop={60}
				cardSize={120}
				cards={cards.map(card => ({
					uid: card.uid,
					image: card.image,
					status: card.status,
					onPress: () => handlePress(card.uid),
				}))}
			/>

			{gameResult && <Modal result={gameResult} />}
		</ImageBackground>
	)
}
