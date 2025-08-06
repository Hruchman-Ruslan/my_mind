import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'

import { CardStatus } from '@/types/card'

import CardItem from './CardItem'

interface Card {
	uid: string
	image: any
	status: CardStatus
	onPress: () => void
}

interface Props {
	cards: Card[]
	cardSize?: number
	gap?: number
	paddingTop?: number
	style?: StyleProp<ViewStyle>
}

export default function CardGrid({
	cards,
	cardSize = 120,
	gap = 15,
	paddingTop = 0,
	style,
}: Props) {
	return (
		<View style={[styles.grid, { padding: gap, gap, paddingTop }, style]}>
			{cards.map(card => (
				<CardItem
					key={card.uid}
					image={card.image}
					status={card.status}
					size={cardSize}
					onPress={card.onPress}
					style={{ width: cardSize, height: cardSize }}
				/>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	grid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
})
