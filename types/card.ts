import { ImageSourcePropType } from 'react-native'

export type CardStatus = 'open' | 'closed' | 'finished'

export type GameCard = {
	id: string
	uid: string
	pairId?: string
	image: ImageSourcePropType
	name: string
	status: CardStatus
}
