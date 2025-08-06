import {
	TouchableOpacity,
	StyleSheet,
	StyleProp,
	ViewStyle,
	Image,
	ImageSourcePropType,
	View,
	Animated,
} from 'react-native'

import { CardStatus } from '@/types/card'

import { useFlipAnimation } from '@/hooks/useFlipAnimation'

import image_default from '@/assets/images/game/image_default.png'

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
	const { frontStyle, backStyle } = useFlipAnimation(status)

	const sizeStyle = { width: size, height: size }

	const wrapperStyles = [
		styles.card,
		sizeStyle,
		status !== 'closed' ? styles.activeCard : null,
		style,
	]

	return (
		<TouchableOpacity
			style={wrapperStyles}
			onPress={onPress}
			disabled={status === 'finished'}
		>
			<View style={{ width: size, height: size, position: 'relative' }}>
				<Animated.View style={[styles.flipCard, frontStyle]}>
					<Image source={image_default} style={styles.image} />
				</Animated.View>

				<Animated.View style={[styles.flipCard, backStyle]}>
					<View style={styles.openedImageWrapper}>
						<Image source={image} style={styles.image} />
					</View>
				</Animated.View>
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
	activeCard: {
		borderRadius: 10,
		borderWidth: 4,
		borderColor: '#6EBCF7',
		backgroundColor: '#2E2B42',
	},
	flipCard: {
		backfaceVisibility: 'hidden',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		borderRadius: 10,
		overflow: 'hidden',
	},
	openedImageWrapper: {
		flex: 1,
		padding: 20,
	},
	image: {
		resizeMode: 'contain',
		width: '100%',
		height: '100%',
	},
})
