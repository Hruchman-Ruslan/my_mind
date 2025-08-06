import {
	TouchableOpacity,
	StyleSheet,
	StyleProp,
	ViewStyle,
	Image,
	ImageSourcePropType,
	View,
} from 'react-native'
import image_default from '@/assets/images/game/image_default.png'
import { CardStatus } from '@/types/card'

interface CardItemProps {
	style?: StyleProp<ViewStyle>
	image: ImageSourcePropType
	status: CardStatus
	size?: number
	onPress?: () => void
}

export default function CardItem({
	style,
	image,
	status,
	size = 150,
	onPress,
}: CardItemProps) {
	const source = status === 'closed' ? image_default : image
	const sizeStyle = { width: size, height: size }

	return (
		<TouchableOpacity
			style={[styles.card, sizeStyle, style]}
			onPress={onPress}
			activeOpacity={0.8}
		>
			<View style={[styles.wrapper, sizeStyle]}>
				<Image source={source} style={styles.image} />
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 10,
		overflow: 'hidden',

		justifyContent: 'center',
		alignItems: 'center',
	},
	wrapper: {
		borderRadius: 10,
		borderWidth: 4,
		borderColor: '#6EBCF7',
		backgroundColor: '#2E2B42',
		overflow: 'hidden',

		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		resizeMode: 'contain',
	},
})
